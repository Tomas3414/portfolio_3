import IconProps from '@/interface/IconProps'
import React from 'react'

const IconWarning = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ?? '24'} height={props.size ?? '24'} className={props.className} style={props.style} viewBox="0 0 24 24"><path fill="currentColor" d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"></path></svg>
  )
}

export default IconWarning