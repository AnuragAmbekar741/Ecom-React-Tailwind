import React from 'react'
import { productData } from '@/lib/data'
import ProductCard from './ProductCard'

const CardContainer:React.FC = () => {
  return (
    <section className='flex w-full overflow-x-auto py-5 px-5 md:px-20'>
        {productData.map(product=>{
            return(
                <ProductCard product={product}/>
            )
        })}
    </section>
  )
}

export default CardContainer