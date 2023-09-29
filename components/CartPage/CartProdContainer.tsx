"use client"

import React from 'react'
import { cartState,ProductDetails } from '../../store/atoms/cartState'
import { useRecoilValue } from 'recoil'
import CartProd from './CartProd'



const CartProductContainer:React.FC =()=>{

  const cart: ProductDetails[] = useRecoilValue(cartState)

  var total = 0
  if(cart.length>0)  total = cart.map(item=>item.price2*item.quantity).reduce((a,b)=>a+b)
  

  return (
    <div className='grid align-top w-full  shadow-md p-3 rounded-lg border border-slate-100'>
      <div className='flex justify-between p-3 pr-5'>
        <h3 className='text-md font-medium'>Product</h3>
        <h3 className='text-md font-medium '>Name</h3>
        <h3 className='text-md font-medium '>Price</h3>
        <h3 className='text-md font-medium'>Size</h3>
        <h3 className='text-md font-medium'>Quant</h3>
      </div>
      <div className={`w-full ${cart.length>3?'overflow-y-auto h-[510px]':''} text-left`}>
      {cart.map(item=>{
        return(
           <CartProd product={item}/>
        )
      })}
      </div>
      <div className='flex justify-between py-5 px-2 border-t border-slate-700'>
        <p className='text-xl font-light'>Total payable amount</p>
        <p className={`${total>0?'':'hidden'} text-xl font-medium`}>Rs {total}/-</p>
      </div>
    </div>
  )
}

export default CartProductContainer