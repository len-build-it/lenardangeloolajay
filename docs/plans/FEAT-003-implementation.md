# PLAN-003: Student chasing impact

Created: 2026-11-26T00:48:16+08:00
Updated: 2026-11-26T00:48:16+08:00
Revision: 1
Status: Approved for execution
Feature spec and revision: [FEAT-003](../features/FEAT-003-student-chasing-impact.md) revision 1
Approved baseline and architecture revisions: ARCH revision 4 (unchanged); [DESIGN-002](../product/DESIGN-002.md) revision 3
Len's chat approval: 2026-11-26, recorded in HANDOFF.md
Target branch: master

## Scope

Requirements FEAT-003/REQ-001 to REQ-015.
Preserve the untracked files that `npx len-toolkit start` installed on 2026-11-26 (`.agents/skills/*`, `.claude/`, `CLAUDE.md`); they are not part of this work and are never staged.

## Phase 1: Home page reframed

Requirements: FEAT-003/REQ-001 to REQ-007, REQ-015
State: Complete

### Tasks

- [x] Rewrite the hero, cards, "How I build" and "Earlier builds" in `index.html` with the approved copy; remove the home Recognition section.
- [x] Update the home title, description, Open Graph and structured-data descriptions.
- [x] Replace the "Skills" header link with "How I build" (`/#how-i-build`) on all four pages.
- [x] Add the status-ladder styles to `src/styles.css` per DESIGN-002 revision 3.
- [x] Update `tests/pages.js`, `tests/content-integrity.test.js` and `tests/production-preview.test.js` for the new anchor, link and title.

### Verification

- [x] `npm run build` exits 0.
- [x] `npx vite preview --host 127.0.0.1 --port 4173 --strictPort` in the background, then `PREVIEW_URL=http://127.0.0.1:4173 npm test`; all tests pass; stop the preview.
- [x] Screenshots of `/` at 320, 390, 768, 1024 and 1440 px show no horizontal scroll, recorded in `docs/evidence/FEAT-003-verification.md`.

### Review and checkpoint

- [x] Review correctness, scope and unrelated changes; stage only phase paths and inspect the staged diff.
- [x] Update this plan, evidence and handoff; commit and verify Git reports success.

Checkpoint message: `feat(portfolio): reframe home as a student chasing impact`

## Phase 2: AqOne page

Requirements: FEAT-003/REQ-007 to REQ-012
State: Awaiting approval

### Tasks

- [ ] Reorder and rewrite `aqone/index.html` per REQ-008 with the approved copy and the AqOne status ladder.
- [ ] Confirm the Oceana and Pew source URLs by reading the pages; omit any figure whose source cannot be confirmed.
- [ ] Add a test that fails if the AqOne page contains any REQ-010 term.

### Verification

- [ ] Build and full test suite pass, as in Phase 1.
- [ ] AqOne page screenshots at the five widths, recorded in the evidence file.

### Review and checkpoint

- [ ] Same review, evidence, handoff and commit gates as Phase 1.

Checkpoint message: `feat(portfolio): show AqOne's path to impact`

## Phase 3: Guild page

Requirements: FEAT-003/REQ-013, REQ-014
State: Awaiting approval

### Tasks

- [ ] Add the Guild problem copy after the hero and replace "What's next" with the Guild status ladder in `devguild/index.html`.
- [ ] Drop past-dated roadmap items Len has not confirmed.

### Verification

- [ ] Build and full test suite pass.
- [ ] Guild page screenshots at the five widths, recorded in the evidence file.

### Review and checkpoint

- [ ] Same gates as Phase 1; update SPEC_INDEX and HANDOFF to mark FEAT-003 executed.

Checkpoint message: `feat(portfolio): show the Guild's path from prototype to real use`

## Recovery

Follow project `AGENTS.md` for the attempt limit and immediate blockers.
Record unresolved work and attempt counts in the current handoff.
Interrupted or failing work remains uncommitted and the phase remains incomplete.
No push or deployment is part of this plan unless Len asks.
