import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

export const HomeSocialLinks = ({data, index}) => {
    const [isHoverred, setIsHoverred] = useState(false)
  return (
    <motion.a key={index} className='w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-900 relative p-[2px]'
    onMouseEnter={() => setIsHoverred(true)}
    onMouseLeave={() => setIsHoverred(false)}
    href={data.url}
    initial={{opacity:0, y:25}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:25}}
    transition={{delay:index*0.1}}
    target='_blank'
    >
        <AnimatePresence>
            {isHoverred && (
                <motion.div className={`absolute inset-1 blur-md bg-gradient-to-br from-red-500 to-red-900 -z-9`}>
            </motion.div>)}
            <div className='relative w-full h-full rounded-full bg-black flex items-center justify-center'>
                    <data.Icon className={`text-gray-300`} />
            </div>



        </AnimatePresence>
    </motion.a>
  )
}

export default HomeSocialLinks;