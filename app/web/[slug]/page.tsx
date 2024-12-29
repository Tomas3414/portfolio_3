import AnimatedHeading from "@/app/components/others/AnimatedHeading";
import DevFlag from "@/app/components/others/DevFlag";
import { ServerData } from "@/app/utils/ServerData";
import { IWebProject } from "@/interface";
import { Metadata, ResolvingMetadata } from "next";
import { Ubuntu } from "next/font/google";
import Bg from "../components/Bg";
import Details from "../components/Details";

const ubuntu = Ubuntu({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });

async function fetchDetails(slug: string) {

    if (slug.includes('object') || slug.includes("Object")) return;

    const data = new ServerData({ path: 'getWeb' });

    const res = await data.request({ body: { slug } });

    if (!res.ok) {
        throw new Error(`Failed to fetch web project : ${slug}`)
    }

    return await res.json();
}

export default async function Web({ params }: { params: { slug: string } }) {

    const Data: IWebProject = await fetchDetails(params.slug);

    return (
        <>
            <DevFlag />
            <main className='relative min-h-screen'>
                <section className='myContainer pt-[4rem] pb-[2rem] dark:text-gray-300 text-gray-800'>
                    <AnimatedHeading classList="mt-8 uppercase" title={`web ${Data.type}`} />
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

    const Data: IWebProject = await fetchDetails(params.slug);

    return {
        title: `Moinak Majumdar | Web ${Data.type} - ${Data.name}`,
        description: Data.intro,
        authors: [{ name: 'Moinak Majumdar', url: 'https://www.linkedin.com/in/moinak-majumdar' }],
        creator: "Moinak Majumdar",
        publisher: "Vercel",
        metadataBase: new URL('https://moinak05.vercel.app/'),
        openGraph: {
            type: 'website',
            title: `Moinak Majumdar | ${Data.name}`,
            description: Data.intro,
            images: Data.cover,
        },
        alternates: { canonical: Data.liveUrl }
    }
}