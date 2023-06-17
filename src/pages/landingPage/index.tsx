import React from 'react'
import Image from 'next/image'
import FeaturedSection from '@/components/FeaturedSection'
import { Arimo } from 'next/font/google'
import Carousel from '@/components/Carousel'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-inter',
})
// Flash sales pop up while scrollin down

export default function LandingPage() {
  return (
    <div className="container ">
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
    </div>
  )
}
