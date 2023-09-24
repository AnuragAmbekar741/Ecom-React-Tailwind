"use client"

import React from 'react'
import { useRecoilValue } from 'recoil'
import { userDetailsState } from '../../store/atoms/userDetailsState'
import UserForm from '../CartPage/UserForm'

const ShippingDetails = () => {

const UserShippingDetail = useRecoilValue(userDetailsState)
console.log(UserShippingDetail)
  return (
    <div className='w-1/2 h-[350px] overflow-y-auto p-3 border border-slate-100 shadow-md ml-6'>
        <UserForm value={'shippingDetails'} readOnly={true} />
    </div>
  )
}

export default ShippingDetails