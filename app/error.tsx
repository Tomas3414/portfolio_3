"use client"

import SocialMedia from "@/components/common/SocialMedia"
import { Background } from "@/components/ui/Background"
import Ring from "@/components/ui/Ring"
import SendMsgBtn from "@/components/ui/SendMsgBtn"
import { IconClose, IconTerminal, IconWarning } from "@/icons"
import { Variants, motion } from "framer-motion"
import { poppins, ubuntu, } from "./utils/Fonts"

const outerVariants: Variants = {
    closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } }
}
const inner1: Variants = {
    closed: { y: '100vh' },
    open: { y: 0, transition: { duration: 0.5, delay: 0.5 } }
}
const innerVariants: Variants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { delay: 1 } }
}

interface props { error: Error, reset: () => void }
export default function ErrorBoundary({ error, reset }: props) {

    return (
        <main className="relative text-gray-800 dark:text-gray-300 max-h-[100vh] overflow-y-hidden">
            <div className='flex min-w-full min-h-screen justify-center items-center px-4'>
                <motion.div initial='closed' animate='open' variants={inner1} className='relative p-8 rounded-3xl w-fit sm:w-35r flex flex-col overflow-hidden bg-transparent backdrop-blur-sm shadow-2xl bg-slate-200 dark:bg-slate-800 dark:shadow-slate-900 shadow-slate-300'>
                    <motion.div variants={outerVariants} initial='closed' animate='open'>
                        <motion.div variants={innerVariants} className='w-full'>
                            <IconWarning className='text-4xl md:text-6xl mx-auto text-red-500' />
                        </motion.div>
                        <motion.div variants={innerVariants} className="mt-8 bg-slate-200 dark:bg-slate-900 rounded-md overflow-hidden" style={ubuntu.style}>
                            <div className="w-full px-2 py-1 bg-slate-700/20 flex items-center gap-2">
                                <IconTerminal className="text-red-200" />
                                <span className="text-red-500">ERROR</span>
                            </div>
                            <div className="p-2 text-sm flex flex-col">
                                <p>
                                    &gt;
                                    <span className="font-semibold"> {error.name}</span>
                                    <span>: </span>
                                    <span style={ubuntu.style} className="">{error.message}</span>
                                </p>
                                <p className="mt-2">&gt; Unexpected error occurred. Wait sometime or report to the developer.</p>
                            </div>
                        </motion.div>
                        <motion.p variants={innerVariants} className='mt-6 text-sm' style={poppins.style}>

                        </motion.p>
                        <motion.div variants={innerVariants}>
                            <SendMsgBtn className="my-4" />
                            <SocialMedia classList='flex justify-center gap-4 text-white' />
                        </motion.div>
                    </motion.div>
                    <button className="w-fit h-fit" onClick={reset}>
                        <IconClose className='absolute top-2 right-2 cursor-pointer text-4xl' />
                    </button>
                </motion.div>
            </div>
            <Ring />
            <div className="fixed w-full  h-full bottom-0 left-0 -z-40">
                <div className='absolute w-full h-full inset-0 bg-gradient-to-r z-10 dark:from-[#000011] from-[#ffffff]'></div>
                <Background option='body' />
                <div className='absolute w-full h-full inset-0 bg-gradient-to-b z-10  dark:from-[#000011] from-[#ffffff]'></div>
            </div>
        </main>
    )
}