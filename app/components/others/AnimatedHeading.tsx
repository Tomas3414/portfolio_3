'use client'

import { Variants, motion } from "framer-motion"
import { NextFont } from "next/dist/compiled/@next/font"
import { useAppTheme } from "../theme/AppTheme";


const outerVariants: Variants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const innerVariants: Variants = {
    initial: { opacity: 0, x: 80, transition: { damping: 10, stiffness: 50 } },
    animate: { opacity: 1, x: 0, transition: { type: 'spring', damping: 10, stiffness: 50, repeat: Infinity, repeatType: 'reverse', duration: 2 } }
}

interface props {
    title: string, classList: string, font?: NextFont, color?: string
}

const AnimatedHeading = ({ title, classList, font, color }: props) => {

    const words = title.split("");
    const { themeColor, comicNeue, isClient } = useAppTheme();

    if (isClient) {
        if (font === undefined) {
            return (
                <motion.p className={`${classList} noSelection font-bold`} variants={outerVariants} initial='initial' animate='animate' style={comicNeue.style}>
                    {words.map((curr: string, i: number) => {
                        return (
                            <motion.span key={`${i}_words`}
                                variants={innerVariants}
                                style={{ color: color ?? themeColor }}
                            >
                                {curr}
                            </motion.span>
                        )
                    })}
                </motion.p>
            )
        }

        if (font !== undefined) {
            return (
                <motion.p className={`${classList} noSelection`}
                    variants={outerVariants} initial='initial' animate='animate' style={font.style}
                >
                    {words.map((curr: string, i: number) => {
                        return (
                            <motion.span key={`${i}_words`}
                                variants={innerVariants}
                                style={{ color: color ?? themeColor }}
                            >
                                {curr}
                            </motion.span>
                        )
                    })}
                </motion.p>
            )
        }
    } else {
        return <p>{title}</p>
    }



}

export default AnimatedHeading