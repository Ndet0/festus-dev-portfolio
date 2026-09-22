# Portfolio UX/UI improvement plan

**Project:** `/home/user/Portfolio` (React + Vite)  
**Remote:** `Ndet0/festus-dev-portfolio`  
**Goal:** Seamless UX and cleaner UI — ship the highest-impact changes first without a full redesign.

**In scope (this pass):** Projects cards, navigation/mobile menu, hero polish.  
**Out of scope (later):** Full redesign, new sections, dark/light theme toggle, CMS, merging Services/How I Work (Phase 4 optional).

---

## Success criteria

- A visitor can scan projects in under 10 seconds and tap Live / GitHub.
- Mobile nav is ≤5 primary links, socials as icons, menu locks background scroll.
- Hero paints without a lazy-load flash; name + one clear primary CTA.
- Visual system feels consistent across Header, Hero, Projects, Contact buttons.
- No regressions: `npm run build` succeeds; keyboard focus and skip-link still work.

---

## Phase 0 — Baseline (30–45 min)

1. Run `npm run dev` and screenshot desktop + mobile (375px) of Hero, Projects, Contact.
2. Note current Netlify/live URL behaviour if deployed.
3. Branch: `ux/projects-nav-hero` from `master`.
4. Confirm EmailJS contact still works after later CSS changes (smoke only in Phase 3).

**Done when:** Branch exists, baseline screenshots saved (optional under `docs/baseline/`).

---

## Phase 1 — Project cards (highest impact)

**Files:** `src/Projects.jsx`, `src/Projects.css`

### 1.1 Data shape

Refactor hard-coded JSX into a `projects` array:

```text
id, title, summary (1–2 sentences), tech[] (3–6 chips),
liveUrl, githubUrl?, image?, featured?
```

Rewrite copy: outcome-first summaries (cut the second long paragraph on each card).

### 1.2 Card UI

- Optional thumbnail (use existing `/public` images or project screenshots if available).
- Title → summary → tech chips → actions row: **Live** + **GitHub** (hide GitHub if missing).
- Featured flag: slightly larger or “Featured” badge for one project (recommend Cafe Kaya or WEMA).
- Hover: subtle lift + border accent (use `--accent`).
- Equal card rhythm in CSS grid; truncate overflow with consistent min-heights.

### 1.3 Order

Reorder by demo quality (propose): Cafe Kaya → WEMA → Chatbot → remaining.

**Done when:** Projects section is scannable on mobile; each card has ≤2 short paragraphs and chip + CTA row; build passes.

---

## Phase 2 — Navigation & mobile menu

**Files:** `src/Header.jsx`, `src/Header.css`

### 2.1 Information architecture

Primary links only:

```text
Home · Projects · Skills · Contact
```

- Move **GitHub** to an icon link (existing `react-icons`).
- Replace **Socials** `<select>` with Instagram / LinkedIn / X icon buttons.
- Drop or demote How I Work + Services from the top nav (sections can remain on the page; link from footer or “More” later if needed).

### 2.2 Mobile behaviour

- Hamburger: `aria-expanded`, focus trap optional (nice-to-have).
- When menu open: `document.body.style.overflow = 'hidden'`; restore on close / route hash click / Escape.
- Close menu on outside click.
- Touch targets ≥44px.

### 2.3 Scroll spy

Keep active section highlight, but only for nav items that still exist. Adjust offset for sticky header height.

**Done when:** Nav feels light on phone; no select dropdown; scroll lock works; keyboard can open/close menu.

---

## Phase 3 — Hero polish

**Files:** `src/Hero.jsx`, `src/Hero.css`, maybe `index.html` meta

### 3.1 Load & identity

- Hero image: `loading="eager"` + `fetchPriority="high"` (remove above-fold lazy).
- Add visible name line: e.g. “Festus Kisoi” above or beside the role headline.
- Align alt text / og title with Kisoi naming if you want consistency with CV.

### 3.2 CTA

- Primary: View Projects (`#projects`).
- Secondary: Get in Touch (`#contact`).
- Match button styles to Projects CTAs (shared utility classes in `index.css` if needed).

### 3.3 Motion

- Keep short entrance fades; ensure `prefers-reduced-motion` still zeroes them (already in `index.css`).

**Done when:** First paint shows photo without placeholder flash; CTAs match the rest of the UI.

---

## Phase 4 — Consistency pass (same PR if small)

**Files:** `src/index.css`, button/card shared rules; light touch on `Contact.css`

1. Extract shared `.btn-primary` / `.btn-secondary` if duplicated.
2. Unify section vertical padding (`py` rhythm).
3. Contact: disable submit while sending; clear success/error banner (if not already).
4. Quick a11y check: focus rings, contrast on chips, hamburger labels.

**Done when:** Buttons look like one system; contact feedback is obvious.

---

## Phase 5 — Verify & ship

1. `npm run lint` / `npm run build`.
2. Manual: mobile menu, project links (live URLs), contact happy path.
3. Diff screenshots vs Phase 0.
4. Open PR to `master` with before/after notes.
5. Deploy (Netlify) and spot-check production.

---

## Suggested order of work (implementation)

| Day / session | Work |
| --- | --- |
| 1 | Phase 0 + Phase 1 (projects) |
| 2 | Phase 2 (nav) + Phase 3 (hero) |
| 3 | Phase 4 polish + Phase 5 PR/deploy |

One focused PR is fine if you prefer a single reviewable unit: **projects → nav → hero → polish**.

---

## Risks & notes

- Rewriting project copy changes your personal brand voice — keep your facts; only cut fluff.
- Removing nav items doesn’t delete sections; deep links (`#how-i-work`, `#services`) can remain.
- Don’t commit secrets from `.env`; EmailJS keys stay in env as today.
- Large images: compress hero/project JPEGs if LCP is still slow after eager load.

---

## Explicit non-goals (this plan)

- Rebuilding in Next.js / Tailwind from scratch.
- Adding a blog or Grok Bot catalog into this site.
- Perfect pixel redesign — prefer shipping the trio above.
