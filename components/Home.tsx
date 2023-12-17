"use client"

import { videoSrcDesktop,videoSrcMobile } from "@/lib/data";

const Video = () => {
  return (
    <video loop autoPlay controls={false} muted width="100%">
      <source src={videoSrcDesktop} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

const VideoMobile = () => {
  return (
    <video loop autoPlay controls={false} muted width="100%">
      <source src={videoSrcMobile} type="video/mp4" />
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
