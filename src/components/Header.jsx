import React from 'react'
import { logo } from '../assiets'
import {motion} from "framer-motion"

export const Header = () => {
  return (
    <div className='w-full bg-black'>
      <ul className='flex w-full h-16 p-8 gap-4 justify-start items-center text-white font-sans font-semibold text-2xl'>
        <motion.img 
        initial={{opacity:1,rotate:0}}
        animate={{opacity:1,rotate:360}}
        transition={{
          duration: 3,   // 每个动画周期的时长
          repeat: Infinity, // 无限循环
          repeatType: "reverse", // 让动画来回播放
        }}
        
        src={logo} className='h-12 w-12'></motion.img>
        <li>Home</li>
        <li>Events</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>gallery</li>
      </ul>
    </div>
  )
}

export default Header;