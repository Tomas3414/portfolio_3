'use client'

import { Variants, motion, useScroll, useTransform, } from 'framer-motion'
import ReactTypingEffect from 'react-typing-effect';
import { TbArrowsDownUp } from 'react-icons/tb'
import { useRef } from 'react'
import { useAppTheme } from '../theme/AppTheme';
import { HeroBg } from './HeroBg';

const viewport = {
    once: false,
    amount: typeof window !== 'undefined' ? (window.innerWidth > 450 ? 0.8 : 0.5) : 0.8
}

const transition = {
    closed: { staggerChildren: 0.3, staggerDirection: -1 },
    open: { staggerChildren: 0.3, delayChildren: 0.2 }
}

const Top: Variants = {
    closed: { x: -50, y: -50, opacity: 0, scale: 0.8 },
    open: { x: 0, y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, } }
}

const Bottom: Variants = {
    closed: { x: 50, y: 50, opacity: 0, },
    open: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
}




export default function Hero() {

    const { poppins, ubuntu, roboto, themeColor } = useAppTheme();
    const mainRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: mainRef, offset: ["start start", "end start"] });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-0%']);
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
   
    return (
        <section id='Intro' ref={mainRef} className='relative min-h-screen overflow-hidden'>
            <motion.div className='min-h-screen flex overflow-hidden z-10' initial='closed' whileInView='open' viewport={viewport} transition={transition} style={{ y: contentY }}>
                <div className="flex my-auto max-w-2xl lg:max-w-4xl mx-auto p-6 flex-col z-10 rounded-md backdrop-blur-sm bg-transparent dark:md:bg-slate-300/5">
                    <motion.div variants={Top}>
                        <div className='flex'>
                            <h2 className='text-xl md:text-2xl mr-1 font-ubuntu' style={{ color: themeColor }}>&lt;</h2>
                            <ReactTypingEffect
                                text={['Hello World !', 'नमस्ते दुनिया !', 'নমস্কার বিশ্ব!', 'こんにちは世界 !', 'Hola Mundo !', 'Bonjour le monde !', 'Olá Mundo!', 'Hallo Welt !', 'مرحبا بالعالم !', '你好世界 !']}
                                speed={200}
                                eraseSpeed={100}
                                typingDelay={100}
                                eraseDelay={1800}
                                cursorClassName="text-xl md:text-2xl ml-1 dark:text-gray-200 text-gray-900"
                                displayTextRenderer={(text: string, i: number) => {
                                    return (
                                        <h2>
                                            {text.split('').map((curr, i) => {
                                                return (
                                                    <span key={i} className="text-xl md:text-2xl dark:text-gray-200 text-gray-900" style={poppins.style}>{curr}</span>
                                                )
                                            })}
                                        </h2>
                                    )
                                }}
                            />
                            <h2 className='text-xl md:text-2xl font-ubuntu ml-1' style={{ color: themeColor }}>/&gt;</h2>
                        </div>
                        <h1 className="noSelection xl:text-6xl lg:text-5xl text-4xl bg-gradient-to-b bg-clip-text text-transparent dark:from-[#ffffff] dark:to-[#38495a] from-slate-500 to-gray-700" style={ubuntu.style}>
                            <span>I&apos;m Moinak,</span>
                            <br className='visible sm:hidden' />
                            <span className='font-bold ml-0 sm:ml-4'>Dart/Flutter</span>

                            <span className='ml-4'>and</span>
                        </h1>
                        <h1 className="noSelection font-bold mt-2 xl:text-6xl lg:text-5xl text-4xl bg-gradient-to-b bg-clip-text text-transparent dark:from-[#ffffff] dark:to-[#38495a] from-slate-500 to-gray-700" style={ubuntu.style}>Full Stack Web Developer.</h1>
                    </motion.div>
                    <motion.article variants={Bottom} className="mt-4 text-base lg:text-lg dark:text-gray-400 text-gray-800">
                        <p style={roboto.style}>
                            <b className='animate-pulse'>Welcome to my portfolio!</b> I&apos;m a passionate full-stack web developer with a focus on Dart/Flutter development. I specialize in crafting dynamic and responsive web and mobile applications that deliver exceptional user experiences. Through this platform, I invite you to explore a collection of my projects, each demonstrating my dedication to innovation and creativity in the world of web and mobile development. Take a journey through my portfolio and discover the exciting possibilities that these technologies can bring to your digital projects.
                        </p>
                    </motion.article>
                </div>
                <div className="absolute min-w-full flex justify-center items-center bottom-14 lg:bottom-10 dark:text-gray-500 text-gray-600">
                    <motion.div className='flex' initial={{ y: 5 }} animate={{ y: -5 }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}>
                        <TbArrowsDownUp className='text-xl lg:text-2xl' style={{ color: themeColor }}></TbArrowsDownUp>
                    </motion.div>
                    <span className='ml-1 lg:text-lg text-xs' style={poppins.style}>Keep Scrolling</span>
                </div>
            </motion.div>
            <HeroBg y={backgroundY} />
        </section>

    )
}

