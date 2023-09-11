"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {

    const params = useSearchParams()
    const id = params.get('id')
    alert(id)
  return (
    <div></div>
  )
}

export default page