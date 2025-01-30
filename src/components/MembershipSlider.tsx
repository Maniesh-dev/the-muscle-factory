import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'
import { fadeIn } from '@/lib/variants'
import { motion } from 'framer-motion'

const memberships = [
  {
    title: 'Standard Plan',
    price: "1000",
    benefits: [
      {
        icon: <MdClose />,
        text: 'Personal Trainer'
      },
      {
        icon: <FaCheck />,
        text: 'Access to all gym facilities'
      },
      {
        icon: <MdClose />,
        text: 'Diet Plan Included'
      },
      {
        icon: <FaCheck />,
        text: 'Health & Fitness tips'
      },
      {
        icon: <MdClose />,
        text: 'Saturday-Sunday Access'
      },
      {
        icon: <FaCheck />,
        text: 'Full access to gym'
      },
      {
        icon: <MdClose />,
        text: 'No additional amenities'
      }
    ]
  },
  {
    title: 'Premium Plan',
    price: "1500",
    benefits: [
      {
        icon: <MdClose />,
        text: 'Personal Trainer'
      },
      {
        icon: <FaCheck />,
        text: 'Access to all gym facilities'
      },
      {
        icon: <FaCheck />,
        text: 'Diet Plan Included'
      },
      {
        icon: <FaCheck />,
        text: 'Health & Fitness tips'
      },
      {
        icon: <FaCheck />,
        text: 'All Day gym access'
      },
      {
        icon: <FaCheck />,
        text: 'Full access to gym'
      },
      {
        icon: <MdClose />,
        text: 'No additional amenities'
      }
    ]
  },
  {
    title: 'Professional Plan',
    price: "2000",
    benefits: [
      {
        icon: <FaCheck />,
        text: 'Personal Trainer'
      },
      {
        icon: <FaCheck />,
        text: 'Access to all gym facilities'
      },
      {
        icon: <FaCheck />,
        text: 'Diet Plan Included'
      },
      {
        icon: <FaCheck />,
        text: 'Health & Fitness tips'
      },
      {
        icon: <FaCheck />,
        text: 'All Day gym access'
      },
      {
        icon: <FaCheck />,
        text: 'Full access to gym'
      },
      {
        icon: <FaCheck />,
        text: 'No additional amenities'
      }
    ]
  }
]

const MembershipSlider = () => {
  return (
    <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }} breakpoints={{ 
      640: { slidesPerView: 1, spaceBetween: 20 }, 
      768: { slidesPerView: 2, spaceBetween: 30 }, 
      1024: { slidesPerView: 3, spaceBetween: 50 } 
      }} className='min-h-[680px] '>
      {memberships.map((membership, index) => (
        <SwiperSlide key={index} >
          <div className='border border-accent/30 rounded-md p-8 transition-all duration-300 w-full max-w-sm md:max-w-none mx-auto bg-primary-300/80 hover:bg-primary-300 cursor-pointer'>
            <motion.div 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='py-5 px-2 border-b border-accent'>
              <h4 className="text-2xl">{membership.title}</h4>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='py-5 px-2'>
              <ul>
                {membership.benefits.map((benefit, index) => (
                  <li key={index} className='flex items-center gap-2 mb-3 text-accent'>
                    {benefit.icon}
                    <span className='text-white'>{benefit.text}</span>
                  </li>
                ))}
              </ul>
              <motion.p 
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='mt-6'>
                <sup className='text-2xl text-accent'>₹</sup>
                <strong className='text-4xl'>{membership.price}</strong>
                <em className='self-end text-2xl text-accent'>/month</em>
              </motion.p>
              <motion.div 
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className="z-20 mt-5">
                <button className='group relative overflow-hidden bg-main h-10 px-4 py-1 text-white'>
                  <span className='ease absolute top-1/2 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 h-0 group-hover:h-64 group-hover:-translate-y-32'></span>
                  <span className='ease relative uppercase text-white group-hover:text-white z-2'>
                    Join Now</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MembershipSlider