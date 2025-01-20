import IDescription from "./description";

export default interface IWebProject {
    _id: string,
    name: string,
    type: string,
    role: string,
    intro: string,
    liveUrl: string,
    gitRepo: string,
    slug: string,
    descriptionId: string,
    img: string[],
    badge: string[],
    __v: number,
    status: string,
    cover: string,
    createdAt: string | Date;
    description: IDescription;
    updatedAt: string | Date;
}