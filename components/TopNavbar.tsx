'use client'

import React from 'react'
import { navLinks } from '@/lib/data'
import Image from 'next/image'
import { cartState } from './store/atoms/cartState'
import { useRecoilValue } from 'recoil'
import { useRouter } from 'next/navigation'

const TopNavbar:React.FC = () => {

    const count = useRecoilValue(cartState).length
    const router = useRouter()

  return (
    <header className='z-999 relative w-screen'>
        <nav className='hidden md:flex fixed w-full top-0 left-0 right-0 justify-between md:py-8 md:px-12 lg:px-20'>
            <Image 
                src="/assets/logoBlack.png"  
                alt='Rhea-Vania-Logo' 
                width={180} 
                height={78} 
                className='h-[97px] cursor-pointer hover:scale-125'
                onClick={()=>router.push('/')}
            />
            <div className='flex py-7'>
                {navLinks.map(link=>{
                    return(
                        <p className='text-black text-sm font-light lg:text-[16px] mx-4 xl:mx-7 py-2 cursor-pointer'>{link.name}</p>
                    )
                })}
                <Image src="/assets/cart-icon.png" alt='Rhea-Vania-Logo' width={42} height={28} className=' md:ml-7 xl:ml-20'/>  
                <p className='absolute right-24 top-[4.5rem]'>{count}</p>
            </div>
        </nav>
    </header>
    
  )
}

export default TopNavbar