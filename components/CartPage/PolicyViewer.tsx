import React,{useState} from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';

// interface policyProps {
//     props{
//         policy:string,
//     }
// }

const PolicyViewer:React.FC<{policy:string,policyName:string}> = ({policy,policyName}) => {
  
    const [hide,setHide] = useState<boolean>(true)

  return (
    <div className='w-full text-left shadow-md border p-3 border-slate-100 rounded-lg my-5'>
        <div className='flex justify-between'>
            <h3 className='text-xl font-normal'>{policyName}</h3>
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
            <p>{policy}</p>
        </div>
    </div>
  )
}

export default PolicyViewer