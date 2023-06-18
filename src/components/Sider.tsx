import { userContext } from '@/context/userContext'
import { ISerchContext } from '@/interface/searchContext'
import React, { useContext } from 'react'

const Sider = () => {
  const { searchContent } = useContext<any | ISerchContext>(userContext)
  console.log(searchContent)
  return (
    <div
      className="sider-container"
      style={
        searchContent.slider ? { marginRight: '0' } : { marginRight: '-400px' }
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          <div className="sider-brand">
            <h2>Categories</h2>
          </div>
          <div className="hamburger-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sider
