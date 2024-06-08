'use client'

import { useRouter } from "next/navigation";
import Ring from "./components/others/Ring";
import SocialMedia from "./components/others/SocialMedia";
import { Background, BackgroundOption } from "./components/others/Background";
import { poppins, ubuntu } from "./utils/Fonts";
import { useAppTheme } from "./components/theme/AppTheme";



export default function Custom404() {
    const router = useRouter();
    const { themeColor } = useAppTheme()

    return (
        <main className="max-h-screen relative overflow-hidden">
            <section className='myContainer min-h-full '>
                <div className="mt-44 max-w-lg md:ml-20" style={ubuntu.style}>
                    <h1 className="text-5xl font-bold ml-6 dark:text-gray-300 text-gray-800">404 Page not found !</h1>
                    <h2 className="text-xl mt-2 ml-6 dark:text-gray-400 text-gray-700" style={poppins.style}>Sorry! the page you are looking for is temporarily unavailable or might be removed.</h2>
                    <SocialMedia classList='mt-8 ml-6 gap-4' />
                    <button onClick={() => router.back()} className="mt-8 ml-6 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 rounded-full shadow-md group" style={{borderColor: themeColor}}>
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full group-hover:translate-x-0 ease-in-out" style={{backgroundColor: themeColor}}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span style={{color: themeColor, ...poppins.style}} className="absolute flex items-center justify-center w-full h-full transition-all duration-500 transform group-hover:translate-x-full ease">Go Back</span>
                        <span className="relative invisible">Go Back</span>
                    </button>
                </div>
            </section>
            <Ring />
            <div className="fixed w-full h-full top-0 right-0 -z-40">
                <div className='absolute w-full h-full inset-0 bg-gradient-to-br z-10 dark:from-[#141e30] from-[#ffffff]'></div>
                <Background option={BackgroundOption.pattern} className="opacity-50 dark:opacity-50" />
            </div>
        </main>
    )
}