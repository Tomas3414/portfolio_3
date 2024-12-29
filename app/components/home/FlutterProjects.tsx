import { ubuntu } from "@/app/utils/Fonts";
import { IFlutterProject } from "@/interface";
import { Variants, motion } from "framer-motion";
import AnimatedHeading from "../others/AnimatedHeading";
import FlutterCard from "../others/FlutterCard";


const outerVariants = {
    open: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
    closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } }
};

const Heading: Variants = {
    closed: { opacity: 0.5 },
    open: { opacity: 1, transition: { delay: 0.2 } }
}

export default function FlutterProjects({ data }: { data: IFlutterProject[] }) {

    return (
        <div className='myContainer py-[5rem] dark:text-gray-300 text-gray-800' style={ubuntu.style}>
            <motion.div initial='closed' whileInView='open' viewport={{ once: true, amount: 0.2 }} variants={outerVariants} className="flex flex-col justify-start">
                <motion.div variants={Heading}>
                    <AnimatedHeading classList="tracking-wide text-lg" title="FLUTTER PROJECTS" />
                    <h1 className="text-4xl md:text-5xl mb-4">
                        Mobile App<span className="font-bold ml-2">Development</span>
                    </h1>
                </motion.div>
                <div className="md:px-8">
                    {data && data.map((elm) => {
                        return (
                            <div className="mt-10" key={elm.slug}>
                                <FlutterCard info={elm} />
                            </div>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    )
} 