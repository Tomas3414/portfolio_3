'use client'

import AnimatedHeading from "@/app/components/others/AnimatedHeading";
import { useAppTheme } from "@/app/components/theme/AppTheme";
import { photographyModel } from "@/app/utils/models";
import { motion } from "framer-motion"
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "next/image";
import { useEffect } from "react";


const outerVariants = {
    open: { transition: { staggerChildren: 0.05, delay: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const innerVariants = {
    open: { x: 0, y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150 } },
    closed: { x: 50, y: 100, opacity: 0, scale: 1.1 }
};


const Details = ({ photo }: { photo: photographyModel[] }) => {

    const { ubuntu, roboto, themeColor } = useAppTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col justify-start">
            <div>
                <AnimatedHeading classList="tracking-wide text-lg uppercase" font={ubuntu} title='Blossoms' />
                <h1 className="text-4xl md:text-5xl mb-4" style={ubuntu.style}>
                    <span className="font-bold mr-2">Fragrance of</span>
                    my rooftop
                </h1>
                <p style={roboto.style} className='text-lg mt-4 max-w-[35rem]'>Being a versatile person, I have a pretty large list of my pastimes. One of the ones I enjoy doing is gardening and clicking on good photos of those with my cell phone. <br />
                    My device - <Link className='font-bold' href='https://www.motorola.in/smartphones-motorola-one-macro/p' style={{ color: themeColor }}>Motorola One Macro</Link>
                </p>
            </div>
            <motion.div variants={outerVariants} viewport={{ once: true }} initial='closed' whileInView='open'>
                {photo && <div className="mx-auto mt-2 columns-1 md:columns-2 lg:columns-3 xl:columns-4 w-fit">
                    {photo.map((curr, i) => {
                        return (
                            <motion.div variants={innerVariants} className="group border border-white dark:border-slate-800 p-1 rounded-sm dark:bg-gray-200 bg-gray-800 w-fit mb-4" key={curr._id}>
                                <Image src={curr.url} alt={curr.name} width={280} height={380}
                                    className='rounded-sm lg:group-hover:opacity-85 duration-300'
                                    placeholder='blur' blurDataURL='/assets/image/imgPlaceholder.jpg'
                                />
                            </motion.div>
                        )
                    })}
                </div>}
            </motion.div>
        </div>
    )
}




export default Details