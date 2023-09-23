import React, { useEffect, useState } from 'react'
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

  const [userDetails,setUserDetails]= useRecoilState<UserDetails>(userDetailsState)

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

  const [clickStatus,setClickStatus] = useState<boolean>(false)


  const [validation,setValidation] = useState({
    emailVal:false,
    phoneVal:false,
    pinVal:false
  })




  const formValidation = () =>{
    setValidation({emailVal:false,phoneVal:false,pinVal:false})
    if(details.email !== ''){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      console.log("email val is ",emailPattern.test(details.email))
      if(emailPattern.test(details.email)==true){ 
        setValidation({...validation,emailVal:true})
        console.log('email validated',validation)
      }
    }
    if(details.phone.split('').length === 10) setValidation({...validation,phoneVal:true})
    if(details.pin.split('').length === 6) setValidation({...validation,pinVal:true})
    if(details.firstName!=='' && details.lastName!=='' && details.apt!=='' && details.locality!=='' && details.city!=='' && details.state!==''){
      if(validation.emailVal && validation.phoneVal && validation.pinVal){
        console.log('Validation : ',validation)
        return true
      } 
    } 
    return false
  }

  // useEffect(()=>{
  //   console.log('effect')
  //   const formValidationRes = formValidation()
  //   if(formValidationRes) console.log('valid form')
  //   if(!formValidationRes) {
  //     setClickStatus(false)
  //   }

  // },[clickStatus])

  const handleClick = () =>{
    setClickStatus(true)
    setFormStatus(true)
const formValidationRes = formValidation()
    if(formValidationRes) console.log('valid form')
    if(!formValidationRes) {
      setClickStatus(false)
    }    
  }

  return (
    <div className='mx-2 p-5 rounded-lg shadow-md border border-slate-100'>
      <h2 className='text-xl font-medium mb-5'>Contact</h2>
      <input 
        className={`p-2 border-b border-black w-full focus:outline-none mb-3 ${formStatus && details.email=='' || formStatus && !validation.emailVal?'border-red-500 placeholder:text-red-500':'border-black'}`}
        placeholder={`${formStatus && details.email==''?'Please enter valid email':'@Email' }`}
        value={details.email}
        onChange={(e)=>setDetails({...details,email:e.target.value})}
        />
      <input 
        className={`p-2 border-b border-black w-full focus:outline-none mb-3 ${formStatus && details.phone=='' || formStatus && !validation.phoneVal ?'border-red-500 placeholder:text-red-500':''}`}
        placeholder={`${formStatus && details.phone==''?'Please enter valid phone number':'@Phone' }`}
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
            placeholder={`${formStatus && details.pin =='' || formStatus && !validation.pinVal ? 'Please enter valid pin' : '@Pin' }`}
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