import MainLayout from '@/components/MainLayout'
import { Arimo } from 'next/font/google'
import { productInfo } from '../../components/ProductData'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const Product = () => {
  const router = useRouter()
  const products = productInfo
  const { productName } = router.query
  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    document.title = 'Product'
    const currentProduct = products.filter(
      (prod: IProduct) => prod.name === 'Beach dress'
    )
    console.log(currentProduct)
  }, [])

  return (
    <MainLayout>
      <div className="container">
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Product
