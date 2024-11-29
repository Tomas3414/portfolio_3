'use client'

import { poppins, ubuntu } from "@/app/utils/Fonts";
import { Fleur_De_Leah } from 'next/font/google';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useRef } from "react";
import AnimatedHeading from "./AnimatedHeading";
import HamBurger from "./Hamburger";
import { ModeSwitch1 } from "./ModeSwitch";
import SendMsgModal from "./SendMsgModal";

const fleurDeLeah = Fleur_De_Leah({ display: "swap", weight: ['400'], subsets: ['latin'] })

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
        <AnimatedHeading title='moinak05' classList="hidden md:inline-block xl:text-5xl text-4xl" font={fleurDeLeah} />
        <nav className="flex items-center lg:text-xl text-base gap-4 lg:gap-6 xl:gap-8  dark:text-gray-200 text-black">
          {link.map((curr, index) => {
            return (
              <Link scroll={false} href={curr.url} key={index} style={ubuntu.style} className={`hidden capitalize md:inline-block noSelection ${pathName === curr.url ? "font-ubuntu underline underline-offset-8 cursor-pointer" : ""}`}>
                {curr.name}
              </Link>
            )
          })}
          {pathName === '/' ? <Link href='#HireMe' style={poppins.style} className='hidden md:inline-block font-semibold text-base lg:text-xl cursor-pointer px-2 py-1 rounded-md dark:bg-slate-800 bg-gray-200 dark:text-gray-300 text-gray-700'>
            Let&apos;s talk !
          </Link> : <button onClick={() => modalRef.current?.showModal()} style={poppins.style} className='hidden md:inline-block font-semibold text-base lg:text-xl cursor-pointer px-2 py-1 rounded-md dark:bg-slate-800 bg-gray-200 dark:text-gray-300 text-gray-700 w-fit outline-none'>
            Let&apos;s talk !
          </button>
          }
        </nav>
      </header>
      <ModeSwitch1 />
      <HamBurger />
      <SendMsgModal modalRef={modalRef} />
    </>
  )
}

