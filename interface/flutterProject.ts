import IDescription from "./description";

export default interface IFlutterProject {
    _id: string,
    __v: number,
    name: string,
    intro: string,
    gitRepo: string,
    slug: string,
    descriptionId: string,
    release: string,
    cover: string,
    img: string[],
    status: string,
    badge: string[],
    libraries: string[],
    isDelete: boolean;
    createdAt: string | Date;
    description: IDescription
    updatedAt: string | Date;
}