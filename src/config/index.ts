export const PRODUCTION_STRAPI_URL = 'https://afsh-backend-blog-production.up.railway.app';
export const DEVELOPMENT_STRAPI_URL = 'http://localhost:1337';

export const getStrapiBaseURL = () => {
    return import.meta.env.VITE_STRAPI_URL || (import.meta.env.DEV ? DEVELOPMENT_STRAPI_URL : PRODUCTION_STRAPI_URL);
};
