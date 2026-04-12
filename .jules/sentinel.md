## 2025-05-14 - [Security Enhancement] Implementation of Security Headers

**Vulnerability:** Missing or weak security headers (X-Frame-Options, X-Content-Type-Options, etc.) in the application's configuration. This leaves the application vulnerable to certain types of attacks like Clickjacking and MIME-type sniffing.
**Learning:** Cloudflare Pages uses a `_headers` file to manage response headers. The initial configuration was minimal.
**Prevention:** Always implement a robust set of security headers (Defense in Depth) to provide multiple layers of protection.

## 2025-05-14 - [Security Check] Verification of rel="noopener noreferrer"

**Vulnerability:** Potentially missing `rel="noopener noreferrer"` on external links with `target="_blank"`, leading to Tabnabbing vulnerabilities.
**Learning:** Modern browsers increasingly apply `rel="noopener"` by default for `target="_blank"`, and this codebase was already consistently using `rel="noopener noreferrer"` across all relevant components.
**Prevention:** Continue to use linting or automated checks to ensure all new external links follow this security best practice.
