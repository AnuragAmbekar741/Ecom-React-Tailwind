"use client"

import React from 'react'
import { cartState } from '../../store/atoms/cartState'
import { useRecoilValue } from 'recoil'
import CartProd from './CartProd'

const CartProductContainer:React.FC = () => {

  const cart = useRecoilValue(cartState)

  return (
    <div className='grid align-top w-full  shadow-md p-3 rounded-lg border border-slate-100'>
      <div className='flex justify-between p-3'>
        <h3 className='text-md font-medium'>Product</h3>
        <h3 className='text-md font-medium pr-12'>Name</h3>
        <h3 className='text-md font-medium pl-10'>Price</h3>
        <h3 className='text-md font-medium'>Size</h3>
        <h3 className='text-md font-medium'>Quant</h3>
      </div>
      <div className={`w-full ${cart.length>3?'overflow-y-auto h-[510px]':''}`}>
      {cart.map(item=>{
        return(
           <CartProd key={item.id} product={item}/>
        )
      })}
      </div>
    </div>
  )
}

export default CartProductContainer