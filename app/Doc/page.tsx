'use client'

import AnimatedHeading from "@/app/components/others/AnimatedHeading";
import DevFlag from "@/app/components/others/DevFlag";
import Ring from "@/app/components/others/Ring";
import { useAppTheme } from "@/app/components/theme/AppTheme";
import { Background, BackgroundOption } from "@/app/components/others/Background";


export default function Doc() {

    const { roboto, poppins, themeColor } = useAppTheme();
    const origin = typeof window != 'undefined' ? window.location.origin : '';


    return (
        <>
            <DevFlag />
            <main className='relative max-h-screen overflow-hidden'>
                <div className='myContainer flex justify-center items-center min-h-screen  dark:text-gray-300 text-gray-800'>
                    <div className='p-6 rounded-md backdrop-blur-sm  dark:bg-slate-900/30 bg-gray-100/30 shadow-2xl dark:shadow-black shadow-gray-200'>
                        <AnimatedHeading classList="mt-8 uppercase text-3xl" title='Page Replaced' />
                        <article style={roboto.style} className="md:max-w-xl">
                            <h1 style={poppins.style} className='text-2xl font-semibold'>Can&apos;t find web project?</h1>
                            <p className='text-lg mt-4'>
                                I hope this message finds you well. I want to inform you about an important update regarding this platform. The route name <span style={{ color: themeColor }} className='font-bold'>Doc</span> has been updated to <span style={{ color: themeColor }} className='font-bold '>Web</span> to better reflect our services.
                            </p>
                            <p className='mt-4'>
                                <span className='font-bold p-1 mr-2 rounded-md dark:bg-gray-800 bg-gray-200' style={{ color: themeColor }}>Old route : </span>
                                <span className="font-semibold">{`${origin}/Doc/WEB_PROJECT`}</span>
                            </p>
                            <p className="mt-2">
                                <span className='font-bold p-1 mr-2 rounded-md dark:bg-gray-800 bg-gray-200' style={{ color: themeColor }}>New route : </span>
                                <span className="font-semibold">{`${origin}/Web/WEB_PROJECT`}</span>
                            </p>
                            <p className="mt-8 text-lg">Thank you for your understanding and continued support.</p>
                        </article>

                    </div>
                </div>
                <Ring />
                <div className="fixed w-full  h-full top-0 left-0 -z-40">
                    <div className='absolute w-full h-full inset-0 bg-gradient-to-l z-10  dark:from-[#000011] from-[#ffffff]'></div>
                    <Background option={BackgroundOption.pattern} className="opacity-70 dark:opacity-100" />
                    <div className='absolute w-full h-full inset-0 bg-gradient-to-t z-10  dark:from-[#000011] from-[#ffffff]'></div>
                </div>
            </main>
        </>
    )
}

