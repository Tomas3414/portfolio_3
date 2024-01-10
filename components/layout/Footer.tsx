import { Variants, motion } from 'framer-motion'
import Link from "next/link";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub, } from "react-icons/ai";
import FooterStyle from '../../styles/Footer.module.css'
import { useFont } from '@/context/FontProvider';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';


const viewport = {
    once: false,
    amount: typeof window !== 'undefined' ? (window.innerWidth > 450 ? 0.5 : 0.05) : 0.5
}
const outerVariants = {
    open: {
        transition: { staggerChildren: 0.5, delayChildren: 0.3 }
    },
    closed: {
        transition: { staggerChildren: 0.5, staggerDirection: -1 }
    }
};
const smooth: Variants = {
    closed: {
        opacity: 0
    },
    open: {
        opacity: 1
    }
}
const smooth2: Variants = {
    closed: {
        opacity: 0,
        y: -100,
    },
    open: {
        opacity: 1,
        y: 0,
        transition: { delay: .5, type: 'spring', stiffness: 300 },
    }
}
const socialLinks = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/moinak.majumdar.9",
        icon: <AiFillFacebook />,
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/moinak-majumdar",
        icon: <AiFillLinkedin />,
    },
    {
        name: "Github",
        url: "https://github.com/Moinak-Majumdar",
        icon: <AiFillGithub />
    },
];


function Footer() {

    const { ubuntu, poppins, roboto, pacifico } = useFont();
    const darkMode = useSelector((s: RootState) => s.darkMode.mode);
  const theme = useSelector((s: RootState) => s.colorTheme);

    return (
        <>
            <motion.footer initial='closed' whileInView='open' viewport={viewport} variants={outerVariants} className='w-full pt-[4rem] pl-4 md:pl-10 lg:pl-16 xl:pl-36 2xl:pl-44 flex flex-col text-white pb-5'>
                <div className={darkMode ? FooterStyle.dark : FooterStyle.light} style={roboto.style}>
                    <motion.div variants={smooth} className="w-[90%] flex md:justify-between justify-center flex-col md:flex-row">
                        <div className="flex flex-col">
                            <h2 style={ubuntu.style}>Something in mind</h2>
                            <h3 className={`${ubuntu.className} text-4xl font-bold`}>Lets talk</h3>
                        </div>
                        <div className="flex flex-col mt-4 md:mt-auto">
                            <h4 className='font-bold'>Drop a mail</h4>
                            <a href="mailto:moinak2030@gmail.com">moinak2030@gmail.com</a>
                        </div>
                        <div className="space-y-1 mt-4 md:mt-auto">
                            <p className="text-base text-left md:text-right font-bold">
                                Follow me at
                            </p>
                            <div className="flex items-center md:justify-end gap-2">
                                {socialLinks.map((link) => (
                                    <Link key={link.name} href={link.url} title={link.name} className="text-2xl" target="_blank">
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div variants={smooth2} className={`my-4 px-4 md:px-20 w-[90%] flex md:justify-between justify-center flex-col-reverse md:flex-row ${darkMode? 'text-gray-300' : 'text-gray-800'} ${roboto.className}`} >
                    <h1 style={poppins.style} className="my-auto">
                        <span>Copyright {new Date().getFullYear()} - All rights reserved.</span> <br/>
                        <span>Designed and Developed by : </span>
                        <span className={pacifico.className} style={{color: theme.val}}>moinak05</span>
                    </h1>
                    <div className="flex flex-col my-2 md:my-0">
                        <h2 className="font-bold" >Credits</h2>
                        <ul className="mt-2 list-disc list-inside" style={poppins.style}>
                            <li>
                                <Link href="http://www.freepik.com" target='_blank'>image: upklyak/Freepik</Link>
                            </li>
                            <li>
                                <Link href="https://patternpad.com/" target='_blank'>svg: patternpad, </Link>
                                <Link href="https://haikei.app/" target='_blank'>haikei</Link>
                            </li>
                            <li>
                                <Link href='https://www.framer.com/' target='_blank'>animation: framer</Link>
                            </li>
                            <li>
                                <Link href='https://nextjs.org/'  target='_blank'>platform: Next.js</Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </motion.footer>
        </>
    );
}

export default Footer;