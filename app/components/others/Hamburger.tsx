'use client'

import { poppins, ubuntu } from '@/app/utils/Fonts'
import { IconCamera, IconCode, IconFileSignature, IconFlutter, IconHome, IconLeft, IconMenu, IconMessage, IconPeace, IconProject, IconSettings } from '@/icons'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { useAppTheme } from '../theme/AppTheme'
import { ModeSwitch2 } from './ModeSwitch'

interface I_links { name: string, link: string, icon: ReactNode }


export default function HamBurger() {
    const pathName = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState<string>()
    const [navLink, setNavLink] = useState<I_links[]>()

    const { themeColor, isClient } = useAppTheme();
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        if (pathName === '/') {
            setNavLink(navLinkHome)
        } else if (pathName.toLowerCase().includes('blossoms')) {
            setNavLink(navLinkBlossoms)
        } else if (pathName.toLowerCase().includes('projects')) {
            setNavLink(navLinkProjects)
        } else {
            setNavLink(navLinkOthers)
        }
    }, [pathName]);


    if (isClient) {
        return (
            <>
                <button onClick={() => setIsOpen(!isOpen)} className="fixed top-0 right-4 w-fit mt-2 z-50 rounded-full cursor-pointer text-2xl p-[9px] dark:bg-blue-300 bg-slate-300" area-label='sideNavBar' title='sideNavbar'>
                    <IconMenu className="dark:text-black text-slate-800" />
                </button>
                {/* hl3 side navbar */}
                <motion.div
                    initial='closed'
                    animate={isOpen ? 'open' : 'closed'}
                    className={`z-40 fixed top-0 right-0 min-h-full flex ${isOpen ? "w-full" : 'max-w-0'}`}
                >
                    <div onClick={() => setIsOpen(!isOpen)} className='bg-transparent min-w-full min-h-full'></div>
                    <motion.div
                        variants={divVariants}
                        style={resolvedTheme == 'dark' ? { background: 'linear-gradient(to right,#294861,#0e1c26)', boxShadow: '0px 0px 30px #6b7280' } : { background: 'linear-gradient(#D7DDE8,#BBD2C5)', boxShadow: '0px 0px 30px #374151' }}
                        className="absolute top-0 right-0 bottom-0 rounded-l-2xl overflow-hidden dark:text-gray-300 text-gray-800"
                    >
                        {navLink && <section className='w-full min-h-full px-4 flex items-center'>
                            <motion.div variants={ulVariants} animate={isOpen ? 'open' : 'closed'} className='min-w-full flex flex-col h-fit'>
                                <motion.h1 style={poppins.style} variants={liVariants} className='text-2xl lg:text-3xl mt-4 mb-4 lg:mb-12'>
                                    {pathName === '/' ? <span className="font-bold ml-2" style={{ color: themeColor }}>Chapters</span> : <>
                                        <span>Navigation</span>
                                        <span className="font-bold ml-2" style={{ color: themeColor }}>Routes</span>
                                    </>}
                                </motion.h1>
                                {navLink.map((curr, index) => {
                                    return (
                                        <motion.div key={`navLink - ${index}`} className="text-2xl ml-4 mb-3" style={ubuntu.style}
                                            variants={liVariants} whileTap={{ scale: 0.88 }}
                                            whileHover={{ scale: 1.2, originX: 0, color: themeColor }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Link href={curr.link} onClick={() => setActiveLink(curr.name)} className={`flex items-center ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                                                {curr.icon}
                                                <span className='ml-3 text-xl'>{curr.name}</span>
                                                {activeLink === curr.name &&
                                                    <span className='ml-4 text-2xl' style={{ color: themeColor }}>
                                                        <IconLeft  />
                                                    </span>
                                                }
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                                <motion.div variants={liVariants} className='mt-16 flex justify-center items-center w-full' style={poppins.style}>
                                    <ModeSwitch2 />
                                </motion.div>
                            </motion.div>
                        </section>}
                    </motion.div>
                </motion.div>
            </>
        );
    } else {
        return <button className="fixed top-0 right-4 w-fit mt-2 z-50 rounded-full cursor-pointer text-2xl p-[9px] dark:bg-blue-300 bg-slate-300" area-label='sideNavBar' title='sideNavbar'>
            <IconMenu className="dark:text-black text-slate-800" />
        </button>
    }

}

const divVariants = {
    open: { width: '300px', height: '100vh', x: '0px' },
    closed: { width: '300px', height: '100vh', x: '500px', transition: { delay: .8 } }
}
const ulVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};
const liVariants = {
    open: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 160 } },
    closed: { y: -40, opacity: 0 }
};

const navLinkHome: I_links[] = [
    { name: 'Intro', link: '#Intro', icon: <IconPeace /> },
    { name: 'About Me', link: '#AboutMe', icon: <IconMessage /> },
    { name: 'Tools & Tech', link: '#Tech', icon: <IconSettings /> },
    { name: 'Web Projects', link: '#WebProjects', icon: <IconCode /> },
    { name: 'Flutter Projects', link: '#FlutterProjects', icon: <IconFlutter /> },
    { name: 'My Hobby', link: '#MyHobby', icon: <IconCamera /> },
    { name: 'Hire Me', link: '#HireMe', icon: <IconFileSignature /> },
]
const navLinkProjects: I_links[] = [
    { name: 'Home', link: '/', icon: <IconHome /> },
    { name: 'Web Projects', link: '#WebProjects', icon: <IconCode /> },
    { name: 'Flutter Projects', link: '#FlutterProjects', icon: <IconFlutter /> },
    { name: 'My Hobby', link: '/blossoms', icon: <IconCamera /> },
]
const navLinkBlossoms: I_links[] = [
    { name: 'Home', link: '/', icon: <IconHome /> },
    { name: 'Projects', link: '/projects', icon: <IconProject /> },
]
const navLinkOthers: I_links[] = [
    { name: 'Home', link: '/', icon: <IconHome /> },
    { name: 'Projects', link: '/projects', icon: <IconProject /> },
    { name: 'Blossoms', link: '/blossoms', icon: <IconCamera /> },
]

