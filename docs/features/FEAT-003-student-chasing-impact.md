# FEAT-003: Student chasing impact

Created: 2026-11-26T00:48:16+08:00
Updated: 2026-11-26T00:48:16+08:00
Revision: 1
Status: Approved for execution by Len in chat on 2026-11-26 (see HANDOFF.md)

## Purpose and success

Len asked on 2026-11-26 to reposition the portfolio so he reads as impact-driven: he chases impact and uses technology to get there.
He refined the framing the same day: present him as a student chasing impact, never as someone who has already made it.
The audience stays his existing network, as in FEAT-002.
Success: a reader in Len's network can say, after the home page, what problems Len is working on, where each effort honestly stands, and what comes next.

## Scope and non-goals

This revision supersedes these parts of [FEAT-002](FEAT-002-flagship-documentation.md): the home page section list, the AqOne page section order, and the Guild page section order.
All other FEAT-002 rules stay in force, including the AqOne exclusions (AC-2), the naming rule (AC-3), no repository link (AC-3b), metadata (AC-6), and DESIGN-002 visuals.
Non-goals: no new pages, scripts, dependencies, or tracking; no change to the credentials page; no public ask for introductions (Len, 2026-11-26).
The site must not claim deployment, users, lives saved, or measured over-water range.

## User flows

A reader lands on `/`, reads the hero, sees two problem-first cards with an honest status, reads how Len builds, and can open `/aqone/` or `/devguild/` for the full status ladder.
With images missing, every card and ladder keeps its text.
With JavaScript disabled, nothing changes, because the site uses none.

## Requirements and acceptance criteria

| ID | Required behavior | Observable pass/fail criterion |
| --- | --- | --- |
| REQ-001 | Home hero uses the copy in "Approved copy: home hero". | The H1 is Len's name; the next two paragraphs match the approved copy exactly. |
| REQ-002 | Home title, meta description, Open Graph and structured-data descriptions use the student-chasing-impact framing. | Title reads `Lenard Angelo Olajay \| Student chasing impact through software`; no page says "Developer & Builder Portfolio". |
| REQ-003 | Home "What I'm building" becomes "What I'm working toward", with one problem-first card each for AqOne and the Guild. | Each card shows, in order: the problem, what is being built, where it stands, and the next step. |
| REQ-004 | Home "Skills" becomes "How I build" with the four approved principles; the tool list survives as one line inside "Build for their conditions". | Section `#how-i-build` exists; header link reads "How I build"; every tool from the old Skills section still appears. |
| REQ-005 | Home "Recognition" list is removed; AqOne's two headline honors stay on its card and the full record stays on `/credentials/`. | Home has no `recognition-title` section; the AqOne card lists RSTW Champion and Enactus Top 30 of 200+. |
| REQ-006 | "Earlier builds" entries are rewritten problem-first using the approved copy. | Heading stays "Earlier builds"; both GitHub links remain. |
| REQ-007 | A status ladder shows each effort's rungs with a text state (Done, Now, Next, Goal) and, where approved, a "What I learned" line. | States are readable as text, not color alone; the ladder is an ordered list. |
| REQ-008 | AqOne page order: hero, the problem, what AqOne does, where it stands (ladder), how we'll know it works, recognition and what it opened up, my role, on stage, updates. | Sections appear in this order. |
| REQ-009 | The AqOne problem section uses only sourced figures, each linked to its source, and states the local data gap honestly. | Every number has a link; no New Washington or Aklan estimate appears; if a source URL cannot be confirmed, that figure is omitted. |
| REQ-010 | The AqOne page mentions no bug, test metric, range, radio, frequency, or regulator detail. | Page text contains none of: bug, queue, LoRa, MHz, ESP32, km, NTC, RSSI. |
| REQ-011 | "Recognition and what it opened up" pairs results with sourced follow-ons only. | AI Fest lists the incubator endorsement offer; PSC XI lists DICT regional mentorship; Enactus lists the national capacity-building sessions; no person is named. |
| REQ-012 | AqOne updates log gains the November 2026 patent filing and field test entries. | Two new dated entries at the top, newest first. |
| REQ-013 | Guild page leads with the problem it exists for and states that every member team is still prototyping. | The first section after the hero contains the approved Guild problem copy. |
| REQ-014 | Guild "What's next" becomes the Guild status ladder, with past-dated items shown only if Len confirms they happened. | No roadmap item dated before the build date is presented as upcoming. |
| REQ-015 | Header navigation on every page replaces "Skills" with "How I build" linking to `/#how-i-build`. | Tests in `tests/pages.js` and `content-integrity.test.js` reflect the new link and anchor. |

## Approved copy

This section is the copy Len approves with this revision; implementation may only fix typos and line breaks.

### Home hero

> I'm a 2nd-year software engineering student chasing one thing: technology that actually reaches the people who need it.

> Right now: taking AqOne, an offline SOS for fishers, from champion prototype toward its first pilot in New Washington, and building the ASU Developers' Guild so student projects reach real users.

Actions stay: Read about AqOne, Meet the Guild, Resume (PDF).

### Home cards

AqOne:
- Problem: Fishers in New Washington, Aklan, lose signal at sea, with no reliable way to call for help.
- Building: AqOne, an offline SOS that reaches shore responders and tells the fisher help is coming.
- Where it stands: Champion prototype, patent application filed. Now seeking R&D funding.
- Next: a pilot with fishers and responders in New Washington.
- Facts: Champion, DOST Western Visayas RSTW Student Startup Competition; Top 30 of 200+, Enactus Philippines National Competition.

ASU Developers' Guild:
- Problem: Most student projects in Aklan stop at the competition.
- Building: a student developer guild that carries projects toward real users.
- Where it stands: accredited, 33 members, 7 teams; every team is still prototyping.
- Next: the recruitment drive, then the first ASU hackathon (proposed).

### How I build

1. Start with who it's for. Every build starts with people and a problem they actually have: fishers out of signal, families in flood zones.
2. Build for their conditions. If the people I build for have no signal, the software can't need one. Tools: Flutter, Dart, Riverpod, Drift and SQLite; Python, FastAPI, PostgreSQL, REST APIs, Docker; JavaScript, HTML, CSS, Java, Git and GitHub.
3. Put it in front of reality. A bench run or a slide deck isn't proof. I take builds outside and in front of judges and mentors, and treat what they find as the next task.
4. Bring others along. One student project won't change Aklan. I founded the ASU Developers' Guild so more of them make it past the competition stage.

### Earlier builds

- Project Tabang: Families in flooded Aklan barangays need a way to ask for help and show where it's needed. Tabang is a community flood-reporting map; I built the backend and presented it. Top 6 at UPV KomsaiHack 2026.
- Warang: Where I learned to build offline-first. A Flutter app that plots your own photos on a map, with no accounts, no feed and no cloud. The same skills now carry AqOne.

### AqOne status ladder

| Rung | State | What I learned |
| --- | --- | --- |
| Working prototype, 2026 | Done | A demo that works on a desk is the start, not the finish. |
| Judged at five competitions, Aug to Oct 2026 | Done | Judges ask who will use it before they ask how it works. |
| Field-tested on land, Nov 2026 | Done | Testing outside shows what bench runs miss. |
| Patent application filed through Aklan State University, Nov 2026 | Done | (none) |
| R&D funding | Now | (none) |
| Pilot with fishers and responders in New Washington | Next | (none) |
| In everyday use at sea | Goal | (none) |

### AqOne problem

Keep the existing two problem paragraphs.
Add, each with a source link: 442,014 registered municipal fishing boats in the Philippines (Oceana Philippine Fisheries Assessment, 2024), and more than 100,000 fishing deaths a year worldwide (FISH Safety Foundation study, reported by Pew, 2022).
Add: "We haven't found a public yearly count of sea incidents for Aklan."
The Buruanga fishers' rescue may be added only once its date is confirmed from the source.

### AqOne "How we'll know it works"

Goals, labelled as goals: an SOS from open water reaches responders every time it is sent; the fisher gets confirmation quickly; New Washington responders use it in their normal routine.

### AqOne "My role" addition

> The part I care most about: a fisher should know help is coming, not just hope a message went out.

### Guild problem

> Most student projects stay in the competitions. Every Guild team, AqOne included, is still at the prototype stage. The Guild exists to close that gap: structure, programs and a path from classroom project to real users.

### Guild status ladder

| Rung | State |
| --- | --- |
| Officially accredited under the College of Computer Studies, 2026 | Done |
| 7 founding-member teams competing, 15 recognitions in 2026 | Done |
| Show and Tell (moved from Nov 14, 2026; new date to be announced) | Next |
| Recruitment drive, Nov 30 to Dec 4, 2026 | Next |
| New member orientation, Jan 30, 2027 | Next |
| First ASU hackathon, Mar 2027 (proposed) | Goal |
| First member project in real use | Goal |

## Data and interfaces

No data model; static HTML only.
Source links for statistics are external `<a>` links, not loaded resources, so the no-third-party-resource test still holds.

## Quality constraints

[CONSTRAINTS](../product/CONSTRAINTS.md) and FEAT-002 acceptance criteria AC-1 to AC-7 apply.
The status ladder follows [DESIGN-002](../product/DESIGN-002.md) revision 3.
Ladder states are text labels, meeting the "no color alone" rule.

## Decisions and assumptions

Confirmed by Len in chat on 2026-11-26:
- Frame Len as a student chasing impact, not as someone who has made impact.
- Hero: Option B's first paragraph with Option A's "Right now" paragraph.
- Do not publicly ask the network for introductions.
- Keep Enactus "Top 30 of 200+"; Len will fetch the certificates.
- Leave the fisher interview out.
- Do not mention the November test bug on the AqOne page.
- The ASU-supported patent filing may be mentioned.
- Include "What I learned" lines.

Observed facts: Len's evidence review of 2026-11-26 found no LGU or MDRRMO contact, no recorded AqOne prize money, and no published New Washington incident counts.
Assumption: the "What I learned" lines above are drafted from the record; Len's approval of this revision makes them his.

## Open questions and readiness

Resolved 2026-11-26: the Nov 14 Show and Tell was moved (Len); it appears as Next with no date until Len gives the new one.
Resolved 2026-11-26: use "patent application" for now (Len); correct it if the filing turns out to be a utility model.

No blocking questions remain.
Approval: Len requested execution by Gemini on 2026-11-26 after reviewing this revision; recorded in HANDOFF.md.
