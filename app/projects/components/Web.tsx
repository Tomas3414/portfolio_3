'use client'

import { motion } from 'framer-motion'
import AnimatedHeading from '@/app/components/others/AnimatedHeading'
import { useAppTheme } from '@/app/components/theme/AppTheme';
import WebProjectCard from '@/app/components/others/WebProjectCard';
import { webProjectModel } from '@/app/utils/models';

const outerVariants = {
    open: { transition: { staggerChildren: 0.5, delayChildren: 0.3 }},
    closed: { transition: { staggerChildren: 0.5, staggerDirection: -1 }}
};
const Heading = {
    closed: { opacity: 0.5,},
    open: { opacity: 1, transition: {delay: 0.5} }
}

const Web = ({web}: {web: webProjectModel[]}) => {

    const {ubuntu} = useAppTheme()

    return (
        <section id='WebProjects' className='relative overflow-hidden myContainer py-[5rem]'>
            <motion.div initial='closed' whileInView='open' viewport={{ once: true, amount: 0.3 }} variants={outerVariants} className="flex flex-col justify-start">
                <motion.div variants={Heading}>
                    <AnimatedHeading classList="tracking-wide text-lg" font={ubuntu} title="WEB PROJECTS" />
                    <h1 className="text-4xl md:text-5xl mb-4" style={ubuntu.style}>
                        Learning<span className="font-bold ml-2">By Building</span>
                    </h1>
                </motion.div>
                <div>
                    {web && <div className="mt-10 px-4 xl:px-8 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
                        {web.map((curr, index) => {
                            return (
                                <WebProjectCard key={index} data={curr} />
                            )
                        })}
                    </div>}
                </div>
            </motion.div>
        </section>
    )
}

export default Web