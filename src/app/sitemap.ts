import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://366detalhamentoautomotivo.com',
            lastModified: new Date(),
        },
    ];
}
