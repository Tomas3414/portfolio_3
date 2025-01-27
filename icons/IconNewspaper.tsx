import IconProps from '@/interface/IconProps'

const IconNewspaper = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={props.className} width={props.size ?? '24'} height={props.size ?? '24'}  viewBox="0 0 512 512"><rect width="512" height="512" fill="none" /><rect width="96" height="96" x="96" y="112" fill="none" rx="16" ry="16" /><path fill="currentColor" d="M468 112h-52v304a32 32 0 0 0 32 32a32 32 0 0 0 32-32V124a12 12 0 0 0-12-12" /><path fill="currentColor" d="M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25M96 208v-96h96v96Zm224 192H96v-32h224Zm0-64H96v-32h224Zm0-64H96v-32h224Zm0-64h-96v-32h96Zm0-64h-96v-32h96Z" /></svg>

    )
}

export default IconNewspaper