'use client'

import { ubuntu } from '@/app/utils/Fonts';
import { IconCamera, IconCode, IconFileSignature, IconFlutter, IconHome, IconMessage, IconPeace, IconProject, IconSettings } from '@/icons';
import { motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useAppTheme } from "../theme/AppTheme";

const Sidebar = () => {
    const [open, toggleOpen] = useState<boolean>(false)
    const { themeGradient, isClient } = useAppTheme();
    const { resolvedTheme } = useTheme()
    const gradient = useMemo(() => themeGradient(resolvedTheme), [resolvedTheme])

    return (
        <motion.div className="flex flex-col justify-center items-center bg-white text-black" animate={open ? "open" : "close"}>
            {isClient &&
                <motion.div className="fixed top-0 right-0 bottom-0 w-[300px] z-40" variants={sidebarVariants} style={{ background: gradient }}>
                    <motion.div variants={linkVariants} className="absolute w-full h-full flex flex-col items-center justify-center gap-y-5">
                        <SidebarLinks />
                    </motion.div>
                </motion.div>
            }
            <HamburgerButton
                toggleOpen={() => toggleOpen(!open)}
            />
        </motion.div>
    )
}

const HamburgerButton = ({ toggleOpen }: { toggleOpen: () => void }) => {
    const { resolvedTheme } = useTheme()
    const { isClient } = useAppTheme()
    if (isClient) {
        return (
            <button
                onClick={toggleOpen}
                className="h-12 w-12 rounded-full fixed top-2 right-2 z-50 flex justify-center items-center dark:bg-slate-800 bg-slate-200"
                area-label='side-bar' title='Side Bar'
            >
                <svg width="23" height="23" viewBox="0 0 23 23">
                    <motion.path
                        variants={{ close: { d: "M 2 2.5 L 20 2.5" }, open: { d: "M 3 16.5 L 17 2.5" } }}
                        strokeWidth="3" stroke={resolvedTheme === 'dark' ? '#f1f5f9' : '#1e293b'} strokeLinecap="round"
                    />
                    <motion.path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            close: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        strokeWidth="3" stroke={resolvedTheme === 'dark' ? '#f1f5f9' : '#1e293b'} strokeLinecap="round"
                    />
                    <motion.path
                        variants={{ close: { d: "M 2 16.346 L 20 16.346" }, open: { d: "M 3 2.5 L 17 16.346" } }}
                        strokeWidth="3" stroke={resolvedTheme === 'dark' ? '#f1f5f9' : '#1e293b'} strokeLinecap="round"
                    />
                </svg>
            </button>
        )
    } else {
        return <button className="h-12 w-12 rounded-full fixed top-2 right-2 z-50 flex justify-center items-center dark:bg-slate-800 bg-slate-200" area-label='side-bar' title='Side Bar'>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <path d="M 3 16.5 L 17 2.5" strokeWidth="3" stroke='black' strokeLinecap="round" />
                <path d="M 2 9.423 L 20 9.423" strokeWidth="3" stroke='black' strokeLinecap="round" />
                <path d="M 3 2.5 L 17 16.346" strokeWidth="3" stroke='black' strokeLinecap="round" />
            </svg>
        </button>
    }
}

interface ILinks { name: string, link: string, icon: ReactNode }

const SidebarLinks = () => {
    const pathName = usePathname()
    const [activeLink, setActiveLink] = useState<string>()
    const [navLink, setNavLink] = useState<ILinks[]>([])

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

    return (
        <>
            {navLink.map((curr, index) => {
                return (
                    <motion.div variants={{ open: { y: 0, opacity: 1 }, close: { y: 50, opacity: 0 } }} key={`navLink - ${index}`} style={ubuntu.style}>
                        <Link href={curr.link} onClick={() => setActiveLink(curr.name)} className={`flex items-center gap-x-3 bg-white bg-opacity-20 p-2 rounded-md dark:text-slate-300 text-slate-800 ${activeLink === curr.name ? 'border-x-4' : 'border-0'} dark:border-slate-300 border-slate-800`}
                        >
                            {curr.icon}
                            <span className='text-xl'>{curr.name}</span>
                        </Link>
                    </motion.div>
                )
            })}
        </>
    )
}

const sidebarVariants: Variants = {
    open: {
        clipPath: "circle(1200px at 272px 30px)",
        transition: { type: "spring", stiffness: 15 }
    },
    close: {
        clipPath: "circle(0px at 268px 30px)",
        transition: {
            delay: 0.2, type: "linear",
            stiffness: 400, damping: 20
        }
    }
}

const linkVariants: Variants = {
    open: {
        transition: {
            staggerChildren: 0.2
        }
    },
    close: {
        transition: {
            staggerChildren: 0.02, staggerDirection: -1
        }
    }
}


const navLinkHome: ILinks[] = [
    { name: 'Intro', link: '#Intro', icon: <IconPeace /> },
    { name: 'About Me', link: '#AboutMe', icon: <IconMessage /> },
    { name: 'Tools & Tech', link: '#Tech', icon: <IconSettings /> },
    { name: 'Web Projects', link: '#WebProjects', icon: <IconCode /> },
    { name: 'Flutter Projects', link: '#FlutterProjects', icon: <IconFlutter /> },
    { name: 'My Hobby', link: '#MyHobby', icon: <IconCamera /> },
    { name: 'Hire Me', link: '#HireMe', icon: <IconFileSignature /> },
]
const navLinkProjects: ILinks[] = [
    { name: 'Home', link: '/', icon: <IconHome /> },
    { name: 'Web Projects', link: '#WebProjects', icon: <IconCode /> },
    { name: 'Flutter Projects', link: '#FlutterProjects', icon: <IconFlutter /> },
    { name: 'My Hobby', link: '/blossoms', icon: <IconCamera /> },
]
const navLinkBlossoms: ILinks[] = [
    { name: 'Home', link: '/', icon: <IconHome /> },
    { name: 'Projects', link: '/projects', icon: <IconProject /> },
]
const navLinkOthers: ILinks[] = [
    { name: 'Home', link: '/', icon: <IconHome /> },
    { name: 'Projects', link: '/projects', icon: <IconProject /> },
    { name: 'Blossoms', link: '/blossoms', icon: <IconCamera /> },
]



export default Sidebar