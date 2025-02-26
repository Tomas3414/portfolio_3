import { ServerData } from "@/app/utils/ServerData";
import DevFlag from "@/components/common/DevFlag";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import IFlutterProject from "@/interface/flutterProject";
import { Metadata, ResolvingMetadata } from "next";
import { Ubuntu } from "next/font/google";
import Bg from "../components/Bg";
import Details from "../components/Details";

const ubuntu = Ubuntu({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });

async function fetchDetails(slug: string) {
    if (slug.toLowerCase().includes('object')) return;

    const data = new ServerData({ path: 'getFlutter' });

    const res = await data.request({ body: { slug } });

    if (!res.ok) {
        throw new Error(`Failed to fetch flutter project : ${slug}`)
    }

    return await res.json();
}

export default async function Flutter({ params }: { params: { slug: string } }) {

    const devFlag: boolean = process.env.NEXT_PUBLIC_DEV_FLAG == 'yes' ? true : false;
    const Data: IFlutterProject = await fetchDetails(params.slug);


    return (
        <>
            {devFlag && <DevFlag />}
            <main className='relative min-h-screen'>
                <div className='myContainer pt-[4rem] pb-[2rem] dark:text-gray-300 text-gray-700'>
                    <AnimatedHeading classList="mt-8 uppercase" title="Flutter Project" />
                    <h1 style={ubuntu.style} className="font-bold lg:text-5xl text-4xl capitalize">{Data.name}</h1>
                    <Details Data={Data} />
                </div>
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

    const Data: IFlutterProject = await fetchDetails(params.slug);

    return {
        title: `Moinak Majumdar | Flutter project - ${Data.name}`,
        description: Data.intro,
        authors: [{ name: 'Moinak Majumdar', url: 'https://www.linkedin.com/in/moinak-majumdar' }],
        keywords: ['flutter', 'android', 'open source', 'app development', 'mobile app development', 'ios development'],
        creator: "Moinak Majumdar",
        publisher: "Vercel",
        metadataBase: new URL('https://moinak05.vercel.app/'),
        openGraph: {
            type: 'website',
            title: `Moinak Majumdar | Flutter project - ${Data.name}`,
            description: Data.intro,
            images: Data.cover,
        },
        alternates: { canonical: Data.gitRepo }
    }
}