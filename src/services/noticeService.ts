import { apiClient } from '../api/client';
import { StrapiResponse, Notice } from '../types/strapi';

export const fetchNotices = async (page = 1, pageSize = 25): Promise<StrapiResponse<Notice[]>> => {
  try {
    const response = await apiClient.get<StrapiResponse<Notice[]>>(
      `/api/notices?populate=file&sort=date:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );

    return response.data;
  } catch (error) {
    console.error('Failed to fetch notices:', error);
    throw error;
  }
};

export const fetchRecentNotices = async (limit = 3): Promise<StrapiResponse<Notice[]>> => {
  return fetchNotices(1, limit);
}
