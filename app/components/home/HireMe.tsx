'use client'

import { motion } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/legacy/image';
import { IoNewspaperOutline } from "react-icons/io5";
import SocialMedia from '../others/SocialMedia';
import AnimatedHeading from '../others/AnimatedHeading'
import { useAppTheme } from '../theme/AppTheme';
import { useTheme } from 'next-themes';
import { comicNeue, poppins, ubuntu } from '@/app/utils/Fonts';
import SendMsgBtn from '../others/SendMsgBtn';

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
        <>
            <motion.div initial='closed' whileInView='open' viewport={{ once: true, amount: 0.2 }} variants={outerVariants} className='relative flex flex-col lg:flex-row lg:justify-start justify-center lg:items-start items-center p-4 lg:p-10 bg-gradient-to-b dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] from-[#f1f1f1] to-[#e1e1e1]'>
                <motion.div variants={Left} className='p-1 h-fit relative animate-shift -top-16 lg:-top-20' style={{ background: 'linear-gradient(45deg, #f06, #f79, #06f, #79f, #0ff, #9f7)', backgroundSize: '300%, 300%' }}>
                    <Image src='/assets/image/me.jpg' height={600} width={450} alt='me.jpg' title="yeah!, It's me" />
                </motion.div>
                <motion.div variants={Right} className='ml-0 lg:ml-24 lg:w-[70%] w-full flex flex-col'>
                    <h1 className='text-xl lg:text-2xl animate-bounce text-center xl:text-left' style={{ ...comicNeue.style, color: themeColor }}>I&apos;d Love to Hear from You</h1>
                    <div className='flex flex-col my-2 text-center xl:text-left'>
                        <article style={comicNeue.style}>
                            <p className='mt-2 text-sm lg:text-lg text-gray-800 dark:text-gray-300'>
                                I&apos;m open to work and new opportunities too,<br />
                                Suggestions, job offers or a simple hello will do.<br />
                                Collaboration on projects? I&apos;m eager, it&apos;s true,<br />
                                My inbox is open—let&apos;s see what we can pursue.<br />
                                Reach out, connect, let&apos;s start something new,<br />
                                Together, we&apos;ll achieve great things, me and you!
                            </p>
                        </article>
                    </div>
                    <div className='flex flex-col w-full mt-4 lg:mt-6'>
                        <div className='flex flex-col-reverse lg:flex-row justify-center lg:justify-between w-full items-center lg:items-start'>
                            <SendMsgBtn className='mt-8 lg:mt-0 mb-4 lg:mb-0'/>
                            <Link href="/assets/doc/Moinak-Majumdar_Resume.pdf" scroll={false} target='_blank' >
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className='rounded-full w-full flex overflow-hidden p-1 animate-shift mt-8 xl:mt-0' style={{ background: 'linear-gradient(45deg, #f06, #f79, #06f, #79f, #0ff, #9f7)', backgroundSize: '300%, 300%' }}>
                                    <div className='px-10 py-2 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center gap-2'>
                                        <IoNewspaperOutline className='text-2xl' />
                                        <span style={poppins.style} className='font-semibold text-slate-700 dark:text-slate-300'>Download Resume</span>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                        <SocialMedia classList='flex items-center lg:items-start mt-6 gap-4' />
                    </div>
                </motion.div>
                <div className='absolute bottom-5 left-10 hidden lg:flex flex-col'>
                    <AnimatedHeading classList='text-6xl 2xl:text-6xl font-bold' font={ubuntu} title='#Full Stack' color={resolvedTheme === 'dark' ? '#00001180' : '#ffffff'} />
                </div>
            </motion.div>
        </>
    )
}

export default HireMe