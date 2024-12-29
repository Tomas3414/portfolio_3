'use client'

import { AnimatePresence, Variants, motion } from "framer-motion";
import { ReactNode, useContext, createContext, Context, useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"
import { usePathname } from "next/navigation";


const variants: Variants = {
    hidden: { opacity: 0, scale: 1.01 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.99 }
}

const themeColors = ['#2dd4bf', '#22d3ee', '#eab308', '#22c55e', '#0ea5e9', '#ec4899', '#f97316', '#ef4444', '#a855f7', '#3b82f6', '#6366f1', '#64748b']

interface IThemeType { isClient: boolean, themeColor: string }
let AppThemeContext: Context<IThemeType>

export default function AppTheme({ children }: { children: ReactNode }) {

    const path = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    const value = {
        isClient,
        themeColor: themeColors[Math.floor(Math.random() * 12)],
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
