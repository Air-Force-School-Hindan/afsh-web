/**
 * Sentinel: Centralized security utility for logging and error handling.
 * Prevents technical information leakage in production environments.
 */

/**
 * Logs an error securely by restricting verbose output to development mode.
 * In production, it only logs a high-level message and optional status code.
 */
export const logErrorSecurely = (message: string, error: any, status?: string | number) => {
  if (import.meta.env.DEV) {
    console.error(`[Security Log] ${message}:`, status || '', error);
  } else {
    console.error(`[Security Log] ${message}${status ? ` (Status: ${status})` : ''}`);
  }
};

/**
 * Returns a user-friendly error message without leaking technical details in production.
 */
export const getSafeErrorMessage = (error: any, fallback: string = 'An unexpected error occurred. Please try again later.') => {
  if (import.meta.env.DEV && error instanceof Error) {
    return error.message;
  }
  return fallback;
};
