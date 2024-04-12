import DevFlag from "@/app/components/others/DevFlag";
import AnimatedHeading from "@/app/components/others/AnimatedHeading";
import { Ubuntu } from "next/font/google";
import Details from "../components/Details";
import Bg from "../components/Bg";
import { Metadata, ResolvingMetadata } from "next";
import { ServerData } from "@/app/utils/ServerData";
import { webProjectModel } from "@/app/utils/models";

const ubuntu = Ubuntu({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });

async function fetchDetails(slug: string) {
    
    if(slug.includes('object') || slug.includes("Object")) return;
    
    const data = new ServerData({ path: 'getWeb' });

    const res = await data.get({ body: { slug } });

    if (!res.ok) {
        throw new Error(`Failed to fetch web project : ${slug}`)
    }

    return await res.json();
}

export default async function Web({ params }: { params: { slug: string } }) {

    const devFlag: boolean = process.env.NEXT_PUBLIC_DEV_FLAG == 'yes' ? true : false;
    const Data: webProjectModel = await fetchDetails(params.slug);


    return (
        <>
            {devFlag && <DevFlag />}
            <main className='relative min-h-screen'>
                <section className='myContainer pt-[4rem] pb-[2rem] dark:text-gray-300 text-gray-800'>
                    <AnimatedHeading classList="mt-8 uppercase" title={Data.type === 'project' ? 'web project' : 'web work'} />
                    <h1 style={ubuntu.style} className="font-bold lg:text-5xl text-4xl capitalize">{Data.name}</h1>
                    <Details Data={Data} />
                </section>
                <Bg />
            </main>
        </>
    )

}

type metaDataProps = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params, searchParams }: metaDataProps, parent: ResolvingMetadata): Promise<Metadata> {

    const Data: webProjectModel = await fetchDetails(params.slug);

    return {
        title: `Moinak Majumdar | ${Data.name}`,
        description: Data.intro,
        authors: [{ name: 'Moinak Majumdar', url: 'https://www.linkedin.com/in/moinak-majumdar' }],
        keywords: Data.tools,
        creator: "Moinak Majumdar",
        publisher: "Vercel",
        metadataBase: new URL('https://moinak05.vercel.app/'),
        openGraph: {
            type: 'website',
            title: `Moinak Majumdar | ${Data.name}`,
            description: Data.intro,
            images: Data.cover,
        }
    }
}