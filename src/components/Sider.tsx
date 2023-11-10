import { userContext } from '@/context/userContext'
import { ISerchContext } from '@/interface/searchContext'
import React, { useContext } from 'react'
import { Divider } from 'antd'
import { Arimo } from 'next/font/google'
import { useRouter } from 'next/router'
import { Categories } from './ProductData'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const Sider = () => {
  const { searchContent } = useContext<any | ISerchContext>(userContext)
  const categories = Categories
  const router = useRouter()

  const handleNavigation = (categorie: string) => {
    router.push(`categories?defaultCategorie=${categorie}`)
  }

  return (
    <div
      className={`${arimo.className} sider-container`}
      style={
        searchContent.slider ? { marginRight: '0' } : { marginRight: '-400px' }
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          <div className="sider-brand ">
            <h2>Categories</h2>
          </div>
        </div>
        <Divider style={{ backgroundColor: 'white' }} />
        {categories.map((item, index) => (
          <div className="nav-body" key={index}>
            <div className="sider-body " key={index}>
              <h2>{item[0]}</h2>
              <div>
                <ul>
                  {item.map((items, index) =>
                    index === 0 ? (
                      <></>
                    ) : (
                      <li key={index} onClick={() => handleNavigation(items)}>
                        <a>{items}</a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <Divider style={{ backgroundColor: 'white' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sider
