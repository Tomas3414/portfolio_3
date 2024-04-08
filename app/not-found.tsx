'use client'

import { useRouter } from "next/navigation";
import Button from "./components/others/Button";
import Ring from "./components/others/Ring";
import SocialMedia from "./components/others/SocialMedia";
import { useAppTheme } from "./components/theme/AppTheme";
import { Background, BackgroundOption } from "./components/others/Background";



export default function Custom404() {
    const { ubuntu, poppins } = useAppTheme();
    const router = useRouter();
    return (
        <main className="max-h-screen relative overflow-hidden">
            <section className='myContainer min-h-full dark:text-gray-300 text-gray-800'>
                <div className="mt-44 max-w-md md:ml-20" style={ubuntu.style}>
                    <h1 className="text-6xl font-bold ml-6">404 Page not found !</h1>
                    <h2 className="text-2xl mt-2 ml-6" style={poppins.style}>Sorry! the page you are looking for is temporarily unavailable or might be removed.</h2>
                    <SocialMedia classList='flex mt-8 gap-6 ml-6' />
                    <Button type='button' className='py-8' onClick={() => router.back()}>
                        <span style={poppins.style}>Go Back</span>
                    </Button>
                </div>
            </section>
            <Ring />
            <div className="fixed w-full h-full top-0 right-0 -z-40">
                <div className='absolute w-full h-full inset-0 bg-gradient-to-b z-10 dark:from-[#141e30] from-[#ffffff]'></div>
                <Background option={BackgroundOption.pattern} className="opacity-50 dark:opacity-80" />
            </div>
        </main>
    )
}