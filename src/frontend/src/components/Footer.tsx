import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const footerServices = [
  { label: "UI/UX Design", href: "/services" },
  { label: "Frontend Development", href: "/services" },
  { label: "Backend Development", href: "/services" },
  { label: "Full-Stack Solutions", href: "/services" },
  { label: "E-commerce Platforms", href: "/services" },
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
      style={{ background: "oklch(0.11 0.015 240)" }}
    >
      {/* Top gradient separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(59,130,246,0.5), transparent)",
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-40 pointer-events-none opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, #7C3AED 0%, #3B82F6 50%, transparent 70%)",
        }}
      />

      {/* ── Main footer grid ─────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand column — 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl transition-premium group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(59,130,246,0.12) 100%)",
                  border: "1px solid rgba(124,58,237,0.4)",
                  boxShadow:
                    "0 0 16px rgba(124,58,237,0.18), inset 0 1px 0 rgba(124,58,237,0.25)",
                }}
              >
                <span
                  className="font-display font-bold text-base"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  F
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-lg tracking-[0.15em] uppercase">
                  <span
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    f
                  </span>
                  lowebdesign
                </span>
                <span className="accent-serif text-xs tracking-wider mt-0.5 gradient-text-subtle">
                  Digital Agency
                </span>
              </div>
            </Link>

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
                href="https://instagram.com/flow_web_design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-ocid="footer-instagram"
                className="flex items-center justify-center w-9 h-9 rounded-lg transition-smooth hover:scale-105 glass premium-border text-muted-foreground hover:text-purple-400"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/qr/BS4OWTEP5442E1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                data-ocid="footer-whatsapp"
                className="flex items-center justify-center w-9 h-9 rounded-lg transition-smooth hover:scale-105 glass premium-border text-muted-foreground hover:text-[#25D366]"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links — 2 cols */}
          <div className="lg:col-span-2">
            <h3
              className="font-display font-semibold text-[10px] uppercase tracking-[0.25em] mb-6"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-4 flex-shrink-0"
                      style={{
                        background: "linear-gradient(90deg, #7C3AED, #3B82F6)",
                      }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 2 cols */}
          <div className="lg:col-span-2">
            <h3
              className="font-display font-semibold text-[10px] uppercase tracking-[0.25em] mb-6"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((svc) => (
                <li key={svc.label}>
                  <Link
                    to={svc.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer-service-${svc.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-4 flex-shrink-0"
                      style={{
                        background: "linear-gradient(90deg, #7C3AED, #3B82F6)",
                      }}
                    />
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <h3
              className="font-display font-semibold text-[10px] uppercase tracking-[0.25em] mb-6"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918766629441"
                  className="group flex items-start gap-3 transition-smooth"
                  data-ocid="footer-contact-yash"
                >
                  <div
                    className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 glass"
                    style={{ border: "1px solid rgba(124,58,237,0.3)" }}
                  >
                    <Phone className="w-3.5 h-3.5 text-purple-400/70" />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-widest uppercase font-medium mb-0.5 gradient-text-subtle">
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
                  data-ocid="footer-contact-vedant"
                >
                  <div
                    className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 glass"
                    style={{ border: "1px solid rgba(124,58,237,0.3)" }}
                  >
                    <Phone className="w-3.5 h-3.5 text-purple-400/70" />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-widest uppercase font-medium mb-0.5 gradient-text-subtle">
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
                  data-ocid="footer-contact-email"
                >
                  <div
                    className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 glass"
                    style={{ border: "1px solid rgba(124,58,237,0.3)" }}
                  >
                    <Mail className="w-3.5 h-3.5 text-purple-400/70" />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-widest uppercase font-medium mb-0.5 gradient-text-subtle">
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
                  href="https://instagram.com/flow_web_design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 transition-smooth"
                  data-ocid="footer-contact-instagram"
                >
                  <div
                    className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 glass"
                    style={{ border: "1px solid rgba(124,58,237,0.3)" }}
                  >
                    <SiInstagram className="w-3.5 h-3.5 text-purple-400/70" />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-widest uppercase font-medium mb-0.5 gradient-text-subtle">
                      Instagram
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                      @flow_web_design
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gradient divider */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.35), rgba(59,130,246,0.35), transparent)",
        }}
      />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-muted-foreground/60 tracking-wide">
          © {year} flowebdesign. All rights reserved.
        </span>
        <span className="text-[11px] text-muted-foreground/60">
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-smooth hover:underline underline-offset-2 gradient-text-subtle"
          >
            caffeine.ai
          </a>
        </span>
      </div>
    </footer>
  );
}
