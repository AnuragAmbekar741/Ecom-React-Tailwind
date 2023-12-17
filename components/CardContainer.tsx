import React from 'react'
import { productData } from '@/lib/data'
import ProductCard from './ProductCard'

const CardContainer:React.FC = () => {
  return (
    <section className='flex w-full overflow-x-scroll px-5 pb-10 md:px-20'>
      {/* <div className='grid text-[60px] font-thin px-2 mr-10'>
        <h1>P</h1>
        <h1>R</h1>
        <h1>D</h1>
        <h1>U</h1>
        <h1>C</h1>
        <h1>T</h1>
        <h1>S</h1>
      </div> */}
        {productData.map(product=>{
            return(
                <ProductCard key={product.id} product={product}/>
            )
        })}
    </section>
  )
}

export default CardContainer