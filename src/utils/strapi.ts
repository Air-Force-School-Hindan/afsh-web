import { getStrapiBaseURL } from '../config';

export const getStrapiURL = (path = '') => {
    const baseURL = getStrapiBaseURL();

    // Remove trailing slash from base and leading slash from path to avoid double slashes
    const cleanBase = baseURL.replace(/\/$/, '');
    const cleanPath = path.replace(/^\//, '');
    return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase;
};

export const getStrapiMedia = (url?: string) => {
    if (!url) return undefined;
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }
    return getStrapiURL(url);
};

export const extractImageUrl = (imageData: any) => {
    if (!imageData) return null;

    // Flatten logic for potential nested attributes (common in Strapi 4 and some Strapi 5 configurations)
    const data = imageData.data || imageData;
    const attributes = data.attributes || data;

    // Handle Array (Multiple Media)
    if (Array.isArray(data) && data.length > 0) {
        return data[0].attributes?.url || data[0].url;
    }

    // Handle Object (Single Media)
    if (typeof attributes === 'object' && attributes.url) {
        return attributes.url;
    }

    // Handle Strapi 5 specific 'document' wrapper structure
    if (data.document && data.document.url) {
        return data.document.url;
    }

    return null;
};
