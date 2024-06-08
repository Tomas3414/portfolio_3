'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import AnimatedHeading from "./AnimatedHeading";
import { ModeSwitch1 } from "./ModeSwitch";
import HamBurger from "./Hamburger";
import { pacifico, roboto, ubuntu } from "@/app/utils/Fonts";
import ContactForm from "./ContactForm";
import { useRef } from "react";

const link = [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'Blossoms', url: '/blossoms' }
]

export default function Navbar() {

  const pathName = usePathname();
  const modalRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <header className='absolute inset-0 h-fit py-3 min-w-full pr-4 pl-4 md:pl-10 lg:pl-16 xl:pl-36 2xl:pl-44 md:pr-32 2xl:pr-44 flex flex-wrap items-center justify-between z-40'>
        <AnimatedHeading title='moinak05' classList="hidden md:inline-block xl:text-4xl text-3xl" font={pacifico} />
        <nav className="flex items-center lg:text-xl text-base gap-4 lg:gap-6 xl:gap-8  dark:text-gray-200 text-black">
          {link.map((curr, index) => {
            return (
              <Link scroll={false} href={curr.url} key={index} style={ubuntu.style} className={`hidden capitalize md:inline-block noSelection ${pathName === curr.url ? "font-ubuntu underline underline-offset-8 cursor-pointer" : ""}`}>
                {curr.name}
              </Link>
            )
          })}
          {pathName === '/' ? <Link href='#HireMe' style={roboto.style} className='hidden md:inline-block font-semibold text-base lg:text-xl cursor-pointer px-2 py-1 rounded-md dark:bg-slate-800 bg-gray-200 dark:text-gray-300 text-gray-700'>
              Let&apos;s talk !
            </Link> : <button onClick={() => modalRef.current?.showModal()} style={roboto.style} className='hidden md:inline-block font-semibold text-base lg:text-xl cursor-pointer px-2 py-1 rounded-md dark:bg-slate-800 bg-gray-200 dark:text-gray-300 text-gray-700 w-fit outline-none'>
              Let&apos;s talk !
            </button>
          }
        </nav>
      </header>
      <ModeSwitch1 />
      <HamBurger />
      <ContactForm modalRef={modalRef} />
    </>
  )
}

