import IconProps from "@/interface/IconProps"

const IconReload = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ?? '24'} height={props.size ?? '24'} className={props.className} viewBox="0 0 8 8"><rect width="8" height="8" fill="none"/><path fill="currentColor" d="M4 0C1.8 0 0 1.8 0 4s1.8 4 4 4c1.1 0 2.12-.43 2.84-1.16l-.72-.72c-.54.54-1.29.88-2.13.88c-1.66 0-3-1.34-3-3s1.34-3 3-3c.83 0 1.55.36 2.09.91L4.99 3h3V0L6.8 1.19C6.08.47 5.09 0 3.99 0z"/></svg>

  )
}

export default IconReload