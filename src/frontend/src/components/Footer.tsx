import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "oklch(0.13 0.015 240)" }}
    >
      {/* Decorative ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-40 pointer-events-none opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.72 0.15 70) 0%, transparent 70%)",
        }}
      />

      {/* ── Main footer grid ─────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand column — 5 cols */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl transition-premium group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 100%)",
                  border: "1px solid rgba(212,175,55,0.35)",
                  boxShadow:
                    "0 0 16px rgba(212,175,55,0.12), inset 0 1px 0 rgba(212,175,55,0.2)",
                }}
              >
                <span className="font-display font-bold text-primary text-base">
                  A
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-lg tracking-[0.15em] uppercase">
                  <span className="text-primary">A</span>URA
                </span>
                <span className="accent-serif text-xs text-primary/60 tracking-wider mt-0.5">
                  Web Design
                </span>
              </div>
            </Link>

            {/* Editorial tagline */}
            <p className="accent-serif text-xl text-foreground/50 leading-snug max-w-xs">
              Crafting Digital Excellence
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Premium digital agency crafting bespoke web experiences that
              elevate brands and drive measurable growth for visionary
              businesses.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com/aura_web_design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-lg transition-smooth hover:scale-105 glass premium-border text-muted-foreground hover:text-primary hover:gold-border-subtle"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/qr/BS4OWTEP5442E1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-9 h-9 rounded-lg transition-smooth hover:scale-105 glass premium-border text-muted-foreground hover:text-[#25D366]"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links — 3 cols */}
          <div className="md:col-span-3">
            <h3 className="font-display font-semibold text-[10px] uppercase tracking-[0.25em] text-primary mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 4 cols */}
          <div className="md:col-span-4">
            <h3 className="font-display font-semibold text-[10px] uppercase tracking-[0.25em] text-primary mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918766629441"
                  className="group flex items-start gap-3 transition-smooth"
                >
                  <div className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 glass gold-border-subtle">
                    <Phone className="w-3.5 h-3.5 text-primary/70" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-primary/60 tracking-widest uppercase font-medium mb-0.5">
                      Yash Kacholiya
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                      +91 87666 29441
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917020131020"
                  className="group flex items-start gap-3 transition-smooth"
                >
                  <div className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 glass gold-border-subtle">
                    <Phone className="w-3.5 h-3.5 text-primary/70" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-primary/60 tracking-widest uppercase font-medium mb-0.5">
                      Vedant Baheti
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                      +91 70201 31020
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:yashkacholiya0@gmail.com"
                  className="group flex items-start gap-3 transition-smooth"
                >
                  <div className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 glass gold-border-subtle">
                    <Mail className="w-3.5 h-3.5 text-primary/70" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-primary/60 tracking-widest uppercase font-medium mb-0.5">
                      Email
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth break-all">
                      yashkacholiya0@gmail.com
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/aura_web_design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 transition-smooth"
                >
                  <div className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 glass gold-border-subtle">
                    <SiInstagram className="w-3.5 h-3.5 text-primary/70" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-primary/60 tracking-widest uppercase font-medium mb-0.5">
                      Instagram
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                      @aura_web_design
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="gold-divider mx-auto w-full" />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-muted-foreground/60 tracking-wide">
          © {year} Aura Web Design. All rights reserved.
        </span>
        <span className="text-[11px] text-muted-foreground/60">
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/70 hover:text-primary transition-smooth hover:underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </span>
      </div>
    </footer>
  );
}
