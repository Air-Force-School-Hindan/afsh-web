/**
 * Sentinel: Security Utility
 * Provides helpers for secure error handling and logging to prevent information leakage.
 */

/**
 * Logs an error securely by limiting details in production.
 * @param context - A short description of where the error occurred
 * @param error - The error object to log
 */
export const logErrorSecurely = (context: string, error: any) => {
    if (import.meta.env.DEV) {
        console.error(`[${context}] Detailed Error:`, error);
    } else {
        // In production, only log the context and a generic identifier or minimal info
        const status = error?.response?.status || error?.status;
        const message = error?.message || 'An unexpected error occurred';
        console.error(`[${context}] Error${status ? ` (${status})` : ''}: ${message}`);
    }
};

/**
 * Returns a safe error message for the UI, hiding technical details in production.
 * @param error - The error object
 * @param fallback - The generic message to show in production
 * @returns A safe error message string
 */
export const getSafeErrorMessage = (error: any, fallback: string = 'Something went wrong. Please try again later.'): string => {
    if (import.meta.env.DEV) {
        return error?.message || fallback;
    }
    return fallback;
};
