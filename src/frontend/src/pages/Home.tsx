import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Globe,
  MessageCircle,
  Phone,
  Quote,
  Search,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

/* ─── Services data ─────────────────────────────────────────── */

const services = [
  {
    icon: Globe,
    title: "Website Design",
    benefits: [
      "Modern responsive design",
      "Mobile optimized for every screen",
      "Fast & professional look",
    ],
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.28)",
    glowColor: "rgba(124,58,237,0.18)",
    iconColor: "#a78bfa",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Features",
    benefits: [
      "WhatsApp integration",
      "Lead forms that convert",
      "Google visibility",
    ],
    color: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.28)",
    glowColor: "rgba(59,130,246,0.18)",
    iconColor: "#60a5fa",
  },
  {
    icon: Search,
    title: "Speed & SEO",
    benefits: ["Ultra-fast loading", "Basic SEO setup", "Local search ranking"],
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.28)",
    glowColor: "rgba(124,58,237,0.18)",
    iconColor: "#a78bfa",
  },
];

/* ─── Demo mockups ──────────────────────────────────────────── */

const demos = [
  {
    id: 1,
    biz: "EduPeak Academy",
    type: "Coaching Class",
    headline: "Unlock Your Potential",
    sub: "Expert coaching for IIT-JEE, NEET & Board exams in Pune",
    cta: "Enroll Now",
    headerGrad:
      "linear-gradient(135deg, #4c1d95 0%, #7c3aed 60%, #5b21b6 100%)",
    contentBg: "#0d0d1a",
    accentColor: "#a78bfa",
    fakeStat: "500+ students placed",
  },
  {
    id: 2,
    biz: "IronForge Gym",
    type: "Gym & Fitness",
    headline: "Build Your Best Body",
    sub: "Premium gym in Pune with professional trainers & modern equipment",
    cta: "Join Today",
    headerGrad:
      "linear-gradient(135deg, #7f1d1d 0%, #dc2626 60%, #b91c1c 100%)",
    contentBg: "#0d0a0a",
    accentColor: "#f87171",
    fakeStat: "1000+ members strong",
  },
  {
    id: 3,
    biz: "Brews & Bites Cafe",
    type: "Cafe & Restaurant",
    headline: "Your Favourite Spot in Pune",
    sub: "Artisan coffee, fresh bakes & warm vibes in the heart of Pune",
    cta: "Order Online",
    headerGrad:
      "linear-gradient(135deg, #78350f 0%, #d97706 60%, #b45309 100%)",
    contentBg: "#0d0b08",
    accentColor: "#fbbf24",
    fakeStat: "4.9 ★ on Google",
  },
];

/* ─── Testimonials ──────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "Very professional work, helped increase inquiries by 3x. Our coaching admissions went up after the new website launch.",
    name: "Rahul Sharma",
    biz: "FitLife Gym, Pune",
    rating: 5,
  },
  {
    quote:
      "Got more leads after website launch. Best decision for my coaching business. Students can now find us on Google easily.",
    name: "Priya Verma",
    biz: "BrightMinds Coaching, Pune",
    rating: 5,
  },
  {
    quote:
      "Clean and fast website. My cafe customers can now find us on Google Maps and order online. Highly recommended!",
    name: "Amit Joshi",
    biz: "The Chai Corner, Pune",
    rating: 5,
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
      className="text-center mb-14"
    >
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mt-1 mb-4 tracking-tight leading-tight">
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
      className={`group relative glass-card spotlight-card rounded-2xl p-8 flex flex-col gap-5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${service.border}, 0 0 50px ${service.glowColor}`,
        }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{
          background: service.color,
          border: `1px solid ${service.border}`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color: service.iconColor }} />
      </div>
      <div className="flex-1 relative z-10">
        <h3 className="font-display font-bold text-lg text-foreground mb-4 tracking-tight">
          {service.title}
        </h3>
        <ul className="space-y-2.5">
          {service.benefits.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-sm font-body text-foreground/80"
            >
              <CheckCircle2
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: service.iconColor }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Browser mockup ──────────────────────────────────────────── */

function BrowserMockup({
  demo,
  index,
}: { demo: (typeof demos)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.13, duration: 0.65, ease: "easeOut" }}
      className="flex flex-col items-center gap-5"
      data-ocid={`demos.item.${index + 1}`}
    >
      {/* Browser chrome wrapper */}
      <div
        className="w-full max-w-[340px] rounded-xl overflow-hidden"
        style={{
          boxShadow:
            "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)",
        }}
      >
        {/* Browser chrome top bar */}
        <div
          style={{
            background: "#1a1a24",
            padding: "10px 12px 8px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 mb-2">
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#ff5f57",
                display: "inline-block",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#febc2e",
                display: "inline-block",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#28c840",
                display: "inline-block",
              }}
            />
          </div>
          {/* URL bar */}
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 6,
              padding: "4px 10px",
              fontSize: 10,
              color: "rgba(255,255,255,0.4)",
              fontFamily: "var(--font-mono, monospace)",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {demo.biz.toLowerCase().replace(/\s+/g, "")}.com
          </div>
        </div>

        {/* Fake website content */}
        <div style={{ background: demo.contentBg, minHeight: 220 }}>
          {/* Hero area */}
          <div
            style={{
              background: demo.headerGrad,
              padding: "20px 16px 22px",
            }}
          >
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                marginBottom: 6,
                fontFamily: "var(--font-body, sans-serif)",
              }}
            >
              {demo.biz}
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 6,
                fontFamily: "var(--font-display, sans-serif)",
              }}
            >
              {demo.headline}
            </div>
            <div
              style={{
                fontSize: 8.5,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.5,
                marginBottom: 12,
                fontFamily: "var(--font-body, sans-serif)",
              }}
            >
              {demo.sub}
            </div>
            <div
              style={{
                display: "inline-block",
                background: demo.accentColor,
                color: demo.contentBg,
                padding: "5px 14px",
                borderRadius: 100,
                fontSize: 8.5,
                fontWeight: 700,
                fontFamily: "var(--font-body, sans-serif)",
              }}
            >
              {demo.cta} →
            </div>
          </div>

          {/* Fake body rows */}
          <div
            style={{
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: 6,
                padding: "10px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div
                  style={{
                    width: 90,
                    height: 6,
                    borderRadius: 3,
                    background: demo.accentColor,
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    width: 60,
                    height: 5,
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.2)",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: demo.accentColor,
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                }}
              >
                {demo.fakeStat}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 6,
              }}
            >
              {[0, 1].map((k) => (
                <div
                  key={k}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 6,
                    padding: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "70%",
                      height: 5,
                      borderRadius: 3,
                      background: "rgba(255,255,255,0.18)",
                      marginBottom: 4,
                    }}
                  />
                  <div
                    style={{
                      width: "50%",
                      height: 4,
                      borderRadius: 3,
                      background: "rgba(255,255,255,0.08)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Label + CTA below mockup */}
      <div className="text-center">
        <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          {demo.type}
        </p>
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("contact-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          data-ocid={`demos.cta.${index + 1}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-body font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.35)",
            color: "#a78bfa",
          }}
        >
          Get Similar Design
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function Home() {
  const { containerRef: servicesRef, visibleItems: servicesVisible } =
    useStaggerAnimation<HTMLDivElement>(3);

  const { ref: demoRef, isVisible: demoVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.08 });

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        data-ocid="hero.section"
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #050510 0%, #0d0720 40%, #050514 100%)",
          }}
        />
        {/* Purple-blue glow orbs */}
        <div
          className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
            animation: "floatSlow 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-16 right-0 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            animation: "floatSlow 14s ease-in-out 2s infinite",
          }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
            animation: "floatSlow 12s ease-in-out 1s infinite",
          }}
        />
        {/* Floating accent dots */}
        <div
          className="absolute bottom-36 left-10 w-3 h-3 rounded-full pointer-events-none"
          style={{
            background: "rgba(124,58,237,0.7)",
            boxShadow: "0 0 24px 6px rgba(124,58,237,0.3)",
            animation: "floatSlow 6s ease-in-out 0.5s infinite",
          }}
        />
        <div
          className="absolute top-1/3 right-14 w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: "rgba(59,130,246,0.8)",
            boxShadow: "0 0 16px 4px rgba(59,130,246,0.3)",
            animation: "floatSlow 8s ease-in-out 2s infinite",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #05050f)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto">
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
              Web Design for Local Businesses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-display font-bold leading-[1.08] tracking-tight mb-6"
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-foreground/90">
              Get More Customers with
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl gradient-text-animate mt-2">
              High-Converting Websites
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="text-base sm:text-lg font-body max-w-xl mx-auto mb-10 leading-relaxed text-muted-foreground"
          >
            We design fast, modern websites that help local businesses in Pune
            get more inquiries and grow faster.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="hero.primary_button"
              className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-body font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                boxShadow:
                  "0 0 30px rgba(124,58,237,0.45), 0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              Get Free Demo
            </button>
            <a
              href="https://wa.me/qr/BS4OWTEP5442E1"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.whatsapp_button"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.45)",
                color: "#25d366",
              }}
            >
              <SiWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-12 flex items-center justify-center gap-6 flex-wrap"
          >
            {[
              "50+ Local Businesses",
              "100% Client Satisfaction",
              "Fast Delivery",
            ].map((s) => (
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

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="services.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <SectionHeader
            label="What We Offer"
            title={
              <>
                Everything You Need to{" "}
                <span className="gradient-text">Get More Customers</span>
              </>
            }
            subtitle="Simple services built specifically to help local businesses grow online."
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

      {/* ══════════════════ DEMO MOCKUPS ══════════════════ */}
      <section
        className="py-20 lg:py-28 section-alt relative overflow-hidden"
        data-ocid="demos.section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <SectionHeader
            label="Our Work"
            title={
              <>
                See What Your Website{" "}
                <span className="gradient-text">Can Look Like</span>
              </>
            }
            subtitle="Real demo designs built for local Pune businesses — coaching, gyms, and cafes."
          />
          <div
            ref={demoRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center transition-all duration-700 ${
              demoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {demos.map((demo, i) => (
              <BrowserMockup key={demo.id} demo={demo} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FREE DEMO OFFER ══════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="free-demo.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, #4c1d95 0%, #4f46e5 45%, #1d4ed8 100%)",
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

            <div className="relative z-10">
              {/* Badge */}
              <span
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase mb-6 text-white/80"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <Zap className="w-3 h-3" />
                No payment required
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 tracking-tight leading-tight">
                Get a FREE Website Demo
                <br />
                for Your Business
              </h2>

              <p className="text-white/75 max-w-lg mx-auto font-body text-base mb-10 leading-relaxed">
                We'll design a sample homepage for your business so you can see
                how it will look before you pay anything.
              </p>

              <Link
                to="/contact"
                data-ocid="free-demo.cta_button"
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-body font-bold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#fff",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}
              >
                Request Free Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section
        className="py-20 lg:py-28 section-alt"
        data-ocid="testimonials.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <SectionHeader
            label="Client Reviews"
            title={
              <>
                What Local Businesses{" "}
                <span className="gradient-text">Say About Us</span>
              </>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                data-ocid={`testimonials.item.${i + 1}`}
                className="glass-card rounded-2xl p-7 flex flex-col gap-4 relative"
              >
                {/* Large quote mark */}
                <Quote
                  className="w-9 h-9 opacity-15 flex-shrink-0"
                  style={{ color: "#7c3aed" }}
                />
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].slice(0, t.rating).map((n) => (
                    <Star
                      key={n}
                      className="w-3.5 h-3.5 fill-current"
                      style={{ color: "#fbbf24" }}
                    />
                  ))}
                </div>
                {/* Quote text */}
                <p className="text-sm font-body text-foreground/80 leading-relaxed flex-1 italic accent-serif">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
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
                      {t.biz}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CONTACT CTA ══════════════════ */}
      <section
        id="contact-section"
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="contact-cta.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto"
          >
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 tracking-tight leading-tight">
              Let&apos;s Grow Your{" "}
              <span className="gradient-text">Business Online</span>
            </h2>
            <p className="text-muted-foreground font-body text-base mb-10 leading-relaxed">
              Get in touch and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://wa.me/qr/BS4OWTEP5442E1"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact-cta.whatsapp_button"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body font-bold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(37,211,102,0.15)",
                  border: "1px solid rgba(37,211,102,0.5)",
                  color: "#25d366",
                  boxShadow: "0 0 24px rgba(37,211,102,0.18)",
                }}
              >
                <SiWhatsapp className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                data-ocid="contact-cta.form_button"
                className="btn-gradient-outline inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Send a Message
              </Link>
            </div>

            {/* Contact info row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
              <a
                href="tel:+918766629441"
                data-ocid="contact-cta.phone_link"
                className="inline-flex items-center gap-2 text-sm font-body text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                <Phone className="w-4 h-4" style={{ color: "#7c3aed" }} />
                +91 87666 29441
              </a>
              <span className="hidden sm:block w-px h-5 bg-border" />
              <a
                href="https://instagram.com/flow_web_design"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact-cta.instagram_link"
                className="inline-flex items-center gap-2 text-sm font-body text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                <SiInstagram className="w-4 h-4" style={{ color: "#e1306c" }} />
                @flow_web_design
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
