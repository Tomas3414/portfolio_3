import IconProps from "@/interface/IconProps"

const IconArrowUpDown = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ?? 24} className={props.className} style={props.style} height={props.size ?? 24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3v18M6 3l4 4M6 3L2 7m16 14V3m0 18l4-4m-4 4l-4-4"></path></svg>
  )
}

export default IconArrowUpDown