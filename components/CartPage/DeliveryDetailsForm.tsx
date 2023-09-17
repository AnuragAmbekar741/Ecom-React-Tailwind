import React, { useState } from 'react'

const DeliveryDetailsForm:React.FC = () => {

  const [details,setDetails] = useState({
    email:'',
    phone:'',
    apt:'',
    locality:'',
    city:'',
    state:'',
    pin:''
  })

  return (
    <div className='mx-2 p-5 rounded-lg shadow-md border border-slate-100'>
      <h2 className='text-xl font-medium mb-5'>Contact</h2>
      <input 
        className='p-2 border-b border-black w-full focus:outline-none mb-3'
        placeholder='@Email'
        />
      <input 
        className='p-2 border-b border-black w-full focus:outline-none mb-3'
        placeholder='@Phone'
        /> 
      <h2 className='text-xl font-medium my-5'>Shipping Details</h2>
      <div className='flex w-full mb-3'>
          <input 
            className='p-2 border-b border-black w-1/2 focus:outline-none mr-3'
            placeholder='@First Name'
          />
          <input 
            className='p-2 border-b border-black w-1/2 focus:outline-none'
            placeholder='@Last Name'
          /> 
      </div>
      <input 
        className='p-2 border-b border-black w-full focus:outline-none mb-3'
        placeholder='@Address - Apartment/House No.'
        /> 
        <input 
        className='p-2 border-b border-black w-full focus:outline-none mb-3'
        placeholder='@Address - Street/Locality'
        /> 
        <div className='flex w-full'>
          <input 
            className='p-2 border-b border-black w-1/3 focus:outline-none mb-1 mr-3'
            placeholder='@Address - City'
          />
          <input 
            className='p-2 border-b border-black w-1/3 focus:outline-none mb-1 mr-3'
            placeholder='@Address - State'
          /> 
          <input 
            className='p-2 border-b border-black w-1/3 focus:outline-none mb-1'
            placeholder='@Address - Pin'
          /> 
        </div>
        <button className='mt-10 mb-5 p-3 border border-black w-full text-lg font-light'>Proceed to checkout</button>
    </div>
  )
}

export default DeliveryDetailsForm