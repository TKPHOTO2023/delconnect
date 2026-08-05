# Del Connect — Homepage Design Brief (working notes)

Status: **v1 homepage built** (see bottom of doc).

## Goal
Build a unique, interactive Del Connect homepage — real animations/interactions, not a generic template. Should feel distinct from typical tower-company sites, while staying true to the Del Connect/NGG brand identity in `README.md` (orange + grey primary, navy as a touch accent; clean, structured, modern, calm-confident; Montserrat/Poppins/Arial).

## Inputs still pending from the user
- [ ] Photos (Del Connect specific)
- [ ] Short video clips (for hero background and/or other sections)
- [ ] Any additional reference notes/screenshots

## Reference sites (CEO-supplied, "resonates with the direction, but we can do better")
1. https://www.marutowers.co.za/ — **specifically called out**: liked the hero banner section with video background. This is the strongest explicit signal we have — build the hero around a full-bleed video treatment, then elevate it (better motion, better typographic overlay, more brand personality) rather than copy it directly.
2. https://thaburetowerco.co.za/
3. https://www.americantower.com/en-za/
4. https://graffo.co.za/

**Note:** this environment's network policy currently blocks outbound web browsing entirely (WebFetch and direct curl both hit a 403 at the proxy level for all four URLs, not just a couple). None of these have been visually audited yet — the notes above reflect only what the user described, not a firsthand review. If closer visual matching to these references matters, the fastest path is the user sending screenshots rather than relying on live fetches.

## Direction to carry forward once assets arrive
- Hero: video-background section (per marutowers cue), Del Connect wordmark/tagline overlay in brand orange/grey, likely a scroll or interaction cue.
- Should read as infrastructure/engineering-credible (towers, technicians, network imagery — matches the imagery style already defined in `README.md`) but not generic corporate-stock — Graffo being in the reference list suggests the CEO wants some creative/agency-level polish, not just a plain telecom brochure site.
- American Tower is a large global REIT — likely referenced for scale/credibility/institutional trust cues (stats, global footprint, investor-grade polish) rather than for creative direction.
- Keep interactivity purposeful: motion should reinforce "precision and reliability" (the Del Connect brand feel), not feel gimmicky.

## Assets received so far (photos)

Shared inline in chat — not yet saved as files in this environment (no filesystem path was provided, so they can't be committed to the repo yet). Logging what they show for continuity; final versions will need to be handed off as actual files/links when ready.

1. **Close-up: hand on tablet showing a glowing blue network/circuit visualization** — abstract data/connectivity graphic, dark UI with branching light-blue network pattern. Good candidate for a "network intelligence / coverage mapping" section, or as a textured background element.
2. **Two engineers (hi-vis vests, hard hats) reviewing a tablet, wind turbine in background** — collaboration/site-team shot, overcast lighting.
3. **Aerial/drone shot of a monopole tower with panel antennas amid farmland, clear blue sky** — strong hero or "our infrastructure" candidate; matches the CI guide's tower imagery direction closely.
4. **Two riggers in harnesses working on a lattice tower with antennas + microwave dish, dramatic sky** — action/installation shot, good for a "how we work" or capability section.
5. **Senior engineer in hard hat/hi-vis reviewing a laptop in front of a building under construction** — site-inspection, more corporate/older-demographic representation.

Note: several of these (turbine, generic construction site) read as stock imagery rather than Del Connect's own sites — fine for placeholder/context purposes now, but worth flagging if the final site should only use verified Del Connect-owned photography.

## Video assets (received as files, used in the build)

Four stock/reference tower clips, delivered as actual files this time (unlike the photos above) so they're committed into `assets/video/`. Re-encoded from source (originals ~58MB total 4K/HD) down to ~12MB total web-weight H.264, muted, looped, with matching poster frames in `assets/img/`:

- `hero-tower-vertigo.mp4` — dead-straight upward shot through a lattice tower, slow rotation. Used as the **hero background** (the "wow" shot — nothing generic about it, distinct from all four reference sites).
- `tower-groundlevel.mp4` — static ground-level shot of a red/white lattice tower against overcast sky. Used in the **About** section as a mouse-tilt video card.
- `tower-periurban-aerial.mp4` — drone orbit around a tower in an informal/peri-urban settlement, technician working on it. Directly matches the CEO's "we focus on peri regions" note — used as the **Community** section's full-bleed background.
- `tower-sky-angle.mp4` — dramatic low-angle shot of a tower top against blue sky. Used as the **Process/How We Work** section's side visual.

## CEO terminology (logged, partially seeded into copy already)

> Lease and development of towers · security solutions (new/future service) · assets & solutions · Wireless towers · empowerment of the community · tower acquisitions · selling and buying of towers · giving back to the community · we focus on peri regions

These are woven into the v1 homepage build (see below) as generic-but-grounded copy — Solutions section titles map almost 1:1 to these terms, "Security Solutions" is marked "Expanding soon" since the CEO framed it as aspirational, and the peri-urban/community language drives the Community section. All still placeholder pending real company copy per `README.md`.

## Status: Homepage v1 — built

`index.html` + `assets/css/style.css` + `assets/js/main.js` now exist. Structure: glassmorphic fixed nav (blurred/transparent over hero, solidifies on scroll, glass mobile drawer) → full-bleed video hero with animated entrance + scroll parallax → looping badge marquee of the CEO's terms → About (split layout, tilt-interactive video card) → Solutions grid (5 cards, cursor-glow hover) → Community (full-bleed peri-urban video + gradient overlay) → Process (4-step timeline + video) → CTA/contact (navy gradient, glass contact card) → footer. Scroll-reveal throughout via IntersectionObserver, `prefers-reduced-motion` respected, videos pause when off-screen to save resources. Verified in a real headless-Chromium render at desktop + mobile widths, not just written blind.

**Known gaps / next inputs needed:**
- The five photos logged above are still only inline chat images, not files — none are in the repo yet. Current build is 100% video + CSS/gradient, no photography.
- Company copy throughout is still generic/placeholder (consistent with `README.md`'s stated status).
- Contact email placeholder uses `contactus@circletel.co.za` (pulled from the actual Del Connect letterhead mockup) — worth the user confirming this is the right inbox before launch.
- No real logo file exists yet — nav/footer use a generic signal-mark placeholder icon, not the Group's actual Del Connect logo.
