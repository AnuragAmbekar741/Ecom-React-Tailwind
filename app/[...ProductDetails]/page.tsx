"use client"

import React from 'react'
import App from './_app'
import { RecoilRoot } from 'recoil'
import TopNavbar from '@/components/TopNavbar'
import BottomNavbar from '@/components/BottomNavbar'

const page = () => {
  return (
    <div>
      <RecoilRoot>
        <TopNavbar/>
        <BottomNavbar/>
        <App/>
      </RecoilRoot>
    </div>
  )
}

export default page