# FEAT-003 Verification Evidence: Student Chasing Impact

Created: 2026-11-26T09:08:00+08:00
Updated: 2026-11-26T09:14:00+08:00
Feature: FEAT-003 revision 1
Plan: PLAN-003 revision 1
Design: DESIGN-002 revision 3

## Verification summary

| Phase | Scope | Tests passing | Visual / Responsive | Checkpoint commit | Status |
| --- | --- | --- | --- | --- | --- |
| Phase 1 | Home page reframed, title/metadata, nav update, status ladder CSS | 24 of 24 | Verified at 320, 390, 768, 1024, 1440 px; no horizontal scroll | 009d265 | Complete |
| Phase 2 | AqOne page path to impact, status ladder, source confirmations | 25 of 25 | Verified at 320, 390, 768, 1024, 1440 px; no horizontal scroll | Pending commit | Complete |
| Phase 3 | Guild page path to real use, status ladder | Pending | Pending | Pending | Pending |

## Phase 1: Home page reframed

### Requirements verified

- **REQ-001**: Hero uses approved copy verbatim. H1 is `Lenard Angelo Olajay`, followed by:
  - "I'm a 2nd-year software engineering student chasing one thing: technology that actually reaches the people who need it."
  - "Right now: taking AqOne, an offline SOS for fishers, from champion prototype toward its first pilot in New Washington, and building the ASU Developers' Guild so student projects reach real users."
  - Action buttons preserved: Read about AqOne, Meet the Guild, Resume (PDF).
- **REQ-002**: Page title reads `Lenard Angelo Olajay | Student chasing impact through software`. Meta description, Open Graph, and JSON-LD structured data use the student-chasing-impact framing. "Developer & Builder Portfolio" is removed from all pages.
- **REQ-003**: "What I'm building" is updated to "What I'm working toward" with two problem-first cards (AqOne and ASU Developers' Guild), each presenting Problem, Building, Where it stands, and Next in order.
- **REQ-004**: "Skills" becomes "How I build" (`#how-i-build`) with the four approved principles; all tools from the old Skills section are preserved inside "Build for their conditions".
- **REQ-005**: Home "Recognition" section is removed; headline honors stay on the AqOne card and full credentials remain on `/credentials/`.
- **REQ-006**: "Earlier builds" entries (Project Tabang and Warang) rewritten problem-first using approved copy; GitHub repository links remain.
- **REQ-007**: Status ladder styling added to `src/styles.css` per DESIGN-002 revision 3 with text states (Done, Now, Next, Goal), check marks, and responsive column-reverse mobile wrapping.
- **REQ-015**: Shared header navigation on all four pages replaces "Skills" with "How I build" linking to `/#how-i-build`.

### Automated test results

- `npm run build`: exited 0 with 5 modules transformed, bundle HTML/CSS built cleanly.
- `PREVIEW_URL=http://127.0.0.1:4173 npm test`: 24 of 24 passed (0 failures).

### Responsive and visual QA

Measured on production preview server (`http://127.0.0.1:4173/`):
- 320x900 px: viewport = 320 px, scrollWidth = 320 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-home-320px.png`
- 390x900 px: viewport = 390 px, scrollWidth = 390 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-home-390px.png`
- 768x900 px: viewport = 768 px, scrollWidth = 768 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-home-768px.png`
- 1024x900 px: viewport = 1024 px, scrollWidth = 1009 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-home-1024px.png`
- 1440x900 px: viewport = 1440 px, scrollWidth = 1425 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-home-1440px.png`

## Phase 2: AqOne page path to impact

### Requirements verified

- **REQ-007**: Status ladder implemented with text states (Done, Now, Next, Goal) and approved "What I learned" lines.
- **REQ-008**: Page sections appear in exact approved order:
  1. Hero
  2. The problem
  3. What AqOne does
  4. Where it stands (status ladder)
  5. How we'll know it works (3 goals labelled as goals)
  6. Recognition and what it opened up
  7. My role (including care statement)
  8. On stage
  9. Updates (November 2026 patent filing and field test entries at top)
- **REQ-009**: Sourced figures verification:
  - Attempted to locate and open Oceana's "Philippine Fisheries Assessment, 2024" for 442,014 registered boats on `ph.oceana.org`. The specific figure could not be confirmed on the live site.
  - Attempted to open Pew Charitable Trusts' study ("More Than 100,000 Fishing-Related Deaths Occur Each Year, Study Finds", Nov 2022). The page was gated by Cloudflare Turnstile anti-bot verification returning HTTP 403. In accordance with safety policies and REQ-009, no CAPTCHA/bot gate was bypassed, and the figure was omitted.
  - Stated local data gap honestly in text: "We haven't found a public yearly count of sea incidents for Aklan."
- **REQ-010**: Verified no forbidden technical or internal details appear on the AqOne page (none of: `bug`, `queue`, `LoRa`, `MHz`, `ESP32`, `km`, `NTC`, `RSSI`). Automated regression test added in `tests/content-integrity.test.js`.
- **REQ-011**: "Recognition and what it opened up" pairs results with verified follow-ons (AI Fest incubator endorsement offer, Enactus national capacity-building sessions, PSC XI DICT regional mentorship); no person named.
- **REQ-012**: Updates list includes November 2026 patent application filing and field test prototype entries at top.

### Automated test results

- `npm run build`: built in 261ms cleanly.
- `PREVIEW_URL=http://127.0.0.1:4173 npm test`: 25 of 25 passed (0 failures).

### Responsive and visual QA

Measured on production preview server (`http://127.0.0.1:4173/aqone/`):
- 320x900 px: viewport = 320 px, scrollWidth = 320 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-aqone-320px.png`
- 390x900 px: viewport = 390 px, scrollWidth = 390 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-aqone-390px.png`
- 768x900 px: viewport = 768 px, scrollWidth = 768 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-aqone-768px.png`
- 1024x900 px: viewport = 1024 px, scrollWidth = 1009 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-aqone-1024px.png`
- 1440x900 px: viewport = 1440 px, scrollWidth = 1425 px, hasOverflow = false. Screenshot: `docs/evidence/screenshots/feat003-aqone-1440px.png`

### Limitations

- Omitted statistics: Oceana 442,014 registered boats (source page could not be confirmed); Pew 100,000 fishing deaths (source URL gated by Cloudflare anti-bot check).
- Physical device testing on real hardware is handled by Len; browser measurements establish verified local behavior.
