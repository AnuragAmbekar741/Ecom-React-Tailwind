import Image from 'next/image';
import React from 'react'

import { BsBag } from 'react-icons/bs';
import { navLinks } from '@/lib/data';


const BottomNavbar:React.FC = () => {
  return (
    <header className='z-999 relative w-screen'>
        <Image
                src='/assets/logoBlack.png'
                alt='home'
                width={150}
                height={30}
                className='h-[80px] fixed top-10 left-5 md:hidden'
            />
        <nav className='flex w-full justify-between fixed bottom-0 right-0 left-0 py-2 px-12 md:hidden bg-black opacity-50'>
            {navLinks.map((link)=>{
                return(
                    <p key={link.hash} className='text-white text-sm font-light mx-4 py-2 cursor-pointer'>{link.name}</p>
                )
            })}
            <BsBag className="text-3xl text-white font-thin"/>
        </nav>
    </header>
  )
}

export default BottomNavbar