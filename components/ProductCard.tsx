import Image from 'next/image'
import React, { Children } from 'react'

interface ProductDetails {
    product :{
      name: string,
      img1:string,
      [key: string]: string; // Allow any additional properties
    }
}



const ProductCard:React.FC<ProductDetails> = ({product}) => { 
  const {img1,name} = product
  return (
    <div className='min-w-[400px] mr-9 cursor-pointer'>
        <Image
            src={img1}
            alt='Product image'
            width={500}
            height={520}
            className='w-full'
        />
        <p className='text-xl font-light my-2 p-3 border border-black text-center'>{name}</p>
    </div>
  )
}

export default ProductCard