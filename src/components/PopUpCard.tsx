import { Card } from 'antd'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

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
