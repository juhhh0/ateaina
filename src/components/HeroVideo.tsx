import Image from "next/image";
import React from "react";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="max-w-lg w-full h-16 md:h-28 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src="/logo.svg" alt="Vercel Logo" layout="fill" priority />
      </div>
      <video
        src="video.mp4"
        className="absolute w-screen h-screen object-cover brightness-[0.3]"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}
