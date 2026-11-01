# Lenard Angelo Olajay - Personal Portfolio

Static, multi-page portfolio documenting two flagship efforts: AqOne and the ASU Developers' Guild.

- **Live:** https://lenardangeloolajay.onrender.com/
- **Stack:** Semantic HTML, CSS, Vite (build only). No runtime JavaScript, no tracking, fonts self-hosted.
- **Design:** Guild colorway with a neo-brutalist treatment; see `docs/product/DESIGN-002.md`.

---

## Quick start

```bash
npm install          # install Vite
npm run dev          # local dev server, http://127.0.0.1:5173/
npm run build        # production build into dist/
npm run preview      # serve dist/, http://127.0.0.1:4173/
PREVIEW_URL=http://127.0.0.1:4173 npm test   # tests (needs the preview running)
```

---

## Project structure

```text
├── index.html                  # Home: intro, flagship cards, earlier builds, skills, recognition, contact
├── aqone/index.html            # AqOne page (public-safe: no technical internals before the patent filing)
├── devguild/index.html         # ASU Developers' Guild page
├── credentials/index.html      # All certificates, grouped by category
├── vite.config.js              # Multi-page build inputs
├── src/styles.css              # Shared design system (DESIGN-002)
├── public/
│   ├── assets/documents/       # Resume and original certificate PDFs
│   ├── assets/fonts/           # Outfit and Alfa Slab One (SIL OFL, licenses included)
│   ├── assets/images/          # Portrait, project images, certificate thumbnails (each <= 200 KB)
│   ├── assets/images/guild/    # Guild seal and competition photos
│   ├── robots.txt
│   └── sitemap.xml             # Lists all four pages
├── tests/                      # Content integrity, server, and production preview tests
└── docs/                       # Specifications, designs, plans, and evidence
```

---

## Maintenance

### Updating the resume
Replace `public/assets/documents/Lenard-Olajay-Resume-Updated.pdf`, then build and test.

### Adding an update to AqOne or the Guild
Add a new `<li>` at the top of the page's `<ul class="updates">` with a `<time>` and one sentence.

### Adding a credential
1. Put the certificate PDF in `public/assets/documents/` and a WebP thumbnail (<= 200 KB) in `public/assets/images/`.
2. Copy an existing `<li class="box cred-card">` in `credentials/index.html` into the right category.
3. Update that category's count in the `cat-nav` at the top of the page and the count in `tests/content-integrity.test.js`.

### Adding a page
Create `<name>/index.html` with the shared header, add it to `vite.config.js`, `public/sitemap.xml`, and `tests/pages.js`.

### AqOne disclosure rule
Do not add architecture, hardware, protocol, or data-model details, or links to the AqOne repository, until the patent filing allows it. A test fails if an Aquanons repository link appears.

---

## 📋 Ten-Second Comprehension Test Procedure (REQ-015)

To evaluate first-impression readability with real reviewers:

1. Open http://127.0.0.1:4173/ on a desktop or mobile device.
2. Allow an unfamiliar reviewer to view the top section of the screen for exactly 10 seconds.
3. Hide the screen and ask:
   - *What role or discipline does Lenard work in?* (Target: Software Engineering / Developer / Builder)
   - *Can you name one concrete project or contribution he built?* (Target: AqOne maritime SOS, Warang photo map, or Project Tabang disaster response)
   - *Where would you go to contact him or view his full resume?* (Target: Top action buttons / direct links)
4. Target pass rate: at least 2 of 3 reviewers successfully answer all three questions.
5. Record results in `docs/evidence/FEAT-001-verification.md`.

---

## 🔒 Privacy & Deployment Notice

- **Dist Only:** Deploy only the `dist/` directory to your static host (e.g. GitHub Pages, Vercel, Cloudflare Pages).
- **Private Data:** Government ID cards, personal phone numbers, and internal documents are strictly excluded from the codebase and public output.

## Search visibility

The preferred public homepage is https://lenardangeloolajay.onrender.com/.
Initial HTML includes the full name, description, canonical URL, WebSite/ProfilePage/Person structured data, and Open Graph sharing metadata.
The existing portrait is reused for link previews.
Vite copies public/robots.txt and public/sitemap.xml into the production build.
The sitemap lists the homepage only because section anchors are parts of the same page.

After deploying the reviewed build to Render:

1. Verify that the homepage, /robots.txt, /sitemap.xml, and /assets/images/idpic.jpg return HTTP 200 with the expected content, and that the homepage has no noindex response header or meta tag.
2. Add the exact HTTPS URL as a URL-prefix property in [Google Search Console](https://search.google.com/search-console/about) and verify ownership using Google's supplied method.
   If Google supplies a verification HTML file, place that exact file in public/ and deploy again; do not invent a verification token.
3. Submit https://lenardangeloolajay.onrender.com/sitemap.xml in Search Console's Sitemaps report.
4. Inspect the homepage using URL Inspection, run the live test, and request indexing.
5. Validate the deployed structured data in [Google's Rich Results Test](https://search.google.com/test/rich-results).
6. Link this homepage from your existing LinkedIn and GitHub profiles using your consistent full name, then review Search Console indexing and search-performance reports over time.

Google controls indexing, titles, snippets, rich results, and rankings.
These changes help describe and discover the site; they cannot guarantee first place for a name search.
[Google's SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) explains these limits.
Crawling may take days to weeks after submission, and requesting it does not guarantee indexing ([Google's indexing guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)).
Local build/tests do not establish live deployment or search placement.
If you adopt a custom domain, update the URLs in index.html, public/robots.txt, public/sitemap.xml, and the production SEO test together, then configure permanent redirects from the former address and update Search Console.
