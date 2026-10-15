# SEO Change Log

| Date | URL | Change Description | Impact / Result |
| :--- | :--- | :--- | :--- |
| 2026-10-15 | All | Established SEO Autopilot framework (`seo/`) and master audit | Initialized baseline tracking |
| 2026-10-15 | All | Normalized all 35+ internal links with trailing slashes | 100% eliminated 308 redirect hops for Googlebot |
| 2026-10-15 | All | Injected root WebSite (SearchAction) & Organization schemas in `<head>` | Full brand and searchbox schema hierarchy |
| 2026-10-15 | 50+ pages | Optimized title tags to 45–55 chars and stripped 30-char trailing brand deadweight | Fixed Google SERP title truncation across all calculators |
| 2026-10-15 | All | Inverted international site titles to keyword-first structure (`es`, `de`, `ja`, `fr`, `pt`) | Better SERP ranking and visibility in foreign locales |
| 2026-10-15 | `/layouts/Layout.astro` | Converted Google Fonts & Geist Mono to asynchronous preloaded stylesheets | Fixed render-blocking resources for mobile FCP |
| 2026-10-15 | Calculators | Dynamic lazy import of Chart.js in key calculators | Shaved ~72 KiB of initial blocking JavaScript |
| 2026-10-15 | `global.css` | Tuned light-mode `--muted` from `#696966` to `#52524f` | Raised contrast ratio to 7.1:1, passing WCAG AA |
