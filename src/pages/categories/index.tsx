import MainLayout from '@/components/MainLayout'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Arimo } from 'next/font/google'
import { CategoriesPage } from '@/components/ProductData'
import { productInfo } from '@/components/ProductData'
import Image from 'next/image'
import { Card, Pagination } from 'antd'

const { Meta } = Card

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const Categories = () => {
  const router = useRouter()
  const categories = CategoriesPage
  const postPerPage = 8
  const { defaultCategorie } = router.query
  const [selectedCategorie, setselectedCategorie] = useState(
    defaultCategorie || ''
  )
  const [maxPages, setmaxPages] = useState(productInfo.length)
  const [currentPage, setcurrentPage] = useState(1)
  const [products, setProducts] = useState(
    productInfo.slice(0, postPerPage * currentPage)
  )

  const setPage = (pageNumber: number, pageSize: number) => {
    setcurrentPage(pageNumber)
    let copyProduct = productInfo.slice(
      pageNumber * pageSize - pageSize,
      pageNumber * pageSize
    )
    setProducts(copyProduct)
  }

  const changeHandle = (categorie: string) => {
    if (categorie === selectedCategorie) {
      setselectedCategorie('')
      setProducts(productInfo.slice(0, postPerPage * 1))
      setcurrentPage(1)
      setmaxPages(productInfo.length)
      return
    }
    const filteredItems = productInfo.filter((product) =>
      product.categorie.includes(categorie)
    )
    setmaxPages(filteredItems.length)
    let copyProduct = filteredItems.slice(
      1 * postPerPage - postPerPage,
      1 * postPerPage
    )
    setProducts(copyProduct)
    setselectedCategorie(categorie)
  }

  return (
    <MainLayout>
      <div className="container landing-page">
        <div className="row">
          <div className="col justify-content-start">
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="3x"
              onClick={() => router.back()}
              className="goBack-Button"
            />
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
          {products.map((product, index) => (
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
        <div className="row-pagination mt-3 justify-content-center align-items-center text-center">
          <Pagination
            defaultCurrent={1}
            total={maxPages}
            current={currentPage}
            onChange={(pageNumber, pageSize) => setPage(pageNumber, pageSize)}
            pageSize={8}
          />
          ;
        </div>
      </div>
    </MainLayout>
  )
}

export default Categories
