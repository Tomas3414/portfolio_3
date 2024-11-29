
import { motion } from 'framer-motion';
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

const links = [
  { url: 'https://github.com/Moinak-Majumdar', toolTip: 'GitHub', color: '#181717', icon: <LuGithub /> },
  { url: 'https://www.linkedin.com/in/moinak-majumdar', toolTip: 'Linkedin', color: '#0A66C2', icon: <FaLinkedinIn /> },
]


interface props { classList: string }
const SocialMedia = ({ classList }: props) => {


  return (
   <section className={`${classList} flex flex-col`}>
        <div className="flex items-center justify-start w-fit gap-2">
          {links.map((curr, i) => {
            return (
              <Link href={curr.url} target="_BLANK" key={`social_media-${i}`}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-2 text-2xl rounded-md text-white"
                  style={{ backgroundColor: curr.color }} title={curr.toolTip}
                >
                  {curr.icon}
                </motion.div>
              </Link>
            )
          })}
        </div>
      </section>
  )
}

export default SocialMedia