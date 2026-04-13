import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";
import { CheckCircle, Mail, Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const contacts = [
  {
    name: "Yash Kacholiya",
    role: "Founder & Lead Designer",
    phone: "+91 87666 29441",
    tel: "+918766629441",
    initial: "Y",
  },
  {
    name: "Vedant Baheti",
    role: "Co-Founder & Developer",
    phone: "+91 70201 31020",
    tel: "+917020131020",
    initial: "V",
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [focused, setFocused] = useState<string | null>(null);

  const { ref: heroRef, isVisible: heroVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const { ref: colRef, isVisible: colVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const { ref: stripRef, isVisible: stripVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email.";
    if (!form.message.trim()) errs.message = "Please enter your message.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const subject = encodeURIComponent(`Website Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:yashkacholiya0@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[55vh] flex items-center overflow-hidden"
        data-ocid="contact-hero"
      >
        {/* Layered atmospheric backgrounds */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 60% at 50% -10%, oklch(0.72 0.15 70 / 0.12) 0%, transparent 65%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 50% 40% at 20% 80%, oklch(0.55 0.10 260 / 0.10) 0%, transparent 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 40% 30% at 80% 90%, oklch(0.72 0.15 70 / 0.06) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Decorative orbiting rings */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        >
          <div
            style={{
              width: 480,
              height: 480,
              borderRadius: "50%",
              border: "1px solid rgba(212,175,55,0.06)",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <div
            style={{
              width: 700,
              height: 700,
              borderRadius: "50%",
              border: "1px solid rgba(212,175,55,0.04)",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </div>

        <div
          ref={heroRef}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-28 lg:py-36"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.20)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs font-body font-semibold tracking-[0.3em] uppercase">
                Let's Work Together
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-display leading-none mb-6"
          >
            <span
              className="block text-5xl sm:text-7xl lg:text-8xl font-thin text-foreground tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Let's
            </span>
            <span
              className="block accent-serif text-6xl sm:text-8xl lg:text-9xl text-primary"
              style={{ lineHeight: 1.05 }}
            >
              Connect
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
          >
            Every great brand starts with a conversation. Tell us your vision —
            we'll turn it into something remarkable.
          </motion.p>

          {/* Gold decorative divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={heroVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="mx-auto mt-10"
            style={{
              width: 120,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── MAIN TWO-COLUMN ──────────────────────────────────── */}
      <section className="pb-24 lg:pb-32" data-ocid="contact-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={colRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 max-w-6xl mx-auto transition-all duration-700 ${
              colVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* ── LEFT: Contact Info Panel ──────────────────── */}
            <div className="flex flex-col gap-6">
              {/* Main info card with gold left border */}
              <div
                className="relative rounded-3xl overflow-hidden flex-1"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(24px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.6)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow:
                    "0 20px 60px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                {/* Gold accent strip - left border */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-0.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(212,175,55,0.7), rgba(212,175,55,0.9), rgba(212,175,55,0.7), transparent)",
                  }}
                />

                {/* Inner glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.05), transparent)",
                  }}
                />

                <div className="p-8 lg:p-10 relative">
                  <div className="mb-8">
                    <h2 className="font-display font-semibold text-2xl text-foreground mb-2">
                      Get In Touch
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We respond to all enquiries within 24 hours. Our team is
                      dedicated to bringing your vision to life.
                    </p>
                  </div>

                  {/* Team member cards */}
                  <div className="space-y-4 mb-8">
                    {contacts.map((c, i) => (
                      <motion.a
                        key={c.name}
                        href={`tel:${c.tel}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={colVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                        className="group flex items-center gap-4 p-4 rounded-2xl transition-smooth"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                        data-ocid={`contact-person-${c.name.split(" ")[0].toLowerCase()}`}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(212,175,55,0.06)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(212,175,55,0.25)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 0 20px rgba(212,175,55,0.10)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(255,255,255,0.04)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(255,255,255,0.08)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "none";
                        }}
                      >
                        {/* Avatar with gold ring */}
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))",
                            border: "1px solid rgba(212,175,55,0.30)",
                            color: "oklch(0.72 0.15 70)",
                            boxShadow: "0 0 12px rgba(212,175,55,0.15)",
                          }}
                        >
                          {c.initial}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-display font-semibold text-foreground text-sm truncate">
                            {c.name}
                          </p>
                          <p className="text-muted-foreground text-xs mb-1">
                            {c.role}
                          </p>
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-primary font-body font-medium text-sm">
                              {c.phone}
                            </span>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Thin gold divider */}
                  <div className="gold-divider mb-8" />

                  {/* Email */}
                  <motion.a
                    href="mailto:yashkacholiya0@gmail.com"
                    initial={{ opacity: 0, y: 10 }}
                    animate={colVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="flex items-center gap-4 p-4 rounded-2xl mb-6 transition-smooth group"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    data-ocid="contact-email"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(212,175,55,0.06)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(212,175,55,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.04)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.08)";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(212,175,55,0.10)",
                        border: "1px solid rgba(212,175,55,0.25)",
                      }}
                    >
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-xs mb-0.5">
                        Email Us
                      </p>
                      <p className="text-primary font-body font-medium text-sm truncate">
                        yashkacholiya0@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  {/* Social section */}
                  <div>
                    <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-3">
                      Find Us Online
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="https://wa.me/qr/BS4OWTEP5442E1"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid="contact-whatsapp"
                        className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-smooth group"
                        style={{
                          background: "rgba(37,211,102,0.06)",
                          border: "1px solid rgba(37,211,102,0.20)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(37,211,102,0.12)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(37,211,102,0.40)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 0 20px rgba(37,211,102,0.12)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(37,211,102,0.06)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(37,211,102,0.20)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "none";
                        }}
                      >
                        <SiWhatsapp
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: "#25D366" }}
                        />
                        <span className="text-sm font-body font-medium text-foreground">
                          WhatsApp
                        </span>
                      </a>

                      <a
                        href="https://instagram.com/aura_web_design"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid="contact-instagram"
                        className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-smooth group"
                        style={{
                          background: "rgba(225,48,108,0.06)",
                          border: "1px solid rgba(225,48,108,0.20)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(225,48,108,0.12)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(225,48,108,0.40)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 0 20px rgba(225,48,108,0.12)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(225,48,108,0.06)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(225,48,108,0.20)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "none";
                        }}
                      >
                        <SiInstagram
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: "#E1306C" }}
                        />
                        <span className="text-sm font-body font-medium text-foreground">
                          Instagram
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Contact Form ───────────────────────── */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(28px) saturate(1.8)",
                WebkitBackdropFilter: "blur(28px) saturate(1.8)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow:
                  "0 24px 80px -10px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
            >
              {/* Subtle corner glow */}
              <div
                className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.06), transparent 70%)",
                  transform: "translate(30%, 30%)",
                }}
              />

              <div className="p-8 lg:p-10 relative">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    className="flex flex-col items-center justify-center text-center gap-6 py-16"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(212,175,55,0.10)",
                        border: "1px solid rgba(212,175,55,0.35)",
                        boxShadow: "0 0 40px rgba(212,175,55,0.20)",
                      }}
                    >
                      <CheckCircle className="w-9 h-9 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                        Your email client should open shortly. We'll get back to
                        you within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", message: "" });
                      }}
                      className="btn-gold-outline px-6 py-2.5 rounded-full text-sm font-body font-semibold"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    data-ocid="contact-form"
                    noValidate
                  >
                    <div className="mb-8">
                      <h2 className="font-display font-semibold text-2xl text-foreground mb-1.5">
                        Send a Message
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Tell us about your project — we'd love to learn more.
                      </p>
                    </div>

                    {/* Name field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-body font-medium text-foreground"
                      >
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          placeholder="e.g. Rahul Sharma"
                          data-ocid="contact-input-name"
                          className="w-full px-4 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground text-sm font-body transition-smooth focus:outline-none resize-none"
                          style={{
                            background:
                              focused === "name"
                                ? "rgba(212,175,55,0.06)"
                                : "rgba(255,255,255,0.04)",
                            border: errors.name
                              ? "1px solid rgba(239,68,68,0.5)"
                              : focused === "name"
                                ? "1px solid rgba(212,175,55,0.50)"
                                : "1px solid rgba(255,255,255,0.10)",
                            boxShadow:
                              focused === "name"
                                ? "0 0 0 3px rgba(212,175,55,0.08), 0 0 20px rgba(212,175,55,0.10)"
                                : "none",
                          }}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-body font-medium text-foreground"
                      >
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        placeholder="you@example.com"
                        data-ocid="contact-input-email"
                        className="w-full px-4 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground text-sm font-body transition-smooth focus:outline-none"
                        style={{
                          background:
                            focused === "email"
                              ? "rgba(212,175,55,0.06)"
                              : "rgba(255,255,255,0.04)",
                          border: errors.email
                            ? "1px solid rgba(239,68,68,0.5)"
                            : focused === "email"
                              ? "1px solid rgba(212,175,55,0.50)"
                              : "1px solid rgba(255,255,255,0.10)",
                          boxShadow:
                            focused === "email"
                              ? "0 0 0 3px rgba(212,175,55,0.08), 0 0 20px rgba(212,175,55,0.10)"
                              : "none",
                        }}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-sm font-body font-medium text-foreground"
                      >
                        Your Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell us about your business, goals, and what kind of website you're looking for..."
                        data-ocid="contact-input-message"
                        className="w-full px-4 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground text-sm font-body transition-smooth focus:outline-none resize-none"
                        style={{
                          background:
                            focused === "message"
                              ? "rgba(212,175,55,0.06)"
                              : "rgba(255,255,255,0.04)",
                          border: errors.message
                            ? "1px solid rgba(239,68,68,0.5)"
                            : focused === "message"
                              ? "1px solid rgba(212,175,55,0.50)"
                              : "1px solid rgba(255,255,255,0.10)",
                          boxShadow:
                            focused === "message"
                              ? "0 0 0 3px rgba(212,175,55,0.08), 0 0 20px rgba(212,175,55,0.10)"
                              : "none",
                        }}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Your message will be sent to{" "}
                      <span className="text-primary">
                        yashkacholiya0@gmail.com
                      </span>
                    </p>

                    {/* Gold pill submit button */}
                    <button
                      type="submit"
                      data-ocid="contact-submit"
                      className="w-full relative overflow-hidden py-4 rounded-full font-body font-semibold text-sm tracking-wide transition-smooth"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.75 0.16 72), oklch(0.65 0.14 65))",
                        color: "oklch(0.08 0 0)",
                        boxShadow:
                          "0 0 30px rgba(212,175,55,0.30), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 0 50px rgba(212,175,55,0.45), 0 8px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)";
                        (e.currentTarget as HTMLElement).style.transform =
                          "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 0 30px rgba(212,175,55,0.30), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)";
                        (e.currentTarget as HTMLElement).style.transform =
                          "translateY(0)";
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M22 2L11 13" />
                          <path d="M22 2L15 22 11 13 2 9l20-7z" />
                        </svg>
                      </span>
                      {/* Shimmer overlay */}
                      <div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition-smooth pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.20) 50%, transparent 60%)",
                          backgroundSize: "200% 100%",
                        }}
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM MOTIVATIONAL STRIP ────────────────────────── */}
      <section
        ref={stripRef}
        className={`relative py-20 lg:py-24 overflow-hidden transition-all duration-700 ${
          stripVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        data-ocid="contact-strip"
      >
        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(212,175,55,0.03) 50%, transparent)",
          }}
        />
        <div className="gold-divider absolute top-0 left-0 right-0" />
        <div className="gold-divider absolute bottom-0 left-0 right-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p
            className="accent-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
            style={{ opacity: 0.9 }}
          >
            Your next chapter begins with a{" "}
            <span className="text-primary">single message.</span>
          </p>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            From bold startups to established brands — we craft digital
            experiences that inspire and convert.
          </p>
        </div>
      </section>
    </>
  );
}
