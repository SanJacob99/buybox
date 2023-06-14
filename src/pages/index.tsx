import Head from 'next/head'
import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import LandingPage from './landingPage'
import { userContext } from '@/context/userContext'
import LoaderComponent from '@/components/loading'
import { Layout } from 'antd'
import FooterCopyRight from '../components/Footer'
import NavBarGlobal from '@/components/NavBar'
import MainLayout from '@/components/MainLayout'

const { Footer, Content } = Layout

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Head>
        <title>BuyBox </title>
        <meta name="description" content="Hasta tu casa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <LandingPage />
      </MainLayout>
    </>
  )
}

export default Home
