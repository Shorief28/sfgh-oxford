# SfGH Oxford — project notes

Static site for the Oxford branch of Students for Global Health.
Two HTML pages, one stylesheet, one script. No build step, no framework,
no package manager. Do not introduce any.

## Files

- `index.html` — home; contains the radial SVG map
- `events.html`
- `assets/site.css` — all styling; design tokens in `:root` at the top
- `assets/site.js` — mobile menu, scroll reveal. Progressive enhancement only.

## Hard constraints

These are not preferences. Check each one before finishing a change.

1. **Contrast.** Every text/background pair must meet WCAG AA (4.5:1 for body
   text, 3:1 for large text and meaningful graphics). `--signal` (#FF8A3D) is
   ONLY for backgrounds and for text on the navy `--ink`. For orange text on a
   light background use `--signal-ink`; for small graphics use `--marker`. If
   you change any colour, state the new contrast ratio in your reply.
2. **One `<h1>` per page.** Never skip heading levels.
3. **Real labels.** There is no form on the site — sign-ups go to a Google Form.
   If one comes back, every input needs a `<label for="...">`; placeholder text is
   never a substitute for a label.
4. **The site must work with JavaScript disabled.** Nothing in `site.js` may
   become load-bearing for reading content or navigating.
5. **The map needs a text equivalent.** If you edit the SVG in `index.html`,
   update both its `<desc>` and the `<table>` in the `<details>` below it so the
   figures still match.
6. **Reduced motion.** Any new animation must be disabled inside the existing
   `@media (prefers-reduced-motion: reduce)` block.
7. **Touch targets** stay at least 44×44px.
8. **`aria-current="page"`** on the nav link for the current page.

## Conventions

- British English throughout ("organise", "programme").
- Sentence case for headings and buttons. Buttons name the action that happens.
- Dates in event lists carry a machine-readable `<time datetime="YYYY-MM-DD">`.
  Where a date is not yet known the list shows plain "To be confirmed" with no
  `<time>` element — never invent a datetime, it lies to search engines and
  screen readers. Add the `<time>` back with the real date.
- The header and footer are duplicated across both pages. If you change one,
  change both and say so.
- Keep the markup plain and readable. A committee member with no coding
  background should be able to find an event and edit it by hand.

## Content that is still placeholder

Do not present these as facts; flag them if a task touches them.

- Member count (50+) and annual conferences (3)
- Charity number 1111824 — this is the national charity's, unverified for the branch
- All event dates, titles and venues; the three on `index.html` read
  "Event title to be confirmed"
- The Nairobi partner exchange on the map

## Checking work

Open the page in a browser and check the change at a narrow width (~380px) as
well as full width. Run Lighthouse's accessibility audit before any commit that
touches markup or colour.
