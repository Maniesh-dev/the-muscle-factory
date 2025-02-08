import React from 'react'
import {Link as ScrollLink } from 'react-scroll'
import { RxCross2 } from "react-icons/rx";

const links = [
  {name: 'home', target: 'home', offset: -100},
  {name: 'about', target: 'about', offset: -80},
  {name: 'classes', target: 'classes', offset: -80},
  {name: 'team', target: 'team', offset: 0},
  {name: 'prices', target: 'prices', offset: -40},
  {name: 'testimonial', target: 'testimonial', offset: 0},
  {name: 'blog', target: 'blog', offset: 0},
  {name: 'contacts', target: 'contacts', offset: 0},
]

interface SidebarProps {
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ setSidebarActive }: SidebarProps) => {
  return (
    <div className={`lg:hidden h-full bg-primary-200 w-full transition-all duration-300 `}>
      <RxCross2 size={25} className='absolute top-5 right-5 cursor-pointer text-white hover:text-main transition-all duration-300' onClick={() => setSidebarActive(false)}/>
      <div className='flex flex-col gap-5 items-center justify-center py-10 pt-12 capitalize'>
        {
          links.map((link, index) => (
            <ScrollLink 
              to={link.target} 
              spy={true} 
              smooth={true} 
              offset={link.offset} 
              duration={500} 
              key={index} 
              onClick={() => setSidebarActive(false)}
              activeClass='active'
              className='cursor-pointer font-medium text-white hover:text-main transition-all duration-300'>
              {link.name}
            </ScrollLink>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar