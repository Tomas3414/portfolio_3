'use client'

import loadingImg from '@/public/assets/image/loading.gif'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { useEffect } from 'react'
import AnimatedHeading from './components/others/AnimatedHeading'
import { Background, BackgroundOption } from './components/others/Background'

const poppins = Poppins({ display: 'swap', weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export default function Loading() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <main className='relative'>
            <section className='myContainer min-h-screen justify-center items-center'>
                <div className='p-6 rounded-md backdrop-blur-sm  dark:bg-slate-900/30 bg-gray-300/30 shadow-2xl dark:shadow-black shadow-gray-300 flex justify-center flex-col items-center'>
                    <div className='bg-gray-200 dark:bg-slate-800 py-1 px-2 rounded-lg mt-4 mb-14 '>
                        <AnimatedHeading title='Loading ...' classList='text-3xl' font={poppins} />
                    </div>
                    <Image src={loadingImg} alt='loading-gif' height={400} />
                </div>
            </section>
            <div className="fixed w-full  h-full bottom-0 left-0 -z-40">
                {/* <div className='absolute w-full h-full inset-0 bg-gradient-to-r z-10 dark:from-[#000011] from-[#ffffff]'></div> */}
                <Background option={BackgroundOption.pattern} className='dark:opacity-100 opacity-60' />
                <div className='absolute w-full h-full inset-0 bg-gradient-to-b z-10  dark:from-[#000011] from-[#ffffff]'></div>
            </div>
        </main>
    )
}

