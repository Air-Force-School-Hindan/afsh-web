/**
 * Sentinel Security Utility
 * Provides helpers for secure error handling and logging to prevent information leakage.
 */

/**
 * Logs an error securely. In development, it logs the full error details.
 * In production, it only logs a sanitized message and optional status code.
 *
 * @param message - A descriptive message for the error
 * @param error - The actual error object
 * @param status - Optional HTTP status code
 */
export const logErrorSecurely = (message: string, error: any, status?: number | string) => {
    if (import.meta.env.DEV) {
        console.error(`[Security] ${message}:`, status ? `(Status: ${status})` : '', error);
    } else {
        console.error(`[Security] ${message}:`, status || 'An unexpected error occurred');
    }
};

/**
 * Returns a safe error message for display to the user.
 * Prevents technical details like stack traces or internal server error messages from leaking.
 *
 * @param error - The error object
 * @param fallback - The fallback message to show in production
 * @returns A safe error message string
 */
export const getSafeErrorMessage = (error: any, fallback: string = 'An unexpected error occurred. Please try again later.') => {
    if (import.meta.env.DEV) {
        return error.message || String(error) || fallback;
    }
    return fallback;
};
