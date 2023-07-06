import MainLayout from '@/components/MainLayout'
import React from 'react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Arimo } from 'next/font/google'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const categories = () => {
  return (
    <MainLayout>
      <div className="container landing-page">
        <div className="row">
          <div className="col justify-content-start">
            <FontAwesomeIcon icon={faChevronLeft} size="3x" />
          </div>
          <div className="col justify-content-center align-items-center text-center">
            <span className={`${arimo.className} categorie-selected`}>
              Dresses
            </span>
          </div>
          <div className="col "></div>
        </div>
        
      </div>
    </MainLayout>
  )
}

export default categories
