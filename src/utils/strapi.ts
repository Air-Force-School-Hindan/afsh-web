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

/**
 * Normalizes Strapi 4 & 5 response formats by recursively flattening 'attributes' and 'data' wrappers.
 */
export const flattenStrapi = (data: any): any => {
    if (!data) return data;

    // Handle array response
    if (Array.isArray(data)) {
        return data.map(item => flattenStrapi(item));
    }

    let normalized: any = {};

    // Flatten Strapi 4 'attributes'
    if (data.attributes) {
        normalized = { id: data.id, ...flattenStrapi(data.attributes) };
    } else {
        normalized = { ...data };
    }

    // Recursively handle nested 'data' wrappers
    for (const key in normalized) {
        if (normalized[key] && typeof normalized[key] === 'object') {
            if (normalized[key].data !== undefined) {
                normalized[key] = flattenStrapi(normalized[key].data);
            } else {
                normalized[key] = flattenStrapi(normalized[key]);
            }
        }
    }

    return normalized;
};

export const extractImageUrl = (imageData: any) => {
    if (!imageData) return null;

    // Handle flattened or already extracted URL
    if (typeof imageData === 'string') return imageData;

    // Handle Array (Multiple Media)
    if (Array.isArray(imageData) && imageData.length > 0) {
        const first = imageData[0];
        return first.url || first.attributes?.url || null;
    }

    // Handle Object (Single Media)
    if (typeof imageData === 'object') {
        // Flat URL
        if (imageData.url) return imageData.url;
        // Strapi 4 Nested
        if (imageData.attributes?.url) return imageData.attributes.url;
        // Strapi 5 'document' wrapper
        if (imageData.document?.url) return imageData.document.url;
        // Nested 'data'
        if (imageData.data?.attributes?.url) return imageData.data.attributes.url;
    }

    return null;
};
