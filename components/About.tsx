import React from 'react'

const About = () => {
  return (
    <section>
        <div className='w-full gird lg:flex xs:px-10 sm:px-20 py-10'>
            <div className='grid md:flex md:justify-center lg:grid w-full lg:w-2/6 my-5 text-center lg:py-10'>
                <h1 className='text-[165px] sm:text-[180px] md:text-[120px] leading-[160px] lg:text-[135px] xl:text-[170px] lg:leading-[150px] tracking-widest font-thin'>Who</h1>
                <h1 className='text-[165px] sm:text-[180px] md:text-[120px] leading-[160px] lg:text-[135px] xl:text-[170px] lg:leading-[150px] tracking-widest font-thin'>We</h1>
                <h1 className='text-[165px] sm:text-[180px] md:text-[120px] leading-[160px] lg:text-[135px] xl:text-[170px] lg:leading-[150px] tracking-widest font-thin'>Are?</h1>
            </div>
            <div className='w-full lg:w-4/6'>
            <div className='w-full justify-center p-8 lg:px-4 text-left'>
                <h1 className='text-[38px] md:my-2 tracking-widest font-light'>ABOUT THE BRAND</h1>
                <h3 className='text-[19px] sm:my-3 font-light leading-8'>
                   <span>RheaVania is a newly launched luxury clothing label that believes in dressing for your body. </span><br/> 
                   <span>Our designs are made for all body types, ensuring that no matter what shape or size, you're going to look stunning!</span><br/>
                   <span>At RheaVania our emphasis lies in elevating female silhouette. </span><br/> 
                   <span>Our aesthetic goes beyond just sharp or beautiful.</span><br/>
                   <span>Versatility and comfort is something we swear by!</span><br/>
                   <span>Creating looks that don't just 'work' but TREND!</span><br/>
                   <span>Our designs are inspired by some of the most fierce, leading and authoritative women and their stories across the globe. We hope to inspire a few more in the process.</span>
                </h3>
            </div>
            <div className='w-full justify-end px-8 lg:px-4 text-left'>
                <h1 className='text-[38px] md:mb-1 tracking-wider font-light mt-3'>ABOUT THE DESIGNER</h1>
                <h3 className='text-[19px] font-light'>The creator of this passion project is Rhea Vania De Quadros. She hails from Goa, India. Currently based in Mumbai, Rhea has worked for various brands, celebrities and assisted the top stylist in the industry!</h3>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About