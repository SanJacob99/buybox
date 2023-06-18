import { userContext } from '@/context/userContext'
import { ISerchContext } from '@/interface/searchContext'
import React, { useContext } from 'react'
import { Divider } from 'antd'
import { Arimo } from 'next/font/google'
import { Categories } from './ProductData'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const Sider = () => {
  const { searchContent } = useContext<any | ISerchContext>(userContext)
  const categories = Categories
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
            <div className="sider-body ">
              <h2>{item[0]}</h2>
              <div>
                <ul>
                  {item.map((items, index) =>
                    index === 0 ? (
                      <></>
                    ) : (
                      <li key={index}>
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