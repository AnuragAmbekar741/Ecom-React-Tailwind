import React from 'react'

const AboutUs:React.FC = () => {
  return (
    <section className='md:flex w-screen h-[77vh] px-16 '>
        <div className='grid justify-center p-5 my-10 w-full text-center md:w-1/2'>
                <h1 className='text-[40vw] leading-[135px] xs:text-[35vw] xs:leading-[170px] sm:-ml-24 sm:text-[30vw] sm:leading-[165px]  md:text-[19.5vw] lg:text-[15.75vw] font-thin  md:leading-[40px]'>Who</h1>
                <h1 className='text-[40vw] leading-[135px] xs:text-[35vw] xs:leading-[170px] sm:-ml-40 sm:text-[30vw] sm:leading-[165px]  md:text-[19.5vw] lg:text-[15.75vw] font-thin  md:leading-[40px] -ml-20'>We</h1>
                <h1 className='text-[40vw] leading-[135px] xs:text-[35vw] xs:leading-[170px] sm:-ml-24 sm:text-[30vw] sm:leading-[165px]  md:text-[19.5vw] lg:text-[15.75vw] font-thin  md:leading-[40px]'>Are?</h1>
            </div>
            <div className='w-full grid justify-center text-left text-xl md:w-1/2 pb-28 md:text-[2.15vw] lg:text-[24px] font-light lg:pr-24'>
                <h1 className='text-3xl font-light'>ABOUT THE BRAND</h1>
                <h3 className='text-[18.75px] font-light px-1'>
                   RheaVania is a newly launched luxury clothing label that believes in dressing for your body. <br/>Our designs are made for all body types, ensuring that no matter what shape or size, you're going to look stunning!<br/>
                   At RheaVania our emphasis lies in elevating female silhouette. Our aesthetic goes beyond just sharp or beautiful.<br/>
                   Versatility and comfort is something we swear by!<br/>
                   <span className='font-medium'>Creating looks that don't just 'work' but
                   TREND!</span><br/>
                   Our designs are inspired by some of the most fierce, leading and authoritative women and their stories across the globe.
                   We hope to inspire a few more in the process.
                </h3>
                <h1 className='text-3xl font-light'>ABOUT THE DESIGNER</h1>
                <h3 className='text-[18.75px] px-1'>The creator of this passion project is Rhea Vania De Quadros. She hails from Goa, India. Currently based in Mumbai, Rhea has worked for various brands, celebrities and assisted the top stylist in the industry!</h3>
            </div>
    </section>
  )
}

export default AboutUs