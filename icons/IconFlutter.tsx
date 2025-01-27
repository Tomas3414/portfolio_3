import IconProps from '@/interface/IconProps'

const IconFlutter = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.size ?? '24'} height={props.size ?? '24'} className={props.className} style={props.style} viewBox="0 0 24 24"><path fill="currentColor" d="M5.9 15.375L2.5 12l11-11h6.775zM13.5 23l-5.925-5.925L13.5 11.15h6.775l-5.925 5.925L20.275 23z"></path></svg>

    )
}

export default IconFlutter