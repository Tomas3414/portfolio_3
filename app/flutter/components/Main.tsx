'use client'

import FlutterProjects from '@/components/home/FlutterProjects'
import { IFlutterProject } from '@/interface'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const viewport = {
  once: false,
  amount: typeof window !== 'undefined' ? (window.innerWidth > 450 ? 0.3 : 0.1) : 0.3
}

const transition = {
  closed: { staggerChildren: 0.3, staggerDirection: -1 },
  open: { staggerChildren: 0.3, delayChildren: 0.2 }
}

const MainSection = ({data}: {data: IFlutterProject[]}) => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <motion.main id='FlutterProjects' initial='closed' whileInView='open' viewport={viewport} transition={transition} className='relative overflow-hidden'>
      <FlutterProjects data={data} />
    </motion.main>
  )
}

export default MainSection