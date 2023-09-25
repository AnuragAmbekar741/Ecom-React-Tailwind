"use client"

import React,{useState} from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';

const OrderProcessing = () => {
    
const [hide,setHide] = useState<boolean>(true)

  return (
    <div className='w-1/2 text-left shadow-md border p-3 border-slate-100 rounded-lg'>
        <div className='flex justify-between'>
            <h3 className='text-xl font-normal'>Order Processing</h3>
            <AiOutlinePlus 
                className={`text-2xl text-black m-1 ${hide?'block':'hidden'}`} 
                onClick={()=>setHide(!hide)}
            />
            <AiOutlineMinus
                className={`text-2xl text-black m-1 ${!hide?'block':'hidden'} `}
                onClick={()=>setHide(!hide)}
            />
        </div>
        <div className={`${hide?'hidden':''} p-1 text-md font-light`}>
            <p>Once your order has been confirmed our team will begin production.<br/> All our pieces are made to order and made to measure meaning that we will construct a piece entirely from scratch to fit your body perfectly.<br/> This process will  take 7 to 10 working days, after which we will wrap and ship it to your given postal address.</p>
        </div>
    </div>
  )
}

export default OrderProcessing