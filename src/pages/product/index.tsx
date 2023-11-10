import MainLayout from '@/components/MainLayout'
import { Arimo } from 'next/font/google'
import { productInfo } from '../../components/ProductData'
import React, { useEffect, useState } from 'react'

import { ShoppingCartOutlined, CheckOutlined } from '@ant-design/icons'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button, Card } from 'antd'
const { Meta } = Card
const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const Product = () => {
  const router = useRouter()
  const products = productInfo
  let { productName } = router.query
  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    document.title = 'Product'

    const currentProduct = products.filter(
      (prod: IProduct) => prod.name === productName
    )
    setProduct(currentProduct[0])
  }, [])

  return (
    <MainLayout>
      {product && (
        <div className="container product-container">
          <div className="row ">
            <div className="col-6 ">
              <Card hoverable style={{ width: '100%', marginBottom: 100 }}>
                <div
                  style={{
                    width: '100%',
                    paddingTop: '150%',
                  }}
                >
                  <Image
                    src={product.url}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    width={600}
                    height={600}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
              </Card>
            </div>
            <div className="col-6 ">
              <div className="text-center ">
                <div className="product-desc">
                  <h1>{product.name}</h1>
                  <p className="mt-5 p-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque aliquet nisi vel mi condimentum, eu dapibus erat
                    elementum. Curabitur auctor nunc vel felis ullamcorper, non
                    volutpat mi convallis. Sed at dui ac leo sodales hendrerit.
                    In hac habitasse platea dictumst. Vivamus sagittis eros et
                    est finibus, at cursus dolor tincidunt. Ut ultricies elit eu
                    justo tristique, vel ultrices turpis feugiat.
                  </p>
                </div>
                <div className="action-buttons">
                  <Button
                    type="primary"
                    size={'large'}
                    icon={<CheckOutlined />}
                  >
                    Buy Now
                  </Button>
                  <br />
                  <Button
                    type="primary"
                    size={'large'}
                    icon={<ShoppingCartOutlined />}
                    style={{ marginTop: 12 }}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  )
}

export default Product
