import MainLayout from '@/components/MainLayout'
import React, { useState } from 'react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Arimo } from 'next/font/google'
import { CategoriesPage } from '@/components/ProductData'
import { productInfo } from '@/components/ProductData'
import Image from 'next/image'
import { Card } from 'antd'

const { Meta } = Card

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const Categories = () => {
  const categories = CategoriesPage
  const [selectedCategorie, setselectedCategorie] = useState('')

  const changeHandle = (categorie: string) => {
    if (categorie === selectedCategorie) {
      setselectedCategorie('')
      return
    }
    setselectedCategorie(categorie)
  }

  return (
    <MainLayout>
      <div className="container landing-page">
        <div className="row">
          <div className="col justify-content-start">
            <FontAwesomeIcon icon={faChevronLeft} size="3x" />
          </div>
          <div className="col justify-content-center align-items-center text-center">
            <span className={`${arimo.className} categorie-selected`}>
              {selectedCategorie ? selectedCategorie : 'Categories'}
            </span>
          </div>
          <div className="col "></div>
        </div>
        <div className="row categorie-selector">
          {categories.map((categorie) => (
            <div
              className={
                categorie === selectedCategorie
                  ? 'col selected-categorie-box'
                  : 'col categorie-box'
              }
              key={categorie}
              onClick={() => changeHandle(categorie)}
            >
              <a className={`${arimo.className} categorie-option `}>
                {categorie}
              </a>
            </div>
          ))}
        </div>
        <div className="row mt-3 categorie-showcase">
          {productInfo.map((product, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 d-flex justify-content-center"
            >
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={product.url}
                    width={200}
                    height={350}
                    alt={`Image ${index}`}
                    className="categorie-image"
                  />
                }
              >
                <Meta title={product.name} description={`${product.price} $`} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Categories
