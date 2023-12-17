import React from 'react'

interface PropsToPass {
    title : string
}

const SectionDivider:React.FC<PropsToPass>= (props) => {
  return (
    <section className='w-full text-center pt-12 pb-2'>
        <p className='text-[75px] font-thin text-black'>{props.title}</p>
    </section>
  )
}

export default SectionDivider