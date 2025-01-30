"use client"

import React from 'react'
import { Link as ScrollLink} from 'react-scroll'

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

const Navbar = () => {
  return (
    <nav className="hidden lg:flex gap-6 capitalize  px-3 py-2 rounded-full">
      {
        links.map((link, index) => (
          <ScrollLink 
            to={link.target} 
            spy={true} 
            smooth={true} 
            offset={link.offset} 
            duration={500} 
            key={index} 
            activeClass='active'
            className='cursor-pointer font-medium text-white hover:text-main transition-all duration-300'>
            {link.name}
          </ScrollLink>
        ))
      }
    </nav>
  )
}

export default Navbar