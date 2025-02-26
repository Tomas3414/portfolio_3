"use client"

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes"
import { useAppTheme } from "../theme/AppTheme";

function ModeSwitch1() {
    const { resolvedTheme, setTheme } = useTheme();
    const {isClient} = useAppTheme()


    if (isClient) {
        if (resolvedTheme === 'dark') {
            return (
                <div className='absolute top-0 right-16 mt-2 z-40 bg-slate-900/70 p-[9px] rounded-full hidden md:inline'>
                    <DarkModeSwitch
                        checked={true}
                        onChange={() => setTheme('light')}
                        size={28}
                    />
                </div>
            )
        }

        if (resolvedTheme === 'light') {
            return (
                <div className='absolute top-0 right-16 mt-2 z-40 bg-slate-100/50 p-[9px] rounded-full hidden md:inline'>
                    <DarkModeSwitch
                        checked={false}
                        onChange={() => setTheme('dark')}
                        size={28}
                    />
                </div>
            )
        }
    } else {
        return <></>
    }
}

function ModeSwitch2() {
    const { resolvedTheme, setTheme } = useTheme();

    if (resolvedTheme === 'dark') {
        return (
            <div onClick={() => setTheme('light')} className='bg-slate-900/70 shadow-md shadow-black p-2 rounded-lg flex justify-center items-center cursor-pointer'>
                <p className='capitalize mr-3 font-semibold'>{`${resolvedTheme} mode`}</p>
                <DarkModeSwitch
                    checked={true}
                    onChange={() => setTheme('light')}
                    size={35}
                />
            </div>
        )
    }

    if (resolvedTheme === 'light') {
        return (
            <div onClick={() => setTheme('dark')} className='bg-slate-200/50 shadow-md shadow-gray-700 p-2 rounded-lg flex justify-center items-center cursor-pointer'>
                <p className='capitalize mr-3 font-semibold'>{`${resolvedTheme} mode`}</p>
                <DarkModeSwitch
                    checked={false}
                    onChange={() => setTheme('dark')}
                    size={35}
                />
            </div>
        )
    }
}


export { ModeSwitch1, ModeSwitch2 }