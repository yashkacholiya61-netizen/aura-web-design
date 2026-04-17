import { createActor } from "@/backend";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Send,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

/* ── Types ──────────────────────────────────────────────────────── */
interface TeamContact {
  name: string;
  role: string;
  phone: string;
  tel: string;
  waLink: string;
  initial: string;
}

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

/* ── Static Data ─────────────────────────────────────────────────── */
const teamContacts: TeamContact[] = [
  {
    name: "Yash Kacholiya",
    role: "Co-Founder & Lead Developer",
    phone: "+91 8766629441",
    tel: "+918766629441",
    waLink: "https://wa.me/918766629441",
    initial: "Y",
  },
  {
    name: "Vedant Baheti",
    role: "Co-Founder & Design Lead",
    phone: "+91 7020131020",
    tel: "+917020131020",
    waLink: "https://wa.me/917020131020",
    initial: "V",
  },
];

const projectTypes = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack",
  "Other",
];

const whyCards = [
  {
    icon: Zap,
    title: "Fast Response",
    desc: "We reply to every enquiry within 24 hours, no matter the size of the project.",
  },
  {
    icon: Star,
    title: "Custom Solutions",
    desc: "Every project is built from scratch — no templates, no shortcuts.",
  },
  {
    icon: Shield,
    title: "Proven Results",
    desc: "Trusted by clients across India for delivering real, measurable outcomes.",
  },
];

/* ── Focus-aware input style helper ─────────────────────────────── */
function inputStyle(
  focused: string,
  field: string,
  hasError: boolean,
): React.CSSProperties {
  return {
    background:
      focused === field ? "rgba(124,58,237,0.07)" : "rgba(255,255,255,0.04)",
    border: hasError
      ? "1px solid rgba(239,68,68,0.55)"
      : focused === field
        ? "1px solid rgba(124,58,237,0.55)"
        : "1px solid rgba(255,255,255,0.10)",
    boxShadow:
      focused === field
        ? "0 0 0 3px rgba(124,58,237,0.10), 0 0 24px rgba(124,58,237,0.12)"
        : "none",
  };
}

/* ── Glassmorphism panel helper ───────────────────────────────────── */
const glassPanelStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(28px) saturate(1.8)",
  WebkitBackdropFilter: "blur(28px) saturate(1.8)",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow:
    "0 24px 80px -10px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.08)",
};

/* ── Component ───────────────────────────────────────────────────── */
export default function Contact() {
  const { actor, isFetching } = useActor(createActor);

  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [focused, setFocused] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { ref: heroRef, isVisible: heroVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const { ref: colRef, isVisible: colVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const { ref: whyRef, isVisible: whyVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  /* ── Validation ─────────────────────────────────────────────── */
  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      errs.message = "Message is required.";
    } else if (form.message.trim().length < 20) {
      errs.message = "Please write at least 20 characters.";
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    setErrorMessage("");

    try {
      if (!actor || isFetching) {
        throw new Error("Backend not ready. Please try again shortly.");
      }
      const result = await actor.submitContact(
        form.name,
        form.email,
        form.projectType || "Other",
        form.message,
      );
      if (result.__kind__ === "ok") {
        setStatus("success");
      } else {
        setErrorMessage(result.err || "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", projectType: "", message: "" });
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  };

  /* ── Render ──────────────────────────────────────────────────── */
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[52vh] flex items-center overflow-hidden"
        data-ocid="contact.page"
      >
        {/* Ambient glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 60% at 60% 0%, rgba(124,58,237,0.14) 0%, transparent 65%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 50% 40% at 20% 80%, rgba(59,130,246,0.10) 0%, transparent 60%)",
            }}
          />
        </div>

        <div
          ref={heroRef}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-28 lg:py-36"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(124,58,237,0.10)",
              border: "1px solid rgba(124,58,237,0.28)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: "#a78bfa" }} />
            <span
              className="text-xs font-body font-semibold tracking-[0.3em] uppercase"
              style={{ color: "#a78bfa" }}
            >
              Let's Work Together
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
            className="font-display leading-tight mb-5"
          >
            <span className="block text-4xl sm:text-6xl lg:text-7xl font-light text-foreground tracking-tight">
              Get In
            </span>
            <span
              className="block text-5xl sm:text-7xl lg:text-8xl font-bold gradient-text"
              style={{ lineHeight: 1.08 }}
            >
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
          >
            Tell us about your project and let's build something amazing
            together.
          </motion.p>

          {/* Gradient divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={heroVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="gradient-divider mx-auto mt-10"
            style={{ width: 120 }}
          />
        </div>
      </section>

      {/* ── TWO-COLUMN MAIN ───────────────────────────────────────── */}
      <section className="pb-20 lg:pb-28" data-ocid="contact.section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={colRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 max-w-6xl mx-auto"
          >
            {/* ── LEFT: Contact Form ────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={colVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-3xl overflow-hidden"
              style={glassPanelStyle}
              data-ocid="contact.form_panel"
            >
              {/* Purple top accent */}
              <div
                className="h-[2px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(124,58,237,0.7), rgba(59,130,246,0.7), transparent)",
                }}
              />

              <div className="p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      className="flex flex-col items-center justify-center text-center gap-5 py-16"
                      data-ocid="contact.success_state"
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(34,197,94,0.12)",
                          border: "1px solid rgba(34,197,94,0.40)",
                          boxShadow: "0 0 40px rgba(34,197,94,0.20)",
                        }}
                      >
                        <CheckCircle
                          className="w-9 h-9"
                          style={{ color: "#22c55e" }}
                        />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                          Thanks for reaching out! We'll get back to you within
                          24 hours.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="btn-gradient-outline px-7 py-3 rounded-full text-sm font-body font-semibold"
                        data-ocid="contact.send_another_button"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                      data-ocid="contact.form"
                      className="space-y-5"
                    >
                      <div className="mb-6">
                        <h2 className="font-display font-semibold text-2xl text-foreground mb-1.5">
                          Send a Message
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          Tell us about your project — we'd love to learn more.
                        </p>
                      </div>

                      {/* Error banner */}
                      {status === "error" && (
                        <div
                          className="flex items-center gap-3 p-4 rounded-xl text-sm"
                          style={{
                            background: "rgba(239,68,68,0.10)",
                            border: "1px solid rgba(239,68,68,0.30)",
                          }}
                          data-ocid="contact.error_state"
                        >
                          <span style={{ color: "#f87171" }}>
                            {errorMessage ||
                              "Something went wrong. Please try again."}
                          </span>
                        </div>
                      )}

                      {/* Full Name */}
                      <Field
                        label="Full Name"
                        required
                        error={errors.name}
                        htmlFor="contact-name"
                      >
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused("")}
                          placeholder="e.g. Rahul Sharma"
                          data-ocid="contact.name_input"
                          className="w-full px-4 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground text-sm font-body transition-smooth focus:outline-none"
                          style={inputStyle(focused, "name", !!errors.name)}
                        />
                      </Field>

                      {/* Email */}
                      <Field
                        label="Email Address"
                        required
                        error={errors.email}
                        htmlFor="contact-email"
                      >
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused("")}
                          placeholder="you@example.com"
                          data-ocid="contact.email_input"
                          className="w-full px-4 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground text-sm font-body transition-smooth focus:outline-none"
                          style={inputStyle(focused, "email", !!errors.email)}
                        />
                      </Field>

                      {/* Project Type */}
                      <Field
                        label="Project Type"
                        error={errors.projectType}
                        htmlFor="contact-projectType"
                      >
                        <select
                          id="contact-projectType"
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          onFocus={() => setFocused("projectType")}
                          onBlur={() => setFocused("")}
                          data-ocid="contact.project_type_select"
                          className="w-full px-4 py-3.5 rounded-xl text-foreground text-sm font-body transition-smooth focus:outline-none appearance-none"
                          style={inputStyle(
                            focused,
                            "projectType",
                            !!errors.projectType,
                          )}
                        >
                          <option
                            value=""
                            style={{ background: "var(--background)" }}
                          >
                            Select type
                          </option>
                          {projectTypes.map((t) => (
                            <option
                              key={t}
                              value={t}
                              style={{ background: "var(--background)" }}
                            >
                              {t}
                            </option>
                          ))}
                        </select>
                      </Field>

                      {/* Message */}
                      <Field
                        label="Message"
                        required
                        error={errors.message}
                        htmlFor="contact-message"
                        hint="Min 20 characters"
                      >
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused("")}
                          placeholder="Tell us about your business, goals, and what you're looking to build..."
                          data-ocid="contact.message_textarea"
                          className="w-full px-4 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground text-sm font-body transition-smooth focus:outline-none resize-none"
                          style={inputStyle(
                            focused,
                            "message",
                            !!errors.message,
                          )}
                        />
                      </Field>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === "loading" || isFetching}
                        data-ocid="contact.submit_button"
                        className="w-full relative overflow-hidden py-4 rounded-full font-body font-semibold text-sm tracking-wide transition-smooth flex items-center justify-center gap-2.5 disabled:opacity-70"
                        style={{
                          background:
                            "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                          color: "white",
                          boxShadow:
                            "0 0 32px rgba(124,58,237,0.35), 0 4px 16px rgba(0,0,0,0.4)",
                        }}
                        onMouseEnter={(e) => {
                          if (status !== "loading")
                            (e.currentTarget as HTMLElement).style.boxShadow =
                              "0 0 50px rgba(124,58,237,0.55), 0 8px 24px rgba(0,0,0,0.5)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 0 32px rgba(124,58,237,0.35), 0 4px 16px rgba(0,0,0,0.4)";
                        }}
                      >
                        {status === "loading" ? (
                          <>
                            <span
                              className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                              aria-hidden="true"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ── RIGHT: Contact Info Panel ─────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={colVisible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex flex-col gap-6"
            >
              {/* Get In Touch card */}
              <div
                className="rounded-3xl overflow-hidden flex-1"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(24px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.6)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow:
                    "0 20px 60px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
                data-ocid="contact.info_panel"
              >
                {/* Purple-blue top accent strip */}
                <div
                  className="h-[2px] w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(59,130,246,0.6), transparent)",
                  }}
                />

                <div className="p-8 lg:p-10">
                  <h2 className="font-display font-semibold text-2xl text-foreground mb-1.5">
                    Contact Us Directly
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    We respond to all enquiries within 24 hours. Our team is
                    dedicated to bringing your vision to life.
                  </p>

                  {/* Team contact cards */}
                  <div className="space-y-3 mb-7">
                    {teamContacts.map((c, i) => (
                      <motion.div
                        key={c.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={colVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                        className="flex items-center gap-4 p-4 rounded-2xl glass-card"
                        data-ocid={`contact.team_card.${i + 1}`}
                      >
                        {/* Avatar */}
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-base"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(59,130,246,0.15))",
                            border: "1px solid rgba(124,58,237,0.35)",
                          }}
                        >
                          <span className="gradient-text">{c.initial}</span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="font-display font-semibold text-foreground text-sm truncate">
                            {c.name}
                          </p>
                          <p className="text-muted-foreground text-xs mb-1.5">
                            {c.role}
                          </p>
                          <a
                            href={`tel:${c.tel}`}
                            className="flex items-center gap-1.5 group/tel w-fit"
                            data-ocid={`contact.phone_link.${i + 1}`}
                          >
                            <Phone
                              className="w-3 h-3 flex-shrink-0 transition-smooth group-hover/tel:scale-110"
                              style={{ color: "#a78bfa" }}
                            />
                            <span
                              className="font-body font-medium text-sm transition-smooth group-hover/tel:opacity-80"
                              style={{ color: "#a78bfa" }}
                            >
                              {c.phone}
                            </span>
                          </a>
                        </div>

                        {/* WhatsApp icon */}
                        <a
                          href={c.waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp ${c.name}`}
                          data-ocid={`contact.whatsapp_link.${i + 1}`}
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-smooth hover:scale-110"
                          style={{
                            background: "rgba(37,211,102,0.10)",
                            border: "1px solid rgba(37,211,102,0.28)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              "rgba(37,211,102,0.20)";
                            (e.currentTarget as HTMLElement).style.boxShadow =
                              "0 0 16px rgba(37,211,102,0.25)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              "rgba(37,211,102,0.10)";
                            (e.currentTarget as HTMLElement).style.boxShadow =
                              "none";
                          }}
                        >
                          <SiWhatsapp
                            className="w-4 h-4"
                            style={{ color: "#25D366" }}
                          />
                        </a>
                      </motion.div>
                    ))}
                  </div>

                  <div className="gradient-divider mb-7" />

                  {/* Email */}
                  <a
                    href="mailto:yashkacholiya0@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-card mb-5 group/email"
                    data-ocid="contact.email_link"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(59,130,246,0.12)",
                        border: "1px solid rgba(59,130,246,0.28)",
                      }}
                    >
                      <Mail className="w-4 h-4" style={{ color: "#60a5fa" }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-xs mb-0.5">
                        Email Us
                      </p>
                      <p
                        className="font-body font-medium text-sm truncate transition-smooth group-hover/email:opacity-80"
                        style={{ color: "#60a5fa" }}
                      >
                        yashkacholiya0@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Business hours */}
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <Clock className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                    <div>
                      <span className="text-xs text-muted-foreground">
                        Business Hours ·{" "}
                      </span>
                      <span className="text-xs text-foreground font-medium">
                        Mon–Sat, 10am – 7pm IST
                      </span>
                    </div>
                  </div>

                  {/* Social links */}
                  <div>
                    <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-3">
                      Find Us Online
                    </p>
                    <div className="flex gap-3">
                      <SocialPill
                        href="https://instagram.com/flow_web_design"
                        icon={
                          <SiInstagram
                            className="w-4 h-4"
                            style={{ color: "#E1306C" }}
                          />
                        }
                        label="@flow_web_design"
                        bg="rgba(225,48,108,0.07)"
                        border="rgba(225,48,108,0.22)"
                        hoverBg="rgba(225,48,108,0.14)"
                        hoverBorder="rgba(225,48,108,0.42)"
                        hoverGlow="rgba(225,48,108,0.14)"
                        ocid="contact.instagram_link"
                      />
                      <SocialPill
                        href="https://wa.me/qr/BS4OWTEP5442E1"
                        icon={
                          <SiWhatsapp
                            className="w-4 h-4"
                            style={{ color: "#25D366" }}
                          />
                        }
                        label="WhatsApp"
                        bg="rgba(37,211,102,0.07)"
                        border="rgba(37,211,102,0.22)"
                        hoverBg="rgba(37,211,102,0.14)"
                        hoverBorder="rgba(37,211,102,0.42)"
                        hoverGlow="rgba(37,211,102,0.14)"
                        ocid="contact.whatsapp_group_link"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/qr/BS4OWTEP5442E1"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.chat_whatsapp_button"
                  className="flex items-center justify-center gap-3 py-4 px-5 rounded-2xl font-body font-semibold text-sm transition-smooth"
                  style={{
                    background: "rgba(37,211,102,0.12)",
                    border: "1px solid rgba(37,211,102,0.35)",
                    color: "#25D366",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(37,211,102,0.22)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 28px rgba(37,211,102,0.22)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(37,211,102,0.12)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <SiWhatsapp className="w-5 h-5 flex-shrink-0" />
                  Chat on WhatsApp
                </a>

                <a
                  href="mailto:yashkacholiya0@gmail.com"
                  data-ocid="contact.send_email_button"
                  className="flex items-center justify-center gap-3 py-4 px-5 rounded-2xl font-body font-semibold text-sm transition-smooth btn-gradient"
                  style={{ color: "white" }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  Send an Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section
        className="pb-24 lg:pb-32 section-alt"
        data-ocid="contact.why_section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={whyRef} className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="text-center mb-10 pt-16"
            >
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
                Why <span className="gradient-text">Work With Us</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Trusted by businesses across India for results-driven digital
                experiences.
              </p>
            </motion.div>

            {/* Cards — horizontal scroll on mobile */}
            <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible">
              {whyCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={whyVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: 0.1 + i * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="glass-card rounded-2xl p-6 flex-shrink-0 w-64 lg:w-auto snap-start spotlight-effect"
                  data-ocid={`contact.why_card.${i + 1}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(59,130,246,0.12))",
                      border: "1px solid rgba(124,58,237,0.28)",
                    }}
                  >
                    <card.icon
                      className="w-5 h-5"
                      style={{ color: "#a78bfa" }}
                    />
                  </div>
                  <h3 className="font-display font-semibold text-base text-foreground mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Field wrapper ───────────────────────────────────────────────── */
function Field({
  label,
  required,
  hint,
  error,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={htmlFor}
          className="text-sm font-body font-medium text-foreground"
        >
          {label}{" "}
          {required && (
            <span style={{ color: "#a78bfa" }} aria-hidden="true">
              *
            </span>
          )}
        </label>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      {children}
      {error && (
        <p
          className="text-xs mt-1"
          style={{ color: "#f87171" }}
          data-ocid={`contact.${htmlFor}_field_error`}
        >
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Social pill ─────────────────────────────────────────────────── */
function SocialPill({
  href,
  icon,
  label,
  bg,
  border,
  hoverBg,
  hoverBorder,
  hoverGlow,
  ocid,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  bg: string;
  border: string;
  hoverBg: string;
  hoverBorder: string;
  hoverGlow: string;
  ocid: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={ocid}
      className="flex-1 flex items-center gap-2.5 px-4 py-3 rounded-xl transition-smooth"
      style={{ background: bg, border: `1px solid ${border}` }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = hoverBg;
        el.style.borderColor = hoverBorder;
        el.style.boxShadow = `0 0 20px ${hoverGlow}`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = bg;
        el.style.borderColor = border;
        el.style.boxShadow = "none";
      }}
    >
      {icon}
      <span className="text-sm font-body font-medium text-foreground truncate">
        {label}
      </span>
    </a>
  );
}
