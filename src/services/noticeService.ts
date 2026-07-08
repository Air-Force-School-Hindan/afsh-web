import { apiClient } from '../api/client';
import { StrapiResponse, Notice } from '../types/strapi';
import { logErrorSecurely } from '../utils/security';
import { flattenStrapi } from '../utils/strapi';

export const fetchNotices = async (page = 1, pageSize = 25): Promise<StrapiResponse<Notice[]>> => {
  try {
    const response = await apiClient.get<StrapiResponse<Notice[]>>(
      `/api/notices?populate=file&sort=date:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );

    // Flatten and normalize response data
    const flattenedData = flattenStrapi(response.data?.data || response.data);

    return {
        data: Array.isArray(flattenedData) ? flattenedData : [],
        meta: response.data?.meta || { pagination: { page, pageSize, pageCount: 0, total: 0 } }
    };
  } catch (error) {
    logErrorSecurely('Failed to fetch notices', error);
    throw error;
  }
};

export const fetchRecentNotices = async (limit = 3): Promise<StrapiResponse<Notice[]>> => {
  return fetchNotices(1, limit);
}
