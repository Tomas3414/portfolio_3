import IconProps from '@/interface/IconProps'
import React from 'react'

const IconMobile = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.size ?? '24'} height={props.size ?? '24'} className={props.className} viewBox="0 0 36 36"><rect width="36" height="36" fill="none" /><path fill="currentColor" d="M25 4H11a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-6 26h-2v-2h2Zm-8-4V6h14v20Z" className="clr-i-solid clr-i-solid-path-1" /><path fill="none" d="M0 0h36v36H0z" /></svg>

    )
}

export default IconMobile