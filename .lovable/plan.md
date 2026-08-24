# StreamBox frontend

## Overview
Build a complete, original OTT streaming prototype with a dark cinematic aesthetic, fictional content, responsive page layouts, and CSS-driven interactions. The existing project shell will remain intact, while every user-facing screen stays frontend-only with no APIs, database, authentication, or functional playback.

## Pages
- Home: sticky navigation, cinematic feature banner, search affordance, content shelves, and continue-watching progress states.
- Movies and TV Shows: browsable catalog layouts with featured content, genre chips, and poster grids.
- Movie Details: large backdrop, poster, metadata, cast, action buttons, and related titles.
- Search: static search field, filter controls, and example results.
- Login: polished static sign-in form with remember-me and account links.
- Profile / My List: profile header, saved titles, watch history, favorites, and continue-watching rows.
- Player: static cinematic player mockup with visual controls for playback, progress, volume, subtitles, quality, speed, and fullscreen.

## Visual system
- Use the requested near-black surfaces, crimson primary accent, violet secondary accent, bright text, muted metadata, translucent borders, and restrained glass effects.
- Establish reusable typography, spacing, card, button, navigation, hero, shelf, form, and player styles in the global design system.
- Generate an original cohesive set of fictional cinematic poster/backdrop assets; no third-party promotional artwork or copied branding.
- Add subtle CSS transitions, card overlays, hover/focus states, and reduced-motion support.

## Responsive behavior
- Provide desktop, tablet, and mobile compositions with compact navigation, touch-friendly controls, smaller poster cards, stacked detail content, fluid hero typography, and no page overflow.
- Keep horizontal shelves intentionally scrollable while preventing accidental document-level horizontal scrolling.

## Technical details
- Implement routes within the existing TanStack project for `/`, `/movies`, `/tv-shows`, `/movie-details`, `/search`, `/login`, `/profile`, and `/player`.
- Use semantic React markup rendered as HTML, Tailwind CSS utilities, shared presentational components, inline SVG icons, and local image imports.
- Do not add client state, event handlers, API calls, persistence, authentication logic, backend code, or playback logic.
- Add unique metadata for every content route and accessible alt text, labels, focus states, and landmarks.

## Quality checks
- Confirm all routes render, navigation links resolve, content remains readable at desktop and mobile widths, card overlays behave correctly, and no runtime/build errors remain.
- Verify the interface uses only fictional content and locally generated original imagery.
