import React from 'react'

interface PropsToPass {
    title : string
}

const SectionDivider:React.FC<PropsToPass>= (props) => {
  return (
    <section className='w-full text-center py-[3.5rem]'>
        <p className='text-[52px] md:text-[42px] font-extralight text-black'>{props.title}</p>
    </section>
  )
}

export default SectionDivider