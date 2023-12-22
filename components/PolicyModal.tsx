"use client"

import { RxCross2 } from 'react-icons/rx';
import { TermsAndConditionsType } from '@/lib/data';

type PolicyModalProps = {
  policy?: string;
  policyName?: string;
  policyObj?: TermsAndConditionsType
  hide: boolean
  setHide: (val: boolean) => void

}


const PolicyModal: React.FC<PolicyModalProps> = ({
  policy, policyName, hide, setHide, policyObj
}) => {

  return (
    <>
      {
        policy && policyName
          ?
          (
            <div
              className={`fixed top-0 w-full h-full bg-[#00000099] ${hide ? 'block' : 'hidden'}`}
              onClick={() => setHide(false)}
            >
              <div className={`grid mx-auto top-20 right-3 left-3 md:top-40 md:w-1/2 p-7 absolute bg-white text-black ${policyName === 'Returns & Exchange' || policyName === "Terms & Conditions" ? 'h-[600px] overflow-y-auto' : ''} `}>
                <RxCross2
                  className='text-xl absolute right-3 top-3'
                  onClick={() => setHide(false)}
                />
                <h3 className='text-2xl font-light text-left my-2'>{policyName}</h3>
                <p className='text-md font-light text-left mb-2'>{policy}</p>
              </div>
            </div>
          )
          :
          (
            // <div>
            //   {Object.keys(policyObj).map((key) => (
            //     <div key={key}>
            //       <h3>{key}</h3>
            //       <p>{policyObj[key]}</p>
            //     </div>
            //   ))}
            // </div>
            <div></div>

          )
      }
    </>
  )
}

export default PolicyModal