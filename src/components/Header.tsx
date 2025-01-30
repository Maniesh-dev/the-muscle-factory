"use client"

import Navbar from "./Navbar"
import assets from "../../public/assets/assets.js"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from "./Sidebar"

interface SidebarProps {
  sidebarActive: boolean
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Header =  () => {
  const [headerActive, setHeaderActive] = useState(false)
  const [sidebarActive, setSidebarActive] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${headerActive ? "shadow-md h-[75px]" : "h-[70px]"} w-full bg-primary-200 md:px-20 sm:px-8 px-4 h-[70px] fixed top-0 left-0 z-50`}>
      <div className="flex justify-between items-center gap-5 w-full h-full">
        <Image className="sm:w-22 w-28" src={assets.logo} alt="logo"/>
        <Navbar/>
        <div className="gap-5 flex">
          <button className="text-black bg-white py-1 px-3 rounded-full ">Login</button>
          {/* <button className="text-white">Register</button> */}
          <GiHamburgerMenu className="text-3xl text-white cursor-pointer lg:hidden" onClick={() => setSidebarActive(true)}/>
        </div>
        <div className={`lg:hidden w-[70%] absolute right-0 top-0 h-screen ${sidebarActive ? "block" : "transform translate-x-full"} transition-all duration-300`}>
          <Sidebar setSidebarActive={setSidebarActive} sidebarActive={sidebarActive}/>
        </div>
      </div>
    </header>
  )
}

export default Header