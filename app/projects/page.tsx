import DevFlag from "@/app/components/others/DevFlag";
import Web from "./components/Web";
import Flutter from "./components/Flutter";
import Bg from "./components/Bg";
import { Metadata } from "next";
import { ServerData } from "../utils/ServerData";
import { flutterProjectModel, webProjectModel } from "../utils/models";


type data = { web: webProjectModel[], flutter: flutterProjectModel[] }

async function fetchData(): Promise<data> {
    const data = new ServerData({path: '/project'});
    const res = await data.get();

    if(!res.ok) {
        throw new Error('Failed to fetch project page data.')
    }

    return await res.json();
}

export default async function Projects() {

    const data = await fetchData();

    return (
        <>
            <DevFlag />
            <main className='flex flex-col dark:text-gray-300 text-gray-800'>
                <Web web={data.web} />
                <Flutter flutter={data.flutter} />
                <Bg />
            </main>
        </>
    )
}

export async function generateMetadata(): Promise<Metadata> {


    return {
        title: `Moinak Majumdar | Projects`,
        description: 'Explore a showcase of innovative web and Flutter projects on this page. Immerse yourself in cutting-edge technologies and seamless user experiences crafted by Moinak Majumdar. From dynamic web applications to responsive Flutter mobile apps, discover the future of digital solutions',
        authors: [{ name: 'Moinak Majumdar', url: 'https://www.linkedin.com/in/moinak-majumdar' }],
        keywords: ['Web Development', 'Flutter Projects', 'Responsive Design', 'Mobile App Development', 'Innovative Technology', 'User Experience (UX)', 'Front-end Development', 'Full-stack Development', 'Web Applications', 'Flutter Apps', 'UI/UX Design', 'Cross-Platform Development', 'Interactive Interfaces', 'Digital Innovation',],
        creator: "Moinak Majumdar",
        publisher: "Vercel",
        metadataBase: new URL('https://moinak05.vercel.app/'),
        openGraph: {
            type: 'website',
            title: `Moinak Majumdar | Projects`,
            description: 'Explore a showcase of innovative web and Flutter projects on this page. Immerse yourself in cutting-edge technologies and seamless user experiences crafted by Moinak Majumdar. From dynamic web applications to responsive Flutter mobile apps, discover the future of digital solutions',
            images: 'https://avatars.githubusercontent.com/u/99950805?v=4',
        }
    }
}