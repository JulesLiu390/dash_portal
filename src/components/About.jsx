import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { about, Leaf1, Leaf2 } from '../assets';

export const About = () => {
  return (
    <section id='about'
    className='flex items-center justify-center flex-col gap-12 relative'>
        {/* title */}
        <div className='w-full flex items-center justify-center py-24'>
            <motion.div className='flex items-center justify-around w-52'
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:200}}
            exit={{opacity:0, width:0}}
            transition={{delay:0.4}}
            >
                <img src={Leaf1} className='w-6 h-auto object-contain' alt='' />
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500'>About</p>
                <img src={Leaf2} className='w-6 h-auto object-contain' alt='' />
            </motion.div>
        </div>

        {/* main content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
            {/* image section */}
            <div className='w-full flex items-center justify-center px-8'>
                <div className='w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-green-300 to-green-500 relative'>
                    <img src={about} className='w-full rounded-md h-auto object-contain' alt=''></img>

                    <div className='absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-green-300 to-green-500 rounded-md blur-[5px] -z-10'></div>
                </div>

                
            </div>
            {/* content section */}
            <div className='w-full px-8 flex flex-col gap-4 items-start justify-start'>
                <p className='text-gray-300 text-base tracking-wide text-justify'>
                Here are some of my qualifications:
                </p>
                <p className='text-gray-300 text-base tracking-wide text-justify'>
                • Strong technical expertise in Python, JavaScript, and R, with experience in React, Node.js, and MongoDB for full-stack development.<br/>
                • Algorithmic problem-solving background, achieving Silver Medal in Anhui Collegiate Programming Contest (ACPC) and First Prize in the Blue Bridge Cup Provincial Contest.<br/>
                • Hands-on data analytics experience, including an internship at COFE+ Robot Barista, where I analyzed business trends and optimized decision-making using machine learning techniques.<br/>
                • Teaching Assistant experience, mentoring students in IT education and programming concepts.<br/>
                </p>
                <p className='text-gray-300 text-base tracking-wide text-justify'>
                I’m looking for opportunities in data analytics, software engineering, or AI-driven solutions, where I can apply my analytical skills and technical expertise to drive business insights and innovation. Always open to collaborations and new challenges!
                </p>
            </div>
        </div>
    </section>
  )
}

export default About;