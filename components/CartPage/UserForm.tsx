"use client"


import React from 'react'
import {useForm} from 'react-hook-form'

import { useRecoilState } from 'recoil'
import { userDetailsState,UserDetails } from '../../store/atoms/userDetailsState'

import { useRouter } from 'next/navigation'

interface InputProps {
  value: string;
  readOnly: boolean;
}

const UserForm:React.FC<InputProps> = ({value,readOnly}) => {

    const [userDetails,setUserDetails]= useRecoilState<UserDetails>(userDetailsState)

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
        reset,
        getValues
    } = useForm<UserDetails>({ defaultValues: 
        { 
            email: userDetails.email,
            phone:userDetails.phone,
            firstName:userDetails.firstName,
            lastName:userDetails.lastName, 
            apt:userDetails.apt,
            locality:userDetails.locality,
            city:userDetails.city,
            state:userDetails.state,
            pin:userDetails.pin
        } 
    })

    const onSubmit = async(data:UserDetails) =>{
        console.log(data)
        setUserDetails(data)
        console.log(userDetails)
        await new Promise((resolve)=>setTimeout(resolve,1000))
        router.push('/CheckoutPage')
        // reset()
    }

    const emailValidationRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const validatePhone = (value:string) => {
        const isValidPhone = /^\d{10}$/.test(value);
        if(!isValidPhone){
            reset({phone:''})
            return 'Phone must be 10 digits'
        }
        console.log(isValidPhone)
        return isValidPhone
    };

    const validatePin = (value:string) =>{
        const isValidPin = /^\d{6}$/.test(value)
        if(!isValidPin){
            reset({pin:''})
            return 'Pin must be 6 digits'
        }
        return isValidPin
    }
    
  return (
    <div className='text-lg font-light px-5 py-2'>
        <form 
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className='text-3xl text-black font-light my-3'>Contact</h1>

            <input
                className={`p-1 border-b border-black w-full focus:outline-none mb-3 ${errors.email ? 'placeholder:text-red-500 placeholder:text-md border-red-500 ':'placeholder:text-gray-300-300'}`}
                placeholder={`${ errors.email ? errors.email.message : 'Email' }`}
                {...register('email',{
                    required:"Email is Required",
                    validate: (value) => emailValidationRegex.test(value) === true || "Enter valid Email",
                })}
                readOnly={readOnly}
            />
            
             <input
                className={`p-1 border-b border-black w-full focus:outline-none mb-3 ${errors.email ? 'placeholder:text-red-500 placeholder:text-md border-red-500 ':'placeholder:text-gray-300-300'}`}
                placeholder={`${ errors.phone ? errors.phone.message : 'Phone' }`}
                {...register('phone',{
                    required:"Phone is required",
                    validate: validatePhone,
                })}
                readOnly={readOnly}            
            />

            <h1 className='text-3xl text-black font-light my-3'>Shipping Details</h1>
            <div className='grid lg:flex w-full'>
                <input 
                    className={`p-1 border-b border-black w-full lg:w-1/2 focus:outline-none mr-3 mb-3 ${errors.firstName ? 'placeholder:text-red-500 placeholder:text-md border-red-500 ':'placeholder:text-gray-300-300'} `}
                    placeholder={`${errors.firstName?errors.firstName.message:'First name'}`}
                    {...register('firstName',{
                        required:'First name required'
                    })}               
                    readOnly={readOnly}            
                />
                <input 
                    className={`p-1 border-b border-black w-full lg:w-1/2 focus:outline-none mb-3 ${errors.lastName ? 'placeholder:text-red-500 placeholder:text-md border-red-500 ':'placeholder:text-gray-300-300'} `}
                    placeholder={`${errors.lastName?errors.lastName.message:'Last name'}`}
                    {...register('lastName',{
                        required:'Last name required'
                    })}  
                    readOnly={readOnly}            
                /> 
            </div>

            <input 
                className={`p-1 border-b border-black w-full focus:outline-none mb-3 ${errors.apt ? 'placeholder:text-red-500 placeholder:text-md border-red-500 ':'placeholder:text-gray-300-300'} `}
                placeholder={`${errors.apt?errors.apt.message:'Address - Apartment/House No.'}`}
                {...register('apt',{
                    required:'Apartment/House No. is required',
                })}
                readOnly={readOnly}            
            /> 

            <input 
                className={`p-1 border-b border-black w-full focus:outline-none mb-3`}
                placeholder='Address - Street/Locality'
                {...register('locality')}
                readOnly={readOnly}            
            />

            <div className='grid lg:flex w-full'>
                <input 
                    className={`p-1 border-b border-black w-full lg:w-1/3 focus:outline-none mb-3 mr-3 ${errors.state ? 'placeholder:text-red-500 placeholder:text-md border-red-500 ':'placeholder:text-gray-300-300'}`}
                    placeholder={`${errors.state?'Enter State':'Enter State'}`}
                    {...register('state',{
                        required:'Enter State'
                    })}
                    readOnly={readOnly}            
                />
                <input 
                    className={`p-1 border-b border-black w-full lg:w-1/3 focus:outline-none mb-3 mr-3 ${errors.city ? 'placeholder:text-red-500 placeholder:text-md border-red-500 ':'placeholder:text-gray-300-300'}`}
                    placeholder={`${errors.state?'Enter City':'Enter City'}`}
                    {...register('city',{
                        required:'Enter City'
                    })}
                    readOnly={readOnly}            
                /> 
                <input 
                    className={`p-1 border-b border-black w-full lg:w-1/3 focus:outline-none mb-3 ${errors.pin ? 'placeholder:text-red-500 placeholder:text-md border-red-500 ':'placeholder:text-gray-300-300'}`}
                    placeholder={`${errors.state?'Enter Pin':' Pin Code'}`}
                    {...register('pin',{
                        required:'Enter Pin',
                        validate:validatePin
                    })}
                    readOnly={readOnly}            
                /> 
            </div>

            
            <button
                disabled={isSubmitting}
                className={`mt-10 mb-5 p-3 border border-black w-full text-lg font-light ${readOnly?'hidden':''}`}
                type='submit'
            >
            Proceed to checkout    
            </button>
        </form>
    </div>
  )
}

export default UserForm