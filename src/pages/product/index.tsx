import MainLayout from '@/components/MainLayout'
import { Arimo } from 'next/font/google'
import React from 'react'

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const index = () => {
  return (
    <MainLayout>
      <div className="container"></div>
    </MainLayout>
  )
}

export default index
