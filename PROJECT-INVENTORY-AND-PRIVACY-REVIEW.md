# Project Inventory and GitHub Privacy Review

**Review date:** 2026-10-03  
**Scope:** PersonalProjects and the portfolio projects within it  
**Handling:** Private research note. Review this file before sharing it. It maps personal or confidential records.

## What I reviewed

I mapped the five PersonalProjects areas and identified 30 Git repository/worktree locations. I read relevant project descriptions, manifests, selected source files, Git status, and selected personal and organizational documents. A pattern scan covered 1,727 text and configuration files for likely credentials. I did not run project tests or applications, inspect every code line or binary, or audit full Git history.

No project files were modified as part of the review.

## Main findings

The strongest portfolio stories are **AqOne, Project Tabang, Warang, Pipeline, Len's Toolkit, and the DevGuild Website**. Supporting projects include the Aquanons project site, CatTinder, the software engineering reviewer, and BantAI as a prototype.

AqOne is a strong engineering story, but its current license identifies the source and associated materials as proprietary and confidential and requires written Team Aquanons permission for publication. Treat the code accordingly.

Several related directories are alternate worktrees of the same project. The AqOne variants share one repository; the Tabang integration and track variants also share one repository. Do not present these as separate products.

The SHOWCASE site has an implemented story framework, but its project section still contains a drafting placeholder. The existing employer-focused portfolio already features AqOne, Warang, and Tabang.

## Folder map

| Folder | Contents |
|---|---|
| [00-HACKATHONS-COMPETITIONS](../../00-HACKATHONS-COMPETITIONS) | AqOne, Tabang, BantAI, Ani.Aklan, programming exercises, competition records |
| [01-SEMINARS-WORKSHOPS](../../01-SEMINARS-WORKSHOPS) | Python training exercises and startup bootcamp notes |
| [02-SELF-PROMOTION](..) | Portfolio sites, GitHub profile, credentials, resumes, identity documents |
| [03-DEV-GUILD](../../03-DEV-GUILD) | DevGuild website, automation tools, governance, membership, accreditation |
| [04-FUN-STUFF](../../04-FUN-STUFF) | Warang, Pipeline, Toolkit, CatTinder, reviewer app, Superpowers fork, Cisco software |

## Project descriptions

### 1. AqOne / Team Aquanons

**Location:** [AIHackathon2026_Aquanons_AqOne](../../00-HACKATHONS-COMPETITIONS/00-HACKATHONS/00-2026-FIRST-YEAR/2026-Aquanons/AIHackathon2026_Aquanons_AqOne)

A maritime safety system for municipal fishers around New Washington, Aklan, designed for areas without cellular coverage. A Flutter phone hands an SOS over local Wi-Fi to an ESP32 boat pod. The pod uses LoRa to reach a shore gateway. FastAPI and PostgreSQL services maintain incidents and a responder dashboard handles acknowledgement and response. The repository also contains weather/advisory, vessel identity, messaging, monitoring, and experimental AI/search components.

**Showcase strengths:** System design across mobile, backend, and embedded hardware; offline delivery; emergency response workflows; careful distinction between delivery states.

**Limits:** Existing records do not establish a current-build field-verified handset-to-responder path or outdoor radio range. AI features are experimental and not validated on locally collected data.

**Publication constraint:** The [LICENSE](../../00-HACKATHONS-COMPETITIONS/00-HACKATHONS/00-2026-FIRST-YEAR/2026-Aquanons/AIHackathon2026_Aquanons_AqOne/LICENSE) calls the code and materials proprietary and confidential, and requires prior written Team Aquanons permission to publish. Use team-approved material for a public story.

### 2. Project Tabang

**Location:** [Project_Tabang](../../00-HACKATHONS-COMPETITIONS/00-HACKATHONS/00-2026-FIRST-YEAR/2026-Tabang/Project_Tabang)

A flood-reporting and response application for Aklan. Residents submit reports or request help; responders claim and progress incidents; reviewers approve responder applications. The app uses React, Firebase, Node.js, and Cloudinary. Its architecture separates public incident summaries from precise location and contact information used by authorized participants.

**Showcase strengths:** Role-based workflows, incident lifecycles, privacy-aware access, authentication, uploads, and community response design. Your existing portfolio describes your role as backend developer and technical presenter.

**Limits:** Integration work is distributed across branches/worktrees. The Tabang track-B worktree had uncommitted edits during the review. Do not present planned partner integration and offline replay as finished without checking their state.

### 3. Warang

**Location:** [Warang](../../04-FUN-STUFF/WARANG/Warang)

An offline-first photo journal organized around a map. Users capture photographs, associate them with locations, browse moments through map pins, and search captions and places locally. It uses Flutter, Riverpod, Drift/SQLite, and OpenStreetMap, with a distinct visual identity.

**Showcase strengths:** Mobile product design, local persistence, geospatial interfaces, and camera/location flows.

**Limits:** Uncached map areas need a connection. Backup/restore, sharing, editing, and travelbook functions are not all exposed as finished features. The remediation plan records release and Android backup safeguards as unfinished. The README says the project has not yet been licensed.

### 4. Pipeline Organization Manager

**Location:** [Pipeline](../../04-FUN-STUFF/Pipeline)

An organization-management application for groups such as AqOne and DevGuild. It provides organization dashboards, member management, task tracking, announcements, and a Flutter Android companion with cached offline reads. It uses Fastify and PostgreSQL for the backend and plain JavaScript modules for the web interface.

**Showcase strengths:** Full-stack development, access control, multi-organization data boundaries, shared web/mobile APIs, offline status design.

**Limits:** Its verification ledger reports all eight local MVP phases complete. Production hosting, live email, offsite backups, physical Android testing, release signing, and distribution remain pending.

### 5. Len's Toolkit

**Location:** [Len's_Toolkit](../../04-FUN-STUFF/Len's_Toolkit)

A Node.js CLI for preparing AI-assisted development workflows. It installs rules, skills, and templates; records file ownership; detects local edits; and reports differences so project customizations are preserved.

**Showcase strengths:** Developer tooling, safe file handling, repeatable setup, and workflow design. Its README describes the runtime as dependency-free.

**Attribution:** The README identifies many included skills as curated or adapted from other authors. Emphasize your installer, integration, packaging, and workflow while preserving upstream attribution and notices.

### 6. DevGuild Website

**Location:** [DevGuild-Website](../../03-DEV-GUILD/DevGuild-Website)

A React/Vite site for the ASU developer community, with project discovery, organization information, event images, themes, responsive navigation, and an assistant interface. It uses React Router and CSS Modules.

**Showcase strengths:** Community-facing web design, reusable components, responsive information architecture, and GitHub Pages deployment.

**Limits:** The inspected contact component displays a success message without delivering the message. The assistant has a local keyword fallback and an optional external endpoint; source alone does not establish a live AI service. Check permission for community photos.

### 7. Aquanons Public Website

**Location:** [Aquanons_WEB](../../00-HACKATHONS-COMPETITIONS/00-HACKATHONS/00-2026-FIRST-YEAR/2026-Aquanons/Aquanons_WEB)

A public HTML/CSS/JavaScript site explaining AqOne's purpose, SOS path, team, progress, hardware, and partner opportunity. It contains responsive verification screenshots and labelled hardware models.

**Showcase strengths:** Explaining a complex engineering system to nontechnical audiences.

**Presentation:** Feature it as the communication companion to AqOne or as a separate frontend project. Align technical claims with the main project's field evidence.

### 8. CatTinder

**Location:** [CatTinder](../../04-FUN-STUFF/CatTinder)

A Flutter cat-matching app experiment used to compare AI coding models against a shared brief. Implementations include profiles, swipe cards, matches, chat screens, and simulated feline responses. Three folders hold Gemini, GPT, and MuseSpark versions.

**Showcase strengths:** Product prototyping, interaction design, state management, and AI-assisted development experiments.

**Limits:** The comparison table does not fully represent all three versions. Present the app as an experiment; do not claim a model winner without comparable measurements. Chat responses are simulated.

### 9. Software Engineering / SDLC Reviewer

**Location:** [SEMPTC-review](../../04-FUN-STUFF/SEMPTC-review)

An interactive study tool built with HTML, CSS, and JavaScript. It includes modules, flashcards, matching, search, a timer, keyboard/swipe controls, themes, and local mastery tracking.

**Showcase strengths:** Turning study material into an interactive product with plain web technologies.

**Publication check:** The folder includes an educational PDF and derived course content. Check attribution and permission before redistributing them.

### 10. BantAI / Bantay

**Location:** [afp-ideathon](../../00-HACKATHONS-COMPETITIONS/00-HACKATHONS/01%202026%20SECOND%20YEAR/00-AFP-HACKATHON/afp-ideathon)

A proposed acoustic incident-detection and response system. The planned design uses distributed ESP32 sensors, a Python/FastAPI on-premise service, spatial database components, a React/TypeScript floor-plan dashboard, and machine-learning models.

**Showcase strengths:** Architecture exploration, event-driven design, spatial visualization, dashboard prototyping.

**Limits:** Core classification and ML feature-extraction functions explicitly raise NotImplementedError. The implementation record says training data had not been collected. The scripted dashboard is not evidence of a working detection system or guaranteed accuracy. Label this a concept/prototype and use synthetic examples.

### 11. Ani.Aklan

**Location:** [Ani.Aklan-Copy](../../00-HACKATHONS-COMPETITIONS/00-HACKATHONS/00-2026-FIRST-YEAR/2026-AniAklan-Copy)

An early farmer-to-consumer marketplace concept for Aklan, with a harvest-to-table landing page, product presentation, seller/buyer calls to action, and Firebase setup.

**Limits:** The README is empty, the landing page references a Firebase script missing from its expected nested location, and Git records local changes. Its remote belongs to another account; clarify your contribution and collaboration context before presenting authorship. Treat on-page totals as placeholders unless supported by evidence.

### 12. Superpowers Fork

**Location:** [superpowers](../../04-FUN-STUFF/superpowers)

A customized fork of an existing AI development workflow project. Its docs describe workflow modes, engineering rules, simplification principles, Council review, and coding-tool integrations.

**Showcase strengths:** Maintaining and adapting an upstream developer tool.

**Attribution:** Present it clearly as a fork and retain upstream author/license information. Its rollout document says it succeeds the Toolkit, while the Toolkit has later development; explain their relationship accurately.

### 13. Living Blueprint SHOWCASE

**Location:** [SHOWCASE](./SHOWCASE)

A story-led portfolio built with HTML, CSS, and JavaScript. It has a blueprint theme, animated introduction, local music player, cursor spotlight, responsive behavior, and accessibility accommodations.

**Current state:** The project-story section still contains a drafting placeholder. The narrative framework is ready for evidence and descriptions. AqOne's connectivity constraints, Warang's local-storage choices, and Pipeline's permissions fit the existing theme.

### 14. Employer-Focused Portfolio

**Location:** [WEBSITE](./WEBSITE)

A separate portfolio built with semantic HTML, CSS, JavaScript, and Vite. It presents AqOne, Warang, Tabang, leadership, education, credentials, and contact information.

**Showcase strengths:** Recruiter-oriented information design, progressive enhancement, credentials, responsive asset handling.

**Limit:** Some project and milestone descriptions are older than the GitHub profile. Use it as a source for stated roles, but verify claims against project evidence.

### 15. GitHub Profile

**Location:** [len-build-it](./GITHUB/len-build-it)

A profile README with featured builds, bio, development approach, milestones, and visual assets.

**Presentation:** Use it as a short introduction linking into project stories, rather than counting it as another product. Its recent AqOne event claims are locally documented but were not independently verified online.

### 16. DevGuild Document Automation and Community Work

**Location:** [DevGuild](../../03-DEV-GUILD/DevGuild)

This folder contains Python document builders and a Node presentation generator alongside governance materials.

**Showcase strengths:** Document automation, repeatable administrative workflows, student-community leadership.

**Public treatment:** Sanitized generator code or synthetic sample documents could support an automation story. Member rosters, accreditation packages, and signed materials contain other people's information and should remain private.

### 17. Python Seminar Projects

**Location:** [DWIA-DICT-PYTHON-SEMINAR](../../01-SEMINARS-WORKSHOPS/DWIA-DICT-PYTHON-SEMINAR)

A progression through Python basics, data handling, OOP, and GUI exercises. The Tkinter banking simulator is the most complete standalone example.

**Public treatment:** Good learning-project material when labelled educational. Use synthetic account data and review the informal journal before sharing.

### 18. Java Programming Exercises

**Location:** [programmingComp](../../00-HACKATHONS-COMPETITIONS/01-CONTEST/00%202026%20FIRST%20YEAR/programmingComp)

Small console/OOP exercises, including pizza ingredient/pricing and grocery quantity/total calculations. Some entry points are unfinished.

A nearby [programming-contest folder](../../00-HACKATHONS-COMPETITIONS/01-CONTEST/00%202026%20FIRST%20YEAR/programming-contest) contains contest problem documents.

**Public treatment:** Include only completed source as early learning work. Leave compiled .class files and IDE output out, and distinguish solutions from supplied problems.

### 19. DTI ASPIRE Bootcamp Notes

**Location:** [DTI-ASPIRE STARTUP BOOTCAMP](../../01-SEMINARS-WORKSHOPS/DTI-ASPIRE-STARTUP%20BOOTCAMP)

Startup learning notes about customer evidence, local ecosystem support, financing, and AqOne's development direction.

**Public treatment:** These can support a founder journey after editing. Raw notes include informal remarks and internal business thinking.

### 20. Cisco IT Essentials Virtual Desktop Fix

**Location:** [cisco it essentials virtual desktop](../../04-FUN-STUFF/cisco%20it%20essentials%20virtual%20desktop)

Third-party Cisco educational software, with instructions describing a startup/compatibility fix for use after browser Flash support ended.

**Your identifiable contribution:** The documented one-line startup change and instructions.

**Publication constraint:** The ownership notice says the Cisco/Adobe software is not yours and grants no redistribution rights. A technical write-up about the fix may be appropriate; the bundled application should not be presented as your original work.

## Duplicate folders and unlocated projects

The AqOne variants are worktrees of one Git repository. The Tabang integration and track folders are worktrees of one repository. Count each product once and identify worktree-only progress when describing status.

The DevGuild website refers to BFUR64/HANDA 360, SIGMANHWA, GURU.AI, and LETSCHECK. This review did not find standalone implementations for these names in PersonalProjects. Community-page references alone do not establish your authorship.

## Personal information and material to keep private

| Material | Location | Contents to keep out of public repos/uploads |
|---|---|---|
| National IDs and school records | [01 IDS](<../01-DOCUMENTS/01 IDS>) | National ID front/back images, ID scans, registration images, identification numbers, birth details, addresses, QR/barcodes, signatures |
| Original resumes | [02 RESUME](<../01-DOCUMENTS/02 RESUME>) | Resume copies contain email and mobile number. Create a public version with only contact details you intend to publish. |
| Resume already copied into a portfolio | [WEBSITE public documents](./WEBSITE/public/assets/documents) | The tracked resume copy still contains a mobile number. This conflicts with the README statement that personal phone numbers are excluded. |
| Member and officer records | [DevGuild documents](../../03-DEV-GUILD/DevGuild/documents) | Member names tied to course/section, handwritten signatures, officer phone numbers. The member-list scan visibly contains signatures. |
| Signed organizational paperwork | DevGuild documents and dated archives | Adviser letters, registration lists, accreditation packages, signed scans, other people's contact details |
| Competition correspondence | AqOne artifacts and BantAI references | Endorsement letters, signatures, private contact details, applications, nonpublic correspondence |
| Business and finance records | [AqOne funding documents](../../00-HACKATHONS-COMPETITIONS/00-HACKATHONS/00-2026-FIRST-YEAR/2026-Aquanons/AIHackathon2026_Aquanons_AqOne/docs/funding) | Budgets, investor models, funding assumptions, grant planning |
| Credential files | Tabang, AqOne, BantAI, and Warang folders | Populated local secrets and signing settings. Exclude .env, key.properties, signing keys, broker password files. |
| Local databases | Pipeline and AqOne folders | Database files may contain records; their contents were not inspected or confirmed synthetic. |
| Raw environment/audit output | AqOne security audit output | A tracked test/audit log includes a password-bearing local database connection string. Sanitize logs before publication. |
| Repository backup | [Toolkit backup](../../04-FUN-STUFF/backups/Len-s_Toolkit_backup_2026-09-11) | The Git bundle preserves repository history. Review history before sharing it. |

The secret scan found Tabang's populated Cloudinary secret repeated across the main and worktree .env files. The checked AqOne and Warang Android signing settings contain populated passwords. These project secret/key files were ignored and untracked in the checked Git state. The local audit finding does not establish production credential exposure.

“Tracked by Git” describes local repository contents; it does not prove a file is available on a public remote. Git ignore rules protect normal staging, not manual folder or ZIP uploads.

## Materials needing a sharing decision

- **Certificates:** Useful public credentials after checking scans for personal details and embedded identifiers.
- **Portraits/team photographs:** Share only when intended; consider other people's participation and permission.
- **Python CSV exercises:** Two files have name, age, gender, salary, and department columns. Entries were not verified as fictional. The separate health CSV uses duration, pulse, max pulse, and calories columns.
- **Firebase client configuration:** Client keys are not equivalent to an administrator private key, but review application rules and configuration before publishing.
- **Music, course PDFs, images, fonts, bundled third-party skills:** Preserve attribution and confirm redistribution rights. No music-license record was found in the inspected SHOWCASE material.

## Portfolio direction

Give AqOne, Warang, Tabang, Pipeline, Len's Toolkit, and DevGuild Website the detailed project stories. Pair the Aquanons project website with AqOne or list it separately for frontend work. Use CatTinder and the software engineering reviewer as shorter entries. Present BantAI as a concept/prototype. Put learning exercises, document automation, and the Superpowers fork in a compact supporting collection.

The shared theme is building useful software for local communities, limited connectivity, and practical constraints. The SHOWCASE site already introduces that theme; the missing pieces are project-specific evidence, accurate contribution descriptions, and carefully selected public assets.
