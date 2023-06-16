import Head from 'next/head'
import React from 'react'
import LandingPage from './landingPage'
import MainLayout from '@/components/MainLayout'

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
