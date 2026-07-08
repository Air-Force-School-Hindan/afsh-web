import { apiClient } from '../api/client';
import { StrapiResponse, Notice } from '../types/strapi';
import { logErrorSecurely } from '../utils/security';

export const fetchNotices = async (page = 1, pageSize = 25): Promise<StrapiResponse<Notice[]>> => {
  try {
    const response = await apiClient.get<StrapiResponse<Notice[]>>(
      `/api/notices?populate=file&sort=date:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );

    // Sentinel: Ensure data exists before returning to prevent component crashes
    if (!response.data || !response.data.data) {
        return { data: [], meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } } };
    }

    return response.data;
  } catch (error) {
    logErrorSecurely('Failed to fetch notices', error);
    throw error;
  }
};

export const fetchRecentNotices = async (limit = 3): Promise<StrapiResponse<Notice[]>> => {
  return fetchNotices(1, limit);
}
