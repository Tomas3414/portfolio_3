'use client'

import { Background, BackgroundOption } from '@/app/components/others/Background'


const Bg = () => {
    return (
        <div className="fixed w-full md:w-1/2 h-full top-0 left-0 -z-10">
            <div className='absolute w-full h-full inset-0 bg-gradient-to-l z-10 dark:from-[#000011] from-[#ffffff]'></div>
            <Background option={BackgroundOption.pattern} className='opacity-70 dark:opacity-100' />
            <div className='absolute w-full h-full inset-0 bg-gradient-to-t z-10 dark:from-[#000011] from-[#ffffff]'></div>
        </div>
    )
}

export default Bg