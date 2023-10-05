"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductDetails {
  product: {
    id: string;
    name: string;
    img1: string;
    [key: string]: any;
  };
}

const ProductCard:React.FC<ProductDetails> = ({product}) => { 

  const router = useRouter()

  const handleClick = () => router.push(`/ProductDetails/?id=${id}`)
  
  const {id,img1,name} = product
  
  return (
    <div 
      className='min-w-[340px] md:min-w-[400px] mr-9 cursor-pointer hover:scale-105 grid'
      onClick={handleClick}
    >
      <div className='h-2/3'>
        <Image
            src={img1}
            alt='Product image'
            width={'500'}
            height={'500'}
            className='w-full object-contain object-center'
        />
      </div>
    
        <p className='text-xl font-light my-2 p-3 border border-black text-center'>{name}</p>
    </div>
  )
}

export default ProductCard