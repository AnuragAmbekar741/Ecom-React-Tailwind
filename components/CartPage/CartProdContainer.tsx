"use client"

import React from 'react'
import { cartState } from '../store/atoms/cartState'
import { useRecoilValue } from 'recoil'
import CartProd from './CartProd'

const CartProductContainer:React.FC = () => {

  const cart = useRecoilValue(cartState)

  return (
    <div className='grid w-full shadow-md p-3 rounded-lg'>
      <div className='flex justify-between p-3'>
        <h3 className='text-md font-medium'>Product</h3>
        <h3 className='text-md font-medium px-16'>Name</h3>
        <h3 className='text-md font-medium mx-5'>Price</h3>
        <h3 className='text-md font-medium'>Size</h3>
        <h3 className='text-md font-medium'>Quant</h3>

      </div>
      {cart.map(item=>{
        return(
           <CartProd product={item}/>
        )
      })}
    </div>
  )
}

export default CartProductContainer