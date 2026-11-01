# PLAN-002: Flagship restructure implementation

Created: 2026-11-01T18:10:00+08:00
Updated: 2026-11-01T18:10:00+08:00
Revision: 1
Status: Executed 2026-11-01
Feature: [FEAT-002](../features/FEAT-002-flagship-documentation.md) revision 4
Design: [DESIGN-002](../product/DESIGN-002.md) revision 1

## Phases

1. Assets: self-host Alfa Slab One and Outfit (OFL, licenses alongside); optimize the Guild seal and 13 competition photos from the Guild overview annex to WebP under 200 KB, re-encoded to drop metadata.
2. Build: rewrite `src/styles.css` to DESIGN-002; create `/`, `/aqone/`, `/devguild/`, `/credentials/` as static HTML with a shared header; configure Vite multi-page input; remove the carousel script and its tests.
3. SEO: unique title, description, canonical, and Open Graph tags per page; keep Person structured data on the home page; list all four pages in `sitemap.xml`.
4. Verification: content-integrity tests across all pages (assets resolve, no AqOne repository link, header links resolve, unique metadata); production preview tests for every page; screenshots at 320, 390, 768, 1024, and 1440 px.
5. Checkpoint: commit reviewed paths and push to `origin/master`.

## Constraints

No new runtime dependency; the site stays static with no tracking.
Fonts are copied from the `@fontsource` packages, not installed as dependencies.
No teammate or member names; the Guild adviser is the only other named person.
