import Image from 'next/image'
import React from 'react'

const Pov:React.FC = () => {
  return (
    <section>
        <Image
            src="/assets/pov.png"
            alt='pov'
            width={1500}
            height={1500}
            className='w-screen h-screen'
        /> 
    </section>
  )
}

export default Pov
