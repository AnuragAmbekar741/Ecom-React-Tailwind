"use client"

import React from 'react'
import { cartState } from '../store/atoms/cartState'
import { useRecoilValue } from 'recoil'
import CartProd from './CartProd'

const CartProductContainer:React.FC = () => {

  const cart = useRecoilValue(cartState)

  return (
    <div className='grid w-full shadow-lg rounded-lg border'>
      {cart.map(item=>{
        return(
           <CartProd product={item}/>
        )
      })}
    </div>
  )
}

export default CartProductContainer