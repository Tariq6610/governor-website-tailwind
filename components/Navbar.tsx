"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [showCources, setShowCources] = useState(false);
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="flex h-20 z-50 sticky top-0 items-center justify-between px-4 md:px-12 lg:justify-around text-white bg-[#1f4c83]">
        <div className="mt-14 relative w-[60px] md:w-[90px] h-[60px] md:h-[90px]">
          <Image
           fill
            src="/logo.png"
            alt="logo"
            sizes="(max-width: 768px) 60px, 90px"
            className="mt-5  object-contain"
          />
        </div>
        <div className=" md:text-xl font-bold text-[#b9d8f3]">
          <h1 className="hidden lg:block">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <h1 className="block lg:hidden">Tuition Free Program</h1>
        </div>
        <div>
          <div onClick={() => setShowMenu(!showMenu)} className="block md:hidden text-2xl"><CiMenuBurger /></div>
          <ul className="hidden md:flex justify-between items-center w-[300px] lg:w-[400px]">
          <Link href={'/'}><li>Home</li></Link>
           <Link href={'/apply'}><li>Apply</li></Link>
           <Link href={'/jobs'}><li>Jobs</li></Link>
           <Link href={'/result'}><li>Result</li></Link>
            <li>
              <div className="relative">
                <button onClick={() => setShowCources(!showCources)}>Cources</button>
                <div
                  className={`${
                    showCources ? "block" : "hidden"
                  } absolute  top-8 right-2 p-2 text-black w-[300px] bg-white shadow-2xl`}
                >
                  <h1 className="text-xl font-bold mb-3">Core Cources </h1>
                  <ul className="mb-4">
                    <li className="mb-2 hover:underline">
                      <Link href="#">Programming Fundamentals</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="#">Web2 using NextJs</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="#">Earn as You Learn</Link>
                    </li>
                  </ul>
                  <h1 className="text-xl font-bold mb-3">advanced Cources</h1>
                  <ul>
                    <li className="mb-2 hover:underline">
                      <Link href="#">Web 3 and Metaverse</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="#">Cloud-Native Computing</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="#">
                        Artificial Intelligence (AI) and Deep Learning
                      </Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="#">Ambient Computing and IoT</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="#">Genomics and Bioinformatics</Link>
                    </li>
                    <li className="mb-2 hover:underline">
                      <Link href="#">
                        Network Programmability and Automation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
     
     
      {/* Mobile screen Navbar */}

      <div className={`${showMenu ? "flex" : "hidden"} flex-col absolute w-full -z-20 top-20 left-0 items-center text-white bg-[#1f4c83]`}>
        <div onClick={() => setShowMenu(!showMenu)} className="mb-6 mt-4 hover:bg-blue-300 hover:text-black p-3">
          <Link href="/"><p>Home</p></Link>
        </div>
        <hr />
        <div onClick={() => setShowMenu(!showMenu)} className="mb-6 mt-4  hover:bg-blue-300 hover:text-black p-3">
          <Link href="/apply">Apply</Link>
        </div>
        <hr />
        <div onClick={() => setShowMenu(!showMenu)} className="mb-6 mt-4  hover:bg-blue-300 hover:text-black p-3">
          <Link href="/jobs">Jobs</Link>
        </div>
        <hr />
        <div onClick={() => setShowMenu(!showMenu)} className="mb-6 mt-4  hover:bg-blue-300 hover:text-black p-3">
          <Link href="/result">Result</Link>
        </div>
        <hr />
        <div onClick={() => setShowCources(!showCources)} className="mb-6 mt-4  hover:bg-blue-300 hover:text-black p-3">
          <Link href="#">Cources</Link>
        </div>
        <div className={`${showCources ? "block" : "hidden"} mb-6 mt-4  hover:bg-blue-300 hover:text-black p-3`}>
          <h1 className="text-xl font-bold mb-3">Core Cources </h1>
          <ul className="mb-4">
            <li className="mb-2 hover:underline">
              <Link href="#">Programming Fundamentals</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Web2 using NextJs</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Earn as You Learn</Link>
            </li>
          </ul>
          <h1 className="text-xl font-bold mb-3">advanced Cources</h1>
          <ul>
            <li className="mb-2 hover:underline">
              <Link href="#">Web 3 and Metaverse</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Cloud-Native Computing</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">
                Artificial Intelligence (AI) and Deep Learning
              </Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Ambient Computing and IoT</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Genomics and Bioinformatics</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Network Programmability and Automation</Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default Navbar;
