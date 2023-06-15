import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBox } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

const NavBarGlobal = () => {
  const router = useRouter()

  const handleNavigation = (route: string) => {
    router.push(route)
  }

  // To fetch from
  const items: MenuProps['items'] = [
    {
      label: <a onClick={() => handleNavigation('/login')}>Sign In / Log In</a>,
      key: '0',
    },
  ]

  const categories: MenuProps['items'] = [
    {
      label: 'House',
      key: '0',
    },
    {
      label: 'Garden',
      key: '1',
    },
    {
      label: 'Cars',
      key: '2',
    },
    {
      label: 'Etc',
      key: '3',
    },
  ]

  return (
    <nav className="navbar row mainNavbar">
      <div className="col-8 mx-5 d-flex align-items-center ">
        <Image
          src="https://buyboximages.s3.us-west-1.amazonaws.com/BuyBoxMainLogo.png"
          alt="Image 2"
          width={260}
          height={100}
        />
      </div>
      <div className=" col mx-5 d-flex align-items-center ">
        <a className="navbar-brand ms-2" onClick={() => handleNavigation('/')}>
          Products
        </a>
      </div>
      <Dropdown menu={{ items: categories }} className="mainNavbarDropdown col">
        <a onClick={(e) => e.preventDefault()} className="navbar-brand">
          Categories
        </a>
      </Dropdown>
      {/* <Dropdown menu={{ items }} className="mainNavbarDropdown">
        <a onClick={(e) => e.preventDefault()}>
          <Space>Mis direcciones</Space>
        </a>
      </Dropdown> */}
      {/* <form className="form-inline flex-grow-1 mx-5">
        <div className="input-group">
          <button
            className="btn my-2 my-sm-0 btn-outline-my-btn-color"
            type="submit"
          >
            Buscar
          </button>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
          />
        </div>
      </form> */}
      <Dropdown menu={{ items }} className="col mx-5 userIcon">
        <a>
          <Space>
            <FontAwesomeIcon icon={faCartShopping} size="3x" />
          </Space>
        </a>
      </Dropdown>
    </nav>
  )
}

export default NavBarGlobal
