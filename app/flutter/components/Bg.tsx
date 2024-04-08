'use client'

import { Background, BackgroundOption } from '@/app/components/others/Background'


const Bg = () => {
    return (
        <div className="fixed w-full  h-full bottom-0 left-0 -z-10">
            <div className='absolute w-full h-full inset-0 bg-gradient-to-r z-10 dark:from-[#000011] from-[#ffffff]'></div>
            <Background option={BackgroundOption.body} />
            <div className='absolute w-full h-full inset-0 bg-gradient-to-b z-10  dark:from-[#000011] from-[#ffffff]'></div>
        </div>
    )
}

export default Bg