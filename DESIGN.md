# Design Brief — flowebdesign

## Direction
Luxury digital agency: museum-black OKLCH foundation, vibrant gold accents, purple→blue gradients. Multi-layer glassmorphism, 3D card tilt, choreographed micro-animations. Premium brand language instantly recognizable.

## Tone
Refined luxury + interactive sophistication. Museum-black (0.10 L) foundation, vibrant gold (0.72 L), purple→blue modern accents, multi-layered glass, purposeful motion choreography. Cuts-edge digital expertise + approachable warmth.

## Differentiation
Premium multi-layer glassmorphism (8% base, 12% elevated opacity with dual blur layers), gold inset glows, purple→blue gradient accents, 3D card tilt with perspective transform, spotlight hover beams, custom gradient cursor ring, serif accent typography (Fraunces) + geometric sans (Space Grotesk). Instantly differentiates from generic tech sites.

## Color Palette

| Token            | OKLCH         | Role                                    |
| ---------------- | ------------- | --------------------------------------- |
| background       | 0.10 0.01 240 | Museum-black luxury foundation          |
| foreground       | 0.96 0.005 0  | Pure near-white, maximum clarity        |
| card             | 0.15 0.02 240 | Primary glass layer, subtle elevation   |
| popover          | 0.18 0.025 240| Secondary glass layer for depth         |
| primary          | 0.72 0.15 70  | Vibrant warm gold accent                |
| accent-purple    | 0.65 0.17 310 | Modern purple gradient start            |
| accent-blue      | 0.58 0.14 255 | Modern blue gradient end                |
| secondary        | 0.35 0.03 240 | Rich slate for content backgrounds       |
| muted            | 0.25 0.02 240 | Sophisticated grey for secondary text   |
| success          | 0.68 0.15 140 | Premium emerald accent                  |
| warning          | 0.75 0.18 60  | Warm amber accent                       |

## Typography

| Font           | Role                                           | Files Staged              |
|----------------|------------------------------------------------|---------------------------|
| Space Grotesk  | Headlines, hero text, geometric authority      | SpaceGrotesk.woff2        |
| DM Sans        | Body copy, UI labels, humanist readability     | DMSans.woff2              |
| Fraunces       | Testimonials, quotes, luxury serif callouts    | Fraunces.woff2            |
| Geist Mono     | Code blocks, technical content                 | GeistMono.woff2           |

Scale: hero `text-7xl md:text-8xl font-bold tracking-tight`, h2 `text-5xl md:text-6xl font-bold`, accent `font-accent italic text-2xl`, label `text-xs font-semibold tracking-widest`, body `text-base md:text-lg leading-relaxed`.

## Elevation & Depth

6-tier shadow system: `xs` (minimal 0.08x), `sm` (cards 0.12x), `md` (objects 0.22x), `lg` (floats 0.30x), `elevated` (primary + inset gold), `premium` (modals 0.55x). Glass cards: 8% base + `backdrop-blur-lg`, 12% elevated + `backdrop-blur-xl`. Borders: rgba(255,255,255,0.08-0.20) tiered by elevation.

## Structural Zones

| Zone    | Background                | Border             | Notes                                        |
| ------- | ------------------------- | ------------------ | -------------------------------------------- |
| Header  | glass-elevated + blur     | premium-border     | Fixed nav, hover state boosts opacity        |
| Hero    | background + overlay glow | gold accent line   | Floating animated gold accents, serif quotes |
| Content | alternating card/secondary| premium-border     | Staggered fade-in-up animations              |
| Cards   | glass/glass-elevated      | white/15-20 border | Scale-in entrance, hover elevates + glows    |
| Footer  | secondary (0.35 L)        | gold top border    | Rich contrast, gold text highlights          |

## Spacing & Rhythm

Hero: 10vh min-height, py-24 md:py-32 lg:py-40. Sections: px-6 md:px-12 lg:px-20, py-20 md:py-28. Card grids: gap-6 md:gap-8, staggered fade-in with 50ms per card. Labels/badges: gap-2-3. Breathing room via alternating card sections + muted-bg spacers.

## Component Patterns

**Buttons:** Primary gold `bg-primary text-primary-foreground` + scale-105 + shadow-elevated hover. Secondary `.glass` + gradient accent + scale-104. Icons: transparent + hover-gold gradient.
**Cards:** `.glass`/`.glass-elevated` + `.card-tilt` (3D hover) + `.spotlight-effect` (gradient beam), scale-105 + shadow-elevated hover, rounded-lg, staggered entrance animation.
**Badges:** Success (0.68 L green), warning (0.75 L amber), destructive (0.55 L red) on semi-transparent dark with premium borders.
**Inputs:** border-border + focus:ring-2 ring-ring, rounded-lg, 0.20 L background.
**Text:** Serif accents for testimonials/quotes, uppercase labels tracking-widest, hero bold tracking-tight, body leading-relaxed.

## Motion

**Entrance:** `fade-in-up` (0.7s) full sections, `scale-in` (0.4s) cards, `float-slow` (4s) decorative accents. Stagger: 50ms per card.
**Interaction:** 3D card tilt on mouse move (max 15° rotateX/Y), spotlight gradient beam on hover, scale-105 + shadow-elevated elevation, gradient text button hover, cursor-ring animation.
**Decorative:** `float` (3s) hero elements, `glow-pulse` (2.5s) primary highlights, `shimmer` (2.5s) luxury text, `spotlight-move` (2s) beam animations.
**Accessibility:** All animations respect `prefers-reduced-motion: reduce` — disables animation immediately.

## Constraints

- No full-page gradients — depth via multi-layer glass + shadow system only.
- Gold accent used sparingly: CTAs, hero highlights, footer accents, hover states. Never fill card surfaces.
- All text meets AAA contrast: 0.96 L foreground on 0.10 L background = 18:1 ratio minimum.
- Animations respect accessibility via prefers-reduced-motion media query.
- Use semantic color tokens exclusively — never raw hex or arbitrary Tailwind colors.
- Custom cursor scoped to fine-pointer devices only; does not interfere with scrolling.

## Signature Detail

Multi-layer glass + inset gold glows, 6-tier shadow system, purple→blue gradient accents, 3D card tilt with spotlight beams, interactive cursor ring animation, and staggered motion choreography create instantly recognizable premium brand. Museum-black OKLCH foundation + serif accent typography signal editorial sophistication and cutting-edge digital expertise.

## Quality Benchmarks

Linear, Stripe, Notion, Vercel, Apple. Tight visual system: 2 font families, 5 core OKLCH colors, 4 type tiers, one dominant interaction pattern (3D card tilt + spotlight). Desktop-first responsive, seamless dark mode throughout.
