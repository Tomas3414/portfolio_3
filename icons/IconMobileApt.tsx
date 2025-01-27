import IconProps from '@/interface/IconProps'

const IconMobileApt = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={props.className} width={props.size ?? '24'} height={props.size ?? '24'} viewBox="0 0 1024 1024"><rect width="1024" height="1024" fill="none" /><path fill="currentColor" d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64m-8 824H288V134h448zM472 784a40 40 0 1 0 80 0a40 40 0 1 0-80 0" /></svg>

    )
}

export default IconMobileApt