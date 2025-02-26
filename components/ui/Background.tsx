'use client'

import bodyDark from '@/public/assets/svg/body-dark.svg'
import bodyLight from '@/public/assets/svg/body-light.svg'
import patternDark from '@/public/assets/svg/pattern-dark.svg'
import patternLight from '@/public/assets/svg/pattern-light.svg'
import { useTheme } from 'next-themes'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'


interface props {
    option: "body" | 'pattern', className?: string, w?: number, h?: number, layout?: any, position?: string, objFit?: any
}

function Background({ option, className = "", w, h, layout, position, objFit }: props) {
    const [Loading, setLoading] = useState(true);
    const [source, setSource] = useState<string>('');
    const [isClient, setIsClient] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setIsClient(true);
    }, [])

    useEffect(() => {
        if (resolvedTheme === 'dark') {
            option === 'body' ? setSource(bodyDark) : setSource(patternDark);
        } else {
            option === 'body' ? setSource(bodyLight) : setSource(patternLight);
        }
    }, [resolvedTheme, option])

    if(isClient) {
        return (
            <Image
                src={source}
                alt="background-svg-pattern"
                objectFit={objFit || "cover"}
                objectPosition={position || "center"}
                layout={layout || "fill"}
                height={h}
                width={w}
                loading="eager"
                className={`noSelection ${className} ${Loading ? "cursor-progress" : ""}`}
                onLoadingComplete={() => setLoading(false)}
                onDragStart={(e) => { e.preventDefault() }}
                priority={true}
                placeholder='blur'
                blurDataURL={resolvedTheme === 'dark' ? patternDark : patternLight}
            />
        )
    } else {
        return <></>
    }


}

export { Background }

