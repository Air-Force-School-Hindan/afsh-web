/**
 * Sentinel Security Utility
 * Provides helpers for secure logging and error handling to prevent information leakage.
 */

/**
 * Logs an error securely by restricting detailed technical information to development mode.
 * In production, it only logs the HTTP status code (if available) or a generic error indicator.
 */
export const logErrorSecurely = (error: any, context: string) => {
  if (import.meta.env.DEV) {
    console.error(`[${context}] Detailed Error:`, error);
    if (error.response) {
      console.error(`[${context}] Response Data:`, error.response.data);
      console.error(`[${context}] Response Status:`, error.response.status);
    }
  } else {
    // In production, we avoid logging stack traces or sensitive response data
    const status = error.status || error.response?.status;
    console.error(`[${context}] Error occurred${status ? ' (Status: ' + status + ')' : ''}`);
  }
};

/**
 * Returns a safe error message for user-facing feedback.
 * In development, it returns the actual error message.
 * In production, it returns a generic message to avoid leaking internals.
 */
export const getSafeErrorMessage = (error: any, fallback = 'An unexpected error occurred. Please try again later.'): string => {
  if (import.meta.env.DEV) {
    return error.message || fallback;
  }
  return fallback;
};
