"use client"

import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { userDetailsState } from '../../store/atoms/userDetailsState'
import UserForm from '../CartPage/UserForm'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';


const ShippingDetails = () => {

const [hide,setHide] = useState<boolean>(true)

const UserShippingDetail = useRecoilValue(userDetailsState)
console.log(UserShippingDetail)
  return (
    <div className={`w-1/2 p-3 border border-slate-100 shadow-md my-5 rounded-lg`}>
        <div className={`flex ${!hide?'justify-end':'justify-between'}`}>
          <h1 className={`text-xl font-normal ${!hide?'hidden':'block'}`}>Shipping Details</h1>
          <AiOutlinePlus 
            className={`text-2xl text-black m-1 ${hide?'block':'hidden'}`} 
            onClick={()=>setHide(!hide)}
          />
          <AiOutlineMinus
            className={`text-2xl text-black m-1 ${!hide?'block':'hidden'} `}
            onClick={()=>setHide(!hide)}
          />
        </div>
        <div className={`${hide?'hidden':'block'}`}>
          <UserForm/>
        </div>
    </div>
  )
}

export default ShippingDetails