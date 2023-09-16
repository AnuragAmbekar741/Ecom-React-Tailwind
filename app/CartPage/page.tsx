"use client"

import React from 'react'
import DeliveryDetailsForm from '@/components/CartPage/DeliveryDetailsForm'
import CartProductContainer from '@/components/CartPage/CartProdContainer'
import { cartState } from '@/components/store/atoms/cartState'
import { useRecoilValue } from 'recoil'


const page = () => {

  const Cart = useRecoilValue(cartState)
  console.log(Cart)
  return (
    <div className='pt-40 px-20 flex'>
      <div className='w-1/2'>
        <CartProductContainer/>
      </div>
      <div className='w-1/2'>
        <DeliveryDetailsForm/>
      </div>
    </div>
  )
}

export default page