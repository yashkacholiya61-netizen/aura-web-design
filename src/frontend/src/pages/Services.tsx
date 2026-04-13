import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShoppingCart,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Custom Website Design",
    tagline: "Your brand deserves a home that commands attention.",
    description:
      "We design bespoke websites that are visually stunning, functionally flawless, and crafted around your unique brand story. From concept to launch, every pixel is placed with intention.",
    features: [
      "Fully responsive across all devices",
      "Modern UI/UX best practices",
      "Fast loading & Core Web Vitals optimized",
      "Cross-browser compatibility",
      "Accessibility-first approach",
      "Brand-aligned visual identity",
    ],
    accentColor: "rgba(212,175,55,0.55)",
    accentGlow: "rgba(212,175,55,0.12)",
    gridOverlay: "from-primary/5 via-transparent to-transparent",
    ctaLabel: "Start Your Project",
    decorDots: ["oklch(0.72 0.15 70 / 0.18)", "oklch(0.72 0.15 70 / 0.07)"],
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    tagline: "Turn browsers into buyers with a storefront that converts.",
    description:
      "We build powerful online stores that make shopping seamless for your customers and management effortless for you. Every step of the funnel is engineered for conversion.",
    features: [
      "Intuitive product management dashboard",
      "Secure payment gateway integration",
      "Order tracking & inventory management",
      "Mobile-optimized shopping experience",
      "SEO-ready product pages",
      "Customer account portals",
    ],
    accentColor: "rgba(96,165,250,0.55)",
    accentGlow: "rgba(96,165,250,0.10)",
    gridOverlay: "from-blue-500/5 via-transparent to-transparent",
    ctaLabel: "Build My Store",
    decorDots: ["oklch(0.68 0.18 240 / 0.20)", "oklch(0.68 0.18 240 / 0.07)"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Business Growth",
    tagline: "Get found, get leads, get results.",
    description:
      "A great website is only the beginning. We implement proven digital strategies to drive traffic, generate qualified leads, and position your brand as the undeniable authority in your space.",
    features: [
      "On-page & technical SEO optimization",
      "Lead generation funnels",
      "Brand identity & positioning",
      "Content strategy consultation",
      "Performance analytics setup",
      "Competitor analysis & roadmap",
    ],
    accentColor: "rgba(52,211,153,0.55)",
    accentGlow: "rgba(52,211,153,0.10)",
    gridOverlay: "from-emerald-500/5 via-transparent to-transparent",
    ctaLabel: "Grow My Business",
    decorDots: ["oklch(0.75 0.16 155 / 0.20)", "oklch(0.75 0.16 155 / 0.07)"],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "AI Video Generation",
    tagline: "Bring your brand story to life with intelligent visuals.",
    description:
      "Harness the power of artificial intelligence to create stunning promotional videos, compelling explainer content, and scroll-stopping social clips — all crafted to captivate and convert.",
    features: [
      "Professional promotional videos",
      "AI-powered script writing",
      "Social media video content",
      "Brand storytelling & narratives",
      "Fast turnaround & revisions",
      "Multi-format delivery",
    ],
    accentColor: "rgba(167,139,250,0.55)",
    accentGlow: "rgba(167,139,250,0.10)",
    gridOverlay: "from-violet-500/5 via-transparent to-transparent",
    ctaLabel: "Create My Video",
    decorDots: ["oklch(0.70 0.18 290 / 0.20)", "oklch(0.70 0.18 290 / 0.07)"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We deep-dive into your brand, goals, and audience to build a strategic foundation.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Our designers craft high-fidelity prototypes that reflect your brand's unique identity.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Pixel-perfect development with performance, accessibility, and SEO baked in from day one.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "A smooth launch followed by post-delivery support to ensure everything performs flawlessly.",
  },
];

function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.06,
  });

  const translateClass =
    direction === "left"
      ? "translate-x-8"
      : direction === "right"
        ? "-translate-x-8"
        : direction === "none"
          ? ""
          : "translate-y-10";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translateClass}`} ${className}`}
    >
      {children}
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection delay={index * 80}>
      <article
        data-ocid={`service-card-${index}`}
        className="relative group rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.008]"
        style={{
          background: "rgba(255,255,255,0.035)",
          backdropFilter: "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: "blur(20px) saturate(1.5)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow:
            "0 24px 60px -10px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.05)",
        }}
      >
        {/* Top gradient accent strip */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 5%, ${service.accentColor} 50%, transparent 95%)`,
          }}
        />

        {/* Hover glow state */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
          style={{
            boxShadow: `0 0 60px ${service.accentGlow}, inset 0 0 40px ${service.accentGlow}`,
          }}
        />

        {/* Large background number */}
        <div
          className="absolute select-none pointer-events-none font-mono font-bold leading-none"
          style={{
            fontSize: "clamp(120px, 18vw, 220px)",
            color: "rgba(255,255,255,0.025)",
            top: isEven ? "-2%" : "auto",
            bottom: isEven ? "auto" : "-2%",
            right: isEven ? "2%" : "auto",
            left: isEven ? "auto" : "2%",
            letterSpacing: "-0.05em",
            userSelect: "none",
          }}
        >
          {service.number}
        </div>

        <div className={"grid grid-cols-1 lg:grid-cols-2 min-h-[460px]"}>
          {/* Left: Content */}
          <div
            className={`relative z-10 p-8 lg:p-12 xl:p-16 flex flex-col justify-center gap-7 ${!isEven ? "lg:order-2" : ""}`}
          >
            {/* Service number + icon row */}
            <div className="flex items-center gap-4">
              <span
                className="font-mono text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: service.accentColor }}
              >
                {service.number}
              </span>
              <div
                className="h-px flex-1 max-w-[40px]"
                style={{
                  background: `linear-gradient(90deg, ${service.accentColor}, transparent)`,
                }}
              />
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl"
                style={{
                  background: `${service.accentGlow}`,
                  border: `1px solid ${service.accentColor.replace("0.55", "0.25")}`,
                }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: service.accentColor }}
                />
              </div>
            </div>

            {/* Title + tagline */}
            <div className="space-y-2">
              <h2
                className="font-display font-bold text-foreground leading-tight"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                {service.title}
              </h2>
              <p
                className="accent-serif text-lg leading-snug"
                style={{ color: service.accentColor }}
              >
                {service.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed font-body text-base">
              {service.description}
            </p>

            {/* Feature list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground group/feat"
                >
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-200 group-hover/feat:text-primary"
                    style={{ color: service.accentColor }}
                  />
                  <span className="group-hover/feat:text-foreground transition-colors duration-200 leading-snug">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div>
              <button
                type="button"
                data-ocid={`service-cta-${index}`}
                className="btn-gold-outline inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-display font-medium tracking-wide group/btn"
                style={{
                  borderColor: service.accentColor.replace("0.55", "0.40"),
                  color: service.accentColor,
                }}
              >
                {service.ctaLabel}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right: Decorative visual panel */}
          <div
            className={`relative hidden lg:flex items-center justify-center overflow-hidden ${!isEven ? "lg:order-1" : ""}`}
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gridOverlay}`}
            />

            {/* Dot grid pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(${service.accentGlow.replace("0.10", "0.5")} 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            {/* Central focal element */}
            <div className="relative flex flex-col items-center gap-6 z-10 p-12">
              {/* Outer ring */}
              <div
                className="relative flex items-center justify-center w-44 h-44 rounded-full transition-all duration-700 group-hover:scale-105"
                style={{
                  border: `1px solid ${service.accentColor.replace("0.55", "0.15")}`,
                  background: `radial-gradient(circle, ${service.accentGlow} 0%, transparent 70%)`,
                  boxShadow: `0 0 60px ${service.accentGlow}`,
                }}
              >
                {/* Mid ring */}
                <div
                  className="absolute w-32 h-32 rounded-full"
                  style={{
                    border: `1px solid ${service.accentColor.replace("0.55", "0.20")}`,
                  }}
                />
                {/* Inner icon circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${service.accentGlow}, transparent)`,
                    border: `1px solid ${service.accentColor.replace("0.55", "0.30")}`,
                    boxShadow: `0 0 30px ${service.accentGlow}`,
                  }}
                >
                  <Icon
                    className="w-9 h-9"
                    style={{ color: service.accentColor }}
                  />
                </div>

                {/* Orbiting dot */}
                <div
                  className="absolute w-3 h-3 rounded-full -top-1.5 left-1/2 -translate-x-1/2"
                  style={{ background: service.accentColor }}
                />
              </div>

              {/* Background large index number (visible decoration) */}
              <div
                className="font-mono font-black leading-none opacity-20"
                style={{
                  fontSize: "72px",
                  color: service.accentColor,
                  letterSpacing: "-0.05em",
                }}
              >
                {service.number}
              </div>
            </div>

            {/* Diagonal divider line */}
            {!isEven && (
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${service.accentColor.replace("0.55", "0.20")}, transparent)`,
                }}
              />
            )}
            {isEven && (
              <div
                className="absolute right-0 top-0 bottom-0 w-px"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${service.accentColor.replace("0.55", "0.20")}, transparent)`,
                }}
              />
            )}
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}

export default function Services() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
        data-ocid="services-hero"
      >
        {/* Background radial */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, oklch(0.72 0.15 70 / 0.10) 0%, transparent 65%)",
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection delay={0}>
            <span className="inline-flex items-center gap-2.5 text-xs font-mono font-semibold tracking-[0.3em] uppercase text-primary mb-6">
              <span className="block w-8 h-px bg-primary/60" />
              What We Offer
              <span className="block w-8 h-px bg-primary/60" />
            </span>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <h1
              className="leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              <span className="font-display font-extralight text-foreground/80">
                Our{" "}
              </span>
              <span
                className="accent-serif text-primary"
                style={{ fontSize: "clamp(3.2rem, 8.5vw, 6.5rem)" }}
              >
                Services
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={160}>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto font-body leading-relaxed mb-10">
              Comprehensive digital solutions, each crafted to elevate your
              brand and drive measurable results in the modern landscape.
            </p>
          </AnimatedSection>

          {/* Decorative gold rule */}
          <AnimatedSection delay={240} direction="none">
            <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
              <div
                className="w-2 h-2 rounded-full bg-primary"
                style={{ boxShadow: "0 0 12px rgba(212,175,55,0.6)" }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full bg-primary/60"
                style={{ boxShadow: "0 0 8px rgba(212,175,55,0.4)" }}
              />
              <div className="w-1 h-1 rounded-full bg-primary/40" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Service Cards ────────────────────────────────── */}
      <section className="pb-24 lg:pb-32" data-ocid="services-list">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ── Process Strip ────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        data-ocid="services-process"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.14 0.015 240 / 0.6) 20%, oklch(0.14 0.015 240 / 0.6) 80%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.72 0.15 70 / 0.04) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-mono font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
              How We Work
            </span>
            <h2
              className="font-display font-bold text-foreground leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Our{" "}
              <span
                className="accent-serif text-primary"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)" }}
              >
                Process
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-body">
              From first call to final launch — a streamlined path designed for
              clarity and results.
            </p>
          </AnimatedSection>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            {/* Connecting line (desktop) */}
            <div
              className="absolute top-12 left-[12.5%] right-[12.5%] h-px hidden lg:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,175,55,0.25) 20%, rgba(212,175,55,0.25) 80%, transparent)",
              }}
            />

            {processSteps.map((step, i) => (
              <AnimatedSection
                key={step.step}
                delay={i * 100}
                className="relative"
              >
                <div
                  data-ocid={`process-step-${i}`}
                  className="group flex flex-col items-center text-center px-4 lg:px-6 py-8"
                >
                  {/* Number circle */}
                  <div className="relative mb-6">
                    {/* Outer glow ring */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: "0 0 24px rgba(212,175,55,0.35)",
                        transform: "scale(1.5)",
                      }}
                    />
                    <div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-sm tracking-widest transition-all duration-400 group-hover:scale-110"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.04) 100%)",
                        border: "1px solid rgba(212,175,55,0.35)",
                        color: "oklch(0.72 0.15 70)",
                        boxShadow:
                          "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,175,55,0.15)",
                      }}
                    >
                      {step.step}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        data-ocid="services-cta"
      >
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.72 0.15 70 / 0.09) 0%, transparent 65%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="none">
            <div
              className="relative rounded-3xl overflow-hidden text-center py-16 lg:py-20 px-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow:
                  "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Top accent stripe */}
              <div
                className="absolute top-0 left-1/4 right-1/4 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent)",
                }}
              />

              {/* Glow blob */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,175,55,0.07), transparent)",
                }}
              />

              <span className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-5 block">
                Let's Build Together
              </span>

              <h2
                className="font-display font-bold text-foreground leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                Ready to get{" "}
                <span
                  className="accent-serif text-primary"
                  style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)" }}
                >
                  started?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg font-body max-w-xl mx-auto mb-10 leading-relaxed">
                Join the brands that trust Aura to build their digital presence.
                One conversation could change everything.
              </p>

              <a
                href="/contact"
                data-ocid="services-cta-btn"
                className="btn-gold-outline inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-display font-semibold tracking-wide group"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
