'use client'

import { ReactElement, useState } from 'react'
import { motion } from "framer-motion";
import { useAppTheme } from '../theme/AppTheme';


interface props {
  children : ReactElement|string, type?: any, onClick?: any, className?: string, disable?: boolean
}
const Button = ({children, type, onClick, className, disable}: props) => {

  const [Hover, setHover] = useState(false)
  const {themeColor} = useAppTheme();

  return (
    <>
      {themeColor && <motion.div
          whileHover={{scale: [1,1.02,1,1.02,1,1.02,1,1.02]}}
          whileTap={{scale: 0.9}}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`w-full flex justify-center  ${className}`}
      >
        <button 
          type={type} onClick={onClick} 
          onMouseEnter={() => {setHover(true)}}
          onMouseLeave={() => {setHover(false)}}
          className={`noSelection text-white flex justify-center items-center w-11/12 border-0 py-2 px-8 focus:outline-none text-lg shadow-lg transition-all duration-500 rounded-full ${disable? 'cursor-not-allowed':'cursor-pointer'}`} 
          style={Hover?{boxShadow: `4px 2px 20px ${themeColor}`, backgroundColor: themeColor}:{backgroundColor: themeColor}}
          disabled={disable}
        >
          {children}
        </button>
      </motion.div>}
    </>
  )
}

export default Button