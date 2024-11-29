import { Variants, motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import { MdOutlineWarning, MdOutlineHighlightOff } from 'react-icons/md'
import SocialMedia from './SocialMedia'
import { comicNeue, poppins } from '@/app/utils/Fonts'



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

interface props {
    errors: string, setErrors: Dispatch<SetStateAction<null | string>>
}
const PopupError = ({ errors, setErrors }: props) => {

    return (
        <div className='fixed top-0 left-0 flex min-w-full min-h-screen justify-center items-center z-10 px-4'>
            <motion.div initial='closed' animate='open' variants={inner1} className='relative p-8 rounded-3xl w-fit sm:w-35r flex flex-col overflow-hidden dark:bg-gradient-to-tl dark:from-[#08203e] dark:to-[#557c93] dark:shadow-[#08203e] dark:text-slate-300 bg-gradient-to-br from-[#d3f3f1] to-[#43c197] text-slate-700 shadow-2xl shadow-[#d3f3f1]'>
                <motion.div variants={outerVariants} initial='closed' animate='open'>
                    <motion.div variants={innerVariants} className='w-full'>
                        <MdOutlineWarning className='text-4xl md:text-6xl mx-auto' />
                    </motion.div>
                    <motion.h1 variants={innerVariants} className='mt-8 font-comicNeue text-xl md:text-2xl font-normal' style={comicNeue.style}>{errors}</motion.h1>
                    <motion.h2 variants={innerVariants} className='mt-6 font-ubuntu font-bold text-xl' style={poppins.style}>Wait sometime or report to the developer.</motion.h2>
                    <motion.div variants={innerVariants} className='mt-4'>
                        <SocialMedia classList='flex justify-start gap-4 text-white' />
                    </motion.div>
                </motion.div>
                <MdOutlineHighlightOff className='absolute top-2 right-2 cursor-pointer text-4xl' onClick={() => setErrors(null)} />
            </motion.div>
        </div>
    )
}

export default PopupError