"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperButton from './SwiperButton'
import {motion} from 'framer-motion'
import {fadeIn} from '@/lib/variants'

const Hero = () => {  
  
  return (
    <section id='home' className='h-[600px] lg:h-screen bg-hero bg-cover bg-center bg-no-repeat relative px-3'>
      <Swiper className='h-full'>
        <SwiperSlide>
          <div className='h-full flex justify-end pt-40'>
            <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
              <motion.h1 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='h1 text-center lg:text-left mb-4'>Where  <span className='text-main '>hard work </span>meets success
              </motion.h1>
              <motion.p 
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='text-white italic text-center lg:text-left mb-4'>
                “The hard days are the best because that is when champions are made, <br />so if you push through, you can push through anything.”
              </motion.p>
              <motion.div 
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}>
                <button className='group relative overflow-hidden bg-main h-10 px-4 py-1 text-white'>
                  <span className='ease absolute top-1/2 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 h-0 group-hover:h-64 group-hover:-translate-y-32'></span>
                  <span className='ease relative text-white group-hover:text-white z-2'>Get Started</span>
                </button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='h-full flex justify-end pt-40'>
            <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
              <motion.h1 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='h1 text-center lg:text-left mb-4'>
                <span className='text-main '>Pain</span> is temporary, but     
                <span className='text-main ml-5'>pride</span> is forever.
              </motion.h1>
              <motion.p 
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='text-white italic text-center lg:text-left mb-4'>
                 “The only bad workout is the one that did not happen.”
              </motion.p>
              <motion.div 
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}>
                <button className='group relative overflow-hidden bg-main h-10 px-4 py-1 text-white'>
                  <span className='ease absolute top-1/2 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 h-0 group-hover:h-64 group-hover:-translate-y-32'></span>
                  <span className='ease relative text-white group-hover:text-white z-2'>Get Started</span>
                </button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        
        {/* ----------------------------------- Swiper Button ----------------------------------- */}
        <SwiperButton 
          boxStyles='styles flex gap-2 absolute bottom-[50px] lg:bottom-[20px] right-0 h-[30px] w-full lg:w-[700px] z-10 justify-center lg:justify-start'
          btnStyles='border border-main text-white px-1 py-0.5 hover:bg-main transition-all duration-300 text-2xl'/>
      </Swiper>
    </section>
  )
}

export default Hero