"use client"

import React,{useState} from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';

const ReturnsExchanges = () => {
    
const [hide,setHide] = useState<boolean>(true)

  return (
    <div className='w-1/2 text-left shadow-md border p-3 border-slate-100 rounded-lg'>
        <div className='flex justify-between'>
            <h3 className='text-xl font-normal'>Returns & Exchanges</h3>
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
            <p>Since we make each piece to order we don’t offer returns or exchanges.<br/> However if you feel like the fit doesn’t meet your needs we can offer you assistance with alterations for which you can contact us at <span className='text-md font-medium'>help@rheavania.com</span></p>
        </div>
    </div>
  )
}

export default ReturnsExchanges