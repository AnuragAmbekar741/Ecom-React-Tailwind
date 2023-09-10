import Image from 'next/image';
import React from 'react'
import { BiHomeAlt2 } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GiClothes } from 'react-icons/gi';




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
        <nav className='flex w-full justify-between fixed bottom-0 right-0 left-0 py-3 px-12 md:hidden bg-black opacity-50'>
            <BiHomeAlt2 className="text-4xl text-white"/>
            <FcAbout className="text-4xl text-white"/> 
            <GiClothes className="text-4xl text-white"/>
            <HiOutlineShoppingBag className="text-4xl text-white"/>
        </nav>
    </header>
  )
}

export default BottomNavbar