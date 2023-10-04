"use client"
import React from "react";
import Image from 'next/image'



const src =
  "https://res.cloudinary.com/dmprrczfn/video/upload/v1696447239/vdcsi03nc5zymbnlc2kw.mp4";

const Video = () => {
  return (
    <video loop autoPlay controls={false} muted width="100%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

const Pov:React.FC = () => {
  return (
    <section>
      <Video/>
        {/* <Image
            src="/assets/pov.png"
            alt='pov'
            width={1500}
            height={1500}
            className='w-screen h-screen'
        />  */}
    </section>
  )
}

export default Pov
