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
import { Button, Carousel, Input } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

export default function LandingPage() {
  const images = flashProductInfo
  const banner = banners
  const [carousleBackground, setcarousleBackground] = useState('blue')
  const router = useRouter()



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
  const setBackgroundColorRGB = (color: string) => {
    switch (color) {
      case 'aqua':
        return 'rgba(0, 177,	213, 1)'
      case 'grey':
        return 'rgba(58,	48,	53, 1)'
      case 'purple':
        return 'rgba(77,	3,	138, 1)'
      default:
        return 'rgba(0,	0,	0, 1)'
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
      <div className="slider-section onlyclick">
        <Carousel autoplay effect="fade">
          {banner.map((item, index) => (
            <div
              key={index}
              className={`${setBackgroundColor(item.backgroundColor)} d-flex  `}
            >
              <div
                style={{
                  width: '20%',
                  position: 'relative',
                }}
              >
                <Image
                  src={banner[index === 0 ? 2 : index - 1].url}
                  alt="Image"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'right' }}
                />
                <div
                  style={{
                    content: '',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(to right, rgba(0, 0, 0, 0) 0%,${setBackgroundColorRGB(
                      item.backgroundColor
                    )} 100%)`,
                    zIndex: 2,
                  }}
                />
              </div>
              <div>
                <Image
                  src={item.url}
                  width={800}
                  height={(853 / 1280) * 800}
                  alt={'BannerInfo'}
                  className="slider-img"
                />
              </div>
              <div
                style={{
                  width: '20%',
                  position: 'relative',
                }}
              >
                <Image
                  src={banner[index === 2 ? 0 : index + 1].url}
                  alt="Image"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'left' }}
                />
                <div
                  style={{
                    content: '',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(to left, rgba(0, 0, 0, 0) 0%,${setBackgroundColorRGB(
                      item.backgroundColor
                    )} 100%)`,
                    zIndex: 2,
                  }}
                />
              </div>
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
      <CarouselSlider />
      <div className="who-we-are-section">
        <Image
          src={'https://buyboximages.s3.us-west-1.amazonaws.com/mainLogo.png'}
          width={300}
          height={300}
          alt="main logo"
          className="wwa-image"
        />
        <div>
          <h4>Who we are</h4>
          <p className={`${arimo.className} font-sans `}>
            Redefining E-Commerce for You At BuyBox, we are revolutionizing the
            way you shop online. We offer a diverse range of high-quality
            products across various categories, carefully curated to cater to
            your unique needs and preferences. With our user-friendly website,
            personalized recommendations, and competitive prices, we ensure a
            seamless and enjoyable shopping experience. Our commitment extends
            beyond convenience; we prioritize your satisfaction and security.
            Your personal information is safeguarded with state-of-the-art
            security measures, and our dedicated customer support team is
            available 24/7 to address any concerns. Join us in embracing a new
            era of online shopping, where convenience, reliability, and
            delightful discoveries await you. Experience the difference with
            BuyBox and unlock a world of possibilities at your fingertips.
          </p>
        </div>
      </div>
    </div>
  )
}
