
import IPhotography from '@/interface/photography';
import DevFlag from '@/components/common/DevFlag';
import HomePage from '@/components/home/HomePage';
import { ServerData } from './utils/ServerData';

async function pageData() {
  const data = new ServerData({ path: 'services' });
  const body = {
    services: ["flutter", "web", "photography"],
    isShort: true,
  }
  const res = await data.request({ body });
  if (!res.ok) {
    throw new Error('Failed to fetch page data.')
  }
  return await res.json()
}

export default async function Home() {

  const data = await pageData()

  const list: IPhotography[] = data['photography'];
  const random = Math.floor(Math.random() * (list.length - 4));

  return (
    <main>
      <DevFlag />
      <HomePage
        flutterProjects={data['flutter']}
        webProjects={data['web']}
        photography={[...list.slice(random, random + 4)]}
      />
    </main>
  );
}