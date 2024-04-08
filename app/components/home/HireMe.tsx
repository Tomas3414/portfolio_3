'use client'

import { motion } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/legacy/image';
import { useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Button from '../others/Button'
import SocialMedia from '../others/SocialMedia';
import AnimatedHeading from '../others/AnimatedHeading'
import { useAppTheme } from '../theme/AppTheme';
import { useTheme } from 'next-themes';

const outerVariants = {
    open: { transition: { staggerChildren: 0.5, delayChildren: 0.3 } },
    closed: { transition: { staggerChildren: 0.5, staggerDirection: -1 }}
};
const Left = {
    closed: { opacity: 0, y: 250, transition: { type: 'spring', stiffness: 300 } },
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
};
const Right = {
    closed: { opacity: 0, scale: 0.5, transition: { type: 'spring', stiffness: 300 } },
    open: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300 }}
}

const HireMe = () => {
    const [hover, setHover] = useState(false)
    const { ubuntu, roboto, poppins, themeColor } = useAppTheme();
    const {resolvedTheme} = useTheme();

    return (
        <motion.div initial='closed' whileInView='open' viewport={{ once: true, amount: 0.2 }} variants={outerVariants} className='relative flex flex-col lg:flex-row lg:justify-start justify-center lg:items-start items-center p-4 lg:p-10 bg-gradient-to-b dark:text-gray-300 dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] text-gray-800 from-[#f1f1f1] to-[#e1e1e1]'>
            <motion.div variants={Left} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='px-1 pt-1 w-fit border relative -top-16 lg:-top-20' style={{ borderColor: hover ? themeColor : 'rgb(107,114,128)', WebkitTransition: 'all .8s ease-in-out' }}>
                <Image src='/assets/image/me.jpg' height={600} width={450} alt='me.jpg' title="yeah!, It's me, Moinak 🤝" className='grayscale hover:filter-none hover:grayscale-0' style={{ WebkitTransition: 'all .8s ease-in-out' }} />
            </motion.div>
            <motion.div variants={Right} className='ml-0 lg:ml-24 lg:max-w-[60%] max-w-full flex flex-col'>
                <motion.h1 className={`${poppins.className} text-2xl`} style={{ color: themeColor }} initial={{ y: -5 }} animate={{ y: 5 }} transition={{ duration: .6, repeat: Infinity, repeatType: 'reverse' }}>Hello There !</motion.h1>
                <h2 className='mt-4 text-3xl md:text-5xl' style={ubuntu.style}>
                    <span>I&apos;m</span>
                    <span className='font-bold ml-2'>Moinak Majumdar</span>
                </h2>
                <h2 className='mt-8  text-lg lg:text-2xl' style={poppins.style}>From a tech enthusiast, A MERN lover</h2>
                <div className='flex flex-col my-2 mr-auto'>
                    <FaQuoteLeft className='mt-4 text-3xl lg:text-4xl' style={{ color: themeColor }} />
                    <article style={roboto.style}>
                        <p className='mt-2 lg:text-lg ml-10'>
                            With many years of knowledge in coding, computer science, hands-on projects and also suitable understanding in Full Stack Development, I look forward to bringing my strong, creative, technical and analytical skills to the Full Stack and Flutter Developer for the best. Therefore always excited to learn new things and add to my skill sets. Hope you do like my projects, feel free to connect 😄
                        </p>
                    </article>
                    <FaQuoteRight className='mt-4 text-4xl' style={{ color: themeColor }} />
                </div>
                <SocialMedia classList='flex mt-8 gap-6 mr-auto ml-auto lg:ml-0' />
                <Button className='mt-8 max-w-xs ml-auto mr-auto lg:mr-0'>
                    <Link href="/assets/doc/Moinak's Resume.pdf" scroll={false} style={poppins.style} target='_blank'>
                        <p>Download Resume</p>
                    </Link>
                </Button>
            </motion.div>
            <div className='absolute bottom-5 left-10 hidden lg:flex flex-col'>
                <AnimatedHeading classList='text-6xl 2xl:text-6xl font-bold' font={ubuntu} title='#Full Stack' color={resolvedTheme === 'dark' ? '#00001180' : '#ffffff'} />
            </div>
        </motion.div>
    )
}

export default HireMe