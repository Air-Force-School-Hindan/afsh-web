import { AlumniFormData, AlumniRegistrationResponse } from '../types/alumni';
import { logErrorSecurely } from '../utils/security';

const API_URL = import.meta.env.VITE_ALUMNI_API_URL || "https://form-backend-afsh-web.up.railway.app/api/alumni/register";

export const registerAlumni = async (data: AlumniFormData): Promise<AlumniRegistrationResponse> => {
  try {
    const response = await fetch(API_URL, {
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
    // Sentinel: Use secure logging
    logErrorSecurely("Alumni registration error", error);
    throw error;
  }
};
