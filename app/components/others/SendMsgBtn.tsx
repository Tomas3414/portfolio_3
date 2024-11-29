'use client'

import { poppins } from '@/app/utils/Fonts'
import  { useRef } from 'react'
import { LuSend } from 'react-icons/lu'
import SendMsgModal from './SendMsgModal'

interface props {className?: string}

const SendMsgBtn = (props: props) => {

    const modalRef = useRef<HTMLDialogElement>(null)

    return (
        <>
            <button onClick={() => modalRef.current?.showModal()} className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-full shadow-2xl w-fit group ${props.className}`} title='Contact form'>
                <span className="absolute inset-0 w-full h-full transition duration-500 ease-linear opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, #61f4de, #6e78ff)' }}></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-black dark:from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black dark:from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-black dark:from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-black dark:from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-black dark:border-white rounded-md opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black dark:bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <LuSend className='relative mr-2 text-slate-700 dark:text-slate-300 group-hover:text-white text-lg' />
                <span className="relative text-slate-700 dark:text-slate-300 group-hover:text-white font-semibold text-sm" style={poppins.style}>Send Message</span>
            </button>
            <SendMsgModal modalRef={modalRef} />
        </>
    )
}

export default SendMsgBtn