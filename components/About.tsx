import React from 'react'

const About = () => {
  return (
    <section>
        <div className='w-full gird md:flex px-20 py-7'>
            <div className='grid w-full md:w-2/6 my-20 md:justify-start ml-10 md:text-left'>
                <h1 className='text-[150px] leading-[150px] lg:text-[140px] lg:leading-[100px] tracking-widest font-thin'>Who</h1>
                <h1 className='text-[150px] leading-[150px] lg:text-[140px] lg:leading-[100px] tracking-widest font-thin'>We</h1>
                <h1 className='text-[150px] leading-[150px] lg:text-[140px] lg:leading-[100px] tracking-widest font-thin'>Are?</h1>
            </div>
            <div className='w-4/6'>
            <div className='w-full justify-center md:text-left'>
                <h1 className='text-[38px] md:my-2 tracking-widest font-light'>ABOUT THE BRAND</h1>
                <h3 className='text-[19px] my-3 font-light leading-8'>
                   <span className='hover:font-medium transition delay-100 scale-125' >RheaVania is a newly launched luxury clothing label that believes in dressing for your body. </span><br/> 
                   <span className='hover:font-medium transition delay-100 scale-125' >Our designs are made for all body types, ensuring that no matter what shape or size, you're going to look stunning!</span><br/>
                   <span className='hover:font-medium transition delay-100 scale-125' >At RheaVania our emphasis lies in elevating female silhouette. </span><br/> 
                   <span className='py-5 hover:font-medium transition delay-100 scale-125' >Our aesthetic goes beyond just sharp or beautiful.</span><br/>
                   <span className='py-5 hover:font-medium transition delay-100 scale-125' >Versatility and comfort is something we swear by!</span><br/>
                   <span   className='my-7 hover:font-medium transition delay-100 scale-125'>Creating looks that don't just 'work' but
                   TREND!</span><br/>
                   <span className='hover:font-medium transition delay-100 scale-125'>Our designs are inspired by some of the most fierce, leading and authoritative women and their stories across the globe.
                   We hope to inspire a few more in the process.</span>
                </h3>
            </div>
            <div className='w-full justify-end text-left md:text-left'>
                <h1 className='text-[38px] md:mb-1 tracking-wider font-light mt-3'>ABOUT THE DESIGNER</h1>
                <h3 className='text-[19px] font-light'>The creator of this passion project is Rhea Vania De Quadros. She hails from Goa, India. Currently based in Mumbai, Rhea has worked for various brands, celebrities and assisted the top stylist in the industry!</h3>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About