"use client"

import React from 'react'
import { RxCross2 } from 'react-icons/rx';

type Props = {
    policy:string;
    policyName:string;
    hide:boolean
    setHide:React.Dispatch<React.SetStateAction<boolean>>
}


const PolicyModal = (props: Props) => {

  return (
    <div className={`fixed top-0 w-full h-full bg-[#00000099] ${props.hide?'block':'hidden'} `}>
    <div className="grid mx-auto left-[22.5rem] top-60 w-1/2 p-7 absolute bg-white text-black">
        <RxCross2 
            className='text-xl absolute right-3 top-3'
            onClick={()=>props.setHide(false)}
        />
        <h3 className='text-2xl font-light text-left my-2'>{props.policyName}</h3>
        <p className='text-md font-light text-left mb-2'>{props.policy}</p>
    </div>
  </div>
  )
}

export default PolicyModal