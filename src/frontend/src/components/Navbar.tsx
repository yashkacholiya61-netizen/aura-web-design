import type { NavLink } from "@/types";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, LayoutDashboard, LogIn, LogOut, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const prevPath = useRef(currentPath);
  const navigate = useNavigate();

  const { loginStatus, login, clear } = useInternetIdentity();
  const isAuthenticated = loginStatus === "success";

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogout = () => {
    clear();
    navigate({ to: "/" });
    setMenuOpen(false);
  };

  const handleLogin = () => {
    login();
    setMenuOpen(false);
  };

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
              <div
                className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden transition-premium group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(59,130,246,0.12) 100%)",
                  border: "1px solid rgba(124,58,237,0.4)",
                  boxShadow:
                    "0 0 16px rgba(124,58,237,0.18), inset 0 1px 0 rgba(124,58,237,0.25)",
                }}
              >
                <span
                  className="font-display font-bold text-base leading-none tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  F
                </span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(124,58,237,0.2) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                  }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-[15px] tracking-[0.15em] uppercase">
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
                <span className="accent-serif text-[11px] tracking-wider leading-none mt-0.5 gradient-text-subtle">
                  Digital Agency
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
                      className={`relative px-3 py-2 text-[11px] font-body font-light tracking-[0.18em] uppercase nav-link-underline transition-smooth rounded-md ${
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
              {isAuthenticated && (
                <li>
                  <Link
                    to="/dashboard"
                    data-ocid="nav-link-dashboard"
                    className={`relative px-3 py-2 text-[11px] font-body font-light tracking-[0.18em] uppercase nav-link-underline transition-smooth rounded-md flex items-center gap-1.5 ${
                      currentPath === "/dashboard"
                        ? "text-primary active"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <LayoutDashboard className="w-3 h-3" />
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>

            {/* ── CTA + Auth + Mobile Toggle ─────────────────── */}
            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    data-ocid="nav-dashboard-button"
                    className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-body font-medium tracking-[0.12em] uppercase rounded-full transition-smooth"
                    style={{
                      background:
                        "linear-gradient(135deg, #7C3AED22, #3B82F622)",
                      border: "1px solid rgba(124,58,237,0.4)",
                      color: "#a78bfa",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background =
                        "linear-gradient(135deg, #7C3AED44, #3B82F644)";
                      el.style.boxShadow = "0 0 20px rgba(124,58,237,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background =
                        "linear-gradient(135deg, #7C3AED22, #3B82F622)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <LayoutDashboard className="w-3 h-3" />
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    data-ocid="nav-logout-button"
                    onClick={handleLogout}
                    className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-body font-medium tracking-[0.12em] uppercase rounded-full transition-smooth border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
                  >
                    <LogOut className="w-3 h-3" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    data-ocid="nav-login-button"
                    onClick={handleLogin}
                    className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-body font-medium tracking-[0.12em] uppercase rounded-full transition-smooth border border-border/40 text-muted-foreground hover:text-foreground hover:border-purple-500/40"
                  >
                    <LogIn className="w-3 h-3" />
                    Login
                  </button>
                  <Link
                    to="/contact"
                    data-ocid="nav-cta"
                    className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 text-[11px] font-body font-medium tracking-[0.12em] uppercase rounded-full transition-smooth"
                    style={{
                      background:
                        "linear-gradient(135deg, #7C3AED22, #3B82F622)",
                      border: "1px solid rgba(124,58,237,0.4)",
                      color: "#a78bfa",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background =
                        "linear-gradient(135deg, #7C3AED44, #3B82F644)";
                      el.style.boxShadow = "0 0 20px rgba(124,58,237,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background =
                        "linear-gradient(135deg, #7C3AED22, #3B82F622)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    Get a Quote
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </Link>
                </>
              )}
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
        {/* Decorative gradient orb */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #3B82F6 50%, transparent 70%)",
          }}
        />

        {/* Close button */}
        <button
          type="button"
          aria-label="Close menu"
          data-ocid="mobile-nav-close"
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:border-purple-500/40 transition-smooth"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Nav links */}
        <nav className="flex flex-col items-center justify-center h-full gap-1">
          {/* Brand in overlay */}
          <div className="mb-10 flex flex-col items-center">
            <span className="font-display font-bold text-2xl tracking-[0.3em] uppercase">
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
            <span className="accent-serif text-sm mt-1 gradient-text-subtle">
              Digital Agency
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
                  animationDelay: menuOpen ? `${i * 60}ms` : "0ms",
                  animationFillMode: "both",
                }}
                className={`animate-nav-item-in relative px-8 py-3 text-2xl font-display font-light tracking-[0.1em] uppercase transition-smooth ${
                  isActive
                    ? "gradient-text"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #7C3AED, #3B82F6)",
                    }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}

          {isAuthenticated && (
            <Link
              to="/dashboard"
              data-ocid="mobile-nav-dashboard"
              style={{
                animationDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms",
                animationFillMode: "both",
              }}
              className={`animate-nav-item-in relative px-8 py-3 text-2xl font-display font-light tracking-[0.1em] uppercase transition-smooth flex items-center gap-3 ${
                currentPath === "/dashboard"
                  ? "gradient-text"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
          )}

          {isAuthenticated ? (
            <button
              type="button"
              data-ocid="mobile-nav-logout"
              onClick={handleLogout}
              style={{
                animationDelay: menuOpen
                  ? `${(navLinks.length + 1) * 60 + 60}ms`
                  : "0ms",
                animationFillMode: "both",
              }}
              className="animate-nav-item-in mt-8 px-10 py-3 rounded-full text-sm font-body font-medium tracking-[0.14em] uppercase text-muted-foreground border border-border/40 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          ) : (
            <>
              <button
                type="button"
                data-ocid="mobile-nav-login"
                onClick={handleLogin}
                style={{
                  animationDelay: menuOpen
                    ? `${navLinks.length * 60 + 60}ms`
                    : "0ms",
                  animationFillMode: "both",
                  border: "1px solid rgba(124,58,237,0.4)",
                  color: "#a78bfa",
                }}
                className="animate-nav-item-in mt-4 px-10 py-3 rounded-full text-sm font-body font-medium tracking-[0.14em] uppercase flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
              <Link
                to="/contact"
                data-ocid="mobile-nav-cta"
                style={{
                  animationDelay: menuOpen
                    ? `${navLinks.length * 60 + 120}ms`
                    : "0ms",
                  animationFillMode: "both",
                  background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                }}
                className="animate-nav-item-in mt-4 px-10 py-3 rounded-full text-sm font-body font-medium tracking-[0.14em] uppercase text-white"
              >
                Get a Quote
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  );
}
