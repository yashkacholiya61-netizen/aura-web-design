import {
  useParallax,
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clapperboard,
  Globe,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

/* ────────────────────── Data ────────────────────── */

const serviceHighlights = [
  {
    icon: Globe,
    title: "Custom Website Design",
    tagline: "Bespoke digital presence crafted to convert.",
    href: "/services",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    tagline: "Full-stack stores that sell while you sleep.",
    href: "/services",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    tagline: "SEO, strategy & branding at scale.",
    href: "/services",
  },
  {
    icon: Clapperboard,
    title: "AI Video Generation",
    tagline: "AI-crafted visuals that captivate audiences.",
    href: "/services",
  },
];

const portfolioPreview = [
  {
    id: 1,
    title: "LuxBrand Agency",
    category: "Brand Identity",
    image: "/assets/generated/portfolio-1.dim_600x400.jpg",
  },
  {
    id: 2,
    title: "Elegance Store",
    category: "E-Commerce",
    image: "/assets/generated/portfolio-2.dim_600x400.jpg",
  },
  {
    id: 3,
    title: "Saveur Dining",
    category: "Web Design",
    image: "/assets/generated/portfolio-3.dim_600x400.jpg",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered", sub: "across industries" },
  { number: "100%", label: "Client Satisfaction", sub: "5-star reviews" },
  { number: "24/7", label: "Support & Uptime", sub: "always available" },
];

/* ────────────────────── Helpers ────────────────────── */

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.08,
  });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-primary text-[10px] font-body font-semibold tracking-[0.35em] uppercase mb-4">
      <span
        className="inline-block w-5 h-px"
        style={{ background: "oklch(var(--primary))" }}
      />
      {children}
      <span
        className="inline-block w-5 h-px"
        style={{ background: "oklch(var(--primary))" }}
      />
    </span>
  );
}

/* ────────────────────── Page ────────────────────── */

export default function Home() {
  const { containerRef: servicesRef, visibleItems: servicesVisible } =
    useStaggerAnimation<HTMLDivElement>(4);
  const { containerRef: statsRef, visibleItems: statsVisible } =
    useStaggerAnimation<HTMLDivElement>(3, { threshold: 0.2 });

  const heroBg = useParallax(0.08, 40);
  const heroText = useParallax(-0.04, 20);

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        data-ocid="hero-section"
      >
        {/* Cinematic background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-cinematic-premium.dim_1600x900.jpg')",
            ...heroBg.style,
          }}
        />

        {/* Deep radial overlay — navy to transparent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(8,10,18,0.55) 0%, rgba(8,10,18,0.88) 100%)",
          }}
        />
        {/* Bottom fade to background */}
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.10 0.01 240))",
          }}
        />

        {/* Decorative gold orb — top-left */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
            animation: "floatSlow 8s ease-in-out infinite",
          }}
        />
        {/* Decorative gold ring — top-right */}
        <div
          className="absolute top-16 right-16 w-64 h-64 rounded-full pointer-events-none"
          style={{
            border: "1px solid rgba(212,175,55,0.08)",
            animation: "floatSlow 10s ease-in-out 1s infinite",
          }}
        />
        {/* Small gold dot cluster — bottom-left */}
        <div
          className="absolute bottom-32 left-12 w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: "rgba(212,175,55,0.5)",
            boxShadow: "0 0 20px 4px rgba(212,175,55,0.18)",
            animation: "floatSlow 6s ease-in-out 0.5s infinite",
          }}
        />

        {/* Mesh noise grain texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
          }}
        />

        {/* Hero content */}
        <div
          className="relative z-10 text-center px-5 sm:px-8 max-w-5xl mx-auto"
          style={heroText.style}
        >
          {/* Badge */}
          <div className="fade-in" style={{ animationDelay: "0ms" }}>
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full gold-border-subtle glass-dark text-primary text-[10px] font-body font-semibold tracking-[0.3em] uppercase mb-8">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "oklch(var(--primary))",
                  boxShadow: "0 0 6px oklch(var(--primary) / 0.8)",
                }}
              />
              Premium Digital Agency
            </span>
          </div>

          {/* Headline */}
          <div className="fade-in" style={{ animationDelay: "120ms" }}>
            <h1 className="font-display font-bold leading-[1.0] tracking-tight mb-7">
              <span className="block text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-foreground/90 font-light">
                Elevate Your
              </span>
              <span
                className="block text-6xl sm:text-7xl md:text-8xl xl:text-9xl accent-serif"
                style={{
                  color: "oklch(var(--primary))",
                  textShadow:
                    "0 0 60px oklch(var(--primary) / 0.35), 0 0 120px oklch(var(--primary) / 0.12)",
                }}
              >
                Business
              </span>
            </h1>
          </div>

          {/* Subhead */}
          <div className="fade-in" style={{ animationDelay: "240ms" }}>
            <p
              className="text-base sm:text-lg font-body max-w-lg mx-auto mb-10 leading-relaxed"
              style={{ color: "oklch(var(--primary) / 0.7)" }}
            >
              Premium website solutions that drive growth, build trust, and turn
              visitors into loyal customers.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              to="/contact"
              data-ocid="hero-cta-primary"
              className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-body font-semibold text-sm text-primary-foreground transition-all duration-300 hover:scale-105"
              style={{
                background: "oklch(var(--primary))",
                boxShadow:
                  "0 0 30px oklch(var(--primary) / 0.35), 0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>

            <Link
              to="/portfolio"
              data-ocid="hero-cta-secondary"
              className="btn-gold-outline inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-body font-semibold text-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <span className="text-[9px] font-body tracking-[0.3em] uppercase text-muted-foreground/50">
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)",
              animation: "floatSlow 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ══════════════ SERVICES STRIP ══════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="services-preview"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-1 mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto font-body text-sm leading-relaxed">
              End-to-end digital solutions for ambitious brands ready to
              dominate online.
            </p>
          </AnimatedSection>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {serviceHighlights.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  data-ocid={`service-card-${i}`}
                  className={`group relative glass-elevated rounded-2xl p-7 flex flex-col gap-6 transition-all duration-700 cursor-pointer ${
                    servicesVisible[i]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Hover gold glow border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px rgba(212,175,55,0.4), 0 0 40px rgba(212,175,55,0.12)",
                    }}
                  />

                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(212,175,55,0.08)",
                        border: "1px solid rgba(212,175,55,0.18)",
                        boxShadow: "0 0 16px rgba(212,175,55,0.08)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: "oklch(var(--primary))" }}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-base text-foreground mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-body">
                      {service.tagline}
                    </p>
                  </div>

                  <Link
                    to={service.href}
                    data-ocid={`service-learn-more-${i}`}
                    className="inline-flex items-center gap-1.5 text-xs font-body font-semibold group-hover:gap-2.5 transition-all duration-300"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ PORTFOLIO PREVIEW ══════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.10 0.01 240), oklch(0.12 0.015 240), oklch(0.10 0.01 240))",
        }}
        data-ocid="portfolio-preview"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-1 mb-4 tracking-tight">
              Portfolio Highlights
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto font-body text-sm leading-relaxed">
              A curated showcase of projects that reflect our design excellence
              and technical depth.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {portfolioPreview.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 100}>
                <Link
                  to="/portfolio"
                  data-ocid={`portfolio-preview-${i}`}
                  className="group block relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
                  style={{
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Always-present dark gradient base */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                    }}
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(212,175,55,0.06) 100%)",
                    }}
                  />

                  {/* Bottom info */}
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                    <div>
                      <span
                        className="block text-[9px] font-body tracking-[0.25em] uppercase mb-1.5 opacity-70"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        {item.category}
                      </span>
                      <span className="font-display font-semibold text-sm text-foreground">
                        {item.title}
                      </span>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      style={{
                        background: "oklch(var(--primary))",
                        boxShadow: "0 0 16px oklch(var(--primary) / 0.4)",
                      }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              to="/portfolio"
              data-ocid="portfolio-view-more"
              className="group inline-flex items-center gap-2.5 font-body font-semibold text-sm pb-0.5 transition-all duration-300"
              style={{
                color: "oklch(var(--primary))",
                borderBottom: "1px solid oklch(var(--primary) / 0.3)",
              }}
            >
              View All Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════ WHY AURA — STATS ══════════════ */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="stats-section"
      >
        {/* Background decorative gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>Why Aura</SectionLabel>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-1 tracking-tight">
              Numbers That{" "}
              <span
                className="accent-serif"
                style={{ color: "oklch(var(--primary))" }}
              >
                Speak
              </span>
            </h2>
          </AnimatedSection>

          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{
              border: "1px solid rgba(212,175,55,0.12)",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-ocid={`stat-${i}`}
                className={`relative flex flex-col items-center text-center p-10 transition-all duration-700 ${
                  statsVisible[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  background: "rgba(255,255,255,0.025)",
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(212,175,55,0.10)"
                      : undefined,
                }}
              >
                <span
                  className="block font-display font-bold text-5xl sm:text-6xl mb-3 tracking-tight"
                  style={{
                    color: "oklch(var(--primary))",
                    textShadow: "0 0 40px oklch(var(--primary) / 0.3)",
                  }}
                >
                  {stat.number}
                </span>
                <span className="block font-display font-semibold text-sm text-foreground mb-1.5 tracking-wide">
                  {stat.label}
                </span>
                <span className="text-xs text-muted-foreground font-body tracking-wide">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="cta-banner"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection>
            <div
              className="relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(8,10,18,0.9) 50%, rgba(212,175,55,0.05) 100%)",
                border: "1px solid rgba(212,175,55,0.22)",
                boxShadow:
                  "0 0 60px rgba(212,175,55,0.08), 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.15)",
              }}
            >
              {/* Corner accents */}
              <div
                className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(212,175,55,0.12), transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at bottom right, rgba(212,175,55,0.10), transparent 70%)",
                }}
              />

              <SectionLabel>Let's Build Together</SectionLabel>
              <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mt-2 mb-5 tracking-tight leading-tight">
                Ready to Transform
                <br />
                <span
                  className="accent-serif"
                  style={{ color: "oklch(var(--primary))" }}
                >
                  Your Business?
                </span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto font-body text-sm mb-10 leading-relaxed">
                Let's turn your vision into a premium digital experience that
                captivates and converts.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  to="/contact"
                  data-ocid="cta-banner-btn"
                  className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-body font-semibold text-sm text-primary-foreground transition-all duration-300 hover:scale-105 hover:brightness-110"
                  style={{
                    background: "oklch(var(--primary))",
                    boxShadow:
                      "0 0 30px oklch(var(--primary) / 0.35), 0 4px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>

              {/* Contact shortcuts */}
              <div className="gold-divider max-w-xs mx-auto mb-8" />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a
                  href="https://wa.me/qr/BS4OWTEP5442E1"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="cta-whatsapp"
                  className="inline-flex items-center gap-2.5 text-xs font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <SiWhatsapp
                    className="w-4 h-4"
                    style={{ color: "#25D366" }}
                  />
                  WhatsApp Us
                </a>
                <span className="hidden sm:block w-px h-4 bg-border" />
                <a
                  href="https://instagram.com/aura_web_design"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="cta-instagram"
                  className="inline-flex items-center gap-2.5 text-xs font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <SiInstagram
                    className="w-4 h-4"
                    style={{ color: "oklch(var(--primary))" }}
                  />
                  @aura_web_design
                </a>
                <span className="hidden sm:block w-px h-4 bg-border" />
                <a
                  href="tel:+918766629441"
                  data-ocid="cta-phone"
                  className="inline-flex items-center gap-2.5 text-xs font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span style={{ color: "oklch(var(--primary))" }}>+91</span>
                  87666 29441
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
