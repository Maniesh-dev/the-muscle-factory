"use client"

import Image from "next/image"
import { motion} from 'framer-motion'
import {fadeIn} from '@/lib/variants'


const classes = [
  {
    image: '/assets/classes/cardio.jpg',
    title: 'Cardio Training',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam. amet consectetur adipisicing elit.'
  },
  {
    image: '/assets/classes/crossfit.jpg',
    title: 'Fitness Training',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam. amet consectetur adipisicing elit.'
  },
  {
    image: '/assets/classes/bodybuilding.jpg',
    title: 'Strength Training',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam. amet consectetur adipisicing elit.'
  },
  {
    image: '/assets/classes/fitness.jpg',
    title: 'Crossfit Training',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam. amet consectetur adipisicing elit.'
  }
]
const Classes = () => {
  return (
    <section id='classes'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => {
          return (
            <motion.div 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              key={index} className="relative w-full h-[300px] md:h-[350px] xl:h-[505px] flex flex-col justify-center items-center gap-1">
              <div className="absolute w-full h-full top-0 bg-black/50 z-10"></div> 
              <Image src={item.image} fill alt={item.title} className="object-cover"/>
              <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center gap-4 px-8">
                <motion.h3 
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.2}}
                  className="h3 text-accent z-20">
                    {item.title}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.2}}
                  className="text-white z-20 text-center">
                  {item.desc}
                </motion.p>
                <motion.div 
                  variants={fadeIn('up', 0.8)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.2}}
                  className="z-20">
                  <button className='group relative overflow-hidden bg-main h-10 px-4 py-1 text-white'>
                    <span className='ease absolute top-1/2 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 h-0 group-hover:h-64 group-hover:-translate-y-32'></span>
                    <span className='ease relative uppercase text-white group-hover:text-white z-2'>
                      read more</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Classes