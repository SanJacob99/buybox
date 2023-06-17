import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import { Card } from 'antd'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { Meta } = Card

const Carousel = () => {
  const [carouselPosition, setcarouselPosition] = useState(0)
  const images = [
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage1.jpg',
      price: '15.99',
      name: 'Grey Top',
    },
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage2.jpg',
      price: '13.99',
      name: 'Beach dress',
    },
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage3.jpg',
      price: '29.99',
      name: 'Lingerie',
    },
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage4.jpg',
      price: '10.99',
      name: 'White top',
    },
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage5.jpg',
      price: '11.99',
      name: 'Brooklyn Set',
    },
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage6.jpg',
      price: '25.99',
      name: 'Aquamarine Bikini',
    },
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage7.jpg',
      price: '26.99',
      name: 'One Pice Black Bikini',
    },
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage8.jpg',
      price: '12.99',
      name: 'Black Cross Top',
    },
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage9.jpg',
      price: '31.99',
      name: 'Summer Palazzo',
    },
    {
      url: 'https://buyboximages.s3.us-west-1.amazonaws.com/CarrouselImage10.jpg',
      price: '12.99',
      name: 'Summer Set',
    },
  ]

  console.log(carouselPosition)

  const handleCrousel = (label: string) => {
    if (label === 'right') {
      if (carouselPosition - 140 < -140 * images.length) {
        setcarouselPosition(0)
        return
      }
      setcarouselPosition((prevState) => prevState - 140)
    } else {
      if (carouselPosition + 140 > 0) {
        setcarouselPosition(0)
        return
      }
      setcarouselPosition((prevState) => prevState + 140)
    }
  }

  return (
    <div>
      <a
        className="carousel-control"
        style={{
          margin: '150px 0 0 -4%',
        }}
        onClick={() => handleCrousel('left')}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="3x" />
      </a>
      <a
        className="carousel-control"
        style={{
          margin: '150px 0 0 70%',
        }}
        onClick={() => handleCrousel('right')}
      >
        <FontAwesomeIcon icon={faChevronRight} size="3x" />
      </a>
      <motion.div className="container slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -140 * images.length }}
          animate={{ x: carouselPosition }}
          onUpdate={(latest) => {
            if (typeof latest.x !== 'number') return
            setcarouselPosition(latest.x)
          }}
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
                    height={380}
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

export default Carousel
