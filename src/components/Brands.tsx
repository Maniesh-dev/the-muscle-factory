"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const brands = [
  {img: '/assets/brands/brand-1.png', link: '#'},
  {img: '/assets/brands/brand-2.png', link: '#'},
  {img: '/assets/brands/brand-3.png', link: '#'},
  {img: '/assets/brands/brand-4.png', link: '#'},
  {img: '/assets/brands/brand-5.png', link: '#'},
]

const BrandVariants = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear"
    }
  }
}
const BrandItemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    }
  }
}

const Brands = () => {
  return (
    <section id='contact' className='py-12'>
      <div className="container mx-auto">
        <motion.div 
          variants={BrandVariants}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {brands.map((item, index) => (
            <motion.div 
              variants={BrandItemVariants}
              key={index}
              className="w-full h-full "
            >
              <Link href={item.link} className="group">
                <Image src={item.img} width={204} height={106} alt="brand" className="opacity-50 group-hover:opacity-100 transition-all duration-300 mx-auto"/>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Brands