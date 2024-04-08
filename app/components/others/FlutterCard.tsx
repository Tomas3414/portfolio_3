
import { Variants, motion } from "framer-motion";
import Image from "next/legacy/image";
import AnimatedHeading from "./AnimatedHeading";
import Link from "next/link";
import { Poppins, Ubuntu } from "next/font/google";
import { flutterProjectModel } from "@/app/utils/models";


const ubuntu = Ubuntu({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });
const poppins = Poppins({ display: 'swap', weight: ['400', '500', '600', '700'], subsets: ['latin'] })

const outerVariants: Variants = {
  open: { transition: { staggerChildren: 0.1, delayChildren: 0.5, delay: .4 } },
  closed: { transition: { staggerChildren: 0.07, staggerDirection: -1 } }
};
const innerVariants: Variants = {
  open: { y: 0, opacity: 1, transition: { type: 'linear', stiffness: 150 } },
  closed: { y: 50, opacity: 0, }
};


const FlutterCard = ({ info }: { info: flutterProjectModel }) => {

  return (
    <Link href={`flutter/${info.slug}`} scroll={false} className='flex flex-col-reverse md:flex-row justify-start group rounded-xl dark:bg-slate-800 dark:text-gray-300 dark:shadow-black bg-gray-100 text-gray-800 shadow-slate-400'>
      <motion.div className="p-6 flex flex-col w-full md:w-1/2" initial='closed' whileInView='open' viewport={{ once: false, amount: 0.3 }} variants={outerVariants}>
        <motion.div variants={innerVariants} className="flex items-center">
          <AnimatedHeading classList="text-2xl md:text-3xl" title="PixelPerks" />
          <p className={`my-auto ml-4 px-4 py-1 rounded-xl text-xs text-center text-white ${info.status == 'completed' ? 'bg-green-500' : 'bg-red-500'}`}>{info.status}</p>
        </motion.div>
        <motion.p variants={innerVariants} className="mt-4 text-xl" style={ubuntu.style}>{info.intro}</motion.p>
        <motion.p variants={innerVariants} className="mt-4 line-clamp-4 2xl:line-clamp-6 lg:line-clamp-4 md:line-clamp-1" style={poppins.style} dangerouslySetInnerHTML={{ __html: info.description }}></motion.p>
        <motion.p variants={innerVariants} className='mt-6 lg:mt-auto text-sm group-hover:text-blue-500 px-4 py-2 rounded-md w-fit dark:bg-slate-700  dark:text-white bg-slate-200 text-black'>Read More</motion.p>
      </motion.div>
      <div className="w-full md:w-1/2">
        <div className="m-3 rounded-l-xl md:rounded-l-none rounded-r-xl overflow-hidden">
          <Image src={info.cover} width={640} height={360} layout="responsive" alt="Card-Background" className="md:grayscale md:group-hover:grayscale-0 ease-linear duration-500  md:group-hover:scale-105" placeholder='blur' blurDataURL='/assets/image/imgPlaceholder.jpg' />
        </div>
      </div>
    </Link>
  )
}

export default FlutterCard