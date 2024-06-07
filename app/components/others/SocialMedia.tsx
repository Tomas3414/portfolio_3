'use client'

import { motion } from 'framer-motion'
import Link from "next/link"
import { LuGithub, LuPhoneForwarded, LuSend } from "react-icons/lu";
import { FaLinkedinIn, FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { robotoMono } from "@/app/utils/Fonts";
import { useRef } from 'react';
import ContactForm from './ContactForm';

const links = [
  { url: 'https://github.com/Moinak-Majumdar', toolTip: 'GitHub', color: '#181717', icon: <LuGithub /> },
  { url: 'https://www.linkedin.com/in/moinak-majumdar', toolTip: 'Linkedin', color: '#0A66C2', icon: <FaLinkedinIn /> },
  { url: 'https://www.facebook.com/moinak.majumdar.9', toolTip: 'Facebook', color: '#1877F2', icon: <FaFacebookF /> },
  { url: 'https://api.whatsapp.com/send?phone=+919804139678&text=I%20like%20your%20work', toolTip: 'Whatsapp', color: '#25D366', icon: <FaWhatsapp /> },
]


interface props { classList: string }
const SocialMedia = ({ classList }: props) => {

  const modalRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <section className={`${classList} flex flex-col`}>
        <button onClick={() => modalRef.current?.showModal()} className="flex items-center dark:text-slate-300 text-slate-700 group cursor-pointer outline-none" title='Contact form'>
          <LuSend className='text-2xl group-hover:text-green-500 duration-500 ease-in-out' />
          <span style={robotoMono.style}>: Send message</span>
        </button>
        <Link href="mailto:moinak2030@gmail.com" title="Email" className="flex items-center dark:text-slate-300 text-slate-700 group" target="_BLANK">
          <BiLogoGmail className="text-2xl group-hover:text-[#bb001b] duration-500 ease-in-out" />
          <span style={robotoMono.style}>: moinak2030@gmail.com</span>
        </Link>
        <Link href="tel:+919804139678" title="Phone" className="flex items-center dark:text-slate-300 text-slate-700 group" target="_BLANK">
          <LuPhoneForwarded className="text-2xl duration-500 ease-in-out group-hover:text-[#6236ff]" />
          <span style={robotoMono.style}>: +91-9804139678</span>
        </Link>
        <div className="flex items-center justify-start w-fit gap-2">
          {links.map((curr, i) => {
            return (
              <Link href={curr.url} target="_BLANK" key={`social_media-${i}`}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-2 text-2xl rounded-md text-white"
                  style={{ backgroundColor: curr.color }} title={curr.toolTip}
                >
                  {curr.icon}
                </motion.div>
              </Link>
            )
          })}
        </div>
      </section>
      <ContactForm modalRef={modalRef} />
    </>
  )
}

export default SocialMedia