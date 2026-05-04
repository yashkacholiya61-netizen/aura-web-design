# Design Brief — flowebdesign (Local Business Edition)

## Direction
High-converting agency site for Indian local businesses: deep-space OKLCH foundation, luminous gold CTAs, purple-blue-cyan gradients. Glassmorphism cards, minimal text, conversion-focused hierarchy. Instantly builds trust within 5 seconds.

## Tone
Professional + approachable. Deep-space navy (0.08 L) foundation, vibrant gold (0.72 L), purple→blue→cyan modern accents, clean glass surfaces, purposeful motion. Communicates expertise while remaining accessible to non-tech local business owners.

## Differentiation
Local-business-first messaging, static CSS browser-mockups showcasing real examples (coaching, gym, cafe), WhatsApp as primary CTA, minimal jargon, benefit-focused copy. Glassmorphism + gold accents signal premium quality. Mobile-first responsive ensures rural/small-town optimization.

## Color Palette

| Token            | OKLCH         | Role                                    |
| ---------------- | ------------- | --------------------------------------- |
| background       | 0.08 0.01 240 | Deep-space premium foundation           |
| foreground       | 0.96 0.005 0  | Pure near-white, maximum clarity        |
| card             | 0.13 0.02 240 | Primary glass layer, elevated contrast  |
| popover          | 0.16 0.025 240| Secondary glass layer for depth         |
| primary          | 0.72 0.18 70  | Vibrant warm gold (enhanced saturation) |
| accent-purple    | 0.65 0.19 310 | Modern purple gradient start            |
| accent-blue      | 0.58 0.16 255 | Modern blue gradient mid                |
| accent-cyan      | 0.60 0.14 190 | Modern cyan gradient end                |
| secondary        | 0.30 0.025 240| Rich slate for sections                 |
| muted            | 0.22 0.015 240| Subtle grey for secondary text          |
| success          | 0.68 0.15 140 | Premium emerald accent                  |
| warning          | 0.75 0.18 60  | Warm amber accent                       |

## Typography

| Font           | Role                                           | Files Staged              |
|----------------|------------------------------------------------|---------------------------|
| Space Grotesk  | Headlines (hero 6xl-8xl), geometric authority  | SpaceGrotesk.woff2        |
| DM Sans        | Body copy (base/lg), labels, UI, humanist      | DMSans.woff2              |
| Fraunces       | Testimonials, quotes, serif callouts italic    | Fraunces.woff2            |
| Geist Mono     | Code, minimal use in landing context           | GeistMono.woff2           |

Scale: hero `text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold`, h3 `text-xl font-bold`, body `text-base md:text-lg leading-relaxed`, label `text-xs font-semibold tracking-widest`.

## Elevation & Depth

6-tier shadow system: `xs` (minimal 0.08x), `sm` (cards 0.12x), `md` (objects 0.22x), `lg` (floats 0.30x), `elevated` (primary + inset gold), `premium` (modals 0.55x). Glass cards: 8% base + `backdrop-blur-lg`, 12% elevated + `backdrop-blur-xl`. Borders: rgba(255,255,255,0.08-0.20) tiered by elevation.

## Structural Zones

| Zone       | Background                | Border             | Notes                                        |
| ---------- | ------------------------- | ------------------ | -------------------------------------------- |
| Hero       | bg-background + orbs     | none               | Animated purple-blue-cyan gradient orbs      |
| Services   | transparent or gradient   | premium-border     | 3 glass cards, benefit icons, minimal text   |
| Demos      | bg-background            | premium-border     | Static CSS browser-chrome mockups 3-col      |
| Demo CTA   | bg-secondary/20           | top/bottom border  | Centered single CTA button                   |
| Testimonials| alternating card         | left-border gold   | 3 local business testimonials + results      |
| Contact    | bg-secondary/20           | top border         | WhatsApp primary, phone secondary, socials   |
| Footer     | secondary (0.30 L)        | gold top border    | Minimal branding + copyright                 |

## Spacing & Rhythm

Hero: min-h-screen, py-24 md:py-32. Sections: px-6 md:px-12 lg:px-20, py-20 md:py-28. Card grids: 1 md:3 col grid, gap-6 md:gap-8. Demos: browser chrome 1 md:3 col. Testimonials: 3 col grid with left-border-4. Stagger animations: 50-100ms per card. Labels: text-xs tracking-wider. Breathing room via alternating section backgrounds (bg-secondary/20).

## Component Patterns

**Hero CTA:** 2-button layout: gold primary button (px-8 py-4, rounded-xl, scale-105 hover), secondary glass button. Mobile stacks to single column.
**Service Cards:** glass-elevated, rounded-lg, icon emoji + h3 + 3x ul bullet points. Hover: scale-105 + shadow-elevated. Icons left-aligned.
**Browser Mockups:** Static CSS frames: browser header (3-circle close/minimize/maximize), gradient content area with company name + CTA button. No interactivity.
**Testimonial Cards:** glass-elevated, serif quote opener, quote text, result highlight (text-primary font-semibold), name + business. Left border-4 border-primary.
**Contact Buttons:** 2-col grid (md up), glass-elevated cards with icon + text + subtext. Hover scale + shadow. Phone and WhatsApp equal visual weight.

## Motion

**Entrance:** Section `fade-in-up` (0.7s) on scroll, card `scale-in` (0.4s) staggered 50-100ms, gradient orbs `float-slow` (4s) in hero.
**Interaction:** Glass cards scale-105 + shadow-elevated on hover. Buttons scale-105 + glow. Icons scale-110 on hover. Smooth transitions all via transition-smooth (0.3s cubic-bezier).
**Decorative:** Hero gradient orbs with blur-3xl, floating elements. Badge shimmer on initial load. Minimal animation hierarchy: entrance + hover only, no auto-play.
**Accessibility:** All animations respect `prefers-reduced-motion: reduce` — disables via media query.

## Constraints

- Minimal text: benefit-focused bullets + short sentences only. No long paragraphs.
- Gold accent (0.72 L) reserved for: hero headline, primary CTAs, testimonial results highlight, footer accents. Never on card backgrounds.
- All text AAA contrast: 0.96 L foreground on 0.08 L background = 18:1+ minimum.
- Mobile-first: 1 col default, md: 2-3 col grids, lg: refined spacing.
- Browser mockups: Static CSS only, no iframe/javascript. Gradient backgrounds + company name + CTA button.
- WhatsApp primary CTA: Always prominent, clickable link to https://wa.me/qr/BS4OWTEP5442E1.
- Use semantic tokens exclusively — no raw hex, no arbitrary Tailwind colors.

## Signature Detail

Glassmorphism cards (0.13 L base, 0.16 L elevated) + 6-tier shadow system, luminous gold (0.72 L) CTAs and accents, purple-blue-cyan gradient orbs in hero, static browser-mockup demos with gradient backgrounds, WhatsApp as primary conversion CTA. Minimal benefit-focused copy + icon-led services create trust. Staggered entrance animations. Deep-space foundation (0.08 L) + humanist sans (DM Sans) signal modern professionalism accessible to non-tech local businesses.

## Quality Benchmarks

Conversion: Focus on WhatsApp CTA prominence, trust signals (testimonials + results), demo clarity (browser mockups). Responsive: Mobile-first 1-col default, md: 2-3 col grids. Minimal: 2 font families, 5 core OKLCH palette, 3 button states, glass + shadow depth only.
