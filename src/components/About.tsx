"use client"
import {FaUsers} from "react-icons/fa"
import { IoIosPricetags } from "react-icons/io"
import { FaDumbbell } from "react-icons/fa6"
import {motion} from 'framer-motion'
import {fadeIn} from '@/lib/variants'
import Achievements from "./Achievements"

const features = [
  {
    icon: <FaUsers />,
    title: "Awarded Trainers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam."
  },
  {
    icon: <IoIosPricetags />,
    title: "Affordable Membership",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam."
  },
  {
    icon: <FaDumbbell />,
    title: "Best Equipment",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quisquam."
  }
]

const About = () => {
  
  return (
    <section id='about' className="pt-8 pb-14 lg:pt-16 lg:pb-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className="h2 text-center">
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}} 
            className="mx-auto max-w-[600px] text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolor, dolore ducimus dicta laudantium blanditiis!
          </motion.p>
        </div>
        {/* ------------------ Featured Items ------------------ */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex flex-col justify-center items-center border p-4 gap-4">
                <div className="text-2xl bg-primary-300 text-white w-[60px] h-[60px] rounded-full flex justify-center items-center">{feature.icon}</div>
                <div className="text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            )})
          }
        </motion.div>
        <motion.div
          variants={fadeIn('up', 1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          >
          <Achievements/>
        </motion.div>
      </div>
    </section>
  )
}

export default About