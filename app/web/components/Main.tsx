'use client'

import AnimatedHeading from "@/app/components/others/AnimatedHeading"
import WebProjectCard from "@/app/components/others/WebProjectCard"
import { IWebProject } from "@/interface"
import { motion } from "framer-motion"
import { Ubuntu } from "next/font/google"
import { useEffect } from "react"


export const MainSection = ({ data }: { data: IWebProject[] }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <motion.main id='WebProjects' initial='closed' whileInView='open' viewport={viewport} transition={transition} className='relative overflow-hidden'>
      <div className='myContainer py-[5rem] rounded-lg dark:text-gray-300 text-gray-80' style={ubuntu.style}>
        <motion.div initial='closed' whileInView='open' viewport={{ once: true, amount: 0.2 }} variants={outerVariants} className="flex flex-col justify-start">
          <motion.div variants={Heading}>
            <AnimatedHeading classList="tracking-wide text-lg" title="WEB PROJECTS" />
            <h1 className="text-4xl md:text-5xl mb-4">
              Learning<span className="font-bold ml-2">By Building</span>
            </h1>
          </motion.div>
          <div className="mt-12 p-4 md:p-8 xl:p-16 rounded-lg dark:text-gray-300 text-gray-800 dark:bg-slate-800/40 bg-slate-50">
            {data && <div className="mt-16 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 relative">
              {data.map((curr, index) => {
                return (
                  <WebProjectCard key={index} data={curr} />
                )
              })}
            </div>}
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}

const ubuntu = Ubuntu({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });

const outerVariants = {
  open: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
  closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } }
};

const Heading = {
  closed: { opacity: 0.5 },
  open: { opacity: 1, transition: { delay: 0.2 } }
}

const viewport = {
  once: false,
  amount: typeof window !== 'undefined' ? (window.innerWidth > 450 ? 0.3 : 0.1) : 0.3
}

const transition = {
  closed: { staggerChildren: 0.3, staggerDirection: -1 },
  open: { staggerChildren: 0.3, delayChildren: 0.2 }
}
