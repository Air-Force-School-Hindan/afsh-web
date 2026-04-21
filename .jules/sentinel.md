## 2025-05-14 - [Security Enhancement] Implementation of Security Headers

**Vulnerability:** Missing or weak security headers (X-Frame-Options, X-Content-Type-Options, etc.) in the application's configuration. This leaves the application vulnerable to certain types of attacks like Clickjacking and MIME-type sniffing.
**Learning:** Cloudflare Pages uses a `_headers` file to manage response headers. The initial configuration was minimal.
**Prevention:** Always implement a robust set of security headers (Defense in Depth) to provide multiple layers of protection.

## 2025-05-14 - [Security Check] Verification of rel="noopener noreferrer"

**Vulnerability:** Potentially missing `rel="noopener noreferrer"` on external links with `target="_blank"`, leading to Tabnabbing vulnerabilities.
**Learning:** Modern browsers increasingly apply `rel="noopener"` by default for `target="_blank"`, and this codebase was already consistently using `rel="noopener noreferrer"` across all relevant components.
**Prevention:** Continue to use linting or automated checks to ensure all new external links follow this security best practice.

## 2026-04-13 - [Security Enhancement] Secure API Configuration and Error Handling

**Vulnerability:** Potential information leakage via verbose API error logging in production and insecure HTTP fallback for backend communication if environment variables are missing.
**Learning:** Hardcoding fallbacks to localhost in production code can lead to insecure connection attempts or application failure. Duplicating these fallbacks across multiple files increases maintenance risk.
**Prevention:** Centralize backend configuration and use environment-aware helpers (e.g., `import.meta.env.DEV`) to ensure secure defaults in production while maintaining development flexibility. Restrict verbose logging to development environments.

## 2026-04-21 - [Security Enhancement] Implementation of Secure Logging Across Services

**Vulnerability:** Potential information leakage via technical error details (stack traces, raw API errors) when using `console.error` directly in service layer components.
**Learning:** Even if error interceptors are in place, direct usage of `console.error` in business logic or service modules can bypass centralized sanitization if not handled carefully, especially when logging raw error objects.
**Prevention:** Use a centralized secure logging utility (e.g., `logErrorSecurely`) across all service-level modules to ensure that verbose error information is strictly limited to development environments, providing only sanitized feedback in production.
