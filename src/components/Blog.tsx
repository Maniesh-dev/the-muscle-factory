"use client"

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperButton from './SwiperButton'
import Link from 'next/link'
import Image from 'next/image'

const blogs = [
  {
    title: 'Maintain a healthy lifestyle',
    date: 'Jan 15, 2025',
    img: "/assets/blog/post1.jpg",
    link: '#'
  },
  {
    title: 'Maintain a healthy lifestyle',
    date: 'Jan 15, 2025',
    img: "/assets/blog/post2.jpg",
    link: '#'
  },
  {
    title: 'Maintain a healthy lifestyle',
    date: 'Jan 15, 2025',
    img: "/assets/blog/post3.jpg",
    link: '#'
  },
  {
    title: 'Maintain a healthy lifestyle',
    date: 'Jan 15, 2025',
    img: "/assets/blog/post4.jpg",
    link: '#'
  },
  {
    title: 'Maintain a healthy lifestyle',
    date: 'Jan 15, 2025',
    img: "/assets/blog/post1.jpg",
    link: '#'
  },
  {
    title: 'Maintain a healthy lifestyle',
    date: 'Jan 15, 2025',
    img: "/assets/blog/post2.jpg",
    link: '#'
  },
  {
    title: 'Maintain a healthy lifestyle',
    date: 'Jan 15, 2025',
    img: "/assets/blog/post3.jpg",
    link: '#'
  },
  {
    title: 'Maintain a healthy lifestyle',
    date: 'Jan 15, 2025',
    img: "/assets/blog/post4.jpg",
    link: '#'
  },
]
const Blog = () => {
  return (
    <section id='blog' className='bg-primary-300 text-white py-10 flex flex-col items-center'>
      <div className="container mx-auto">
        <motion.h2 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className='h2 text-center mb-8'>Blog Posts
        </motion.h2>
        <div className='flex items-center'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50, 
              }
            }}
            className='min-h-[350px] flex items-center justify-center'
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index} className='flex items-center justify-center'>
                <motion.div 
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.2}}
                  className='cursor-pointer flex flex-col justify-center items-start h-full max-w-[400px] gap-4'>
                  <Image src={`${blog.img}`} width={280} height={200} alt="" className='rounded w-full' />
                  <div className='flex flex-col gap-2 items-start'>
                    <p className='text-[10px] tracking-[4px] uppercase'>{blog.date}</p>
                    <Link href={blog.link} className='h4 hover:text-main transition-all duration-300 capitalize'>
                      {blog.title}
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
            <SwiperButton 
              boxStyles='absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[720px] md:max-w-[1200px] xl:max-w-[1480px] mx-auto z-50 flex justify-between gap-1'  
              btnStyles='text-4xl text-white bg-accent'
            />
          </Swiper>
        </div>
      </div>
      <motion.div 
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className="z-20">
        <button className='group relative overflow-hidden bg-main h-10 px-4 py-1 text-white mt-5'>
          <span className='ease absolute top-1/2 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 h-0 group-hover:h-64 group-hover:-translate-y-32'></span>
          <span className='ease relative uppercase text-white group-hover:text-white z-2'>
            see all Blogs</span>
        </button>
      </motion.div>
    </section>
  )
}

export default Blog