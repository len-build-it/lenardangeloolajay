# DESIGN-002: Guild colorway, neo-brutalist redesign

Created: 2026-11-01T18:10:00+08:00
Updated: 2026-11-01T18:10:00+08:00
Revision: 1
Status: Approved by Len in chat on 2026-11-01 ("im satisfied with the design, implement those")

## Authority

Len reviewed the design canvas "Portfolio redesign mock-up" (Home, Developers' Guild, and Credentials artboards) and approved it for implementation on 2026-11-01.
This document supersedes DESIGN-001 for the pages defined in FEAT-002.
DESIGN-001 remains as history.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| Cream | `#FFF8F1` | Page ground (Guild brand cream) |
| White | `#FFFFFF` | Plain content bands and cards |
| Ink | `#10201A` | Text, borders, hard shadows |
| Ink secondary | `#3D4F45` | Secondary text (passes 4.5:1 on cream and white) |
| Guild green | `#13853A` | Shadows, accents |
| Dark green | `#0E5C2A` | Links, dark bands, footer |
| Guild orange | `#F2930C` | Primary buttons, stickers, one band; never text on light grounds |
| Hairline | `#E8DCCB` | Soft dividers inside tables and lists |

Type: Alfa Slab One for headings only, Outfit (400, 500, 600, 700) for everything else.
Both are self-hosted from `public/assets/fonts/` under the SIL Open Font License, so the site makes no third-party font requests.

## Neo-brutalist rules

Cards, photos, buttons, tables, and panels use a 3px ink border and a hard offset shadow with no blur.
Shadow colors carry meaning: orange for AqOne and highlight panels, green for Guild and general content, ink for buttons and photos.
Buttons press in on `:active` (shadow drops, element shifts into place); the shift is disabled under `prefers-reduced-motion`.
Status stickers are small, bordered, slightly rotated labels: "Prototype" (orange, -3deg), "Shelved" (dashed outline, 2deg).
Major bands are separated by 3px ink rules.
Do not use `// LABEL` monospace tags, single-word color highlights, all-caps section numbers, or auto-advancing carousels.

## Background line art

Each ground color has one pattern, used the same way everywhere that color appears, at 5-10% opacity:

| Ground | Pattern |
| --- | --- |
| Cream | Diagonal hairlines, 135deg, 16px pitch |
| White | Dot grid, 18px |
| Dark green | Ripple arcs from a corner, 27px pitch |
| Orange | Vertical pinstripes, 12px pitch |
| Ink | Graph-paper grid, 24px |

Patterns are CSS gradients, not images.

## Signature element

The home hero portrait sits inside an 18px orange ring with an ink outline and hard shadow, over a green crescent, echoing the Guild seal.
It is the one bold element on the home page; everything around it stays calm.

## Layout

Content max width 1160px with a 24px gutter; sections stack to one column at phone width with no horizontal scroll.
Grids use `repeat(auto-fit, minmax(min(100%, N), 1fr))` so cards reflow without breakpoints.
The shared header wraps its links on narrow screens; there is no JavaScript menu.
