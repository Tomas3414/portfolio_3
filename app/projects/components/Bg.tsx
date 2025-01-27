'use client'

import { Background } from "@/app/components/others/Background"

const Bg = () => {
    return (
        <div className="fixed w-full lg:w-1/3 h-full top-0 right-0 -z-10">
            <div className='absolute w-full h-full inset-0 bg-gradient-to-t z-10 dark:from-[#000011] from-[#ffffff]'></div>
            <Background option='pattern' />
            <div className='absolute w-full h-full inset-0 bg-gradient-to-r z-10 dark:from-[#000011] from-[#ffffff]'></div>
        </div>
    )
}

export default Bg