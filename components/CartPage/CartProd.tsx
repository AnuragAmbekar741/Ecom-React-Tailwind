import Image from 'next/image';
import React from 'react'

interface ProductDetails {
    product :{
      id:string
      name: string,
      img1:string,
      [key: string]: string; // Allow any additional properties
    }
}

const CartProd:React.FC <ProductDetails> = ({product}) => {
    const {id,name,price,cartIcon,quantity} = product
  return (
    <div className='p-3 flex w-full justify-between text-black'>
        <Image src={cartIcon} width={28} height={28} alt=''/>
        <h3 className='text-lg font-extralight'>{name}</h3>
        <h3 className='text-lg font-extralight'>{price}</h3>
        <h3 className='text-lg font-extralight'>{quantity}</h3>
    </div>
  )
}

export default CartProd