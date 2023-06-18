import React from 'react'
import Image from 'next/image'
import FeaturedSection from '@/components/FeaturedSection'
import { Arimo } from 'next/font/google'
import Carousel from '@/components/Carousel'
import {
  faUmbrellaBeach,
  faThunderstorm,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardPopUp from '@/components/PopUpCard'
import { flashProductInfo } from '@/components/ProductData'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-inter',
})

export default function LandingPage() {
  const images = flashProductInfo
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
      <Carousel />
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
