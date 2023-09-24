"use client"

import React from 'react'
import DeliveryDetailsForm from '@/components/CartPage/DeliveryDetailsForm'
import CartProductContainer from '@/components/CartPage/CartProdContainer'
import { cartState } from '@/store/atoms/cartState'
import { useRecoilValue } from 'recoil'
import UserForm from '@/components/CartPage/UserForm'


const page = () => {

  const Cart = useRecoilValue(cartState)
  console.log(Cart)
  return (
    <div className='pt-40 px-20 md:grid lg:flex'>
      <div className='w-full lg:w-3/5'>
        <CartProductContainer/>
      </div>
      <div className='w-full lg:w-2/5'>
        <UserForm/>
      </div>
    </div>
  )
}

export default page