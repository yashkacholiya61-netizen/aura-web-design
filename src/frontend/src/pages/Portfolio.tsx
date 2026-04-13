import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";

/* ─── Types ─────────────────────────────────────────────────────── */
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  year: string;
}

/* ─── Data ─────────────────────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "LuxBrand Agency",
    subtitle: "Editorial Fashion Identity",
    description:
      "Premium fashion brand website with editorial aesthetic and immersive full-screen product showcase.",
    category: "Websites",
    tags: ["Fashion", "Editorial", "CMS"],
    image: "/assets/generated/portfolio-luxbrand.dim_800x600.jpg",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Elegance Store",
    subtitle: "Luxury Jewellery Platform",
    description:
      "High-end jewellery e-commerce with seamless checkout, AR try-on previews, and product management.",
    category: "E-Commerce",
    tags: ["E-Commerce", "Jewellery", "AR"],
    image: "/assets/generated/portfolio-elegance.dim_800x600.jpg",
    featured: false,
    year: "2024",
  },
  {
    id: 3,
    title: "Saveur Dining",
    subtitle: "Michelin-Star Hospitality",
    description:
      "Upscale restaurant experience with real-time reservation system and interactive tasting menus.",
    category: "Websites",
    tags: ["Restaurant", "Booking", "UX"],
    image: "/assets/generated/portfolio-saveur.dim_800x600.jpg",
    featured: false,
    year: "2023",
  },
  {
    id: 4,
    title: "NovaCinema AI",
    subtitle: "AI Video Generation Platform",
    description:
      "Cutting-edge AI video generation SaaS — text-to-video, neural style transfer, and cinematic exports.",
    category: "AI Video",
    tags: ["AI", "Video", "SaaS"],
    image: "/assets/generated/portfolio-aivideo.dim_800x600.jpg",
    featured: false,
    year: "2024",
  },
  {
    id: 5,
    title: "Harbour Realty",
    subtitle: "Ultra-Luxury Real Estate",
    description:
      "Luxury real estate portal with advanced property search, virtual tours, and CRM integration.",
    category: "Websites",
    tags: ["Real Estate", "Portal", "3D"],
    image: "/assets/generated/portfolio-harbour.dim_800x600.jpg",
    featured: false,
    year: "2024",
  },
  {
    id: 6,
    title: "Meridian Legal",
    subtitle: "Corporate Law Presence",
    description:
      "Authoritative law firm digital presence with client intake, case management, and trust signals.",
    category: "Branding",
    tags: ["Legal", "Corporate", "Trust"],
    image: "/assets/generated/portfolio-meridian.dim_800x600.jpg",
    featured: false,
    year: "2023",
  },
];

type Category = "All" | "Websites" | "E-Commerce" | "Branding" | "AI Video";
const CATEGORIES: Category[] = [
  "All",
  "Websites",
  "E-Commerce",
  "Branding",
  "AI Video",
];

/* ─── Sub-components ────────────────────────────────────────────── */
function HeroSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
      data-ocid="portfolio-hero"
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% -10%, oklch(0.18 0.04 70 / 0.12) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 80% 60%, oklch(0.72 0.15 70 / 0.04) 0%, transparent 60%)",
        }}
      />
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary/50" />
            <span className="text-primary text-xs font-body font-semibold tracking-[0.35em] uppercase">
              Selected Work
            </span>
            <span className="h-px w-8 bg-primary/50" />
          </div>

          {/* Headline */}
          <h1 className="leading-none mb-6">
            <span className="block font-display font-light text-5xl sm:text-7xl lg:text-8xl text-foreground/90 tracking-tight">
              Our
            </span>
            <span
              className="block accent-serif text-6xl sm:text-8xl lg:text-[7.5rem] text-primary leading-none"
              style={{ letterSpacing: "-0.02em" }}
            >
              Work
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed mb-10">
            Crafting digital experiences that inspire, convert,
            <br className="hidden sm:block" /> and endure.
          </p>

          {/* Stats */}
          <div className="inline-flex items-center gap-8 sm:gap-12 px-8 py-4 glass rounded-2xl gold-border-subtle">
            {[
              { value: "48+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
              { value: "5★", label: "Rating" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display font-bold text-xl sm:text-2xl text-primary">
                  {value}
                </div>
                <div className="text-muted-foreground text-[11px] font-body tracking-widest uppercase mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative floating orb */}
        <div
          className="absolute top-1/2 left-8 -translate-y-1/2 w-48 h-48 rounded-full opacity-[0.06] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.15 70) 0%, transparent 70%)",
            animation: "floatSlow 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/3 right-12 w-32 h-32 rounded-full opacity-[0.05] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.15 70) 0%, transparent 70%)",
            animation: "floatSlow 8s ease-in-out infinite 2s",
          }}
        />
      </div>
    </section>
  );
}

function FilterBar({
  active,
  onChange,
}: { active: Category; onChange: (c: Category) => void }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-wrap gap-2.5 justify-center px-4 pb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      data-ocid="portfolio-filters"
    >
      {CATEGORIES.map((cat, i) => (
        <button
          type="button"
          key={cat}
          data-ocid={`filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
          onClick={() => onChange(cat)}
          style={{
            transitionDelay: `${i * 50}ms`,
            boxShadow:
              active === cat
                ? "0 0 24px rgba(212,175,55,0.35), 0 4px 12px rgba(0,0,0,0.3)"
                : undefined,
          }}
          className={`relative px-5 py-2 rounded-full text-sm font-body font-medium tracking-wide transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
            active === cat
              ? "bg-primary text-primary-foreground shadow-lg"
              : "glass text-muted-foreground hover:text-foreground hover:border-primary/20 border border-transparent"
          }`}
        >
          {active === cat && (
            <span
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.5), transparent 70%)",
              }}
            />
          )}
          {cat}
        </button>
      ))}
    </div>
  );
}

function FeaturedCard({
  project,
  visible,
}: { project: Project; visible: boolean }) {
  return (
    <div
      data-ocid="portfolio-featured"
      className={`group relative col-span-1 md:col-span-2 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ aspectRatio: "16/7" }}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(120deg, rgba(8,8,12,0.88) 0%, rgba(8,8,12,0.5) 50%, rgba(8,8,12,0.2) 100%)",
        }}
      />
      {/* Gold glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-[11px] font-body font-bold tracking-[0.25em] uppercase">
              Featured Project
            </span>
          </div>
          <span className="text-muted-foreground text-xs font-mono">
            {project.year}
          </span>
        </div>

        <div>
          <div className="mb-2">
            <span className="text-xs font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-full glass gold-border-subtle text-primary">
              {project.category}
            </span>
          </div>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300"
            style={{ maxWidth: "640px" }}
          >
            {project.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400">
            {project.description}
          </p>
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 btn-gold-outline px-5 py-2.5 rounded-full text-sm font-body font-semibold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
              View Case Study
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Gold border on hover */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}

function PortfolioCard({
  project,
  visible,
}: {
  project: Project;
  visible: boolean;
}) {
  return (
    <div
      data-ocid={`portfolio-card-${project.id}`}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-600 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ aspectRatio: "4/3" }}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
        style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
      />

      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,8,12,0.85) 0%, rgba(8,8,12,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Top badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span className="text-[10px] font-body font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full glass gold-border-subtle text-primary">
          {project.category}
        </span>
        <span className="text-[10px] font-mono text-muted-foreground glass px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.year}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-muted-foreground text-[11px] font-body font-medium tracking-wider uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.subtitle}
          </p>
          <div className="flex items-end justify-between gap-3">
            <h3 className="font-display font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight min-w-0">
              {project.title}
            </h3>
            <div className="flex-shrink-0 w-9 h-9 rounded-full glass-elevated flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 gold-border-subtle">
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </div>
          </div>
          {/* Tags */}
          <div className="flex gap-1.5 mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-body font-semibold tracking-wider uppercase text-muted-foreground/70"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/15 transition-colors duration-400 pointer-events-none" />
    </div>
  );
}

function CtaSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section className="py-24 lg:py-32" data-ocid="portfolio-cta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl px-8 py-16 sm:px-12 sm:py-20 lg:px-20 text-center transition-all duration-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(8,8,12,0.95) 40%, rgba(212,175,55,0.04) 100%)",
            border: "1px solid rgba(212,175,55,0.15)",
            boxShadow:
              "0 40px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(212,175,55,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-6 bg-primary/50" />
              <span className="text-primary text-xs font-body font-semibold tracking-[0.3em] uppercase">
                Start a Project
              </span>
              <span className="h-px w-6 bg-primary/50" />
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              Have a project{" "}
              <span className="accent-serif text-primary">in mind?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Let's build something extraordinary together. Every great brand
              starts with a conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                data-ocid="portfolio-cta-primary"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/qr/BS4OWTEP5442E1"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="portfolio-cta-whatsapp"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-gold-outline font-body font-semibold text-sm tracking-wide"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─────────────────────────────────────────────────── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const { containerRef, visibleItems } = useStaggerAnimation<HTMLDivElement>(
    PROJECTS.length,
    { threshold: 0.05 },
  );

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const featuredProject =
    filteredProjects.find((p) => p.featured) ?? filteredProjects[0];
  const gridProjects = filteredProjects.filter((p) => p !== featuredProject);

  return (
    <>
      <HeroSection />
      <FilterBar active={activeFilter} onChange={setActiveFilter} />

      {/* Portfolio Grid */}
      <section className="pb-8 lg:pb-12" data-ocid="portfolio-grid">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
          >
            {/* Featured — spans 2 cols when visible */}
            {featuredProject && (
              <FeaturedCard
                project={featuredProject}
                visible={visibleItems[0] ?? false}
              />
            )}

            {/* Remaining grid */}
            {gridProjects.map((project, i) => (
              <PortfolioCard
                key={project.id}
                project={project}
                visible={visibleItems[i + 1] ?? false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="gold-divider" />
      </div>

      <CtaSection />
    </>
  );
}
