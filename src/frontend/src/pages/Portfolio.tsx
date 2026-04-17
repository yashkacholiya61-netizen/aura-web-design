import {
  useScrollAnimation,
  useStaggerAnimation,
  useTiltEffect,
} from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

/* ─── Types ─────────────────────────────────────── */
type FilterCategory =
  | "All"
  | "Web Design"
  | "Development"
  | "E-Commerce"
  | "Full-Stack";

interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<FilterCategory, "All">;
  description: string;
  tags: string[];
  gradient: string;
  accentColor: string;
}

interface CaseStudy {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  gradient: string;
  icon: React.ElementType;
}

/* ─── Data ──────────────────────────────────────── */

const FILTER_CATEGORIES: FilterCategory[] = [
  "All",
  "Web Design",
  "Development",
  "E-Commerce",
  "Full-Stack",
];

const PROJECTS: PortfolioItem[] = [
  {
    id: 1,
    title: "ShopEasy",
    category: "E-Commerce",
    description: "Modern online store with 300% conversion boost",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "linear-gradient(135deg, #7c3aed44 0%, #3b82f644 100%)",
    accentColor: "#7c3aed",
  },
  {
    id: 2,
    title: "DataVault SaaS",
    category: "Full-Stack",
    description: "Analytics SaaS serving 10k+ users",
    tags: ["React", "Python", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #0ea5e944 0%, #6366f144 100%)",
    accentColor: "#0ea5e9",
  },
  {
    id: 3,
    title: "LuxeStyle",
    category: "Web Design",
    description: "Premium fashion brand website",
    tags: ["HTML", "CSS", "Animations"],
    gradient: "linear-gradient(135deg, #ec489944 0%, #8b5cf644 100%)",
    accentColor: "#ec4899",
  },
  {
    id: 4,
    title: "TechCorpSite",
    category: "Web Design",
    description: "Corporate rebrand driving 250% more leads",
    tags: ["React", "Tailwind"],
    gradient: "linear-gradient(135deg, #8b5cf644 0%, #3b82f644 100%)",
    accentColor: "#8b5cf6",
  },
  {
    id: 5,
    title: "QuickPay API",
    category: "Development",
    description: "Payment gateway integration system",
    tags: ["Node.js", "Express", "Stripe"],
    gradient: "linear-gradient(135deg, #10b98144 0%, #06b6d444 100%)",
    accentColor: "#10b981",
  },
  {
    id: 6,
    title: "FoodieHub",
    category: "E-Commerce",
    description: "Restaurant ordering platform",
    tags: ["React", "Firebase"],
    gradient: "linear-gradient(135deg, #f9731644 0%, #f59e0b44 100%)",
    accentColor: "#f97316",
  },
  {
    id: 7,
    title: "TaskFlow App",
    category: "Full-Stack",
    description: "Project management tool for remote teams",
    tags: ["React", "Node.js"],
    gradient: "linear-gradient(135deg, #6366f144 0%, #3b82f644 100%)",
    accentColor: "#6366f1",
  },
  {
    id: 8,
    title: "MediCare Portal",
    category: "Development",
    description: "Healthcare appointment system",
    tags: ["React", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #14b8a644 0%, #0ea5e944 100%)",
    accentColor: "#14b8a6",
  },
  {
    id: 9,
    title: "GreenEnergy Site",
    category: "Web Design",
    description: "Sustainability brand with immersive storytelling",
    tags: ["React", "GSAP"],
    gradient: "linear-gradient(135deg, #22c55e44 0%, #16a34a44 100%)",
    accentColor: "#22c55e",
  },
  {
    id: 10,
    title: "StartupLaunch",
    category: "Full-Stack",
    description: "SaaS startup MVP in 4 weeks",
    tags: ["React", "Supabase"],
    gradient: "linear-gradient(135deg, #a855f744 0%, #7c3aed44 100%)",
    accentColor: "#a855f7",
  },
  {
    id: 11,
    title: "RealEstate Pro",
    category: "Full-Stack",
    description: "Property listing platform with virtual tours",
    tags: ["React", "Node.js"],
    gradient: "linear-gradient(135deg, #f59e0b44 0%, #ef444444 100%)",
    accentColor: "#f59e0b",
  },
  {
    id: 12,
    title: "EventFlow",
    category: "Development",
    description: "Event management platform with real-time updates",
    tags: ["React", "WebSockets"],
    gradient: "linear-gradient(135deg, #ec489944 0%, #f9731644 100%)",
    accentColor: "#ec4899",
  },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "ShopEasy E-Commerce",
    challenge:
      "Low conversion rates and an outdated, friction-heavy design that was costing the client customers at every funnel stage.",
    solution:
      "Full UX overhaul with redesigned checkout flow, mobile-first responsive build, and performance optimisation reducing load time by 68%.",
    results: [
      { label: "Conversion Increase", value: "300%" },
      { label: "Revenue Growth", value: "180%" },
      { label: "Load Time Cut", value: "68%" },
    ],
    gradient: "135deg, rgba(124,58,237,0.18) 0%, rgba(59,130,246,0.12) 100%",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "DataVault SaaS",
    challenge:
      "Client needed a scalable real-time analytics platform to compete with enterprise tools — on a startup budget and timeline.",
    solution:
      "Custom multi-tenant SaaS with real-time dashboards, role-based access control, and auto-scaling infrastructure ready for Series A.",
    results: [
      { label: "Active Users", value: "10,000+" },
      { label: "Data Processed", value: "2TB/day" },
      { label: "Round", value: "Series A" },
    ],
    gradient: "135deg, rgba(14,165,233,0.18) 0%, rgba(99,102,241,0.12) 100%",
    icon: Zap,
  },
  {
    id: 3,
    title: "TechCorpSite Rebrand",
    challenge:
      "Poor brand perception and minimal online presence meant the client was losing enterprise deals before the first call.",
    solution:
      "Complete digital rebrand — new visual identity, content strategy, technical SEO overhaul, and conversion-optimised site.",
    results: [
      { label: "Qualified Leads", value: "+250%" },
      { label: "Organic Traffic", value: "+190%" },
      { label: "Bounce Drop", value: "42%" },
    ],
    gradient: "135deg, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.12) 100%",
    icon: Layers,
  },
];

/* ─── Sub-components ──────────────────────────────── */

function ProjectCard({
  project,
  index,
}: {
  project: PortfolioItem;
  index: number;
}) {
  const { ref, tiltStyle, onMouseMove, onMouseLeave } = useTiltEffect(8);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.95 }}
      transition={{
        duration: 0.45,
        delay: index * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={tiltStyle}
      data-ocid={`portfolio.item.${index + 1}`}
      className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer spotlight-card flex flex-col"
    >
      {/* Gradient image panel */}
      <div
        className="relative h-48 flex items-end p-5 overflow-hidden"
        style={{ background: project.gradient }}
      >
        {/* Mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(${project.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor} 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Center glow orb */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 60% at 50% 40%, ${project.accentColor}40, transparent 70%)`,
          }}
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.accentColor}55, transparent 65%)`,
          }}
        />
        {/* Category badge */}
        <span
          className="relative z-10 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold glass"
          style={{
            border: `1px solid ${project.accentColor}40`,
            color: project.accentColor,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-display font-bold text-lg text-foreground group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-mono"
              style={{
                background: `${project.accentColor}14`,
                border: `1px solid ${project.accentColor}28`,
                color: project.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View details */}
        <Link
          to="/contact"
          data-ocid={`portfolio.view_details_button.${index + 1}`}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold btn-gradient-outline px-4 py-2.5 rounded-xl w-fit group/btn"
        >
          View Details
          <ExternalLink
            size={13}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-purple-500/25 transition-colors duration-400" />
    </motion.div>
  );
}

function CaseStudyCard({
  cs,
  index,
}: {
  cs: CaseStudy;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const Icon = cs.icon;

  return (
    <div
      ref={ref}
      data-ocid={`case_study.item.${index + 1}`}
      className="relative rounded-3xl overflow-hidden flex flex-col transition-all duration-700"
      style={{
        transitionDelay: `${index * 0.15}s`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        background: `linear-gradient(${cs.gradient})`,
        border: "1px solid rgba(124,58,237,0.18)",
        boxShadow:
          "0 20px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Accent top bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${cs.icon === TrendingUp ? "#7c3aed" : cs.icon === Zap ? "#0ea5e9" : "#8b5cf6"}, transparent)`,
        }}
      />

      <div className="p-7 flex flex-col gap-6 flex-1">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div
            className="p-3 rounded-xl flex-shrink-0"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Icon size={20} className="text-foreground/80" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display font-bold text-lg text-foreground leading-tight">
              {cs.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-widest">
              Case Study
            </p>
          </div>
        </div>

        {/* Challenge / Solution */}
        <div className="space-y-3 flex-1">
          <div className="glass rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-purple-400 mb-1.5">
              Challenge
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {cs.challenge}
            </p>
          </div>
          <div className="glass rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-1.5">
              Solution
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {cs.solution}
            </p>
          </div>
        </div>

        {/* Results */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Results
          </p>
          <div className="grid grid-cols-3 gap-2">
            {cs.results.map((r) => (
              <div
                key={r.label}
                className="rounded-xl p-3 text-center"
                style={{
                  background: "rgba(0,0,0,0.28)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p className="stat-number text-lg font-bold leading-none mb-1">
                  {r.value}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const { ref: heroRef, isVisible: heroVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: caseRef, isVisible: caseVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { containerRef } = useStaggerAnimation<HTMLDivElement>(
    PROJECTS.length,
    { threshold: 0.05 },
  );

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div data-ocid="portfolio.page" className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-20"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% -10%, rgba(124,58,237,0.22) 0%, transparent 65%), #0a0a14",
        }}
        data-ocid="portfolio.section"
      >
        {/* Hero bg image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/portfolio-hero-bg.dim_1920x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        {/* Floating orbs */}
        <div
          className="absolute top-20 left-1/4 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,1), transparent 70%)",
            filter: "blur(56px)",
            animation: "floatSlow 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-8 right-1/4 w-60 h-60 rounded-full opacity-08 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,1), transparent 70%)",
            filter: "blur(44px)",
            animation: "floatSlow 9s ease-in-out infinite 2s",
          }}
        />

        <div
          ref={heroRef}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/25 mb-7">
              <CheckCircle2 size={13} className="text-purple-400" />
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest">
                Our Work
              </span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-7xl leading-[1.05] mb-5 text-foreground">
              Our <span className="gradient-text-animate">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Projects that prove what we can do for your business
            </p>

            {/* Stats strip */}
            <div className="mt-10 inline-flex items-center gap-8 sm:gap-12 px-8 py-4 glass-card rounded-2xl">
              {[
                { value: "12+", label: "Projects Shown" },
                { value: "50+", label: "Happy Clients" },
                { value: "5★", label: "Avg Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="stat-number text-2xl font-bold">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground tracking-widest uppercase mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tabs ──────────────────────────────── */}
      <section
        className="section-alt py-6 sticky top-[70px] z-20"
        data-ocid="portfolio.filter.tab"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
            {FILTER_CATEGORIES.map((cat, i) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveFilter(cat)}
                data-ocid={`portfolio.filter_${cat.toLowerCase().replace(/[\s-]/g, "_")}`}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 ${
                  activeFilter === cat
                    ? "text-white shadow-lg shadow-violet-500/25"
                    : "glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-violet-500/25"
                }`}
              >
                {activeFilter === cat && (
                  <span
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                    }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Grid ──────────────────────────────── */}
      <section className="py-16 px-6" data-ocid="portfolio.grid.section">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              ref={containerRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="portfolio.list"
            >
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
              data-ocid="portfolio.empty_state"
            >
              <p className="text-muted-foreground text-lg">
                No projects in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="gradient-divider" />
      </div>

      {/* ── Case Studies ──────────────────────────────── */}
      <section className="section-alt py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div
            ref={caseRef}
            className="text-center mb-16 transition-all duration-700"
            style={{
              opacity: caseVisible ? 1 : 0,
              transform: caseVisible ? "translateY(0)" : "translateY(28px)",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/25 mb-5">
              <TrendingUp size={13} className="text-blue-400" />
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
                Deep Dives
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
              Case <span className="gradient-text">Studies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Behind-the-scenes look at how we solve real business problems
            </p>
          </div>

          {/* Case study cards */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            data-ocid="case_study.list"
          >
            {CASE_STUDIES.map((cs, i) => (
              <CaseStudyCard key={cs.id} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-28 px-6" data-ocid="portfolio.cta.section">
        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={ctaVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl text-center px-10 py-16 md:px-16 md:py-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.13) 0%, rgba(8,8,20,0.96) 40%, rgba(59,130,246,0.10) 100%)",
              border: "1px solid rgba(124,58,237,0.22)",
              boxShadow:
                "0 0 80px rgba(124,58,237,0.10), 0 32px 64px rgba(0,0,0,0.4)",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.18), transparent 70%)",
              }}
            />
            {/* Grid texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/25 mb-6">
                <Zap size={13} className="text-purple-400" />
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest">
                  Start a Project
                </span>
              </div>

              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4 leading-tight">
                Have a project <span className="gradient-text">in mind?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Tell us about your vision. We'll turn it into a high-performance
                digital experience that drives real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  data-ocid="portfolio.cta.primary_button"
                  className="inline-flex items-center gap-3 btn-gradient px-8 py-4 rounded-xl text-base font-semibold text-white purple-glow-subtle hover:purple-glow transition-all duration-300 group"
                >
                  Let's Talk
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
                <a
                  href="https://wa.me/qr/BS4OWTEP5442E1"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="portfolio.cta.secondary_button"
                  className="inline-flex items-center gap-2 btn-gradient-outline px-8 py-4 rounded-xl font-semibold text-sm tracking-wide"
                >
                  WhatsApp Us
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
