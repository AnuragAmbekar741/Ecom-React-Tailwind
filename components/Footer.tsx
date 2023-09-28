import Image from 'next/image'
import React from 'react'
// import Logo from '../public/assets/logoBlack.png'
import Logo from '../public/assets/logoWhite.png'

import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Footer:React.FC = () => {
  return (
    <section>
        <div className='w-full px-20 py-12 flex justify-between bg-black text-white'>
            <div className='w-2/6 grid justify-center'>
                <Image
                    src={Logo}
                    alt=''
                    width={175}
                    height={50} 
                    className='mt-7 mr-10 h-3/5'
                />

            </div>
            <div className='w-2/6 grid justify-center'>
                <h3 className='text-[19.5px] font-light'>Policies</h3>
                <p className='text-md font-light my-1'>Order Processing</p>
                <p className='text-md font-light mb-1'>Shipping Policy</p>
                <p className='text-md font-light mb-1'>Returns & Exchanges</p>
            </div>
            <div className='w-2/6 grid justify-center'>
                <h3 className='text-[19.5px] font-light'>Contacts</h3>
                <p className='text-md font-light my-2'>Mail - <span className='font-normal'>care@projectshades.in</span></p>
                <p className='text-md font-normal '>+91 7558544365</p>
                <div className='flex justify-start my-3'>
                    <BsInstagram className="text-3xl"/>
                    <FaFacebookF className="text-3xl ml-3"/>
                    <BsLinkedin className="text-3xl ml-3"/>
                </div>
            </div>
            <div className='w-2/6 grid justify-center'>
                <p className='text-xl font-light'>Subscribe to our news letter!</p>
                <input type="text" className='w-full mb-16  p-1 border border-white bg-black placeholder:font-light' placeholder='@Email Address' />
                
            </div>
        </div>
    </section>
  )
}

export default Footer