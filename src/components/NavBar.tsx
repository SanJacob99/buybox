import React, { useContext } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBox } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Arimo } from 'next/font/google'
import { ISerchContext } from '@/interface/searchContext'
import { userContext } from '@/context/userContext'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const NavBarGlobal = () => {
  const router = useRouter()
  const { searchContent, setSearchContent } = useContext<any | ISerchContext>(
    userContext
  )

  const handleNavigation = (route: string) => {
    router.push(route)
  }

  const openSider = () => setSearchContent({ slider: !searchContent.slider })

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
    <div className={`${arimo.className} container navBar-container`}>
      <nav className="navbar mainNavbar ">
        <div className="col-9 d-flex align-items-center ">
          <Image
            src="https://buyboximages.s3.us-west-1.amazonaws.com/BuyBoxMainLogo.png"
            alt="Image 2"
            width={260}
            height={100}
          />
        </div>
        <div className="col text-end">
          <a
            className="navbar-brand ms-2"
            onClick={() => handleNavigation('/')}
          >
            Products
          </a>
        </div>
        <div className="col text-end">
          <a onClick={openSider} className="navbar-brand">
            Categories
          </a>
        </div>
        <div className="col text-center">
          <Dropdown menu={{ items }} className="col  userIcon">
            <a>
              <Space>
                <FontAwesomeIcon icon={faCartShopping} size="3x" />
              </Space>
            </a>
          </Dropdown>
        </div>
      </nav>
    </div>
  )
}

export default NavBarGlobal
