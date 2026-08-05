# Del Connect — Homepage Design Brief (working notes)

Status: **gathering context only — no homepage build yet.**

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

Videos: pending, user is sending shortly.

## Next step
Wait for the video assets (and file-transferable versions of the photos above), then propose an actual homepage structure (sections, layout, interaction plan) before writing code. **Homepage build has not started.**
