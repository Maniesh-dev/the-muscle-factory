"use client"

import {FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

import {motion} from 'framer-motion'
import {fadeIn} from '@/lib/variants'
import { div } from 'framer-motion/client'

const team = [
  {
    name: 'John Doe 1',
    image: '/assets/trainers/traine-1.jpg',
    role: 'Cardio Trainer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    socials: [
      {icon: <FaFacebook />, link: 'https://www.facebook.com/'},
      {icon: <FaYoutube />, link: 'https://www.youtube.com/'},
      {icon: <FaTwitter />, link: 'https://www.twitter.com/'},
    ]
  },
  {
    name: 'John Doe 2',
    image: '/assets/trainers/traine-2.jpg',
    role: 'Fitness Trainer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    socials: [
      {icon: <FaFacebook />, link: 'https://www.facebook.com/'},
      {icon: <FaYoutube />, link: 'https://www.youtube.com/'},
      {icon: <FaTwitter />, link: 'https://www.twitter.com/'},
    ]
  },
  {
    name: 'John Doe 3',
    image: '/assets/trainers/traine-3.jpg',
    role: 'Crossfit Coach',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    socials: [
      {icon: <FaFacebook />, link: 'https://www.facebook.com/'},
      {icon: <FaYoutube />, link: 'https://www.youtube.com/'},
      {icon: <FaTwitter />, link: 'https://www.twitter.com/'},
    ]
  },
  {
    name: 'John Doe 4',
    image: '/assets/trainers/traine-4.jpg',
    role: 'Body building Coach',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    socials: [
      {icon: <FaFacebook />, link: 'https://www.facebook.com/'},
      {icon: <FaYoutube />, link: 'https://www.youtube.com/'},
      {icon: <FaTwitter />, link: 'https://www.twitter.com/'},
    ]
  }
]
const Team = () => {
  return (
    <section id='team' className='py-12 xl:h-[110vh]'>
      <div className='mx-auto h-full flex flex-col items-center justify-center'>
        <motion.h2 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className='h2 mb-8'>
            Our Trainers
        </motion.h2>
        <motion.div 
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 gap-12 md:gap-3 px-8'>
          {team.map((item, index) => {
            return (
              <motion.div key={index} 
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='border-b border-accent pb-4'>
                <div className='relative w-[280px] h-[300px] mx-auto mb-4 '>
                  <Image src={item.image} alt={item.name} width={300} height={300}/>
                </div>
                <div className='px-2 flex flex-col items-center'>
                  <h4 className='h4 mb-2 '>{item.name}</h4>
                  <p className='mb-2 tracking-[3px] uppercase'>{item.role}</p>
                  <p className='text-center'>{item.desc}</p>
                  <div className='flex gap-6 mt-4 px-2'>
                    {item.socials.map((social, index) => {
                      return ( <div key={index}>
                        <Link href={social.link} className=' hover:text-main transition-all duration-300'>
                          <div className='text-xl'>{social.icon}</div>
                        </Link>
                      </div>
                    )})}
                  </div>
                </div>
              </motion.div>
            )})}
        </motion.div>
        <motion.div 
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className="z-20">
          <button className='group relative overflow-hidden bg-main h-10 px-4 py-1 text-white'>
            <span className='ease absolute top-1/2 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 h-0 group-hover:h-64 group-hover:-translate-y-32'></span>
            <span className='ease relative uppercase text-white group-hover:text-white z-2'>
              see all trainers</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Team