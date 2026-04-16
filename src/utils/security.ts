/**
 * Security utility for the application.
 * Sentinel: This utility helps prevent technical information leakage in production.
 */

/**
 * Logs an error securely based on the environment.
 * In development, it logs the full error details.
 * In production, it logs a minimal message to avoid leaking technical details.
 *
 * @param message - A descriptive message for the error.
 * @param error - The error object or reason.
 * @param status - Optional status code to log in production.
 */
export const logErrorSecurely = (message: string, error: any, status?: number | string) => {
    if (import.meta.env.DEV) {
        console.error(`${message}:`, error);
    } else {
        // In production, we avoid logging the full error object which might contain sensitive info
        // or technical stack traces. We might log just the message or a status code if available.
        const statusCode = status || error?.response?.status || error?.status;
        console.error(`${message}${statusCode ? ` (Status: ${statusCode})` : ''}`);
    }
};

/**
 * Returns a safe error message for display to the user.
 *
 * @param error - The error object.
 * @param fallback - Optional fallback message for production.
 * @returns A string safe to display to the user.
 */
export const getSafeErrorMessage = (error: any, fallback = 'An unexpected error occurred. Please try again later.') => {
    if (import.meta.env.DEV) {
        return error?.message || String(error) || fallback;
    }
    return fallback;
};
