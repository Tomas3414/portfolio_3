'use client'

import { Variants, motion } from 'framer-motion'
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, } from "react-icons/ai";

import FooterStyle from '@/app/css/Footer.module.css'
import { useAppTheme } from '../theme/AppTheme';
import { useTheme } from 'next-themes';
import { monsterRat, poppins, roboto, robotoMono, ubuntu } from '@/app/utils/Fonts';
import { useRef } from 'react';
import SendMsgModal from './SendMsgModal';


function Footer() {

    const { themeColor, isClient } = useAppTheme();
    const { resolvedTheme } = useTheme();
    const modalRef = useRef<HTMLDialogElement>(null)

    return (
        <>
            <motion.footer initial='closed' whileInView='open' viewport={viewport} variants={outerVariants} className='w-full pt-[4rem] pl-4 md:pl-10 lg:pl-16 xl:pl-36 2xl:pl-44 flex flex-col text-white pb-5'>
                <div className={isClient && resolvedTheme === 'dark' ? FooterStyle.dark : FooterStyle.light} style={roboto.style}>
                    <motion.div variants={smooth} className="w-[90%] flex md:justify-between justify-center flex-col md:flex-row">
                        <div className="flex flex-col justify-start">
                            <h2 style={ubuntu.style}>Something in mind</h2>
                            <button onClick={() => modalRef.current?.showModal()} className={`${ubuntu.className} text-4xl font-bold outline-none cursor-pointer w-fit`}>Lets talk</button>
                        </div>
                        <div className="flex flex-col mt-4 md:mt-auto">
                            <h4 style={ubuntu.style} className='font-bold'>Full Stack</h4>
                            <p style={monsterRat.style}>Mobile & Web Developer</p>
                        </div>
                        <div className="space-y-1 mt-4 md:mt-auto">
                            <p style={ubuntu.style} className="text-base text-left md:text-right font-bold">
                                Follow me at
                            </p>
                            <div className="flex items-center gap-2">
                                {socialLinks.map((link) => (
                                    <Link key={link.name} href={link.url} title={link.name} className="text-2xl" target="_blank">
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div variants={smooth2} style={monsterRat.style} className="my-4 px-4 md:px-20 w-[90%] flex md:justify-between justify-center flex-col-reverse md:flex-row dark:text-gray-300 text-gray-800 ">
                    <h1 style={poppins.style} className="my-auto">
                        <span>Copyright {new Date().getFullYear()} - All rights reserved.</span> <br />
                        <span>Designed and Developed by : </span>
                        <span className={robotoMono.className} style={{ color: isClient ? themeColor : 'blue', fontWeight: 600 }}>moinak05</span>
                    </h1>
                    <div className="flex flex-col my-2 md:my-0">
                        <h2 className="font-bold" style={roboto.style}>Credits</h2>
                        <ul className="mt-2 list-disc list-inside" style={poppins.style}>
                            <li>
                                <Link scroll={false} href="http://www.freepik.com" target='_blank'>image: upklyak/Freepik</Link>
                            </li>
                            <li>
                                <Link scroll={false} href="https://patternpad.com/" target='_blank'>svg: patternpad, </Link>
                                <Link scroll={false} href="https://haikei.app/" target='_blank'>haikei</Link>
                            </li>
                            <li>
                                <Link scroll={false} href='https://www.framer.com/' target='_blank'>animation: framer</Link>
                            </li>
                            <li>
                                <Link scroll={false} href='https://nextjs.org/' target='_blank'>platform: Next.js</Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </motion.footer>
            <SendMsgModal modalRef={modalRef}/>
        </>
    );
}



const viewport = {
    once: false,
    amount: typeof window !== 'undefined' ? (window.innerWidth > 450 ? 0.5 : 0.05) : 0.5
}
const outerVariants = {
    open: { transition: { staggerChildren: 0.5, delayChildren: 0.3 } },
    closed: { transition: { staggerChildren: 0.5, staggerDirection: -1 } }
};
const smooth: Variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
}
const smooth2: Variants = {
    closed: { opacity: 0, y: -100, },
    open: { opacity: 1, y: 0, transition: { delay: .5, type: 'spring', stiffness: 300 } }
}
const socialLinks = [
    { name: "Linkedin", url: "https://www.linkedin.com/in/moinak-majumdar", icon: <AiFillLinkedin />, },
    { name: "Github", url: "https://github.com/Moinak-Majumdar", icon: <AiFillGithub /> },
];


export default Footer;