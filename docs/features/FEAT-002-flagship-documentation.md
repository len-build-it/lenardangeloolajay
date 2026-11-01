# FEAT-002: Flagship documentation restructure

Created: 2026-11-01T16:30:00+08:00
Updated: 2026-11-01T18:10:00+08:00
Revision: 4
Status: Approved by Len in chat on 2026-11-01 after reviewing the design canvas

## Authority and scope

Len requested on 2026-11-01 that the portfolio become in-depth documentation of his two flagship efforts: AqOne and the ASU Developers' Guild.
His stated goal is for people already in his growing network to learn what he has been doing, not to optimize cold recruiter discovery.
This specification records Len's answers from the same chat; Len approved the resulting design for implementation, though not this document's exact wording.
It supersedes FEAT-001's single-page rule ("Do not add ... separate project pages") for the pages defined here.
All other FEAT-001 behavior, CONSTRAINTS, accessibility, privacy, and no-tracking rules remain in force.
Follow [DESIGN-002](../product/DESIGN-002.md) for visual decisions; it replaces DESIGN.md revision 1 for these pages.

## Decisions recorded from Len (2026-11-01)

AqOne internal technical data stays vague because patent work begins on 2026-11-10.
Publish only AqOne's goal, a brief plain-language description, its status, and its achievements.
AqOne is at prototype stage and is fundraising through competitions, targeting DOST-PCIEERD funding.
Do not publish teammates' or Guild members' names yet.
Group photos already public on the team or Guild Facebook pages may be used; members are aware of that practice.
A site header with section or page navigation lets different readers jump to what they need.
The Developers' Guild has no website yet; link its official Facebook page instead.
Photos, demo videos, and pitch decks exist and will be supplied by Len.
Remove every link to the AqOne source repository from the site (Len, 2026-11-01).
The Guild adviser may be named on the Guild page.
An AqOne demo video may be shown publicly.
All photos Len has added are approved for use, subject to the privacy rules in this document.
Describe AqOne's funding goal publicly as "seeking R&D funding", without naming the agency.

Decisions from the design review (2026-11-01):
Use the Guild colorway and a neo-brutalist treatment (Len chose the look of ng-brutalism without adopting the Angular library).
Give each background color its own low-key line pattern.
Mark Warang and Project Tabang as shelved: development is paused, not abandoned.
The credentials page shows every certificate, grouped into Competitions and awards, Skills training, and Events and webinars.
Leave the 60-second Guild Reel off the site until it is re-rendered with the official name and founding-members framing.

## Source of truth for Guild facts

Guild facts, recognitions, framing rules, roadmap, and visual identity come from `03-DEV-GUILD/DevGuild/docs/MEDIA_AND_OUTREACH_RECORD.md` (created 2026-11-01).
Follow its framing rule: most of the 15 recognitions were earned by founding members' teams before the Guild was formed; never imply the Guild is a year old.
Competition photos come from that repository's overview PDF annex (1400 px sources) unless Len supplies originals.

## Site structure

| Path | Purpose |
| --- | --- |
| `/` | Overview: intro, two flagship cards, other builds, skills, recognition summary, contact |
| `/aqone/` | AqOne documentation page |
| `/devguild/` | ASU Developers' Guild documentation page |
| `/credentials/` | Full verified credentials list (moved off the home page) |

Every page shares one header with navigation: Home, AqOne, Dev Guild, Builds, Skills, Credentials, Contact.
Home-section items (Builds, Skills, Contact) link to anchors on `/`; page items link to their pages.
The current page is marked with `aria-current="page"`.
On narrow screens the header wraps or scrolls horizontally without hiding items behind a JavaScript-only menu.
Each page has its own title, meta description, canonical URL, and Open Graph tags, and is listed in `sitemap.xml`.

## Home page (`/`)

Keep the intro (name, descriptor, short summary, resume and primary links).
Replace the three equal build rows with two large flagship cards linking to `/aqone/` and `/devguild/`.
Each card shows a photo, a one-sentence summary, two or three headline facts, and a "Read more" link.
Add an "Other builds" section with compact entries for Warang and Project Tabang, each marked "Shelved", keeping their repository links.
Add a "Skills" section grouped by area (mobile, backend, hardware integration, leadership), listing only skills evidenced by the projects or resume.
Replace the credential carousel and 16-item list with a short recognition strip of the strongest honors and a link to `/credentials/`.
Keep the contact section.

## AqOne page (`/aqone/`)

Purpose: explain what AqOne is and what it has achieved without disclosing patentable internals.

Sections, in order:
1. Hero: name, tagline, one-sentence description, status badge "Prototype - fundraising".
2. The problem: municipal fishers in New Washington, Aklan, go beyond cellular coverage with no reliable way to call for help.
3. What AqOne does, in plain language: lets a fisher at sea send an SOS that reaches shore responders without cell signal, and tells the fisher that help acknowledged it.
4. Recognition timeline: AI Fest 2026 (2nd Place, School-Based, Aug), DTI ASPIRE Demo Day (Most Innovative Solution, Sept), DOST RSTW Student Startup Competition (Champion, Oct), Enactus Philippines National Competition (Top 30 of 200+, Oct), DICT Philippine Startup Challenge XI Region VI (Top 4, Oct).
5. Where it is going: prototype stage, fundraising through competitions, seeking R&D funding.
6. My role: lead developer, without naming teammates (for example "a team of six students").
7. Gallery: approved photos and, if Len approves, a demo video that does not reveal internals.
8. Updates log: short dated entries, newest first.

Must not include: architecture diagrams, component or radio specifications, message formats, data models, algorithms, repository links to source code, or pitch-deck slides with technical or financial detail.
Pitch decks are a source for public-facing wording only.
No page links to the AqOne source repository.

## Developers' Guild page (`/devguild/`)

Sections, in order:
1. Hero: official name "ASU Developers' Guild", one-line mission, link to the official Facebook page.
2. Why it exists: Western Visayas needs more tech startups; founding members' competition results showed Aklan students can compete.
3. What it is now: officially accredited under the College of Computer Studies, 33 members, 9 student officers, faculty adviser, motto "Learn. Build. Serve.", tagline "Spearheading tech start-ups in Aklan."
4. Teams and results: the 15 recognitions across 7 teams from the source record, with member projects described by team and project name only.
5. What the Guild does: competitions, real-world deployment focus, pitches and showcases, Paindis-indis 2026 booth, and the roadmap (Show and Tell Nov 14, recruitment Nov 30 - Dec 4, orientation Jan 2027, first ASU hackathon proposed Mar 2027).
6. My role: founder and president; what Len built and leads.
7. Gallery: approved competition photos from the Guild overview annex.
8. Updates log.

Name the faculty adviser on this page.

## Credentials page (`/credentials/`)

Move the full verified credentials list here unchanged in accuracy.
Present it as a static grid of cards (thumbnail, result, title, issuer, date, certificate link) without auto-advancing slides.
Group into Competitions and awards, Skills training, and Events and webinars, with jump links and counts at the top.
List AqOne honors that have no certificate yet in a clearly marked "certificates not yet on file" box under Competitions.

## Media handling

Len places source media in a non-published intake folder; only approved, optimized copies go to `public/assets/`.
Images: WebP, sized for their slot, each under 200 KB as the existing test requires, with descriptive alt text.
Videos: prefer embedding from an existing public host (Facebook or YouTube) over self-hosting; any self-hosted file needs Len's approval and a poster image.
Strip location and device metadata from published photos.

## Acceptance criteria

- AC-1: All four paths load as static pages with the shared header, and every header link resolves.
- AC-2: The AqOne page contains none of the excluded technical content listed above.
- AC-3: No page shows a teammate's or Guild member's personal name; the Guild adviser is the only named person besides Len.
- AC-3b: No page links to the AqOne source repository.
- AC-4: Every local asset referenced by any page exists, and the asset-integrity test covers all pages.
- AC-5: No horizontal scroll at 320, 390, 768, 1024, and 1440 px widths; screenshots recorded as evidence.
- AC-6: Each page has unique title, description, canonical, and Open Graph tags, and the sitemap lists all four.
- AC-7: Build and full test suite pass.

## Open questions for Len

1. Resolved 2026-11-01: remove the AqOne repository link.
2. Resolved 2026-11-01: the adviser may be named.
3. Resolved 2026-11-01: a demo video may be shown.
4. Partly resolved: all added photos are approved; their location still needs confirming.
5. Resolved 2026-11-01: use "seeking R&D funding".
6. Resolved 2026-11-01: DESIGN-002.
7. Resolved 2026-11-01: Tabang placed Top 6; organizers issued certificates only for Top 10 placement.
8. Open: whether to name the second adviser, Ronald O. Tan.
