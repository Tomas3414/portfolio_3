'use client'

import { useTheme } from "next-themes"
import { MotionValue, motion } from "framer-motion"
import stylesDark from '@/app/css/Hero.module.css'
import stylesLight from '@/app/css/HeroLight.module.css'

export function HeroBg({y}: {y: MotionValue<string>}) {
    const { resolvedTheme } = useTheme()

    if (resolvedTheme == 'dark') {
        return (
            <motion.div className='min-h-screen flex absolute inset-0 overflow-hidden -z-10' style={{ y: y, background: 'radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%)'}}>
                <div className={stylesDark.stars} style={{position: "absolute"}}></div>
                <div className={stylesDark.stars2} style={{position: "absolute"}}></div>
                <div className={stylesDark.stars3} style={{position: "absolute"}}></div>
            </motion.div>
        )
    } 
    
    if(resolvedTheme == 'light') {
        return (
            <motion.div className='min-h-screen flex absolute inset-0 overflow-hidden -z-10' style={{ y: y, background: 'radial-gradient(ellipse at bottom, #f3f4f6 0%, #ffffff 100%)'}}>
                <div className={stylesLight.stars} style={{position: "absolute"}}></div>
                <div className={stylesLight.stars2} style={{position: "absolute"}}></div>
                <div className={stylesLight.stars3} style={{position: "absolute"}}></div>
            </motion.div>
        )
    }
}