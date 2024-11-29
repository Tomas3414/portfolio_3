import { Metadata } from "next";
import { ServerData } from "../utils/ServerData";
import { MainSection } from "./components/Main";

async function getWebProjects() {
    const data = new ServerData({ path: 'pageBased' });
    const body = {
        pathName: 'web',
        isShort: true,
    }
    const res = await data.request({ body });

    if (!res.ok) {
        throw new Error("Failed to fetch web project data.");
    }

    return await res.json();
}


const page = async () => {

    const data = await getWebProjects();

    return (
        <MainSection data={data['web']} />
    )
}

export const metadata: Metadata = {
    title: 'Moinak Majumdar | Web',
    description: "Explore a diverse array of web projects showcasing our expertise in full stack development. From intuitive interfaces to robust backend systems, discover how we deliver tailored solutions to elevate your online presence and meet your business goals.",
    authors: [{ name: 'Moinak Majumdar', url: 'https://www.linkedin.com/in/moinak-majumdar' }],
    keywords: ['Web Development', 'Flutter Projects', 'Responsive Design', 'Mobile App Development', 'Innovative Technology', 'User Experience (UX)', 'Front-end Development', 'Full-stack Development', 'Web Applications', 'Flutter Apps', 'UI/UX Design', 'Cross-Platform Development', 'Interactive Interfaces', 'Digital Innovation',],
    creator: "Moinak Majumdar",
    publisher: "Vercel",
    metadataBase: new URL('https://moinak05.vercel.app/'),
    openGraph: {
        type: 'website',
        title: 'Moinak Majumdar | Web',
        description: "Explore a diverse array of web projects showcasing our expertise in full stack development. From intuitive interfaces to robust backend systems, discover how we deliver tailored solutions to elevate your online presence and meet your business goals.",
        images: 'https://avatars.githubusercontent.com/u/99950805?v=4',
        url: 'https://moinak05.vercel.app/',
    },
}

export default page

