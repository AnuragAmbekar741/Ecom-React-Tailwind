"use client"

import React from 'react'
import CartProductContainer from '@/components/CartPage/CartProdContainer'
import UserForm from '@/components/CartPage/UserForm'
import PolicyViewer from '@/components/CartPage/PolicyViewer'

import { OrderProcessing,ReturnsExchange,Shipping,TermsAndConditions2} from '@/lib/data'


const page = () => {

  
  return (
    <div className='pt-28 px-8 sm:pt-40 sm:px-16 lg:px-20 md:grid lg:flex'>
      <div className='w-full lg:w-3/6'>
        <CartProductContainer/>
        <PolicyViewer policyName='Order Processing' policy={OrderProcessing}/>
        <PolicyViewer policyName='Returns & Exchange' policy={ReturnsExchange}/>
        <PolicyViewer policyName='Shipping Policy' policy={Shipping}/>
        <PolicyViewer policyName='Terms & Conditions' policy={TermsAndConditions2}/>
      </div>
      <div className='w-full lg:w-3/6'>
        <UserForm />
      </div>
    </div>
  )
}

export default page