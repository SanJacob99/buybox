import React, { ReactNode, useState } from 'react'
import NavBarGlobal from '@/components/NavBar'
import FooterCopyRight from '@/components/Footer'
import { Layout } from 'antd'
import { userContext } from '@/context/userContext'
import LoaderComponent from './loading'

interface MainLayoutProps {
  children: ReactNode
}
const { Footer, Content } = Layout

const MainLayout = ({ children }: MainLayoutProps) => {
  const [searchContent, setSearchContent] = useState<React.Context<{}>>()
  return (
    <div>
      <userContext.Provider value={{ searchContent, setSearchContent }}>
        <React.Suspense fallback={<LoaderComponent title="Loading Site" />}>
          <Layout>
            <NavBarGlobal />
            <Content className="centered">{children}</Content>
            <Footer className="footer mainFooter">
              <FooterCopyRight />
            </Footer>
          </Layout>
        </React.Suspense>
      </userContext.Provider>
    </div>
  )
}

export default MainLayout
