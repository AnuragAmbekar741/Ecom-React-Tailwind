"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductDetails {
  product: {
    id: string;
    name: string;
    img1: string;
    [key: string]: any; // Allow for additional dynamic properties if needed
  };
}

const ProductCard:React.FC<ProductDetails> = ({product}) => { 

  const router = useRouter()

  const handleClick = () => router.push(`/ProductDetails/?id=${id}`)
  
  const {id,img1,name} = product
  
  return (
    <div 
      className='min-w-[340px] md:min-w-[400px] mr-9 cursor-pointer hover:scale-105'
      onClick={handleClick}
    >
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