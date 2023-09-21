import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { userDetailsState } from '../store/atoms/userDetailsState'

const DeliveryDetailsForm:React.FC = () => {

  interface UserDetails {
    firstName:string,
    lastName:string,
    email : string,
    phone : string
    apt : string,
    locality:string,
    city:string,
    state:string,
    pin:string
  } 

  const [userDetails,setUserDetails]= useRecoilState(userDetailsState)

  const [details,setDetails]= useState<UserDetails>({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    apt:'',
    locality:'',
    city:'',
    state:'',
    pin:''
  })

  const [formStatus,setFormStatus] = useState<boolean>(false)

  const [validation,setValidation] = useState({
    emailVal:false,
    phoneVal:false,
    pinVal:false
  })

  const formValidation = () =>{
    let result
    setFormStatus(true)
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(details.email)){
      setValidation({...validation,emailVal:true})
    }
    if(details.phone.length === 10){
      setValidation({...validation,phoneVal:true})
    }
    if(details.pin.length === 6){
      setValidation({...validation,pinVal:true})
    } 
    if(!validation.emailVal) setDetails({...details,email:''})
    if(!validation.phoneVal) setDetails({...details,phone:''})
    if(!validation.pinVal) setDetails({...details,pin:''})

  }

  const handleClick = () =>{
    
  }

  return (
    <div className='mx-2 p-5 rounded-lg shadow-md border border-slate-100'>
      <h2 className='text-xl font-medium mb-5'>Contact</h2>
      <input 
        className={`p-2 border-b border-black w-full focus:outline-none mb-3 ${formStatus && details.email=='' || formStatus && !validation.emailVal ?'border-red-500 placeholder:text-red-500':''}`}
        placeholder={`${formStatus && details.email==''?'Please enter valid email':'@Email' }`}
        value={details.email}
        onChange={(e)=>setDetails({...details,email:e.target.value})}
        />
      <input 
        className={`p-2 border-b border-black w-full focus:outline-none mb-3 ${formStatus && details.phone=='' || formStatus && !validation.phoneVal ?'border-red-500 placeholder:text-red-500':''}`}
        placeholder={`${formStatus && details.email==''?'Please enter valid phone number':'@Phone' }`}
        value={details.phone}
        onChange={(e)=>setDetails({...details,phone:e.target.value})}
        /> 
      <h2 className='text-xl font-medium my-5'>Shipping Details</h2>
      <div className='flex w-full mb-3'>
          <input 
            className={`p-2 border-b border-black w-1/2 focus:outline-none mr-3 ${formStatus && details.firstName==''?'border-red-500 placeholder:text-red-500':''} `}
            placeholder={`${formStatus && details.firstName==''?'Please enter first name':'@First Name' }`}
            value={details.firstName}
            onChange={(e)=>setDetails({...details,firstName:e.target.value})}
          />
          <input 
            className={`p-2 border-b border-black w-1/2 focus:outline-none ${formStatus && details.lastName==''?'border-red-500 placeholder:text-red-500':''}`}
            placeholder='@Last Name'
            value={details.lastName}
            onChange={(e)=>setDetails({...details,lastName:e.target.value})}
          /> 
      </div>
      <input 
        className={`p-2 border-b border-black w-full focus:outline-none mb-3 ${formStatus && details.apt==''?'border-red-500 placeholder:text-red-500':''}`}
        placeholder='@Address - Apartment/House No.'
        value={details.apt}
        onChange={(e)=>setDetails({...details,apt:e.target.value})}
        /> 
        <input 
        className={`p-2 border-b border-black w-full focus:outline-none mb-3 ${formStatus && details.locality==''?'border-red-500 placeholder:text-red-500':''}`}
        placeholder='@Address - Street/Locality'
        value={details.locality}
        onChange={(e)=>setDetails({...details,locality:e.target.value})}
        /> 
        <div className='flex w-full'>
          <input 
            className={`p-2 border-b border-black w-1/3 focus:outline-none mb-1 mr-3 ${formStatus && details.city==''?'border-red-500 placeholder:text-red-500':''}`}
            placeholder='@Address - City'
            value={details.city}
            onChange={(e)=>setDetails({...details,city:e.target.value})}
          />
          <input 
            className={`p-2 border-b border-black w-1/3 focus:outline-none mb-1 mr-3 ${formStatus && details.state==''?'border-red-500 placeholder:text-red-500':''}`}
            placeholder='@Address - State'
            value={details.state}
            onChange={(e)=>setDetails({...details,state:e.target.value})}
          /> 
          <input 
            className={`p-2 border-b border-black w-1/3 focus:outline-none mb-1 ${formStatus && details.pin=='' || formStatus && !validation.pinVal ?'border-red-500 placeholder:text-red-500':''}`}
            placeholder='@Address - Pin'
            value={details.pin}
            onChange={(e)=>setDetails({...details,pin:e.target.value})}
          /> 
        </div>
        <button 
          className='mt-10 mb-5 p-3 border border-black w-full text-lg font-light'
          onClick = {handleClick}
        >
        Proceed to checkout
        </button>
    </div>
  )
}

export default DeliveryDetailsForm