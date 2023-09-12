"use client"

import React from 'react'
import App from './_app'
import { RecoilRoot } from 'recoil'

const page = () => {
  return (
    <div>
      <RecoilRoot>
        <App/>
      </RecoilRoot>
    </div>
  )
}

export default page