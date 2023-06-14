import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBox } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRouter } from 'next/router'

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

  return (
    <nav className="navbar justify-content-between mainNavbar">
      <div className="mx-5 d-flex align-items-center ">
        <FontAwesomeIcon icon={faBox} size="3x" />
        <a className="navbar-brand ms-2" onClick={() => handleNavigation('/')}>
          BuyBox
        </a>
      </div>
      <Dropdown menu={{ items }} className="mainNavbarDropdown">
        <a onClick={(e) => e.preventDefault()}>
          <Space>Mis direcciones</Space>
        </a>
      </Dropdown>
      <form className="form-inline flex-grow-1 mx-5">
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
      </form>
      <Dropdown menu={{ items }} className="mx-5 userIcon">
        <a>
          <Space>
            <FontAwesomeIcon icon={faUser} size="3x" />
          </Space>
        </a>
      </Dropdown>
    </nav>
  )
}

export default NavBarGlobal
