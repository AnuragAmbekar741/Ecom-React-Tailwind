"use client"

import React from 'react'
import CartProductContainer from '@/components/CartPage/CartProdContainer'
import { cartState } from '@/store/atoms/cartState'
import { useRecoilValue } from 'recoil'
import UserForm from '@/components/CartPage/UserForm'
import PolicyViewer from '@/components/CartPage/PolicyViewer'

import { OrderProcessing,ReturnsExchange,Shipping} from '@/lib/data'


const page = () => {

  const Cart = useRecoilValue(cartState)
  console.log(Cart)
  return (
    <div className='pt-28 px-8 sm:pt-40 sm:px-20 md:grid lg:flex'>
      <div className='w-full lg:w-3/6'>
        <CartProductContainer/>
        <PolicyViewer policyName='Order Processing' policy={OrderProcessing}/>
        <PolicyViewer policyName='Returns & Exchange' policy={ReturnsExchange}/>
        <PolicyViewer policyName='Shipping Policy' policy={Shipping}/>
      </div>
      <div className='w-full lg:w-3/6'>
        <UserForm />
      </div>
    </div>
  )
}

export default page