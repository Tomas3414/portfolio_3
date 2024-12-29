import type { MetadataRoute } from 'next'
import { headers } from 'next/headers';

export default async function robots(): Promise<MetadataRoute.Robots> {

    const headersList =  headers();
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const host = headersList.get('host');
    const origin = `${protocol}://${host}`;

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${origin}/sitemap.xml`,
    }
}