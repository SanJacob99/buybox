import React from 'react'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import { Card } from 'antd'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { productInfo } from './ProductData'

const { Meta } = Card

const CarouselSlider = () => {
  const images = productInfo

  const x = useMotionValue(0)
  const slideWidth = -140 * images.length

  const handleScrollLeft = () => {
    const newX = Math.max(x.get() + 160, slideWidth)
    if (newX <= 0) {
      x.set(newX)
    }
  }

  const handleScrollRight = () => {
    const newX = Math.min(x.get() - 160, 0)
    if (newX >= slideWidth) {
      x.set(newX)
    }
  }

  return (
    <div>
      <a
        className="carousel-control"
        style={{
          margin: '150px 0 0 -4%',
        }}
        onClick={handleScrollLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="3x" />
      </a>
      <a
        className="carousel-control"
        style={{
          margin: '150px 0 0 70%',
        }}
        onClick={handleScrollRight}
      >
        <FontAwesomeIcon icon={faChevronRight} size="3x" />
      </a>
      <motion.div className="container slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: slideWidth }}
          style={{
            x,
          }}
          transition={{ type: 'spring' }}
        >
          {images.map((item, index) => (
            <motion.div key={index} className="item">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={item.url}
                    width={200}
                    height={350}
                    alt={`Image ${index}`}
                    className="carousel-image"
                  />
                }
              >
                <Meta title={item.name} description={`${item.price} $`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CarouselSlider
