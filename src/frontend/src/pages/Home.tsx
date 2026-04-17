import {
  useCounterAnimation,
  useParallax,
  useScrollAnimation,
  useStaggerAnimation,
  useTiltEffect,
} from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  Globe,
  Headphones,
  Layers,
  MessageCircle,
  Quote,
  Rocket,
  Search,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

/* ─── Services data ─────────────────────────────────────────── */

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Beautiful, responsive interfaces that captivate users and drive conversions.",
    features: [
      "UI/UX Design & Prototyping",
      "Responsive Websites",
      "Landing Page Optimization",
      "Micro-animations & Effects",
    ],
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.28)",
    glowColor: "rgba(124,58,237,0.18)",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Robust, scalable systems that power your business with enterprise-grade reliability.",
    features: [
      "REST API Development",
      "Database Architecture",
      "Authentication Systems",
      "Admin Dashboard & CMS",
    ],
    color: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.28)",
    glowColor: "rgba(59,130,246,0.18)",
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description:
      "End-to-end digital products built for success — from concept to deployment.",
    features: [
      "Complete Web Applications",
      "E-commerce Platforms",
      "SaaS Product Development",
      "Performance Optimization",
    ],
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.28)",
    glowColor: "rgba(124,58,237,0.18)",
  },
];

/* ─── Process steps ─────────────────────────────────────────── */

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Consult",
    description:
      "We listen to your vision and understand your business goals, audience, and competitive landscape.",
    color: "#7c3aed",
  },
  {
    number: "02",
    icon: Target,
    title: "Design",
    description:
      "We craft stunning designs that align with your brand identity and maximize user engagement.",
    color: "#5b5ef4",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "We build with clean, modern code — performant, accessible, and engineered to scale.",
    color: "#3b82f6",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "We deploy, test rigorously, and support your product through go-live and beyond.",
    color: "#2563eb",
  },
];

/* ─── Portfolio items ───────────────────────────────────────── */

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with 300% conversion increase",
    tags: ["React", "Node.js", "MongoDB"],
    gradient:
      "linear-gradient(135deg, rgba(124,58,237,0.8) 0%, rgba(59,130,246,0.6) 100%)",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics platform serving 10,000+ monthly active users",
    tags: ["TypeScript", "REST API", "Charts"],
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.8) 0%, rgba(124,58,237,0.6) 100%)",
  },
  {
    id: 3,
    title: "Corporate Website",
    description: "Rebrand that increased qualified leads by 250%",
    tags: ["UI/UX", "Animation", "SEO"],
    gradient:
      "linear-gradient(135deg, rgba(99,102,241,0.8) 0%, rgba(59,130,246,0.6) 100%)",
  },
];

/* ─── Testimonials ──────────────────────────────────────────── */

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechStartup India",
    quote:
      "flowebdesign transformed our online presence completely. The new platform drove a 180% revenue increase within the first quarter. Genuinely world-class work.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "GrowthCo",
    quote:
      "Exceptional quality and lightning-fast delivery. They delivered our full-stack app in 3 weeks with zero compromises on design or performance. 5 stars.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Managing Director",
    company: "DigitalVentures",
    quote:
      "The most professional team we've worked with. Our corporate site is now stunning and our leads are up 250%. Would recommend to any serious business.",
    rating: 5,
  },
  {
    name: "Neha Patel",
    role: "Product Manager",
    company: "SaaS Labs",
    quote:
      "From concept to launch in record time, and the result rivals products from top-tier agencies. flowebdesign is the real deal.",
    rating: 5,
  },
];

/* ─── Why choose us ─────────────────────────────────────────── */

const whyUsItems = [
  {
    icon: CheckCircle2,
    title: "Custom Solutions",
    description:
      "Every project is built specifically for your needs. No templates, no shortcuts — only bespoke craftsmanship.",
    accent: "#7c3aed",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "120+ successful projects across diverse industries. Our portfolio speaks louder than any promise.",
    accent: "#5b5ef4",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "We meet deadlines. Always. On-time delivery is a guarantee, not a hope — backed by our process.",
    accent: "#3b82f6",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock support to keep your business running. We're always just a message away.",
    accent: "#2563eb",
  },
];

/* ─── Shared helpers ─────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-body font-semibold tracking-[0.35em] uppercase mb-4 gradient-text">
      <span
        className="inline-block w-5 h-px"
        style={{ background: "linear-gradient(90deg, #7c3aed, #3b82f6)" }}
      />
      {children}
      <span
        className="inline-block w-5 h-px"
        style={{ background: "linear-gradient(90deg, #7c3aed, #3b82f6)" }}
      />
    </span>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mt-1 mb-4 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-lg mx-auto font-body text-sm leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ─── Stat counter ───────────────────────────────────────────── */

function StatCounter({
  target,
  suffix,
  label,
  sub,
  index,
}: {
  target: number;
  suffix: string;
  label: string;
  sub: string;
  index: number;
}) {
  const { ref, count } = useCounterAnimation(target, 1800);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
      data-ocid={`stats.item.${index + 1}`}
      className="relative flex flex-col items-center text-center p-10"
      style={{
        background: "rgba(255,255,255,0.025)",
        borderRight: index < 3 ? "1px solid rgba(124,58,237,0.12)" : undefined,
      }}
    >
      <span className="stat-number text-5xl sm:text-6xl mb-3 block font-display font-bold tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="block font-display font-semibold text-sm text-foreground mb-1.5 tracking-wide">
        {label}
      </span>
      <span className="text-xs text-muted-foreground font-body tracking-wide">
        {sub}
      </span>
    </motion.div>
  );
}

/* ─── Portfolio card ─────────────────────────────────────────── */

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof portfolioItems)[number];
  index: number;
}) {
  const { ref, tiltStyle, onMouseMove, onMouseLeave } = useTiltEffect(8);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: "easeOut" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={tiltStyle}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      data-ocid={`portfolio.item.${index + 1}`}
    >
      <Link to="/portfolio" className="block">
        {/* Gradient placeholder image */}
        <div
          className="aspect-video relative overflow-hidden"
          style={{
            background: item.gradient,
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Decorative grid on card */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Floating geometric accent */}
          <div
            className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-30"
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(4px)",
            }}
          />
          <div
            className="absolute bottom-10 left-8 w-10 h-10 rounded-lg rotate-12 opacity-25"
            style={{ background: "rgba(255,255,255,0.3)" }}
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "rgba(0,0,0,0.35)" }}
          />

          {/* Info strip */}
          <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
            <div className="min-w-0">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-body font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full text-white/80"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-display font-bold text-base text-white block truncate">
                {item.title}
              </span>
              <span className="font-body text-xs text-white/70 mt-0.5 block">
                {item.description}
              </span>
            </div>
            <div
              className="ml-3 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
              }}
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Service card ───────────────────────────────────────────── */

function ServiceCard({
  service,
  index,
  visible,
}: {
  service: (typeof services)[number];
  index: number;
  visible: boolean;
}) {
  const Icon = service.icon;
  return (
    <div
      data-ocid={`services.item.${index + 1}`}
      className={`group relative glass-card spotlight-card rounded-2xl p-8 flex flex-col gap-6 cursor-pointer transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${service.border}, 0 0 50px ${service.glowColor}`,
        }}
      />

      {/* Icon */}
      <div
        className="relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: service.color,
          border: `1px solid ${service.border}`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color: "#a78bfa" }} />
      </div>

      {/* Title & description */}
      <div className="flex-1 relative z-10">
        <h3 className="font-display font-bold text-lg text-foreground mb-2 tracking-tight">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-body mb-5">
          {service.description}
        </p>

        {/* Feature list */}
        <ul className="space-y-2">
          {service.features.map((feat) => (
            <li
              key={feat}
              className="flex items-center gap-2.5 text-xs font-body text-foreground/75"
            >
              <span
                className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
                }}
              />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/services"
        data-ocid={`services.learn_more.${index + 1}`}
        className="relative z-10 inline-flex items-center gap-1.5 text-xs font-body font-semibold group-hover:gap-3 transition-all duration-300 gradient-text"
      >
        Learn More
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function Home() {
  const { containerRef: servicesRef, visibleItems: servicesVisible } =
    useStaggerAnimation<HTMLDivElement>(3);
  const { containerRef: whyUsRef, visibleItems: whyUsVisible } =
    useStaggerAnimation<HTMLDivElement>(4);

  const heroBg = useParallax(0.08, 40);
  const heroText = useParallax(-0.04, 20);

  const { ref: ctaRef, isVisible: ctaVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        data-ocid="hero.section"
      >
        {/* Background image with parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-agency-dark.dim_1600x900.jpg')",
            ...heroBg.style,
          }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(8,10,18,0.4) 0%, rgba(8,10,18,0.9) 100%)",
          }}
        />
        {/* Color tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.07) 0%, transparent 50%, rgba(59,130,246,0.05) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #0a0a14)",
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute -top-16 -left-16 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
            animation: "floatSlow 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
            animation: "floatSlow 12s ease-in-out 1.5s infinite",
          }}
        />
        {/* Geometric accent dots */}
        <div
          className="absolute bottom-40 left-12 w-3 h-3 rounded-full pointer-events-none"
          style={{
            background: "rgba(124,58,237,0.7)",
            boxShadow: "0 0 24px 6px rgba(124,58,237,0.3)",
            animation: "floatSlow 6s ease-in-out 0.5s infinite",
          }}
        />
        <div
          className="absolute top-1/3 right-16 w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: "rgba(59,130,246,0.8)",
            boxShadow: "0 0 16px 4px rgba(59,130,246,0.3)",
            animation: "floatSlow 8s ease-in-out 2s infinite",
          }}
        />

        {/* Hero content */}
        <div
          className="relative z-10 text-center px-5 sm:px-8 max-w-5xl mx-auto"
          style={heroText.style}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-dark text-[10px] font-body font-semibold tracking-[0.3em] uppercase mb-8"
              style={{
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#a78bfa",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
                  boxShadow: "0 0 8px rgba(124,58,237,0.8)",
                }}
              />
              Premium Digital Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-display font-bold leading-[1.05] tracking-tight mb-7"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-foreground/90">
              We Build Websites That
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl gradient-text-animate mt-1.5">
              Grow Your Business 🚀
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="text-base sm:text-lg font-body max-w-xl mx-auto mb-10 leading-relaxed text-muted-foreground"
          >
            We build exceptional digital experiences that drive growth and
            convert visitors into clients.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              data-ocid="hero.primary_button"
              className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-body font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                boxShadow:
                  "0 0 30px rgba(124,58,237,0.45), 0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>

            <Link
              to="/contact"
              data-ocid="hero.secondary_button"
              className="btn-gradient-outline inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-body font-semibold text-sm"
            >
              Get Consultation
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-12 flex items-center justify-center gap-6 flex-wrap"
          >
            {["120+ Projects", "50+ Clients", "100% Satisfaction"].map((s) => (
              <span
                key={s}
                className="flex items-center gap-2 text-xs font-body text-muted-foreground"
              >
                <Zap className="w-3 h-3" style={{ color: "#7c3aed" }} />
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-body tracking-[0.3em] uppercase text-muted-foreground/50">
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(124,58,237,0.6), transparent)",
              animation: "floatSlow 2s ease-in-out infinite",
            }}
          />
        </motion.div>
      </section>

      {/* ══════════════════ SERVICES OVERVIEW ══════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="services.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <SectionHeader
            label="What We Do"
            title={
              <>
                Expert Solutions,{" "}
                <span className="gradient-text">Exceptional Results</span>
              </>
            }
            subtitle="End-to-end digital capabilities to launch, scale, and evolve your online presence."
          />

          <div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                visible={servicesVisible[i]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ HOW WE WORK ══════════════════ */}
      <section
        className="py-24 lg:py-32 section-alt relative overflow-hidden"
        data-ocid="process.section"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <SectionHeader
            label="Our Process"
            title={
              <>
                How We <span className="gradient-text">Work</span>
              </>
            }
            subtitle="A proven 4-step process that turns your vision into a live, high-performing digital product."
          />

          {/* Steps grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Connecting line — desktop only */}
            <div
              className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(124,58,237,0.4), rgba(59,130,246,0.4), rgba(124,58,237,0.4))",
              }}
            />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.65,
                  ease: "easeOut",
                }}
                data-ocid={`process.step.${i + 1}`}
                className="group relative glass-card rounded-2xl p-7 flex flex-col items-center text-center gap-4"
              >
                {/* Step number circle */}
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-xl text-white z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color} 0%, #3b82f6 100%)`,
                    boxShadow: `0 0 24px ${step.color}55`,
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${step.color}1a`,
                    border: `1px solid ${step.color}33`,
                  }}
                >
                  <step.icon
                    className="w-4.5 h-4.5"
                    style={{ color: step.color }}
                  />
                </div>

                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PORTFOLIO PREVIEW ══════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="portfolio.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <SectionHeader
            label="Our Work"
            title={
              <>
                Portfolio <span className="gradient-text">Highlights</span>
              </>
            }
            subtitle="A curated showcase of projects that reflect our design excellence and technical depth."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {portfolioItems.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <Link
              to="/portfolio"
              data-ocid="portfolio.view_all_button"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#a78bfa",
              }}
            >
              See All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section
        className="py-24 lg:py-32 section-alt"
        data-ocid="testimonials.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <SectionHeader
            label="What Clients Say"
            title={
              <>
                Trusted by{" "}
                <span className="gradient-text">Ambitious Brands</span>
              </>
            }
            subtitle="Don't take our word for it — hear from the businesses we've transformed."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                data-ocid={`testimonials.item.${i + 1}`}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 relative"
              >
                {/* Quote icon */}
                <Quote
                  className="w-7 h-7 opacity-20 flex-shrink-0"
                  style={{ color: "#7c3aed" }}
                />

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].slice(0, t.rating).map((s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5 fill-current"
                      style={{ color: "#fbbf24" }}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm font-body text-foreground/80 leading-relaxed flex-1 italic accent-serif">
                  "{t.quote}"
                </p>

                {/* Client info */}
                <div
                  className="flex items-center gap-3 pt-3"
                  style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                      boxShadow: "0 0 12px rgba(124,58,237,0.35)",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-semibold text-sm text-foreground truncate">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground font-body truncate">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS COUNTERS ══════════════════ */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        data-ocid="stats.section"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.01 240) 0%, oklch(0.13 0.025 280) 50%, oklch(0.10 0.01 240) 100%)",
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(59,130,246,0.5), transparent)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(59,130,246,0.5), transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <SectionHeader
            label="By The Numbers"
            title={
              <>
                Results That{" "}
                <span className="gradient-text">Speak For Themselves</span>
              </>
            }
            subtitle="Trusted by ambitious brands across industries to deliver measurable, lasting impact."
          />

          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(124,58,237,0.18)" }}
          >
            <StatCounter
              target={120}
              suffix="+"
              label="Projects Completed"
              sub="across industries"
              index={0}
            />
            <StatCounter
              target={50}
              suffix="+"
              label="Happy Clients"
              sub="5-star reviews"
              index={1}
            />
            <StatCounter
              target={3}
              suffix="+"
              label="Years Experience"
              sub="in digital design"
              index={2}
            />
            <StatCounter
              target={100}
              suffix="%"
              label="Client Satisfaction"
              sub="average rating"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE US ══════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="why-us.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <SectionHeader
            label="Why Choose Us"
            title={
              <>
                The flowebdesign{" "}
                <span className="gradient-text">Difference</span>
              </>
            }
            subtitle="We don't just build websites. We craft digital experiences engineered to convert and scale."
          />

          <div
            ref={whyUsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {whyUsItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-ocid={`why-us.item.${i + 1}`}
                  className={`group relative glass-card rounded-2xl p-7 flex flex-col gap-4 transition-all duration-700 ${
                    whyUsVisible[i]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 0 1px ${item.accent}44, 0 0 40px ${item.accent}22`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.accent}1a`,
                      border: `1px solid ${item.accent}33`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.accent }} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-base text-foreground mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA SECTION ══════════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="cta.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <div
            ref={ctaRef}
            className={`relative overflow-hidden rounded-3xl p-12 sm:p-20 text-center transition-all duration-700 ${
              ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #4f46e5 40%, #3b82f6 100%)",
              boxShadow:
                "0 0 80px rgba(124,58,237,0.35), 0 40px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Decorative shapes */}
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
              }}
            />
            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase mb-6 text-white/80"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <MessageCircle className="w-3 h-3" />
                  Let's Build Together
                </span>

                <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 tracking-tight leading-tight">
                  Ready to Transform Your
                  <br />
                  Digital Presence?
                </h2>

                <p className="text-white/70 max-w-lg mx-auto font-body text-base mb-10 leading-relaxed">
                  Let's build something extraordinary together. Your vision, our
                  execution — premium results guaranteed.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    data-ocid="cta.start_project_button"
                    className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-body font-bold text-sm text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.35)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    }}
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>

                  <Link
                    to="/portfolio"
                    data-ocid="cta.view_portfolio_button"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body font-semibold text-sm text-white/90 transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    View Portfolio
                  </Link>

                  <a
                    href="https://wa.me/qr/BS4OWTEP5442E1"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="cta.whatsapp_button"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body font-semibold text-sm text-white/90 transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(37,211,102,0.2)",
                      border: "1px solid rgba(37,211,102,0.5)",
                    }}
                  >
                    <SiWhatsapp
                      className="w-4 h-4"
                      style={{ color: "#25d366" }}
                    />
                    WhatsApp Us
                  </a>
                </div>

                {/* Contact shortcuts */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                  <a
                    href="https://instagram.com/flow_web_design"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="cta.instagram_link"
                    className="inline-flex items-center gap-2 text-xs font-body text-white/60 hover:text-white/90 transition-colors duration-200"
                  >
                    <SiInstagram className="w-3.5 h-3.5" />
                    @flow_web_design
                  </a>
                  <span className="hidden sm:block w-px h-4 bg-white/20" />
                  <a
                    href="mailto:yashkacholiya0@gmail.com"
                    data-ocid="cta.email_link"
                    className="text-xs font-body text-white/60 hover:text-white/90 transition-colors duration-200"
                  >
                    yashkacholiya0@gmail.com
                  </a>
                  <span className="hidden sm:block w-px h-4 bg-white/20" />
                  <a
                    href="tel:+918766629441"
                    data-ocid="cta.phone_link"
                    className="text-xs font-body text-white/60 hover:text-white/90 transition-colors duration-200"
                  >
                    +91 87666 29441
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
