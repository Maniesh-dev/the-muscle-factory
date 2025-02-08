"use client"

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import { FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'


const testimonials = [
  {
    img: '/assets/testimonial/lucy.jpg',
    name: 'Jane Doe',
    massage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: '/assets/testimonial/maria.jpg',
    name: 'jane Doe',
    massage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: '/assets/testimonial/michael.jpg',
    name: 'John Doe',
    massage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: '/assets/testimonial/lucy.jpg',
    name: 'Jane Doe',
    massage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: '/assets/testimonial/maria.jpg',
    name: 'jane Doe',
    massage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: '/assets/testimonial/michael.jpg',
    name: 'John Doe',
    massage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]
const Testimonial = () => {
  return (
    <section id='testimonial' className='py-8 pt-20 md:py-12'>
      <div className="container mx-auto">
        <motion.h2 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className='h2 text-center mb-8'>Testimonials
        </motion.h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="h-[300px]"
        >
          {testimonials.map((item, index) => {
            return (
              <SwiperSlide key={index} className='h-full'>
                <motion.div 
                  variants={fadeIn('up', 0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.2}}
                  className='flex flex-col items-center gap-4 md:gap-6 h-full'>
                  <Image src={item.img} alt={item.name} className='w-[90px] h-[90px] rounded-full object-cover border-2 border-accent' />
                  <motion.div 
                    variants={fadeIn('up', 0.8)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.2}}
                    className="flex flex-col justify-center item-center text-center">
                    <FaQuoteLeft className='text-xl text-gray-400 mb-4 mx-auto'/>
                    <p className="text-md mb-2">{item.massage}</p>
                    <motion.h4
                      variants={fadeIn('up', 1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}} 
                      className="h4 text-accent ">
                      {item.name}
                    </motion.h4>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial