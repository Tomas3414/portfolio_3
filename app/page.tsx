
import _HomePage from './components/home/_HomePage';
import { ServerData} from './utils/ServerData';
import { flutterProjectModel, photographyModel, webProjectModel } from './utils/models';

async function getFlutterProjects() {
  const data = new ServerData({path: 'getAllFlutter'});

  const res = await data.get();

  if(!res.ok) {
      throw new Error('Failed to fetch flutter project data.');
  }

  return [...await res.json()];
}

async function getWebProjects() {
  const data =new ServerData({path: 'getAllWeb'});

  const res = await data.get();

  if (!res.ok) {
      throw new Error("Failed to fetch web project data.");
  }

  return [...await res.json()];
}

async function getPhotography() {
  const data = new ServerData({path: 'getAllPhotography'});

  const res = await data.get();

  if (!res.ok) {
      throw new Error('Failed to fetch hobby data.');
  }

  const list: photographyModel[] = await res.json();
  const random = Math.floor(Math.random() * (list.length - 4));
  return [...list.slice(random, random + 4)]
}


export default async function Home() {

  const flutterProjects: flutterProjectModel[] = await getFlutterProjects();
  const webProjects: webProjectModel[] = await getWebProjects();
  const photography: photographyModel[] = await getPhotography(); 

  return (
    <_HomePage flutterProjects={flutterProjects} webProjects={webProjects} photography={photography} />
  );
}