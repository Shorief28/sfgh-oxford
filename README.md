# Students for Global Health — Oxford

Two plain HTML pages, one stylesheet, one small script. No build step, no
framework, no database. Open any `.html` file in a browser to preview it.

```
index.html      Home — hero, map, work summary, next events, join
events.html     Term card, national events, access information
assets/site.css All styling — colours and type live at the top
assets/site.js  Mobile menu and scroll reveal
```

## Editing

**Content** — open the page in a text editor (VS Code with the "Live Preview"
extension is the easiest). Everything you'd want to change is plain English
between tags:

- Events are `<li>` blocks inside `<ul class="events">`. Copy one, change the
  words. Keep the `datetime="2026-10-20"` attribute accurate — screen readers
  and search engines use it.
- Cards are `<div class="card">` blocks.
- Numbers in the dark band are `<div class="stat">` blocks.

**Colours and fonts** — the `:root` block at the top of `assets/site.css`.
Change a value there and it updates every page.

**Navigation** — the header and footer are duplicated in both pages. If you
add a page, you must add the link in both. (Fine for a site this size; if it
grows past about eight pages, move to a static site generator like Eleventy.)

## Accessibility

Built to WCAG 2.2 AA. Things to preserve if you edit:

- Every colour pair in `:root` meets AA contrast. If you change a colour, check
  it at webaim.org/resources/contrastchecker. The bright amber `--signal` is
  **only** for backgrounds and text on dark navy — use `--signal-ink` for orange
  text on a light background.
- Each page has exactly one `<h1>`. Don't skip heading levels (h2 → h4).
- The nav link for the current page carries `aria-current="page"`.
- The radial map has a `<title>` and `<desc>`, and the same figures repeat in a
  real table underneath so it isn't image-only.
- The form uses real `<label>` elements tied to inputs by `id`. Never replace a
  label with placeholder text.
- All animation is disabled automatically for anyone using "reduce motion" in
  their OS settings.
- The whole site works with JavaScript switched off.

Worth running before you publish: WAVE (wave.webaim.org) and Lighthouse
(built into Chrome, F12 → Lighthouse → Accessibility).

## Publishing

1. Drag this whole folder onto app.netlify.com/drop — it goes live immediately.
2. Or push it to GitHub and connect Cloudflare Pages / GitHub Pages, which
   redeploys automatically whenever someone edits a file.

`index.html` must stay at the top level and keep that name.

## Before it goes live

- [ ] Confirm the charity number (1111824 is the national one — check it applies)
- [ ] Fill in the three event titles on index.html (they say "to be confirmed") and
      replace the placeholder dates and venues
- [ ] Check the member and conference counts on index.html
- [ ] Confirm the access and networking commitments on events.html are ones you
      can keep
- [ ] Ask national SfGH about `oxford.studentsforglobalhealth.org`
- [ ] Check Oxford SU's rules on using the University's name
