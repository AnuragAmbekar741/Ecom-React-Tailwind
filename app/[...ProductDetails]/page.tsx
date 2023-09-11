"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { productData } from '@/lib/data'
import { useState } from 'react'

const page = () => {

    const params = useSearchParams()
    const id = params.get('id')

    const selectedProd = productData.filter(item=>item.id===id)[0]

    const [toggle, setToggle] = useState({
        sizeChart: false
    })

  return (
    <div className='flex p-7 pt-40 border w-full h-[100vh]'>
            <div className='w-1/3 pl-5 pr-10 pt-12  justify-start'>
                <h2 className='text-xl font-light'>Ideadtion</h2>
                <p className='text-[15px] font-light leading-6  mt-3 mb-5'>{selectedProd.ideation}</p>
                <h2 className='text-xl font-light mt-12'>Composition</h2>
                <p className='text-[15px] font-light leading-6  my-3 mb-5'>{selectedProd.composition}</p>
                <h2 className='text-xl font-light mt-12'>Material</h2>
                <p className='text-[15px] font-light leading-6  my-3 mb-5'>{selectedProd.material}</p>
            </div>
            <div className='w-1/3 px-4 flex flex-col overflow-y-auto'>
                <img src={selectedProd.img1} className='w-full object-contain' alt="" />
                <img src={selectedProd.img2} className='w-full' alt="" />
            </div>
            <div className='w-1/3 p-2 pl-7 pt-5'>
                <h1 className='text-lg font-bold'>{selectedProd.name}</h1>
                <h5 className='text-md mt-3 mb-8'>{selectedProd.price}</h5>
                <div className='flex mt-10 justify-between pr-10'>
                    <h2 className='text-lg mt-2'>Select</h2>
                    <select
                        className='border-b border-black w-2/5 outline-none p-2 text-xl font-semibold'
                    >
                        <option value='uk6'>UK 6</option>
                        <option value='uk7'>UK 7</option>
                        <option value='uk8'>UK 8</option>
                        <option value='uk9'>UK 9</option>
                        <option value='uk10'>UK 10</option>
                        <option value='uk11'>UK 11</option>
                        <option value='custom'>Custom</option>
                    </select>
                    <p
                        className='text-sm font-light mt-4 cursor-pointer'
                        onClick={() => setToggle({ ...toggle, sizeChart: !toggle.sizeChart })}
                    >Size chart</p>
                </div>
                <div className={`${toggle.sizeChart ? 'grid' : 'hidden'} mt-8 border border-black p-2 pr-0 mr-10`}>
                    <div className='flex w-full p-2 pr-10 justify-between'>
                        <h3 className='text-md font-bold'>Uk</h3>
                        <h3 className='text-md font-bold'>Bust</h3>
                        <h3 className='text-md font-bold'>Waist</h3>
                        <h3 className='text-md font-bold'>Hip</h3>
                    </div>
                    <div className='flex justify-between'>
                        <div className='grid'>
                            <h3 className='text-md px-[0.7rem] py-1'>6</h3>
                            <h3 className='text-md px-[0.7rem] py-1'>8</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>10</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>12</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>14</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>16</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>18</h3>
                        </div>
                        <div className='grid -ml-3'>
                            <h3 className='text-md px-[0.6rem] py-1'>33"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>35"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>36.5"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>38"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>39"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>41"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>43"</h3>
                        </div>
                        <div className='grid -ml-4'>
                            <h3 className='text-md px-[0.6rem] py-1 '>24"</h3>
                            <h3 className='text-md px-[0.6rem] py-1 '>26"</h3>
                            <h3 className='text-md px-[0.6rem] py-1 '>28"</h3>
                            <h3 className='text-md px-[0.6rem] py-1 '>30"</h3>
                            <h3 className='text-md px-[0.6rem] py-1 '>32"</h3>
                            <h3 className='text-md px-[0.6rem] py-1 '>34"</h3>
                            <h3 className='text-md px-[0.6rem] py-1 '>36"</h3>
                        </div>
                        <div className='grid mr-4'>
                            <h3 className='text-md px-[0.6rem] py-1'>37"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>38.5"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>39"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>42"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>43"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>45"</h3>
                            <h3 className='text-md px-[0.6rem] py-1'>47"</h3>
                        </div>

                    </div>
                </div>
                <button className='mt-10 py-3 px-36 border text-xl font-light border-black'>Add to cart</button>
            </div>
        </div>
  )
}

export default page