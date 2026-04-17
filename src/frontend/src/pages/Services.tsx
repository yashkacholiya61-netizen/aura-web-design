import {
  useScrollAnimation,
  useStaggerAnimation,
  useTiltEffect,
} from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Globe,
  Key,
  Layers,
  LayoutDashboard,
  Monitor,
  Package,
  Palette,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useRef, useState } from "react";

/* ── Types ──────────────────────────────────────────────────────── */
interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  accentColor: string;
  glowColor: string;
  borderColor: string;
  borderHover: string;
  spotlightColor: string;
}

interface ServiceCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  accentFrom: string;
  accentTo: string;
  glowColor: string;
}

/* ── Category nav data ──────────────────────────────────────────── */
const categories: ServiceCategory[] = [
  {
    id: "frontend",
    label: "Frontend Development",
    icon: Monitor,
    accentFrom: "#7C3AED",
    accentTo: "#6D28D9",
    glowColor: "rgba(124,58,237,0.3)",
  },
  {
    id: "backend",
    label: "Backend Development",
    icon: Server,
    accentFrom: "#3B82F6",
    accentTo: "#2563EB",
    glowColor: "rgba(59,130,246,0.3)",
  },
  {
    id: "fullstack",
    label: "Full-Stack Solutions",
    icon: Layers,
    accentFrom: "#8B5CF6",
    accentTo: "#7C3AED",
    glowColor: "rgba(139,92,246,0.3)",
  },
];

/* ── Service items per category ─────────────────────────────────── */
const frontendServices: ServiceItem[] = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers",
    features: [
      "Custom wireframing & prototyping",
      "User journey mapping",
      "Design system creation",
      "Figma handoff & spec sheets",
      "Accessibility compliance (WCAG)",
    ],
    accentColor: "#7C3AED",
    glowColor: "rgba(124,58,237,0.22)",
    borderColor: "rgba(124,58,237,0.2)",
    borderHover: "rgba(124,58,237,0.5)",
    spotlightColor: "rgba(124,58,237,0.1)",
  },
  {
    icon: Smartphone,
    title: "Responsive Websites",
    description: "Pixel-perfect websites that work on every device",
    features: [
      "Mobile-first development",
      "Cross-browser compatibility",
      "Fluid grids & breakpoints",
      "Touch-optimized interactions",
      "Performance-tuned images",
    ],
    accentColor: "#9333EA",
    glowColor: "rgba(147,51,234,0.22)",
    borderColor: "rgba(147,51,234,0.2)",
    borderHover: "rgba(147,51,234,0.5)",
    spotlightColor: "rgba(147,51,234,0.1)",
  },
  {
    icon: Globe,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads",
    features: [
      "CRO-focused layout design",
      "A/B testing ready structure",
      "Lead form integration",
      "Fast load time (<1s)",
      "Analytics & heatmap setup",
    ],
    accentColor: "#7C3AED",
    glowColor: "rgba(124,58,237,0.22)",
    borderColor: "rgba(124,58,237,0.2)",
    borderHover: "rgba(124,58,237,0.5)",
    spotlightColor: "rgba(124,58,237,0.1)",
  },
  {
    icon: Sparkles,
    title: "Animations",
    description: "Smooth micro-interactions and animations that delight users",
    features: [
      "Scroll-triggered reveals",
      "3D card tilt effects",
      "Custom cursor experiences",
      "Lottie & SVG animations",
      "Reduced-motion support",
    ],
    accentColor: "#A855F7",
    glowColor: "rgba(168,85,247,0.22)",
    borderColor: "rgba(168,85,247,0.2)",
    borderHover: "rgba(168,85,247,0.5)",
    spotlightColor: "rgba(168,85,247,0.1)",
  },
];

const backendServices: ServiceItem[] = [
  {
    icon: Code2,
    title: "API Development",
    description: "RESTful and GraphQL APIs built for performance and scale",
    features: [
      "REST & GraphQL endpoints",
      "Rate limiting & throttling",
      "API versioning strategy",
      "OpenAPI / Swagger docs",
      "Webhook integrations",
    ],
    accentColor: "#3B82F6",
    glowColor: "rgba(59,130,246,0.22)",
    borderColor: "rgba(59,130,246,0.2)",
    borderHover: "rgba(59,130,246,0.5)",
    spotlightColor: "rgba(59,130,246,0.1)",
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Efficient data architecture that scales with your business",
    features: [
      "SQL & NoSQL architecture",
      "Data modeling & optimization",
      "Migration & seeding scripts",
      "Caching layer (Redis)",
      "Backup & recovery setup",
    ],
    accentColor: "#2563EB",
    glowColor: "rgba(37,99,235,0.22)",
    borderColor: "rgba(37,99,235,0.2)",
    borderHover: "rgba(37,99,235,0.5)",
    spotlightColor: "rgba(37,99,235,0.1)",
  },
  {
    icon: Key,
    title: "Authentication Systems",
    description: "Secure login and user management systems",
    features: [
      "JWT & OAuth 2.0",
      "Multi-factor authentication",
      "Role-based access control",
      "Session management",
      "Social login integrations",
    ],
    accentColor: "#3B82F6",
    glowColor: "rgba(59,130,246,0.22)",
    borderColor: "rgba(59,130,246,0.2)",
    borderHover: "rgba(59,130,246,0.5)",
    spotlightColor: "rgba(59,130,246,0.1)",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Custom admin panels to manage your business effortlessly",
    features: [
      "Real-time data tables",
      "Charts & analytics views",
      "User management interface",
      "Export CSV / PDF reports",
      "Audit trail & logs",
    ],
    accentColor: "#60A5FA",
    glowColor: "rgba(96,165,250,0.22)",
    borderColor: "rgba(96,165,250,0.2)",
    borderHover: "rgba(96,165,250,0.5)",
    spotlightColor: "rgba(96,165,250,0.1)",
  },
];

const fullstackServices: ServiceItem[] = [
  {
    icon: Package,
    title: "Complete Website Development",
    description: "Full-featured websites built from scratch",
    features: [
      "End-to-end design + dev",
      "CMS integration",
      "SEO-optimized architecture",
      "Security hardening",
      "Post-launch support",
    ],
    accentColor: "#8B5CF6",
    glowColor: "rgba(139,92,246,0.22)",
    borderColor: "rgba(139,92,246,0.2)",
    borderHover: "rgba(139,92,246,0.5)",
    spotlightColor: "rgba(139,92,246,0.1)",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description: "Online stores that drive sales and grow revenue",
    features: [
      "Product catalog & search",
      "Cart & checkout flow",
      "Payment gateway setup",
      "Inventory management",
      "Order tracking & emails",
    ],
    accentColor: "#7C3AED",
    glowColor: "rgba(124,58,237,0.22)",
    borderColor: "rgba(124,58,237,0.2)",
    borderHover: "rgba(124,58,237,0.5)",
    spotlightColor: "rgba(124,58,237,0.1)",
  },
  {
    icon: Zap,
    title: "Web Applications",
    description: "Custom web apps solving real business problems",
    features: [
      "SPA & SSR architecture",
      "Real-time data syncing",
      "Offline-first capabilities",
      "Progressive Web App",
      "CI/CD deployment pipeline",
    ],
    accentColor: "#A855F7",
    glowColor: "rgba(168,85,247,0.22)",
    borderColor: "rgba(168,85,247,0.2)",
    borderHover: "rgba(168,85,247,0.5)",
    spotlightColor: "rgba(168,85,247,0.1)",
  },
  {
    icon: Cloud,
    title: "SaaS Projects",
    description: "Software-as-a-Service products built for scale",
    features: [
      "Multi-tenant architecture",
      "Subscription billing",
      "User onboarding flows",
      "Feature flag system",
      "Scalable cloud infra",
    ],
    accentColor: "#6D28D9",
    glowColor: "rgba(109,40,217,0.22)",
    borderColor: "rgba(109,40,217,0.2)",
    borderHover: "rgba(109,40,217,0.5)",
    spotlightColor: "rgba(109,40,217,0.1)",
  },
];

/* ── Animation variants ─────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

/* ── SpotlightCard ──────────────────────────────────────────────── */
function SpotlightCard({
  children,
  service,
  className = "",
}: {
  children: React.ReactNode;
  service: ServiceItem;
  className?: string;
}) {
  const { ref, tiltStyle, onMouseMove, onMouseLeave } = useTiltEffect(7);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      onMouseMove(e);
      const el = spotlightRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
        y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
      });
    },
    [onMouseMove],
  );

  const handleLeave = useCallback(() => {
    onMouseLeave();
    setHovered(false);
  }, [onMouseLeave]);

  return (
    <div ref={ref} style={tiltStyle} className={`transform-gpu ${className}`}>
      <div
        ref={spotlightRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{
          background: "rgba(255,255,255,0.035)",
          backdropFilter: "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: "blur(20px) saturate(1.5)",
          border: `1px solid ${hovered ? service.borderHover : service.borderColor}`,
          boxShadow: hovered
            ? `0 24px 64px rgba(0,0,0,0.5), 0 0 40px ${service.glowColor}`
            : "0 8px 32px rgba(0,0,0,0.3)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          position: "relative",
          overflow: "hidden",
        }}
        className="rounded-2xl h-full"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(380px circle at ${mousePos.x} ${mousePos.y}, ${service.spotlightColor}, transparent 55%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}

/* ── ServiceCard ────────────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
  sectionId,
}: {
  service: ServiceItem;
  index: number;
  sectionId: string;
}) {
  const Icon = service.icon;
  return (
    <motion.div variants={cardVariants} className="h-full">
      <SpotlightCard service={service} className="h-full">
        <div
          data-ocid={`${sectionId}.service.item.${index + 1}`}
          className="flex flex-col h-full p-6 lg:p-7 gap-5"
        >
          {/* Icon */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${service.accentColor}25, ${service.accentColor}0d)`,
              border: `1px solid ${service.borderColor}`,
              boxShadow: `0 0 20px ${service.glowColor}`,
            }}
          >
            <Icon className="w-5 h-5" style={{ color: service.accentColor }} />
          </div>

          {/* Title + description */}
          <div className="space-y-2">
            <h3 className="font-display font-bold text-foreground text-lg leading-snug tracking-tight">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              {service.description}
            </p>
          </div>

          {/* Accent divider */}
          <div
            className="h-px w-full"
            style={{
              background: `linear-gradient(90deg, ${service.accentColor}50, transparent)`,
            }}
          />

          {/* Features */}
          <ul className="flex flex-col gap-2.5 flex-1">
            {service.features.map((feat) => (
              <li
                key={feat}
                className="flex items-start gap-2.5 text-sm text-muted-foreground group/feat"
              >
                <CheckCircle2
                  className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-colors duration-200"
                  style={{ color: service.accentColor }}
                />
                <span className="group-hover/feat:text-foreground transition-colors duration-200 leading-snug">
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            data-ocid={`${sectionId}.service.cta.${index + 1}`}
            className="inline-flex items-center gap-2 text-sm font-display font-semibold mt-auto group/cta transition-all duration-300"
            style={{ color: service.accentColor }}
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
          </Link>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

/* ── CategoryNavCard ────────────────────────────────────────────── */
function CategoryNavCard({
  category,
  index,
}: {
  category: ServiceCategory;
  index: number;
}) {
  const Icon = category.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={`#${category.id}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.55, ease: "easeOut" }}
      data-ocid={`services.category_nav.${index + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById(category.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${category.accentFrom}18, ${category.accentTo}0d)`
          : "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${hovered ? `${category.accentFrom}50` : `${category.accentFrom}20`}`,
        boxShadow: hovered
          ? `0 12px 40px rgba(0,0,0,0.4), 0 0 30px ${category.glowColor}`
          : "0 4px 20px rgba(0,0,0,0.2)",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}
      className="group flex items-center gap-4 p-5 rounded-2xl cursor-pointer"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${category.accentFrom}25, ${category.accentTo}12)`,
          border: `1px solid ${category.accentFrom}30`,
        }}
      >
        <Icon className="w-4.5 h-4.5" style={{ color: category.accentFrom }} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-display font-semibold text-sm text-foreground tracking-tight block truncate">
          {category.label}
        </span>
        <span className="text-muted-foreground text-xs font-body">
          4 services
        </span>
      </div>
      <ChevronRight
        className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5"
        style={{
          color: hovered ? category.accentFrom : undefined,
          opacity: hovered ? 1 : 0.5,
        }}
      />
    </motion.a>
  );
}

/* ── AnimatedSection ────────────────────────────────────────────── */
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
    threshold: 0.06,
  });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ── ServiceSection ─────────────────────────────────────────────── */
function ServiceSection({
  id,
  heading,
  description,
  services,
  accentFrom,
  accentTo,
  glowColor,
  badgeLabel,
  sectionIndex,
}: {
  id: string;
  heading: string;
  description: string;
  services: ServiceItem[];
  accentFrom: string;
  accentTo: string;
  glowColor: string;
  badgeLabel: string;
  sectionIndex: number;
}) {
  const { containerRef, visibleItems } = useStaggerAnimation<HTMLDivElement>(
    services.length,
    { threshold: 0.08 },
  );
  const isAlt = sectionIndex % 2 === 1;

  return (
    <section
      id={id}
      data-ocid={`services.${id}_section`}
      className="relative py-20 lg:py-28 overflow-hidden scroll-mt-20"
      style={
        isAlt
          ? {
              background:
                "linear-gradient(to bottom, transparent, rgba(124,58,237,0.03) 30%, rgba(59,130,246,0.025) 70%, transparent)",
              borderTop: "1px solid rgba(124,58,237,0.08)",
              borderBottom: "1px solid rgba(59,130,246,0.08)",
            }
          : {}
      }
    >
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 65% 50% at 50% 50%, ${glowColor.replace("0.3", "0.05")} 0%, transparent 65%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-col items-start sm:items-center text-center sm:text-center gap-4">
            <span
              className="inline-flex items-center gap-2 text-[10px] font-body font-semibold tracking-[0.3em] uppercase px-3.5 py-1.5 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${accentFrom}18, ${accentTo}0d)`,
                border: `1px solid ${accentFrom}30`,
                color: accentFrom,
              }}
            >
              {badgeLabel}
            </span>

            {/* Gradient divider line */}
            <div
              className="hidden sm:block h-px w-16"
              style={{
                background: `linear-gradient(90deg, transparent, ${accentFrom}60, transparent)`,
              }}
            />

            <h2
              className="font-display font-bold leading-tight tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
            >
              {heading}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg font-body max-w-xl leading-relaxed">
              {description}
            </p>
          </div>
        </AnimatedSection>

        {/* Gradient divider */}
        <div
          className="h-px w-full mb-12"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentFrom}40, ${accentTo}30, transparent)`,
          }}
        />

        {/* Cards grid */}
        <div ref={containerRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`h-full transition-all duration-500 ${visibleItems[i] ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <ServiceCard service={service} index={i} sectionId={id} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export default function Services() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
        data-ocid="services.hero"
      >
        {/* Background radial glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 60% at 50% 0%, rgba(124,58,237,0.16) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(59,130,246,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-8 justify-center"
            aria-label="Breadcrumb"
            data-ocid="services.breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-foreground transition-colors duration-200"
              data-ocid="services.breadcrumb_home"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-foreground/80">Services</span>
          </motion.nav>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span
              className="inline-flex items-center gap-2.5 text-xs font-mono font-semibold tracking-[0.3em] uppercase mb-6"
              style={{ color: "#a78bfa" }}
            >
              <span
                className="block w-8 h-px"
                style={{ background: "rgba(167,139,250,0.5)" }}
              />
              What We Offer
              <span
                className="block w-8 h-px"
                style={{ background: "rgba(167,139,250,0.5)" }}
              />
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display font-bold leading-tight tracking-tight mb-5 text-center"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto font-body leading-relaxed mb-12 text-center"
          >
            End-to-end digital solutions built for modern businesses
          </motion.p>

          {/* Gradient divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center gap-3 max-w-xs mx-auto mb-14"
          >
            <div className="h-px flex-1 gradient-divider" />
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "#7C3AED",
                boxShadow: "0 0 10px rgba(124,58,237,0.6)",
              }}
            />
            <div className="h-px flex-1 gradient-divider" />
          </motion.div>

          {/* Category nav cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            data-ocid="services.category_nav"
          >
            {categories.map((cat, i) => (
              <CategoryNavCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Frontend Development ──────────────────────────────────── */}
      <ServiceSection
        id="frontend"
        heading="Frontend Development"
        description="Beautiful, responsive interfaces crafted with precision"
        services={frontendServices}
        accentFrom="#7C3AED"
        accentTo="#6D28D9"
        glowColor="rgba(124,58,237,0.3)"
        badgeLabel="Frontend"
        sectionIndex={0}
      />

      {/* ── Backend Development ───────────────────────────────────── */}
      <ServiceSection
        id="backend"
        heading="Backend Development"
        description="Robust, scalable systems powering your digital products"
        services={backendServices}
        accentFrom="#3B82F6"
        accentTo="#2563EB"
        glowColor="rgba(59,130,246,0.3)"
        badgeLabel="Backend"
        sectionIndex={1}
      />

      {/* ── Full-Stack Solutions ──────────────────────────────────── */}
      <ServiceSection
        id="fullstack"
        heading="Full-Stack Solutions"
        description="Complete digital products from concept to deployment"
        services={fullstackServices}
        accentFrom="#8B5CF6"
        accentTo="#7C3AED"
        glowColor="rgba(139,92,246,0.3)"
        badgeLabel="Full-Stack"
        sectionIndex={2}
      />

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        data-ocid="services.cta"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 60%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div
              className="relative rounded-3xl overflow-hidden text-center py-16 lg:py-20 px-8"
              style={{
                background: "rgba(255,255,255,0.025)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(124,58,237,0.18)",
                boxShadow:
                  "0 40px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/4 right-1/4 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(59,130,246,0.6), transparent)",
                }}
              />

              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.07), transparent)",
                }}
              />

              <span
                className="text-xs font-mono tracking-[0.3em] uppercase mb-5 block"
                style={{ color: "#a78bfa" }}
              >
                Let's Build Together
              </span>

              <h2
                className="font-display font-bold text-foreground leading-tight mb-4"
                style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
              >
                Ready to get <span className="gradient-text">started?</span>
              </h2>

              <p className="text-muted-foreground text-lg font-body max-w-xl mx-auto mb-10 leading-relaxed">
                Join the brands that trust flowebdesign to build their digital
                presence. One conversation could change everything.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  data-ocid="services.contact_cta_button"
                  className="btn-gradient inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-display font-semibold tracking-wide group"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/qr/BS4OWTEP5442E1"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="services.whatsapp_cta_button"
                  className="btn-gradient-outline inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-display font-semibold tracking-wide"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
