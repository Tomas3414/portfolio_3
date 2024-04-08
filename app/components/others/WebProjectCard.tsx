'use client'

import { Variants, motion } from "framer-motion";
import Image from 'next/legacy/image';
import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";
import cardStyle from '@/app/css/WebCard2.module.css'
import { CSSProperties, useState, useEffect } from "react";
import { useAppTheme } from "../theme/AppTheme";
import { useTheme } from "next-themes";
import { webProjectModel } from "@/app/utils/models";

const outerVariants: Variants = {
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2, delay: .4 } },
    closed: { transition: { staggerChildren: 0.07, staggerDirection: -1 } }
};
const innerVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { type: 'linear', stiffness: 300 } },
    closed: { y: 50, opacity: 0, transition: { type: 'linear', stiffness: 300 } }
};


const WebProjectCard = ({ data }: { data: webProjectModel }) => {
    const { poppins, ubuntu, themeColor } = useAppTheme();
    const [webCardCss, setWebCardCss] = useState<string>();
    const [shadow, setShadow] = useState<string>();
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        resolvedTheme === 'dark' ? setWebCardCss(cardStyle.darkWebCard2) : setWebCardCss(cardStyle.lightWebCard2);
        resolvedTheme === 'dark' ? setShadow("-10px -10px 10px 1px #1e293b50, 10px 10px 10px 2px #03071280") : setShadow("-10px -10px 10px 1px #ffffff80, 10px 10px 10px 2px #1e293b20");
    }, [resolvedTheme])

    return (
        <Link href={`web/${data.slug}`} scroll={false} className="relative">
            <motion.section className="relative group rounded-2xl" whileTap={{ scale: 0.9 }} style={{boxShadow: shadow}}>
                <div className="-translate-x-6 -translate-y-6 xl:-translate-x-7 xl:-translate-y-6 absolute top-0 z-20">
                    <Image src={data.cover} width={650} height={400} alt={`${data.name}-cover pic`} className="rounded-lg overflow-hidden" placeholder='blur' blurDataURL='/assets/image/imgPlaceholder.jpg' />
                </div>
                <div className={webCardCss} style={{ '--stroke-color': themeColor } as CSSProperties}  >
                    {/* take equal size for top space */}
                    <div className="opacity-0">
                        <Image src={data.cover} width={650} height={380} alt={`${data.name}-cover pic`} hidden className="rounded-lg overflow-hidden " />
                    </div>
                    <div className="z-10 h-fit">
                        <p className={`flex absolute -rotate-90 top-16 font-bold uppercase text-sm text-slate-500 ${data.type == 'project' ? '-right-[2.15rem]' : '-right-6'}`} style={ubuntu.style}>
                            {data.type == 'project' ? 'web project' : 'web work'}
                        </p>
                        <motion.div initial='closed' whileInView='open' viewport={{ once: false, amount: 0.3 }} variants={outerVariants} className="px-4 pb-4" style={poppins.style}>
                            <motion.div variants={innerVariants} className="" >
                                <p className={`-translate-y-4 xl:translate-y-0 mb-0 xl:mb-2 px-2 md:px-4 py-1 rounded-xl text-xs text-center text-white w-fit ${data.status == 'completed' ? 'bg-green-500' : 'bg-red-500'}`}>
                                    {data.status}
                                </p>
                                <AnimatedHeading title={data.name} classList="text-xl xl:text-2xl capitalize"  />
                            </motion.div>
                            <motion.p variants={innerVariants} className='mt-2'>{data.intro}</motion.p>
                            <motion.p variants={innerVariants} className='mt-4 text-sm group-hover:text-blue-500 px-4 py-2 rounded-lg w-fit dark:bg-slate-700  dark:text-white bg-gray-200 text-black'>Read More</motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </Link>
    )
}

export default WebProjectCard