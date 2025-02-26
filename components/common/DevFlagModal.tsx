'use client'

import { comicNeue, monsterRat, poppins, ubuntu } from '@/app/utils/Fonts';
import { IconError } from '@/icons';
import { useRef } from 'react';

const DevFlagModal = (props: { description: string }) => {
    const text = ['R', 'E', 'A', 'D', 'M', 'E'];
    const modalRef = useRef<HTMLDialogElement>(null);

    return (
        <section className="fixed top-0 left-0 z-50 min-h-screen w-fit flex justify-center items-center">
            <button onClick={() => modalRef.current?.showModal()} className="bg-gradient-to-b from-[#f5af19] to-[#f12711] flex flex-col py-4 px-[2px] md:px-2 rounded-lg cursor-pointer">
                <IconError className='text-xl md:text-3xl text-white mb-2 animate-pulse' />
                {text.map((curr, i) => {
                    return <p key={`${curr}+_+${i}`} className='mx-auto font-bold text-sm sm:text-base text-slate-100' style={monsterRat.style}>
                        {curr}
                    </p>
                })}
            </button>
            <dialog ref={modalRef} className='m-auto p-4 rounded-3xl w-[20rem] sm:w-30r lg:w-35r  dark:bg-gradient-to-tr dark:from-[#471069] dark:to-[#30c5d2] dark:text-slate-300 bg-gradient-to-bl from-[#f2f3e2] via-[#b2e5f8] to-[#f4b3ef] text-gray-700'>
                <h4 className='text-2xl dark:text-slate-200 text-slate-800 font-semibold' style={comicNeue.style}>Opps ! 😵😵</h4>
                <p className='mt-4' style={ubuntu.style}>This website or the backend server is currently under development, Some content&#40;s&#41; may not load or you may experienced some blank pages.</p>
                <p className='mt-2' style={ubuntu.style}>
                    I apologies for your inconvenience, I&apos;m to fix things ASAP!
                </p>
                {!!props.description &&
                    <p style={poppins.style} className='mt-4 text-xs dark:text-slate-200 text-slate-700'>{props.description}</p>
                }
                <button className='mt-6 text-xl px-4 py-2 rounded-md dark:bg-black/30 hover:dark:bg-black/40 bg-white/30 hover:bg-white/40' style={ubuntu.style} onClick={() => modalRef.current?.close()}>Close</button>
            </dialog>
        </section>
    )
}

export default DevFlagModal