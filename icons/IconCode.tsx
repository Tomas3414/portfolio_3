import IconProps from '@/interface/IconProps'

const IconCode = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ?? '24'} height={props.size ?? '24'} className={props.className} viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="m.586 12l4.95-4.95L6.95 8.464L3.414 12l3.536 3.536l-1.414 1.414zm8.201 8.728l4.486-17.94l1.94.485l-4.485 17.94zm8.263-5.192L20.586 12L17.05 8.464l1.415-1.414l4.95 4.95l-4.95 4.95z"/></svg>

  )
}

export default IconCode