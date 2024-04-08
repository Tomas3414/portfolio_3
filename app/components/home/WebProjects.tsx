import { motion } from 'framer-motion'
import AnimatedHeading from '../others/AnimatedHeading'
import { Ubuntu } from 'next/font/google';
import WebProjectCard from '../others/WebProjectCard';
import { webProjectModel } from '@/app/utils/models';

const ubuntu = Ubuntu({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });

const outerVariants = {
    open: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
    closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } }
};

const Heading = {
    closed: { opacity: 0.5 },
    open: { opacity: 1, transition: { delay: 0.2 } }
}

export default function WebProjects({data}: {data: webProjectModel[]}) {

    return (
        <div className='myContainer my-4 md:my-9 xl:my-16 2xl:my-36 ' style={ubuntu.style}>
            <motion.div initial='closed' whileInView='open' viewport={{ once: true, amount: 0.2 }} variants={outerVariants} className="flex flex-col justify-start">
                <motion.div variants={Heading}>
                    <AnimatedHeading classList="tracking-wide text-lg" title="WEB PROJECTS" />
                    <h1 className="text-4xl md:text-5xl mb-4">
                        Learning<span className="font-bold ml-2">By Building</span>
                    </h1>
                </motion.div>
                <div className='mt-4 p-4 md:p-8 xl:p-16 rounded-lg dark:text-gray-300 text-gray-800 dark:bg-slate-800/40 bg-slate-50'>
                    {data && <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 relative">
                        {data.map((curr, index) => {
                            return (
                                <WebProjectCard key={index} data={curr} />
                            )
                        })}
                    </div>}
                </div>
            </motion.div>
        </div>
    )
}