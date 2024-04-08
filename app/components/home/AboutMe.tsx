import { motion } from 'framer-motion'
import AnimatedHeading from '../others/AnimatedHeading'
import { Background, BackgroundOption } from '../others/Background'
import { Poppins, Roboto, Ubuntu } from 'next/font/google';

const roboto = Roboto({ display: 'swap', weight: ['400', '500', '700'], subsets: ['latin'] });
const ubuntu = Ubuntu({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });
const poppins = Poppins({ display: 'swap', weight: ['400', '500', '600', '700'], subsets: ['latin'] })

interface props { themeColor: string }
const AboutMe = ({ themeColor }: props) => {

  return (
    <>
      <div className="myContainer p-10 z-10 dark:text-gray-200 text-gray-800">
        <div className="flex flex-col w-full lg:text-lg">
          <AnimatedHeading classList="tracking-wide text-lg" title='ABOUT ME' />
          <h1 className="text-4xl lg:text-5xl mb-4" style={ubuntu.style}>
            A small<span className="font-bold ml-2">Introduction</span>
          </h1>
          <article style={poppins.style}>
            <p className="dark:text-gray-400 text-gray-700">
              Hey, this is <span style={{ color: themeColor }}> Moinak Majumdar</span>, a self taught developer. Currently pursuing Masters in Computer Application [MCA] from <span style={{ color: themeColor }}>Maulana Abul Kalam Azad University of Technology</span>, West Bengal, India.
              <br /><span className="mt-2">I am highly motivated about learning multiple programming languages and framework. I have been passionate about UI/UX design and fullstack development since my early college days. But I am Still learning lot of things in design and development.</span>
            </p>
          </article>
          <h2 className="mt-4 text-2xl font-bold" style={ubuntu.style}>Timeline</h2>
          <motion.ul initial='closed' whileInView='open' viewport={{ once: true, amount: 0.3 }} variants={leftOuterVariants} className="dark:text-gray-400 text-gray-700">
            {timeline.map((curr, index) => {
              return (
                <motion.li variants={leftInnerVariants} key={index} className='mt-4  flex flex-col pl-5 border-l-2 dark:border-slate-600 border-slate-700'>
                  <h1 className={`${poppins.className} text-sm`} style={{ color: themeColor }}>{curr.date}</h1>
                  <h2 className='text-xl lg:text-2xl font-bold dark:text-gray-300 text-gray-700' style={ubuntu.style}>{curr.name}</h2>
                  <p className="mt-2" style={roboto.style}>{curr.from}</p>
                  <ul className="list-disc list-inside mt-2">
                    {curr.sub && <li>
                      <span style={ubuntu.style} className="font-bold mr-1">Course :</span>
                      <span style={roboto.style}>{curr.sub}</span>
                    </li>}
                    <li style={ubuntu.style}>
                      <span className="font-bold mr-1">Grade :</span>
                      <span className='font-bold'>{curr.grade}</span>
                    </li>
                  </ul>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
      {/* background */}
      <div className="absolute w-full h-full top-0 left-0  -z-10">
        {/* <div className='absolute w-full h-full inset-0 bg-gradient-to-l z-10 dark:from-[#000011] from-[#ffffff] to-transparent'></div> */}
        <Background option={BackgroundOption.pattern} className='opacity-20 dark:opacity-70' />
        <div className='absolute w-full h-full inset-0 bg-gradient-to-t z-10 dark:from-[#000011] from-[#ffffff] to-transparent'></div>
      </div>
      <div className='w-full overflow-hidden'>
        <motion.div variants={Right} transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }} className='absolute top-[30%] -right-32 lg:right-32 w-80 lg:w-[40%] h-12 lg:h-20 rounded-full dark:bg-gradient-to-l dark:to-[#ff1b6b] dark:from-[#45caff] dark:blur-[80px] bg-gradient-to-t from-pink-200 to-indigo-200 blur-[40px]'></motion.div>
        <motion.div variants={Right2} transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }} className='absolute top-[45%] lg:top-[30%] -right-32  lg:right-32 w-80 h-16 rounded-xl bg-gradient-to-b dark:from-blue-500 dark:to-blue-500 dark:blur-[80px]  from-cyan-200 to-blue-200 blur-[40px]'></motion.div>
      </div>
    </>
  )
}


export default AboutMe


const Right = {
  closed: { x: 0, y: -50, rotate: '-30deg', opacity: 0},
  open: { x: -350, y: 150, rotate: '-40deg', opacity: 1 }
}
const Right2 = {
  closed: { x: 150, y: 50, opacity: 0, rotate: '-30deg' },
  open: { x: -350, y: 300, opacity: 1, rotate: '-40deg' }
}

const leftOuterVariants = {
  open: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
  closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } }
};
const leftInnerVariants = {
  open: { y: 0, opacity: 1, },
  closed: { y: -50, opacity: 0, }
}

const timeline = [
  {
    name: "Graduation",
    sub: 'OOP, computer system architecture, operating system, data structure and algorithm, database management systems, computer networks, fundamentals of artificial intelligence, digital image processing and computer graphics.',
    date: 'jun 2019 - july 2022',
    from: 'Completed B.Sc computer science from Barrackpore Rastraguru Surendranath College (West Bengal State University), West Bengal.',
    grade: '9.59 (CGPA)'
  },
  {
    name: 'Higher Secondary',
    sub: null,
    date: 'jun 2017 - mar 2019',
    from: 'Completed higher secondary from Ramkrishna Vivekananda Mission Vidyabhavan (West Bengal Council of Higher Secondary Education)',
    grade: '70%'
  },
  {
    name: 'Secondary',
    sub: null,
    date: 'jan 2016 - mar 2017',
    from: 'Completed 10th board from Ramkrishna Vivekananda Mission Vidyabhavan (West Bengal Board of Secondary Education)',
    grade: '77%'
  }
]
