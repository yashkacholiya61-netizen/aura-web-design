# Design Brief

## Direction
Aura Web Design — World-class Awwwards-grade luxury digital agency with sophisticated layered glassmorphism, museum-quality color precision, and choreographed micro-interactions that elevate every touchpoint.

## Tone
Refined maximalism meets minimalist luxury: impossibly dark OKLCH 0.10 L foundation with vibrant gold metallic accents (0.72 L), multi-layered glass effects, elevated shadows creating depth perception, and purposeful animation choreography. Conveys cutting-edge digital expertise with approachable warmth.

## Differentiation
Premium multi-layer glassmorphism with dual-opacity effects (`.glass` 8% opacity, `.glass-elevated` 12% with shadow), gold glow insets, and sophisticated shadow hierarchy (6-tier system) create instantly recognizable luxury brand language. Serif accent font (Fraunces) + sans-serif geometric pairing signals editorial sophistication.

## Color Palette

| Token         | OKLCH         | Role                                    |
| ------------- | ------------- | --------------------------------------- |
| background    | 0.10 0.01 240 | Museum-black luxury foundation          |
| foreground    | 0.96 0.005 0  | Pure near-white, maximum clarity        |
| card          | 0.15 0.02 240 | Primary glass layer, subtle elevation   |
| popover       | 0.18 0.025 240| Secondary glass layer for depth         |
| primary       | 0.72 0.15 70  | Vibrant warm gold (enhanced chroma)    |
| secondary     | 0.35 0.03 240 | Rich slate for content backgrounds       |
| muted         | 0.25 0.02 240 | Sophisticated grey for secondary text   |
| success       | 0.68 0.15 140 | Premium emerald accent                  |
| warning       | 0.75 0.18 60  | Warm amber accent                       |

## Typography

- Display: Space Grotesk — bold geometric headlines, hero text, maximalist sans-serif authority.
- Accent: Fraunces — luxury serif for testimonials, quotes, premium feature callouts. Italic for elegance.
- Body: DM Sans — body copy, UI labels, humanist refined sans-serif readability.
- Mono: Geist Mono — code blocks, technical content, monospace elegance.
- Scale: hero `text-7xl md:text-8xl font-bold tracking-tight`, h2 `text-5xl md:text-6xl font-bold`, premium callout `font-accent italic text-2xl`, label `text-xs font-semibold tracking-widest`, body `text-base md:text-lg leading-relaxed`.

## Elevation & Depth

6-tier shadow system: `xs` (minimal), `sm` (cards), `lg` (floats), `elevated` (primary elements + gold accent inset), `premium` (modals/overlays). Glass cards: 8% base opacity with `backdrop-blur-lg` (not md), 12% elevated with `backdrop-blur-xl`. Borders: white/15 base, white/20 elevated. Inset gold glow adds luxury texture.

## Structural Zones

| Zone    | Background                | Border             | Notes                                        |
| ------- | ------------------------- | ------------------ | -------------------------------------------- |
| Header  | glass-elevated + blur     | premium-border     | Fixed nav, hover state boosts opacity        |
| Hero    | background + overlay glow | gold accent line   | Floating animated gold accents, serif quotes |
| Content | alternating card/secondary| premium-border     | Staggered fade-in-up animations              |
| Cards   | glass/glass-elevated      | white/15-20 border | Scale-in entrance, hover elevates + glows    |
| Footer  | secondary (0.35 L)        | gold top border    | Rich contrast, gold text highlights          |

## Spacing & Rhythm

Hero: 10vh min-height, generous padding (py-24 md:py-32 lg:py-40). Sections: px-6 md:px-12 lg:px-20, py-20 md:py-28. Card gaps: gap-6 md:gap-8. Micro: gap-2-3 for labels/badges. Breathing room alternates dense card grids with muted-background spacers.

## Component Patterns

- Buttons: Primary gold `bg-primary`, hover `scale-105` + `shadow-elevated`, secondary `glass hover:glass-elevated` + scale, icon-only transparent with `hover-gold`. All use `transition-premium`.
- Cards: `.glass` or `.glass-elevated`, hover `scale-105 shadow-elevated gold-glow-subtle`, `rounded-lg`, staggered entrance animations.
- Badges: Success (0.68 L emerald), warning (0.75 L amber), destructive (0.55 L red), all on semi-transparent dark backgrounds with premium borders.
- Typography: Serif accent for testimonials/quotes, uppercase labels with `tracking-widest`, hero with `font-bold tracking-tight`, body with `leading-relaxed`.

## Motion

- Entrance: `fade-in-up` (0.6s ease-out) for sections, `scale-in` (0.4s ease-out) for cards, `float-slow` (4s ease-in-out) for decorative elements. Stagger delays 50ms per card.
- Interaction: Gold text glow on hover (`hover-gold`), card scale (`hover:scale-105`), shadow elevation, 0.4s `transition-premium` (cubic-bezier easing for premium feel).
- Decorative: `float` (3s) on hero accents, `glow-pulse` (2.5s) on primary highlights, `shimmer` (2s) on premium text, all respecting `prefers-reduced-motion`.

## Constraints

- No full-page gradients — depth via multi-layer glass + shadow system only.
- Gold accent used ultra-sparingly: CTAs, hero highlights, footer accents, hover states. Never fill surfaces.
- All text meets AAA contrast (0.96 L foreground on 0.10 L background = 18:1 ratio).
- Animations respect accessibility (prefers-reduced-motion disables all).
- Use semantic color tokens exclusively — never raw hex or arbitrary colors.

## Signature Detail

Multi-layer glass architecture with inset gold glows, 6-tier shadow hierarchy, and serif accent typography create instant recognition as world-class digital product. Museum-quality color precision (OKLCH 0.10 L background) + choreographed motion orchestration signal cutting-edge agency expertise.
