"use client"

import CountUp from "react-countup"
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa"
import { ImUser } from "react-icons/im"
import {motion, useInView} from 'framer-motion'
import { useRef } from "react"
// import { fadeIn } from "@/lib/variants"

const stats = [
  {
    icon: <ImUser />,
    title: "Happy Clients",
    count: 150
  },
  {
    icon: <FaClock />,
    title: "Hours of Training",
    count: 879
  },
  {
    icon: <FaBriefcase />,
    title: "Training Courses",
    count: 16
  },
  {
    icon: <FaTrophy />,
    title: "Awards Received",
    count: 11
  }
]

const statsContainer = {
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

const statsItem = {
  hidden: {y: 20, opacity: 0},
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8]
    }
  }
}

const Achievements = () => {
  const ref = useRef(null)
  const isinView = useInView(ref)
  return (
    <section>
      <div className="container mx-auto">
        <motion.div 
        variants={statsContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <motion.div key={index} 
            variants={statsItem}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className="flex flex-col items-center gap-2 mb-12">
              <div ref={ref} className="border-accent/90 border w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto rounded-full p-1 mb-6">
                <div className="border-accent/30 border w-full h-full rounded-full flex justify-center items-center text-3xl font-medium">
                  {isinView && (<CountUp start={0} end={item.count} duration={6}/>)}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col ">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h4 className="h4">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements