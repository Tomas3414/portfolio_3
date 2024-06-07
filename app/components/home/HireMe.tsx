'use client'

import { motion } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/legacy/image';
import { IoNewspaperOutline } from "react-icons/io5";
import SocialMedia from '../others/SocialMedia';
import AnimatedHeading from '../others/AnimatedHeading'
import { useAppTheme } from '../theme/AppTheme';
import { useTheme } from 'next-themes';
import { poppins, robotoMono, ubuntu } from '@/app/utils/Fonts';

const outerVariants = {
    open: { transition: { staggerChildren: 0.5, delayChildren: 0.3 } },
    closed: { transition: { staggerChildren: 0.5, staggerDirection: -1 } }
};
const Left = {
    closed: { opacity: 0, y: 250, transition: { type: 'spring', stiffness: 300 } },
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
};
const Right = {
    closed: { opacity: 0, scale: 0.5, transition: { type: 'spring', stiffness: 300 } },
    open: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300 } }
}

const HireMe = () => {

    const { themeColor } = useAppTheme();
    const { resolvedTheme } = useTheme();

    return (
        <motion.div initial='closed' whileInView='open' viewport={{ once: true, amount: 0.2 }} variants={outerVariants} className='relative flex flex-col lg:flex-row lg:justify-start justify-center lg:items-start items-center p-4 lg:p-10 bg-gradient-to-b dark:text-gray-300 dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] text-gray-800 from-[#f1f1f1] to-[#e1e1e1]'>
            <motion.div variants={Left} className='p-1 h-fit relative animate-shift -top-16 lg:-top-20' style={{ background: 'linear-gradient(45deg, #f06, #f79, #06f, #79f, #0ff, #9f7)', backgroundSize: '300%, 300%' }}>
                <Image src='/assets/image/me.jpg' height={600} width={450} alt='me.jpg' title="yeah!, It's me" />
            </motion.div>
            <motion.div variants={Right} className='ml-0 lg:ml-24 lg:max-w-[60%] max-w-full flex flex-col'>
                <motion.h1 className={`${robotoMono.className} text-2xl`} style={{ color: themeColor }} initial={{ y: -5 }} animate={{ y: 5 }} transition={{ duration: .6, repeat: Infinity, repeatType: 'reverse' }}>Hello There !</motion.h1>
                <div className='flex flex-col my-2 mr-auto'>
                    <article style={poppins.style}>
                        <p className='mt-2 lg:text-lg'>
                            Excited for new opportunities and eager to collaborate! Reach out for work or inquiries, and I&apos;ll get back to you as soon as possible. My inbox is always open. Let&apos;s talk!
                        </p>
                    </article>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-start lg:justify-between w-full'>
                    <SocialMedia classList='flex items-center lg:items-start mt-8 gap-4' />
                    <Link href="/assets/doc/Moinak-Majumdar_Resume.pdf" scroll={false} target='_blank'>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className='rounded-full w-full flex overflow-hidden p-1 animate-shift mt-8 lg:mt-0' style={{ background: 'linear-gradient(45deg, #f06, #f79, #06f, #79f, #0ff, #9f7)', backgroundSize: '300%, 300%' }}>
                            <div className='px-10 py-2 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center gap-2'>
                                <IoNewspaperOutline className='text-2xl' />
                                <span style={poppins.style} className='font-semibold text-slate-700 dark:text-slate-300'>Download Resume</span>
                            </div>
                        </motion.div>
                    </Link>
                </div>


            </motion.div>
            <div className='absolute bottom-5 left-10 hidden lg:flex flex-col'>
                <AnimatedHeading classList='text-6xl 2xl:text-6xl font-bold' font={ubuntu} title='#Full Stack' color={resolvedTheme === 'dark' ? '#00001180' : '#ffffff'} />
            </div>
        </motion.div>
    )
}

export default HireMe