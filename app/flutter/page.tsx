import { Metadata } from "next";
import { ServerData } from "../utils/ServerData";
import MainSection from "./components/Main";

async function getFlutterProjects() {
  const data = new ServerData({ path: 'pageBased' });
  const body = {
    pathName: 'flutter',
    isShort: true,
  }
  const res = await data.request({ body });

  if (!res.ok) {
    throw new Error('Failed to fetch flutter project data.');
  }

  return await res.json();
}

const page = async () => {

  const data = await getFlutterProjects();

  return (
    <MainSection data={data['flutter']} />
  )
}

export const metadata: Metadata = {
  title: 'Moinak Majumdar | Flutter',
  description: "Dive into our Flutter projects page to witness the seamless fusion of creativity and functionality in our mobile applications. From engaging user experiences to efficient performance, explore how we leverage Flutter's capabilities to craft captivating mobile solutions that stand out in today's competitive landscape",
  authors: [{ name: 'Moinak Majumdar', url: 'https://www.linkedin.com/in/moinak-majumdar' }],
  keywords: ['Web Development', 'Flutter Projects', 'Responsive Design', 'Mobile App Development', 'Innovative Technology', 'User Experience (UX)', 'Front-end Development', 'Full-stack Development', 'Web Applications', 'Flutter Apps', 'UI/UX Design', 'Cross-Platform Development', 'Interactive Interfaces', 'Digital Innovation',],
  creator: "Moinak Majumdar",
  publisher: "Vercel",
  metadataBase: new URL('https://moinak05.vercel.app/'),
  openGraph: {
    type: 'website',
    title: 'Moinak Majumdar | Flutter',
    description: "Dive into our Flutter projects page to witness the seamless fusion of creativity and functionality in our mobile applications. From engaging user experiences to efficient performance, explore how we leverage Flutter's capabilities to craft captivating mobile solutions that stand out in today's competitive landscape",
    images: 'https://avatars.githubusercontent.com/u/99950805?v=4',
    url: 'https://moinak05.vercel.app/',
  },
}

export default page