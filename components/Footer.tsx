"use client"

import Image from 'next/image'
import React, { useState } from 'react'
// import Logo from '../public/assets/logoBlack.png'
import Logo from '../public/assets/logoWhite.png'

import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import PolicyModal from './PolicyModal';

import { OrderProcessing, ReturnsExchange, Shipping } from '@/lib/data';

const Footer:React.FC = () => {

   const[hide,setHide] = useState<boolean>(false)
   const [policy,setPolicy] = useState<string>("")
   const [policyName,setPolicyName] = useState<string>("")

   const openPolicy = (name:string,policy:string):void =>{
        setPolicyName(name)
        setPolicy(policy)   
        setHide(true)
   }

  return (
    <section>
        <PolicyModal policy={policy} policyName={policyName} hide={hide} setHide={setHide} />
        <div className='w-full py-3 px-7 xs:px-16 sm:px-28 md:px-7 lg:px-20 md:py-12 grid md:flex justify-start lg:justify-between bg-black text-white'>
            <div className='w-full py-2 md:py-0 md:w-[20%] lg:w-2/6 grid justify-start lg:justify-center'>
                <Image
                    src={Logo}
                    alt=''
                    width={175}
                    height={50} 
                    className='w-24 h-16 lg:w-40 lg:h-24 mt-7 lg:mr-10'
                />
            </div>
            <div className='w-full py-2 md:py-0 md:w-2/6 grid justify-start md:justify-center'>
                <h3 className='text-[19.5px] font-light'>Policies</h3>
                <p className='text-sm md:text-md font-extralight my-1 cursor-pointer hover:scale-110' 
                    onClick={()=>openPolicy('Order Processing',OrderProcessing)} 
                >
                    Order Processing
                </p>
                <p className='text-sm md:text-md font-extralight mb-1 cursor-pointer hover:scale-110' 
                    onClick={()=>openPolicy('Shipping Policy',Shipping)} 
                >   
                    Shipping Policy
                </p>
                <p className='text-sm md:text-md font-extralight mb-1 cursor-pointer hover:scale-110' 
                    onClick={()=>openPolicy('Returns & Exchange',ReturnsExchange)} 
                >
                    Returns & Exchanges
                </p>
            </div>
            <div className='w-full py-2 md:py-0 md:w-2/6 grid justify-start md:justify-center'>
                <h3 className='text-[19.5px] font-light'>Contacts</h3>
                <p className='cursor-pointer hover:scale-110 text-sm md:text-md font-light my-2'>Mail - <span className='font-normal'>care@projectshades.in</span></p>
                <p className='cursor-pointer hover:scale-110 text-sm md:text-md font-normal '>+91 7558544365</p>
                <div className='flex justify-start my-3'>
                    <BsInstagram className="cursor-pointer hover:scale-125 text-2xl"/>
                    <FaFacebookF className="cursor-pointer hover:scale-125 text-2xl ml-3"/>
                    <BsLinkedin className="cursor-pointer hover:scale-125 text-2xl ml-3"/>
                </div>
            </div>
            <div className='w-full py-2 md:py-0 md:w-2/6 grid justify-start md:justify-center'>
                <p className='text-lg lg:text-xl font-light'>Subscribe to our news letter!</p>
                <div className='flex mb-12'>
                    <input type="text" className='w-[150px] lg:w-[210px] text-white font-light py-1 px-3 border border-white bg-black rounded-none placeholder:font-light focus:outline-none' placeholder='@Email Address' />
                    <button className='px-2 py-1 text-sm font-extralight border border-white border-l-0' >Subscribe</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer