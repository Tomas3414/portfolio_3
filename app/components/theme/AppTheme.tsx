'use client'

import { AnimatePresence, Variants, motion } from "framer-motion";
import { ReactNode, useContext, createContext, Context, useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"
import { usePathname } from "next/navigation";
import { Roboto, Ubuntu, Comic_Neue, Poppins, Lato, Pacifico } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font';

const roboto = Roboto({ display: 'swap', weight: ['400', '500', '700'], subsets: ['latin'] });
const ubuntu = Ubuntu({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });
const poppins = Poppins({ display: 'swap', weight: ['400', '500', '600', '700'], subsets: ['latin'] });
const comicNeue = Comic_Neue({ display: 'swap', weight: ['700'], subsets: ['latin'] });
const lato = Lato({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });
const pacifico = Pacifico({ display: 'swap', weight: ['400'], subsets: ['latin'] });

const variants: Variants = {
    hidden: { opacity: 0, scale: 1.01 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.99 }
}

const themeColors = ['#2dd4bf', '#22d3ee', '#eab308', '#22c55e', '#0ea5e9', '#ec4899', '#f97316', '#ef4444', '#a855f7', '#3b82f6', '#6366f1', '#64748b']

type appThemeType = { isClient: boolean ,themeColor: string, roboto: NextFont, ubuntu: NextFont, comicNeue: NextFont, poppins: NextFont, lato: NextFont, pacifico: NextFont }
let AppThemeContext: Context<appThemeType>

export default function AppTheme({ children }: { children: ReactNode }) {

    const path = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    const value = {
        isClient,
        themeColor: themeColors[Math.floor(Math.random() * 12)],
        roboto, ubuntu, comicNeue, poppins, lato, pacifico,
    }

    AppThemeContext = createContext(value);

    return (
        <AppThemeContext.Provider value={value}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
                <AnimatePresence mode="wait">
                    <motion.section key={path} variants={variants} initial='hidden' animate='visible' exit='exit'
                        transition={{ duration: 0.5, }}>
                        {children}
                    </motion.section>
                </AnimatePresence>
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}

export function useAppTheme() {
    return useContext(AppThemeContext);
}
