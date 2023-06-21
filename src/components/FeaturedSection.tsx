import React from 'react'
import Image from 'next/image'
import { Arimo } from 'next/font/google'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-inter',
})

const FeaturedSection = () => {
  return (
    <div className="row">
      <a className="col-6 featured-img-col onlyclick">
        <Image
          src={'https://buyboximages.s3.us-west-1.amazonaws.com/featured.jpg'}
          width={630}
          height={437}
          alt={'offers'}
          className="featured-img"
        />
        <div className={`${arimo.className} font-sans text-overlay`}>
          ENJOY UP TO 30% DISCOUNT
        </div>
      </a>
      <a className="col-3 featured-img-col onlyclick">
        <div style={{ position: 'relative' }}>
          <Image
            src={
              'https://buyboximages.s3.us-west-1.amazonaws.com/shirtTall.jpg'
            }
            width={300}
            height={437}
            alt={'Tops'}
            className="featured-img"
          />
          <div className={`${arimo.className} font-sans text-overlay`}>
            TOPS
          </div>
        </div>
      </a>
      <a className="col-3 p-0 onlyclick">
        <div style={{ position: 'relative' }}>
          <Image
            src={
              'https://buyboximages.s3.us-west-1.amazonaws.com/shoeShort.jpg'
            }
            width={318}
            height={210}
            alt={'Shoes'}
            className="featured-img"
          />
          <div className={`${arimo.className} font-sans text-overlay-short `}>
            SHOES
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Image
            src={
              'https://buyboximages.s3.us-west-1.amazonaws.com/bracaletShort.jpg'
            }
            width={318}
            height={210}
            alt={'Accesories'}
            className="featured-img mt-3"
          />
          <div className={`${arimo.className} font-sans text-overlay-short `}>
            ACCESORIES
          </div>
        </div>
      </a>
    </div>
  )
}

export default FeaturedSection
