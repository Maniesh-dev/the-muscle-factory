"use client"

import {  FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,} from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const socials = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/",
  },
  {
    icon: <FaTwitter />,
    link: "https://www.twitter.com/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
]


const Footer = () => {
  return (
    <footer id="contacts" className="bg-primary-300 p-6">
      <div className="mx-auto pb-10">
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-x-4 gap-y-10">
          <div className="flex flex-col gap-4 bg-black/30 rounded-xl p-6 min-w-[200px]">
            <Link href={'/'}>
              <Image src={'/assets/logo.png'} width={120} height={150} alt="logo"/>
            </Link>
            <p className="max-w-sm">Lorem ipsum dolor sit amet amet consectetur amet adipisicing elit.</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xl text-accent"/>
                <span>Joshi Marg, Jhotwara Jaipur</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-xl text-accent"/>
                <span>+91 123456789</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-xl text-accent"/>
                <p className="flex flex-wrap">themusclefactory@gmail.com</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col bg-black/30 rounded-xl p-6">
            <h4 className="h4 text-accent">Recent Blog Posts</h4>
            <div className="flex flex-col gap-4 mt-4">
              <Link href={'/blog'} className="hover:text-accent transition-all duration-300 border-b pb-2">
                <h5 className="h5">How to stay motivated?</h5>
                <p className="text-xs tracking-[4px] uppercase">January 25, 2025</p>
              </Link>
              <Link href={'/blog'} className="hover:text-accent transition-all duration-300 border-b pb-2">
                <h5 className="h5">Gym diet plan?</h5>
                <p className="text-xs tracking-[4px] uppercase">January 26, 2025</p>
              </Link>
              <Link href={'/blog'} className="hover:text-accent transition-all duration-300 border-b pb-2">
                <h5 className="h5">Best workouts to lose weight?</h5>
                <p className="text-xs tracking-[4px] uppercase">January 26, 2025</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col bg-black/30 rounded-xl p-6">
            <h4 className="h4 text-accent">Gallery</h4>
            <div className="flex flex-col gap-4 mt-4">
              <Link href={'/'}>
                <div className="flex flex-wrap gap-2 overflow-scroll max-h-[320px]">
                  <Image src={'/assets/trainers/traine-1.jpg'} width={100} height={100} alt={''}/>
                  <Image src={'/assets/trainers/traine-2.jpg'} width={100} height={100} alt={''}/>
                  <Image src={'/assets/trainers/traine-4.jpg'} width={100} height={100} alt={''}/>
                  <Image src={'/assets/trainers/traine-3.jpg'} width={100} height={100} alt={''}/>
                  <Image src={'/assets/trainers/traine-4.jpg'} width={100} height={100} alt={''}/>
                  <Image src={'/assets/trainers/traine-2.jpg'} width={100} height={100} alt={''}/>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col bg-black/30 rounded-xl p-6">
            <h4 className="h4 text-accent">Newsletter</h4>
            <div className="flex flex-col gap-4 mt-4">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, eveniet</p>
              <form action="" className="flex flex-col gap-2">
                <input type="email" placeholder="Enter your email" className="w-full h-10 px-4 text-black"/>
                <button className='group relative overflow-hidden bg-main h-10 px-4 py-1 text-white'>
                  <span className='ease absolute top-1/2 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 h-0 group-hover:h-64 group-hover:-translate-y-32'></span>
                  <span className='ease relative uppercase text-white group-hover:text-white z-2'>
                    send</span>
                </button>
              </form>
              <p className="uppercase flex gap-2 font-medium text-5xl flex-wrap">No 
                <span className="text-accent font-bold">Pain</span> No 
                <span className="text-accent font-bold">Gain</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="py-6 text-center text-white">
        Copyright &copy; 2025. All Rights Reserved - 
        <span className="font-semibold ml-1"> 
          Maniesh Sanwal
        </span>
      </p>
    </footer>
  )
}

export default Footer