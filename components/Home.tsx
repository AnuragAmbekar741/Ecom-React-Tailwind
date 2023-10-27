"use client"
import React from "react";



const src =
  "https://res.cloudinary.com/dmprrczfn/video/upload/v1696447239/vdcsi03nc5zymbnlc2kw.mp4";

const srcMobile = "https://res.cloudinary.com/dmprrczfn/video/upload/v1698135799/kuqwr0wohlykwuk43qwv.mp4"

const Video = () => {
  return (
    <video loop autoPlay controls={false} muted width="100%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

const VideoMobile = () => {
  return (
    <video loop autoPlay controls={false} muted width="100%">
      <source src={srcMobile} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};



const Pov:React.FC = () => {
  return (
    <section>
      <div className="hidden md:flex">
        <Video/>
      </div>
      <div className="block md:hidden">
          <VideoMobile/>
      </div>
    </section>
  )
}

export default Pov
