import {
  useCounterAnimation,
  useScrollAnimation,
  useStaggerAnimation,
  useTiltEffect,
} from "@/hooks/useScrollAnimation";
import type { TeamMember } from "@/types/index";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Heart,
  Lightbulb,
  Mail,
  Phone,
  Star,
  Users,
} from "lucide-react";

/* ────────────────────── Data ────────────────────── */

const teamMembers: TeamMember[] = [
  {
    name: "Yash Kacholiya",
    role: "Co-Founder & Lead Developer",
    bio: "Full-stack architect and lead engineer with expertise in modern web technologies, building scalable solutions that power real business growth.",
    avatar: "YK",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "Vedant Baheti",
    role: "Co-Founder & Design Lead",
    bio: "Creative director and UI/UX specialist who crafts stunning user experiences — turning complex ideas into intuitive, beautiful interfaces.",
    avatar: "VB",
    socials: { linkedin: "https://linkedin.com" },
  },
];

const teamContacts: Record<string, { phone: string; email?: string }> = {
  "Yash Kacholiya": {
    phone: "+91 8766629441",
    email: "yashkacholiya0@gmail.com",
  },
  "Vedant Baheti": { phone: "+91 7020131020" },
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve with cutting-edge technologies and forward-thinking design methodologies.",
    accent: "#7c3aed",
  },
  {
    icon: CheckCircle2,
    title: "Trust",
    description:
      "Transparency and honesty in everything we do — your confidence in us is earned, not assumed.",
    accent: "#3b82f6",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We never settle for less than exceptional — every pixel, every line of code is crafted with purpose.",
    accent: "#7c3aed",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your success is our success, always. We measure every decision by the results it drives for you.",
    accent: "#3b82f6",
  },
];

/* ────────────────────── Helpers ────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[10px] font-body font-semibold tracking-[0.35em] uppercase mb-4"
      style={{ color: "oklch(var(--primary))" }}
    >
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

function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.08,
  });
  const transforms: Record<string, string> = {
    up: "translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
  };
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 !translate-x-0 !translate-y-0"
          : `opacity-0 ${transforms[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

function StatCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { ref, count } = useCounterAnimation(target, 1800);
  return (
    <div className="text-center">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="font-display font-bold text-4xl sm:text-5xl stat-number mb-1"
      >
        {count}
        {suffix}
      </div>
      <div className="text-xs font-body text-muted-foreground tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const { ref, tiltStyle, onMouseMove, onMouseLeave } = useTiltEffect(7);
  const gradients = [
    "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
    "linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)",
  ];
  const contact = teamContacts[member.name];

  return (
    <div
      ref={ref}
      style={tiltStyle}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-ocid={`team.item.${index + 1}`}
      className="glass-card rounded-2xl p-8 flex flex-col items-center text-center gap-5 spotlight-effect"
    >
      {/* Avatar */}
      <div
        className="relative w-24 h-24 rounded-full flex items-center justify-center text-2xl font-display font-bold text-white flex-shrink-0"
        style={{
          background: gradients[index % gradients.length],
          boxShadow:
            "0 8px 32px rgba(124,58,237,0.4), 0 0 0 3px rgba(124,58,237,0.2)",
        }}
      >
        {member.avatar}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <h3 className="font-display font-semibold text-lg text-foreground tracking-tight">
          {member.name}
        </h3>
        <p className="text-xs font-body font-medium gradient-text">
          {member.role}
        </p>
      </div>

      <p className="text-sm text-muted-foreground font-body leading-relaxed">
        {member.bio}
      </p>

      {/* Contact */}
      {contact && (
        <div className="flex flex-col gap-2 w-full mt-auto pt-4 border-t border-border/40">
          {contact.phone && (
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              data-ocid={`team.phone.${index + 1}`}
              className="inline-flex items-center justify-center gap-2 text-xs font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" style={{ color: "#7c3aed" }} />
              {contact.phone}
            </a>
          )}
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              data-ocid={`team.email.${index + 1}`}
              className="inline-flex items-center justify-center gap-2 text-xs font-body text-muted-foreground hover:text-foreground transition-colors duration-200 truncate"
            >
              <Mail
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: "#3b82f6" }}
              />
              <span className="truncate">{contact.email}</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[number];
  index: number;
}) {
  const { ref, tiltStyle, onMouseMove, onMouseLeave } = useTiltEffect(8);
  const Icon = value.icon;
  return (
    <div
      ref={ref}
      style={tiltStyle}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-ocid={`value.item.${index + 1}`}
      className="glass-card rounded-2xl p-7 flex flex-col gap-5 group spotlight-effect"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${value.accent}18`,
          border: `1px solid ${value.accent}35`,
          boxShadow: `0 0 16px ${value.accent}15`,
        }}
      >
        <Icon className="w-5 h-5" style={{ color: value.accent }} />
      </div>
      <div>
        <h3 className="font-display font-semibold text-base text-foreground mb-2 tracking-tight">
          {value.title}
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  );
}

/* ────────────────────── Page ────────────────────── */

export default function About() {
  const { containerRef: valuesRef, visibleItems: valuesVisible } =
    useStaggerAnimation<HTMLDivElement>(4, { threshold: 0.08 });
  const { containerRef: teamRef, visibleItems: teamVisible } =
    useStaggerAnimation<HTMLDivElement>(2, { threshold: 0.08 });

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden py-28 lg:py-36"
        data-ocid="about.hero.section"
        style={{ background: "oklch(0.10 0.01 240)" }}
      >
        {/* Ambient glow top */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.14) 0%, transparent 70%)",
          }}
        />
        {/* Decorative ring */}
        <div
          className="absolute top-8 right-8 w-80 h-80 rounded-full pointer-events-none opacity-20"
          style={{
            border: "1px solid rgba(124,58,237,0.25)",
            animation: "floatSlow 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-64 pointer-events-none opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(59,130,246,0.2), transparent 70%)",
          }}
        />
        {/* Subtle grid dots */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <div className="fade-in" style={{ animationDelay: "0ms" }}>
            <SectionLabel>About Us</SectionLabel>
          </div>

          <div className="fade-in" style={{ animationDelay: "120ms" }}>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-7">
              About <span className="gradient-text-animate">flowebdesign</span>
            </h1>
          </div>

          <div className="fade-in" style={{ animationDelay: "240ms" }}>
            <p className="max-w-2xl mx-auto text-base sm:text-lg font-body text-muted-foreground leading-relaxed">
              A team of passionate developers and designers building the future
              of the web — one premium digital experience at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* ══════════════ OUR STORY ══════════════ */}
      <section
        className="py-24 lg:py-32 section-alt"
        data-ocid="about.story.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Text */}
            <AnimatedSection direction="left">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6 tracking-tight leading-tight">
                Built by Developers,{" "}
                <span className="gradient-text">for Businesses</span>
              </h2>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">
                flowebdesign was founded with one mission: to bridge the gap
                between stunning design and powerful functionality. We believe
                every business deserves a world-class digital presence.
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
                What started as passionate freelance work quickly evolved into a
                full-service agency. Today we serve clients across industries,
                delivering premium digital solutions that drive measurable
                results.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Strategy-First",
                  "Pixel-Perfect",
                  "Conversion-Optimised",
                  "Deadline-Driven",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-body font-semibold glass"
                    style={{
                      border: "1px solid rgba(124,58,237,0.25)",
                      color: "oklch(var(--accent-purple))",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Milestone Stats */}
            <AnimatedSection direction="right" delay={100}>
              <div
                className="relative rounded-3xl p-10 lg:p-12"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(59,130,246,0.05) 100%)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(124,58,237,0.06)",
                }}
              >
                {/* Quote accent */}
                <div
                  className="absolute top-4 right-8 font-display text-8xl font-bold pointer-events-none select-none leading-none"
                  style={{ color: "rgba(124,58,237,0.07)" }}
                >
                  "
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <StatCounter target={2021} suffix="" label="Founded" />
                  <StatCounter target={120} suffix="+" label="Projects" />
                  <StatCounter target={50} suffix="+" label="Clients" />
                  <div className="text-center">
                    <div className="font-display font-bold text-4xl sm:text-5xl stat-number mb-1 flex items-center justify-center gap-1">
                      <Globe className="w-8 h-8" style={{ color: "#7c3aed" }} />
                      3
                    </div>
                    <div className="text-xs font-body text-muted-foreground tracking-wide uppercase">
                      Countries Served
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="gradient-divider my-8" />

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
                    }}
                  >
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm font-body text-muted-foreground leading-snug">
                    Growing every year — our north star remains the same: real
                    results for real businesses.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* ══════════════ OUR MISSION ══════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="about.mission.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10 max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground tracking-tight">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div
              className="relative overflow-hidden rounded-3xl p-10 sm:p-14"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(8,8,20,0.9) 60%, rgba(59,130,246,0.07) 100%)",
                border: "1.5px solid transparent",
                backgroundClip: "padding-box",
                boxShadow:
                  "0 0 0 1px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.1), 0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(124,58,237,0.12)",
              }}
            >
              {/* Gradient border glow overlay */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, transparent 50%, rgba(59,130,246,0.08) 100%)",
                }}
              />

              {/* Large decorative quote mark */}
              <div
                className="absolute top-6 left-8 font-accent text-9xl leading-none pointer-events-none select-none"
                style={{ color: "rgba(124,58,237,0.1)", fontStyle: "italic" }}
              >
                "
              </div>

              <div className="relative z-10 text-center">
                <blockquote
                  className="font-accent text-xl sm:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-3xl mx-auto"
                  style={{ fontStyle: "italic", fontWeight: 300 }}
                >
                  Our mission is to empower businesses with premium digital
                  solutions that drive real growth — combining beautiful design,
                  clean code, and strategic thinking.
                </blockquote>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="gold-divider w-16" />
                  <span
                    className="text-xs font-body font-semibold tracking-[0.3em] uppercase"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    flowebdesign
                  </span>
                  <div className="gold-divider w-16" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════ THE TEAM ══════════════ */}
      <section
        className="py-24 lg:py-32 section-alt"
        data-ocid="about.team.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>The People</SectionLabel>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4 tracking-tight">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="max-w-md mx-auto text-muted-foreground font-body text-sm leading-relaxed">
              Two founders obsessed with quality, driven by results, and
              committed to making every client project our best work yet.
            </p>
          </AnimatedSection>

          <div
            ref={teamRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`transition-all duration-700 ease-out ${
                  teamVisible[i]
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <TeamCard member={member} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ OUR VALUES ══════════════ */}
      <section
        className="py-24 lg:py-32"
        style={{ background: "oklch(0.10 0.01 240)" }}
        data-ocid="about.values.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground tracking-tight">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </AnimatedSection>

          <div
            ref={valuesRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`transition-all duration-700 ease-out ${
                  valuesVisible[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <ValueCard value={value} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section
        className="py-24 lg:py-32 section-alt"
        data-ocid="about.cta.section"
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection>
            <div
              className="relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(8,10,18,0.9) 50%, rgba(59,130,246,0.08) 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
                boxShadow:
                  "0 0 60px rgba(124,58,237,0.1), 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(124,58,237,0.15)",
              }}
            >
              {/* Corner accents */}
              <div
                className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(124,58,237,0.15), transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 70%)",
                }}
              />

              <SectionLabel>Let's Build Together</SectionLabel>
              <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mt-2 mb-5 tracking-tight leading-tight">
                Want to work{" "}
                <span className="gradient-text-animate">with us?</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto font-body text-sm mb-10 leading-relaxed">
                Let's turn your vision into a premium digital experience. Tell
                us about your project and we'll create something extraordinary
                together.
              </p>

              <Link
                to="/contact"
                data-ocid="about.cta.primary_button"
                className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-body font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                  boxShadow:
                    "0 0 30px rgba(124,58,237,0.4), 0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
