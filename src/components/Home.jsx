import React, { useState } from 'react'
import Header from './Header'
import {motion} from "framer-motion"
import { logo } from '../assiets'
import ContentWriter from './ContentWriter'
import HomeSocialLinks from './HomeSocialLinks'
import { Socials } from '../utils/helpers';

export const Home = () => {
    const [isMouseOnLogo, setIsMouseOnLogo] = useState(false)

  return (
    <section id='home' className='flex-col justify-center'>        
        <div className='flex pointer-events-none mt-24'>
          <div className='ml-[5%] flex-col w-[40%]'>
            <h2 className='text-3xl lg:text-4xl text-gray-300'>Hello, it's me
                      <span className='block tracking-wider text-4xl lg:text-6xl mt-4 text-white'>D.A.S.H.</span>
            </h2>
            <p className='text-right text-2xl text-gray-300 mt-6 lg:text-left'>
            The NUALY: Data Analytics Society for Huskies (D.A.S.H.) student organization has a motto of “Huskies4Huskies” and offers a steppingstone for Analytics students to many future volunteering experiences at the graduate level and an opportunity to experience a startup environment. Together, D.A.S.H. is “solving the professional puzzle”!
            </p>
          </div>
          <motion.img 
          onMouseEnter={() => setIsMouseOnLogo(true)}
          onMouseLeave={() => setIsMouseOnLogo(false)}
          initial={{opacity:1,rotate:0}}
          animate={isMouseOnLogo ? {opacity:1,rotate:0} : {opacity:1,rotate:360}}
          transition={{
            duration: isMouseOnLogo ? 0.1 : 20,   // 每个动画周期的时长
            repeat: isMouseOnLogo ? 1 : Infinity, // 无限循环
            ease:"linear",
            // repeatType: "reverse", // 让动画来回播放
          }}
          
          src={logo} className='pointer-events-auto h-96 w-96 ml-64 '></motion.img>



        </div>
          {/* type writter */}
          <h2 className='justify-center ml-16 mt-16 text-2xl lg:text-4xl text-gray-300'>Join us, If you {" "}
            <ContentWriter words={["want to turn raw data into meaningful insights.", "are fascinated by the potential of AI.", "want to explore cloud computing & big data."]} speed={100}></ContentWriter>
          </h2>
          <div className='flex items-center justify-center gap-16 mt-16'>
          {Socials && Socials.map((item, index) => (
                            <HomeSocialLinks key={index} data={item} index={index}></HomeSocialLinks>
                        ))}
          </div>
        
    </section>
  )
}

export default Home