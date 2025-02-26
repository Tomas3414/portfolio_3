'use client'

import { AnimatePresence, Variants, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { Context, ReactNode, createContext, useContext, useEffect, useState } from "react";


const variants: Variants = {
    hidden: { opacity: 0, scale: 1.01 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.99 }
}

const themeColors = ['#2dd4bf', '#22d3ee', '#eab308', '#22c55e', '#0ea5e9', '#ec4899', '#f97316', '#ef4444', '#a855f7', '#3b82f6', '#6366f1', '#64748b']
const gradientLight = [
    'linear-gradient(#ea98da, #5b6cf9)',
    'linear-gradient(#6fe3e1, #5257e5)',
    'linear-gradient(#e9d022, #e60b09)',
    'linear-gradient(#aefb2a, #57ebde)',
    'linear-gradient(#ffd194, #70e1f5)',
    'linear-gradient(#F4D03F, #16A085)',
]

const gradientDark = [
    'linear-gradient(#0f0c29, #302b63, #24243e)',
    'linear-gradient(45deg, #8A2387,#E94057, #F27121)',
    'linear-gradient(135deg, #4776E6, #8E54E9)',
    'linear-gradient(135deg, #40E0D0,#FF8C00,#FF0080)',
    'linear-gradient(15deg, #fc00ff, #00dbde)',
    'linear-gradient(#60efff, #0061ff)',
]

interface IThemeType { isClient: boolean, themeColor: string, themeGradient: (args?: string) => string }
let AppThemeContext: Context<IThemeType>

export default function AppTheme({ children }: { children: ReactNode }) {

    const path = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    const value: IThemeType = {
        isClient,
        themeColor: themeColors[Math.floor(Math.random() * 12)],
        themeGradient: (args) => {
            return args === 'light' ?
                gradientLight[Math.floor(Math.random() * 6)] :
                gradientDark[Math.floor(Math.random() * 6)]
        }
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

export function useAppTheme(): IThemeType {
    return useContext(AppThemeContext);
}
