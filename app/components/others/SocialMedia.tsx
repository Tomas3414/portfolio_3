import { motion } from "framer-motion"
import Link from "next/link"
import { FaFacebookSquare, FaGithub, FaWhatsapp, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'

const links = [
  { url: 'https://github.com/Moinak-Majumdar', icon: <FaGithub />, toolTip: 'GitHub', color: '#181717' },
  { url: 'https://www.linkedin.com/in/moinak-majumdar', icon: <FaLinkedin />, toolTip: 'Linkedin', color: '#0A66C2' },
  { url: 'mailto:moinak2030@gmail.com', icon: <MdMarkEmailUnread />, toolTip: 'Email', color: '#bb001b' },
  { url: 'https://www.facebook.com/moinak.majumdar.9', icon: <FaFacebookSquare />, toolTip: 'Facebook', color: '#1877F2' },
  { url: 'https://api.whatsapp.com/send?phone=+919804139678&text=I%20like%20your%20work', icon: <FaWhatsapp />, toolTip: 'Whatsapp', color: '#25D366' },
  { url: 'tel:+919804139678', icon: <FaPhoneAlt />, toolTip: 'Phone', color: '#6236FF' },
]

interface props {classList: string}
const SocialMedia = ({classList}:props) => {
  return (
    <div className={classList}>
      {links.map((curr, index) => {
        return (
          <motion.button className="text-gray-500" whileHover={{ scale: 1.3, color: curr.color, transition: {duration: .5}}} whileTap={{ scale: 0.8 }} key={`${curr.toolTip}_${index}`} >
            <Link scroll={false} href={curr.url} target='_blank' title={curr.toolTip} className='text-3xl cursor-pointer'>{curr.icon}</Link>
          </motion.button>
        )
      })}
    </div>
  )
}

export default SocialMedia