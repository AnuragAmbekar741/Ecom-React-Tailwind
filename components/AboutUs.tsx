import React from 'react'

const AboutUs:React.FC = () => {
  return (
    <section className='md:flex w-screen h-[77vh] px-16 '>
        <div className='grid justify-center p-5 my-10 w-full text-center md:w-1/2'>
                <h1 className='text-[40vw] leading-[135px] xs:text-[35vw] xs:leading-[170px] sm:-ml-24 sm:text-[30vw] sm:leading-[165px]  md:text-[19.5vw] lg:text-[15.75vw] font-thin  md:leading-[40px]'>Who</h1>
                <h1 className='text-[40vw] leading-[135px] xs:text-[35vw] xs:leading-[170px] sm:-ml-40 sm:text-[30vw] sm:leading-[165px]  md:text-[19.5vw] lg:text-[15.75vw] font-thin  md:leading-[40px] -ml-20'>We</h1>
                <h1 className='text-[40vw] leading-[135px] xs:text-[35vw] xs:leading-[170px] sm:-ml-24 sm:text-[30vw] sm:leading-[165px]  md:text-[19.5vw] lg:text-[15.75vw] font-thin  md:leading-[40px]'>Are?</h1>
            </div>
            <div className='w-full grid justify-center text-left text-xl md:w-1/2 pb-16 md:text-[2.15vw] lg:text-[24px] font-light lg:pt-7 lg:pr-32'>
                <h1 className=''>
                    We are a brand that recons an eternal classic aesthetic.<br />
                    We love what we create!<br />
                    Right from western wear that's dressy to formal.<br />
                </h1>

                <h1 className='my-7 md:my-0'>
                    Our designs are made for all body types,<br />
                    ensuring that no matter what shape or size,<br />
                    you’re going to look stunning.<br />
                    Looks that don't just 'work' but TREND!<br />
                </h1>

                <h1 className=''>
                    We work around luxurious fabric, and your comfort!<br />
                    We don't believe in making clothes that may fall apart in quickly.<br />
                    And versatility is something we swear by.<br />
                </h1>
            </div>
    </section>
  )
}

export default AboutUs