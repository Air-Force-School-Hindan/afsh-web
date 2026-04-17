/**
 * Security utility for the application.
 * Sentinel: Provides environment-aware logging and error handling to prevent
 * technical information leakage in production.
 */

/**
 * Logs an error securely.
 * In development, it logs the full error details.
 * In production, it logs only a generic message and the status code (if provided).
 */
export const logErrorSecurely = (message: string, error: any, status?: number | string) => {
    if (import.meta.env.DEV) {
        console.error(`[Security] ${message}`, error);
    } else {
        console.error(`[Security] ${message}${status ? ` (Status: ${status})` : ''}`);
    }
};

/**
 * Returns a safe error message for display to the user.
 * In development, it returns the technical error message.
 * In production, it returns a generic fallback message.
 */
export const getSafeErrorMessage = (error: any, fallback: string = 'An unexpected error occurred. Please try again later.') => {
    if (import.meta.env.DEV) {
        return error?.message || String(error) || fallback;
    }
    return fallback;
};
