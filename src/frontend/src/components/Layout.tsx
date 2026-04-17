import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

/** Custom cursor — gradient ring that follows the mouse on desktop only.
 *  - pointer-events/user-select/touch-action: none on ALL cursor elements prevents any scroll or event interference.
 *  - Visibility tracked via ref to avoid re-registering event listeners on every visibility change.
 *  - cancelAnimationFrame called on unmount to prevent dangling RAF callbacks.
 */
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Use a ref for the "visible" state used inside the event handler
  // so the effect never needs to re-run (and re-register listeners) when visibility changes.
  const visibleRef = useRef(false);
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // Only activate on fine-pointer (mouse/trackpad) devices, not touch
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      // Skip scheduling a new frame if one is already pending
      if (raf.current !== null) return;
      raf.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
        }
        raf.current = null;
      });
    };

    const leave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const enter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    // passive: true ensures scroll events are never blocked by this listener
    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave, { passive: true });
    document.addEventListener("mouseenter", enter, { passive: true });

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      // Cancel any pending animation frame to prevent dangling callbacks
      if (raf.current !== null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };
  }, []); // Empty dep array — listeners registered once, visibility tracked via ref

  const sharedCursorStyle = {
    pointerEvents: "none" as const,
    userSelect: "none" as const,
    touchAction: "none" as const,
    position: "fixed" as const,
    top: 0,
    left: 0,
    zIndex: 9999,
    transition: "opacity 0.2s ease",
    willChange: "transform",
  };

  return (
    <>
      {/* Outer gradient ring */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          ...sharedCursorStyle,
          opacity: visible ? 1 : 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid transparent",
          background:
            "linear-gradient(oklch(0.08 0.01 240), oklch(0.08 0.01 240)) padding-box, linear-gradient(135deg, #7C3AED, #3B82F6) border-box",
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...sharedCursorStyle,
          opacity: visible ? 1 : 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
        }}
      />
    </>
  );
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
