import React from 'react'
import Image from 'next/image'
import FeaturedSection from '@/components/FeaturedSection'
import { Arimo } from 'next/font/google'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-inter',
})

export default function LandingPage() {
  return (
    <div className="container ">
      <FeaturedSection />
      <div className="divider-text">
        <span className={`${arimo.className} font-sans `}>
          Our best sellers
        </span>
      </div>
    </div>
  )
}
