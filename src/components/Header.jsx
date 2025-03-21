import React from 'react'
import { logo } from '../assiets'
import {motion} from "framer-motion"

export const Header = () => {
  return (
    <div className='z-50 top-12 fixed w-full flex justify-center'>
      <div className='rounded-full bg-gray-900 flex w-[70%] h-16 justify-evenly items-center text-white font-sans font-semibold text-2xl '>

        <a href='#home'>Home</a>
        <a href='#events'>Events</a>
        <a href='#about'>About us</a>
        <a href='#contact'>Contact us</a>
        <a href='#gallery'>Gallery</a>
      </div>
    </div>
  )
}

export default Header;