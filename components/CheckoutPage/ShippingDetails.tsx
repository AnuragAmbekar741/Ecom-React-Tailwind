"use client"

import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { userDetailsState } from '../../store/atoms/userDetailsState'
import UserForm from '../CartPage/UserForm'

const ShippingDetails = () => {

const [hide,setHide] = useState<boolean>(false)

const UserShippingDetail = useRecoilValue(userDetailsState)
console.log(UserShippingDetail)
  return (
    <div className={`${hide?'hidden':'block'} w-1/2 p-3 border border-slate-100 shadow-md ml-6`}>
        <UserForm value={'shippingDetails'} readOnly={true} />
    </div>
  )
}

export default ShippingDetails