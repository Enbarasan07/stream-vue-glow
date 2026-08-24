# StreamScape UI

Sure. Since you want Role + Task + Context + Quality Check + Content, and frontend only with no JavaScript/backend, here’s a prompt you can directly give to an AI website/code generator.

Frontend OTT Streaming Website Prompt

ROLE

You are an expert Frontend UI/UX Designer and HTML/CSS Developer specializing in modern OTT streaming platforms. Create a polished, responsive streaming website frontend with a premium cinematic experience.

TASK

Build a NetMirror-inspired but completely original streaming platform frontend using only:

HTML5

CSS3

CSS animations and transitions

Optional inline SVG for icons

Do NOT use JavaScript.

Do NOT create any backend, database, API, authentication system, server-side code, or JavaScript functionality.

The website should be a static frontend prototype using mock content.

CONTEXT

The website is an original OTT platform called StreamBox.

The design should have the visual quality of a modern movie/TV streaming service, with a dark cinematic interface, attractive content cards, large movie banners, and smooth CSS-only interactions.

Do not copy NetMirror, Netflix, or any other existing platform exactly. Do not use their logos, branding, copyrighted UI assets, or copyrighted promotional artwork.

Required pages/sections

1. Homepage

Create:

Sticky dark navigation bar

StreamBox logo/text

Home

Movies

TV Shows

Genres

My List

Search UI

Profile icon

Large cinematic hero banner

Featured movie title

Movie description

Rating

Release year

Genre

Watch Now button

Add to List button

Trending section

Popular Movies section

Latest Releases section

Popular TV Shows section

Recommended section

Continue Watching section

Use horizontal content rows with movie/show cards.

2. Movie Cards

Each card should contain:

Poster image

Movie title

Year

Rating

Genre

Small metadata

Hover effect

CSS-only visual interaction

On hover:

Card should slightly scale

Show darker overlay

Display additional movie information

Show a Play button

Smooth transition

3. Movie Details Section

Create a detailed movie page/layout containing:

Large backdrop

Movie poster

Movie title

Description

Genre

Release year

Duration

Rating

Cast information

Trailer button

Watch Now button

Related movies

4. Video Player UI

Create a static video-player interface mockup only.

Include:

Large video area

Play button

Progress bar

Volume icon

Fullscreen icon

Subtitle icon

Quality selector UI

Playback-speed UI

Since JavaScript is prohibited, these controls do not need to actually function.

5. Search UI

Create a visual search interface containing:

Search input

Search icon

Filter buttons

Genre filters

Year filters

Rating filters

Search-result movie cards

No JavaScript search functionality is required.

6. Login UI

Create a static login page containing:

StreamBox logo

Email field

Password field

Remember me checkbox

Login button

Forgot password link

Create account link

This is only a frontend mockup. Do not implement authentication.

7. User Profile / My List

Create a static profile page containing:

User avatar

Username

Profile information

My List

Continue Watching

Watch History

Favorite Movies

DESIGN REQUIREMENTS

Use a premium cinematic design.

Color palette

Background: #080808

Secondary background: #111111

Card background: #181818

Primary accent: #E5093F

Secondary accent: #7C3AED

Primary text: #FFFFFF

Secondary text: #A1A1AA

Borders: rgba(255,255,255,0.08)

Visual style

Use:

Dark cinematic backgrounds

Large high-quality placeholder images

Gradient overlays

Glassmorphism where appropriate

Rounded cards

Subtle shadows

Smooth CSS transitions

CSS hover effects

Modern typography

Strong visual hierarchy

Generous spacing

Premium OTT-style layout

RESPONSIVE DESIGN

The website must work properly on:

Desktop

Laptop

Tablet

Mobile

Use CSS media queries.

On mobile:

Convert navigation into a compact layout

Make movie cards smaller

Make hero content responsive

Stack movie-detail information vertically

Make buttons touch-friendly

Prevent horizontal page overflow

CSS-ONLY INTERACTIONS

Because JavaScript is forbidden, use CSS techniques where appropriate:

:hover

:focus

:checked

CSS transitions

CSS transforms

CSS animations

CSS-only dropdowns where practical

CSS-only modal/overlay demonstrations where practical

Do not simulate JavaScript with complicated hacks. Prioritize clean HTML/CSS.

CONTENT

Use fictional/demo movie and TV-show content.

Example titles:

Shadow Protocol

Midnight City

Beyond Mars

The Last Signal

Dark Horizon

Neon Warriors

Lost Kingdom

Code Zero

Silent Storm

The Forgotten Planet

Create realistic demo metadata such as:

Movie title

Description

Year

Runtime

Genre

Rating

Cast

Use placeholder/demo image URLs or locally replaceable image paths.

Do not use copyrighted Netflix/NetMirror logos or copyrighted promotional assets.

FILE STRUCTURE

Create a simple frontend structure:

streambox/

│

├── index.html

├── movies.html

├── tv-shows.html

├── movie-details.html

├── search.html

├── login.html

├── profile.html

├── player.html

│

├── css/

│   └── style.css

│

└── assets/

    ├── images/

    └── icons/

Keep all styling inside css/style.css.

Do not include JavaScript files.

Do not include backend files.

QUALITY CHECK

Before providing the final code, verify:

No JavaScript is used anywhere.

No backend code is included.

No database/API integration is included.

HTML5 structure is semantic and valid.

CSS is clean and reusable.

All pages have consistent navigation and design.

Website is responsive on desktop, tablet, and mobile.

Movie cards have smooth CSS hover effects.

Buttons have proper hover/focus states.

Images have appropriate alt attributes.

Text has sufficient contrast against the background.

No horizontal overflow occurs on mobile.

Layout remains usable at different screen sizes.

Components use consistent spacing, colors, typography, and border radius.

No copyrighted logos or branding are used.

The final result looks like an original premium OTT platform rather than an exact clone.

FINAL OUTPUT

Provide the complete frontend source code for the StreamBox website.

Use HTML5 + CSS3 only.

Do not use JavaScript.

Do not use React, Vue, Angular, Node.js, PHP, Python, databases, APIs, or backend technologies.

Make the final UI visually impressive, modern, responsive, and suitable as a professional OTT streaming website prototype.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://stream-vue-glow.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a5741d09-db04-4c43-80a0-09c60f740e8f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
