import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="flex pt-10 overflow-hidden relative items-center backdrop-blur-sm bg-[url('/cover.png')] bg-opacity-75 justify-between w-full ">
      <div className=" absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>
      <div className=" z-50 m-auto mt-6 block w-[95%] items-center  justify-between md:flex md:flex-row lg:w-[90%]  ">
      <div className="h-fit w-full pt-5 md:w-1/2 md:py-10 ">
        <h1 className="text-4xl xl:text-5xl font-extrabold leading-10 tracking-wider">Governor Sindh</h1>
        <h2 className="text-3xl xl:text-4xl tracking-wider">Kamran Khan Tessori</h2>
        <h3 className="text-3xl xl:text-4xl font-extrabold tracking-wider my-6">Certified Cloud Applied Generative AI Engineer (GenEng)</h3>
        <p className="text-2xl font-extrabold">Earn up to $5,000 / month</p>
        <p className="text-2xl font-extrabold tracking-wider mb-4">Now admissions are open in Hyderabad</p>
        <div className="flex justify-between flex-wrap ">
            <button className="py-2 px-4 bg-[#1f4c83] text-white font-bold rounded">Apply now</button>
            <div>
                <h1 className="text-2xl font-extrabold">562,143</h1>
                <p>Accepted Applications</p>
            </div>
        </div>
      </div>
      <div className=" top-0 md:w-1/2 relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end md:right-[-400px]">
        <Image 
        src="/cover-photo.png"
        alt="governor sindh kamran Tissori"
        width={900}
        height={900}
        className=" md:ml-40 h-auto min-w-[900px] lg:w-[600px]"
        />
      </div>
      </div>
    </div>
  );
}

export default Hero;
