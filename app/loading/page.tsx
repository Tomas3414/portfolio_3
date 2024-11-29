'use client'

import AnimatedHeading from '@/app/components/others/AnimatedHeading'
import { Background, BackgroundOption } from '@/app/components/others/Background'
import { comicNeue, poppins } from "@/app/utils/Fonts"
import loadingLottie from '@/public/assets/lottie/loading.json'
import Lottie from 'lottie-react'
import { useEffect } from 'react'



export default function Loading() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <main className='relative'>
            <section className='myContainer min-h-screen justify-center items-center'>
                <div className='p-6 rounded-md backdrop-blur-sm  dark:bg-slate-900/30 bg-gray-400/30 shadow-2xl dark:shadow-black shadow-gray-300 flex justify-center flex-col items-center'>
                    <div className='bg-gray-300 dark:bg-slate-800 py-1 px-2 rounded-lg mt-4'>
                        <AnimatedHeading title='Loading ...' classList='text-3xl' font={poppins} />
                    </div>
                    {/* <Image src='/assets/image/loading.gif' alt='loading-gif' className='mt-6' height={400} width={350} /> */}
                    <Lottie animationData={loadingLottie} loop={true} className='w-80' />
                    <p className='mt-4 text-sm' style={comicNeue.style}>Just a moment, preparing something special!</p>
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

