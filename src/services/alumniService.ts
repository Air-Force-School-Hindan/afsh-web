import { AlumniFormData, AlumniRegistrationResponse } from '../types/alumni';
import { logErrorSecurely } from '../utils/security';

export const registerAlumni = async (data: AlumniFormData): Promise<AlumniRegistrationResponse> => {
  try {
    const apiUrl = import.meta.env.VITE_ALUMNI_API_URL;
    if (!apiUrl) {
      throw new Error("VITE_ALUMNI_API_URL is not configured.");
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let responseData: any;
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
    } else {
        const text = await response.text();
        if (!response.ok) {
            throw new Error(text || `Failed to submit form: ${response.statusText}`);
        }
        // If success but no JSON, return minimal success object
        return { success: true, message: text || "Success" };
    }

    if (!response.ok) {
      throw new Error(responseData.message || responseData.error || `Failed to submit form: ${response.statusText}`);
    }

    return responseData as AlumniRegistrationResponse;
  } catch (error) {
    logErrorSecurely("Alumni registration error", error);
    throw error;
  }
};
