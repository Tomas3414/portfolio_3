import IconProps from "@/interface/IconProps"

const IconArrowBarRight = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={props.style} width={props.size ?? '24'} height={props.size ?? '24'} className={props.className} viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H10m10 0l-4 4m4-4l-4-4M4 4v16"/></svg>

  )
}

export default IconArrowBarRight