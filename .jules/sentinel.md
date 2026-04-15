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

## 2026-04-14 - [Security Enhancement] Secure Error Handling to Prevent Information Leakage

**Vulnerability:** Information leakage via direct exposure of technical error details (e.g., stack traces, internal API responses) in frontend `console.log` and `alert` calls during failed `fetch` operations.
**Learning:** React components often lack defensive error handling for direct `fetch` calls, defaulting to logging the entire error object which can reveal sensitive backend internals in production.
**Prevention:** Implement a centralized security utility (e.g., `src/utils/security.ts`) that uses `import.meta.env.DEV` to provide environment-aware logging and generic user-facing error messages, ensuring technical internals are never leaked in production.
