import type { MetadataRoute } from 'next'
import { ServerData } from './utils/ServerData';
import { headers } from 'next/headers';

async function getData() {
    const data = new ServerData({ path: 'sitemap' });
    const res = await data.request();
    if (!res.ok) {
        throw new Error('Failed to fetch dynamic sitemap data.')
    }
    return await res.json()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const headersList = headers();
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const host = headersList.get('host');
    const origin = `${protocol}://${host}`;

    const res = await getData()

    const baseData: MetadataRoute.Sitemap = [
        {
            url: origin, lastModified: '2024-12-29', changeFrequency: 'yearly', priority: 1,
        },
        {
            url: `${origin}/assets/doc/Moinak-Majumdar_Resume.pdf`, lastModified: '2024-12-29', changeFrequency: 'yearly', priority: 0.9,
        },
        {
            url: `${origin}/project`, lastModified: '2024-12-29', changeFrequency: 'yearly', priority: 0.9,
        },
        {
            url: `${origin}/blossoms`, lastModified: '2024-12-29', changeFrequency: 'yearly', priority: 0.9,
        },
        {
            url: `${origin}/web`, lastModified: '2024-12-29', changeFrequency: 'yearly', priority: 0.8,
        },
        {
            url: `${origin}/flutter`, lastModified: '2024-12-29', changeFrequency: 'yearly', priority: 0.8,
        },
    ]


    const resData = res['sitemap']
    const dynamicData: MetadataRoute.Sitemap = [];

    if (!!resData) {
        resData.forEach((s: any) => {
            dynamicData.push({
                url: `${origin}${s?.slug}`,
                lastModified: s.lastModified,
                changeFrequency: s.changeFrequency,
                priority: s.priority,
                // images: [String(s.images[0])]
            })
        });
    }

    console.log(dynamicData)

    return [
        ...baseData,
        ...dynamicData,
    ]
}