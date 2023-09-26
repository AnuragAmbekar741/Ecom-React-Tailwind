import React from 'react'

const AboutUs:React.FC = () => {
  return (
    <section className='md:flex justify-between w-screen px-12'>
        <div className='grid justify-center p-5  mt-0 mb-32 mr-3  text-left md:w-1/2 lg:w-1/5'>
                <h1 className='text-[100px] leading-[-10px] font-thin'>Who</h1>
                <h1 className='text-[100px] leading-[-10px] font-thin'>We</h1>
                <h1 className='text-[100px] leading-[-10px] font-thin'>Are?</h1>
            </div>
            <div className='w-3/5 grid justify-center text-left text-xl md:w-1/2 pb-28 md:text-[2.15vw] lg:text-[24px]  '>
                <h1 className='text-[38px] mt-12 mb-3 tracking-widest font-extralight'>ABOUT THE BRAND</h1>
                <h3 className='text-[19px] font-light tracking-wide p-1 leading-8'>
                   RheaVania is a newly launched luxury clothing label that believes in dressing for your body. Our designs are made for all body types, ensuring that no matter what shape or size, you're going to look stunning!
                   At RheaVania our emphasis lies in elevating female silhouette. Our aesthetic goes beyond just sharp or beautiful.<br/>
                   Versatility and comfort is something we swear by!<br/>
                   <span className='font-medium'>Creating looks that don't just 'work' but
                   TREND!</span><br/>
                   Our designs are inspired by some of the most fierce, leading and authoritative women and their stories across the globe.
                   We hope to inspire a few more in the process.
                </h3>
      
            </div>
            <div className='w-1/5 grid justify-center text-left text-xl md:w-1/2 pb-28 md:text-[2.15vw] lg:text-[24px] ml-12 font-light'>
                <h1 className='text-[32px] mb-1 tracking-wide font-extralight mt-80'>ABOUT THE DESIGNER</h1>
                <h3 className='text-[18.75px] px-1'>The creator of this passion project is Rhea Vania De Quadros. She hails from Goa, India. Currently based in Mumbai, Rhea has worked for various brands, celebrities and assisted the top stylist in the industry!</h3>
            </div>
    </section>
  )
}

export default AboutUs