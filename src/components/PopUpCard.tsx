import { Card } from 'antd'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { useRouter } from 'next/router'

const { Meta } = Card

interface Props {
  url: string
  name: string
  price: string
  backgroundColor: string
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}
function CardPopUp({ url, name, price, backgroundColor }: Props) {
  const router = useRouter()
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div className="splash" style={{ backgroundColor: backgroundColor }} />
      <motion.div className="card" variants={cardVariants}>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => router.push('product')}
          cover={
            <Image
              src={url}
              width={200}
              height={300}
              alt={name}
              className="carousel-image"
            />
          }
        >
          <Meta title={name} description={`${price} $`} />
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default CardPopUp
