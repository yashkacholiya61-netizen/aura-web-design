import type { NavLink } from "@/types";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const prevPath = useRef(currentPath);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (prevPath.current !== currentPath) {
      setMenuOpen(false);
      prevPath.current = currentPath;
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        data-ocid="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "glass-nav py-0" : "bg-transparent py-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-[72px]">
            {/* ── Brand mark ─────────────────────────────────── */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              data-ocid="nav-brand"
            >
              {/* Hexagonal logo mark */}
              <div
                className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden transition-premium group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 100%)",
                  border: "1px solid rgba(212,175,55,0.35)",
                  boxShadow:
                    "0 0 16px rgba(212,175,55,0.12), inset 0 1px 0 rgba(212,175,55,0.2)",
                }}
              >
                <span className="font-display font-bold text-primary text-base leading-none tracking-tight">
                  A
                </span>
                {/* Shimmer overlay */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(212,175,55,0.18) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                  }}
                />
              </div>
              {/* Wordmark */}
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-[15px] tracking-[0.15em] uppercase">
                  <span className="text-primary">A</span>URA
                </span>
                <span className="accent-serif text-[11px] text-primary/70 tracking-wider leading-none mt-0.5">
                  Web Design
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ─────────────────────────────────── */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      data-ocid={`nav-link-${link.label.toLowerCase()}`}
                      className={`relative px-4 py-2 text-[11px] font-body font-light tracking-[0.18em] uppercase nav-link-underline transition-smooth rounded-md ${
                        isActive
                          ? "text-primary active"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── CTA + Mobile Toggle ─────────────────────────── */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                data-ocid="nav-cta"
                className="hidden md:inline-flex items-center gap-1.5 px-6 py-2 text-[11px] font-body font-medium tracking-[0.12em] uppercase rounded-full btn-gold-outline transition-smooth"
              >
                Get a Quote
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </Link>
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                data-ocid="nav-hamburger"
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-lg transition-smooth hover:bg-white/5"
              >
                <span
                  className={`block w-5 h-px bg-foreground/70 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                />
                <span
                  className={`block w-5 h-px bg-foreground/70 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                  className={`block w-5 h-px bg-foreground/70 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Fullscreen Mobile Overlay ──────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(5, 5, 8, 0.97)",
          backdropFilter: "blur(24px)",
        }}
        aria-hidden={!menuOpen}
      >
        {/* Decorative gold orb */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.15 70) 0%, transparent 70%)",
          }}
        />

        {/* Close button */}
        <button
          type="button"
          aria-label="Close menu"
          data-ocid="mobile-nav-close"
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-smooth"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Nav links */}
        <nav className="flex flex-col items-center justify-center h-full gap-1">
          {/* Brand in overlay */}
          <div className="mb-10 flex flex-col items-center">
            <span className="font-display font-bold text-2xl tracking-[0.3em] uppercase">
              <span className="text-primary">A</span>URA
            </span>
            <span className="accent-serif text-sm text-primary/60 mt-1">
              Web Design
            </span>
          </div>

          {navLinks.map((link, i) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
                style={{
                  animationDelay: menuOpen ? `${i * 80}ms` : "0ms",
                  animationFillMode: "both",
                }}
                className={`animate-nav-item-in relative px-8 py-3 text-2xl font-display font-light tracking-[0.1em] uppercase transition-smooth ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full" />
                )}
                {link.label}
              </Link>
            );
          })}

          <Link
            to="/contact"
            data-ocid="mobile-nav-cta"
            style={{
              animationDelay: menuOpen ? "320ms" : "0ms",
              animationFillMode: "both",
            }}
            className="animate-nav-item-in mt-8 px-10 py-3 rounded-full text-sm font-body font-medium tracking-[0.14em] uppercase btn-gold-outline"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
