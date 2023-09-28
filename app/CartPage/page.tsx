"use client"

import React from 'react'
import DeliveryDetailsForm from '@/components/CartPage/DeliveryDetailsForm'
import CartProductContainer from '@/components/CartPage/CartProdContainer'
import { cartState } from '@/store/atoms/cartState'
import { useRecoilValue } from 'recoil'
import UserForm from '@/components/CartPage/UserForm'
import OrderProcessing from '@/components/CheckoutPage/OrderProcessing'
import ReturnsExchanges from '@/components/CheckoutPage/ReturnsExchanges'
import ShippingPolicy from '@/components/CheckoutPage/Shipping Policy'


const page = () => {

  const Cart = useRecoilValue(cartState)
  console.log(Cart)
  return (
    <div className='pt-40 px-20 md:grid lg:flex'>
      <div className='w-full lg:w-3/6'>
        <CartProductContainer/>
        <OrderProcessing/>
        <ReturnsExchanges/>
        <ShippingPolicy/>
      </div>
      <div className='w-full lg:w-3/6'>
        <UserForm />
      </div>
    </div>
  )
}

export default page