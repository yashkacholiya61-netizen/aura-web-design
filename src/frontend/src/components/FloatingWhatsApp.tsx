import { SiWhatsapp } from "react-icons/si";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/qr/BS4OWTEP5442E1"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-7 right-7 z-50 flex items-center justify-center w-14 h-14 rounded-full transition-premium hover:scale-110 active:scale-95 group"
      style={{
        background: "linear-gradient(145deg, #25D366 0%, #128C7E 100%)",
        boxShadow:
          "0 6px 24px rgba(37, 211, 102, 0.40), 0 0 0 1px rgba(37, 211, 102, 0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      {/* Pulse ring 1 */}
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring pointer-events-none"
        style={{ background: "rgba(37, 211, 102, 0.35)" }}
        aria-hidden="true"
      />
      {/* Pulse ring 2 — offset */}
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring pointer-events-none"
        style={{
          background: "rgba(37, 211, 102, 0.18)",
          animationDelay: "0.8s",
        }}
        aria-hidden="true"
      />
      {/* Icon */}
      <SiWhatsapp className="relative z-10 w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" />
    </a>
  );
}
