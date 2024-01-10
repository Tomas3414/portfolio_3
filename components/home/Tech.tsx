import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { IoDesktopOutline, IoServerSharp } from 'react-icons/io5'
import { AiFillApi, AiFillSetting, AiOutlineMobile } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import Bg from '../tools/Bg'
import AnimatedHeading from '../tools/AnimatedHeading'
import { useFont } from '@/context/FontProvider'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const rightOuterVariants = {
    open: {
        transition: { staggerChildren: 0.05, delayChildren: 0.5 }, delay: 0.3
    },
    closed: {
        transition: { staggerChildren: 0.07, staggerDirection: -1 }
    }
};
const rightInnerVariants: Variants = {
    open: {
        x: 0, scale: 1,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    },
    closed: {
        x: 200, scale: 1.2,
        opacity: 0,
        transition: { type: 'spring', stiffness: 100 }
    }
}

const Heading = {
    closed: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {
            delay: 0.3
        }
    }
}

const Left = {
    closed: {
        x: 10,
    },
    open: {
        x: -10,
    }
}

const compo = [
    { name: 'Frontend Development', tools: 'HTML, CSS, TypeScript, Tailwind Css, React.js, Next.js', logo: <IoDesktopOutline /> },
    { name: 'Backend Development', tools: 'PHP, Node.js, Express.js, REST APIs', logo: <AiFillApi /> },
    { name: 'Mobile App Development', tools: 'Dart/Flutter  ', logo: <AiOutlineMobile /> },
    { name: 'Database', tools: 'Mongo Db, MySQL', logo: <IoServerSharp /> },
    { name: 'Tech Stack', tools: 'MERN stack, JAM stack', logo: <FiPackage /> },
    { name: 'Others', tools: 'Firebase, Vercel, Netlify, Heroku, Git, GitHub, Figma, Canva', logo: <AiFillSetting /> }
]


const Tech = () => {

    const { ubuntu, poppins, roboto } = useFont();
    const darkMode = useSelector((s: RootState) => s.darkMode.mode);
    const theme = useSelector((s: RootState) => s.colorTheme);

    return (
        <>
            <div className={`myContainer py-[4rem] ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
                    <motion.div variants={Left} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} className='flex items-center'>
                        <Image src='/assets/image/tools2.png' height={600} width={800} alt='image.png' />
                    </motion.div>
                    <motion.div initial='closed' whileInView='open' viewport={{ once: false, amount: 0.1 }} variants={rightOuterVariants} className='flex flex-col mt-10 lg:mt-0 w-full lg:w-1/2'>
                        <motion.div variants={Heading}>
                            <AnimatedHeading classList="tracking-wide text-lg" title='TOOLS & TECH' />
                            <h1 className="text-4xl md:text-5xl mb-4" style={ubuntu.style}>
                                My Personal<span className="font-bold ml-2">Favorites</span>
                            </h1>
                        </motion.div>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 w-full px-auto md:px-0 mt-4'>
                            {compo.map((curr, index) => {
                                return (
                                    <motion.div variants={rightInnerVariants} key={index} className='flex flex-col w-42 md:w-36'>
                                        <h1 className='text-3xl' style={{ color: theme.val }}>{curr.logo}</h1>
                                        <h2 className='text-xl font-semibold' style={poppins.style}>{curr.name}</h2>
                                        <p className='mt-4' style={roboto.style}>{curr.tools}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute w-full h-full top-0 right-0  -z-10">
                <div className={`absolute w-full h-full inset-0 bg-gradient-to-b z-10 ${darkMode ? 'from-[#00001180]' : 'from-white'} to-transparent`}></div>
                <Bg
                    alt="landing pattern"
                    src={darkMode ? '/assets/svg/body-dark.svg' : '/assets/svg/body-lite.svg'}
                />
                <div className={`absolute w-full h-full inset-0 bg-gradient-to-r z-10 ${darkMode ? 'from-[#00001180]' : 'from-white'}`}></div>
            </div>
        </>
    )
}

export default Tech


