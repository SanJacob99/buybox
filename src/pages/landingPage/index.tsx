import React, { useState } from 'react'
import FeaturedSection from '@/components/FeaturedSection'
import { Arimo } from 'next/font/google'
import {
  faUmbrellaBeach,
  faThunderstorm,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardPopUp from '@/components/PopUpCard'
import { banners, flashProductInfo } from '@/components/ProductData'
import CarouselSlider from '@/components/CarouselSlider'
import { Carousel } from 'antd'
import Image from 'next/image'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-inter',
})

export default function LandingPage() {
  const images = flashProductInfo
  const banner = banners
  const [carousleBackground, setcarousleBackground] = useState('blue')

  const setBackgroundColor = (color: string) => {
    switch (color) {
      case 'aqua':
        return 'banner1Color'
      case 'grey':
        return 'banner2Color'
      case 'purple':
        return 'banner3Color'
      default:
        return 'bannerdefaultColor'
    }
  }

  return (
    <div className="container landing-page">
      <FeaturedSection />
      <div className="divider-text">
        <span
          className={`${arimo.className} font-sans d-flex align-items-center`}
        >
          Summer Vibes
        </span>
        <FontAwesomeIcon icon={faUmbrellaBeach} size="3x" />
      </div>
      <CarouselSlider />
      <div className="slider-section ">
        <Carousel autoplay>
          {banner.map((item, index) => (
            <div
              key={index}
              className={setBackgroundColor(item.backgroundColor)}
            >
              <Image
                src={item.url}
                width={800}
                height={(853 / 1280) * 800}
                alt={'BannerInfo'}
                className="slider-img"
                style={{ padding: '10px' }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="divider-text">
        <span
          className={`${arimo.className} font-sans d-flex align-items-center`}
        >
          Flash Sale
        </span>
        <FontAwesomeIcon icon={faThunderstorm} size="3x" />
      </div>
      <div className="row flash-sale-section">
        {images.map((item, index) => (
          <div key={index} className="col d-flex align-items-center">
            <CardPopUp
              url={item.url}
              name={item.name}
              price={item.price}
              backgroundColor={item.bgColor}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
