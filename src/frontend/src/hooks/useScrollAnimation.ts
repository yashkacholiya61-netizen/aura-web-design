import { useCallback, useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation<T extends Element = HTMLDivElement>(
  options: UseScrollAnimationOptions = {},
) {
  const { threshold = 0.15, rootMargin = "0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

export function useStaggerAnimation<T extends Element = HTMLDivElement>(
  count: number,
  options: UseScrollAnimationOptions = {},
) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;
  const containerRef = useRef<T>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(count).fill(false),
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 80ms stagger — snappier than the old 100ms
          Array.from({ length: count }).forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 80);
          });
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, threshold, rootMargin, once]);

  return { containerRef, visibleItems };
}

/**
 * useParallax — subtle depth scroll effect.
 * Returns a `style` object to spread onto the target element.
 * The element translates on the Y axis proportional to scroll depth.
 *
 * @param speed  Positive = scrolls slower (depth back). Negative = faster (depth forward).
 * @param clamp  Maximum translate distance in px.
 */
export function useParallax(speed = 0.15, clamp = 60) {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      const raw = window.scrollY * speed;
      const clamped = Math.max(-clamp, Math.min(clamp, raw));
      setOffset(clamped);
      rafRef.current = null;
    });
  }, [speed, clamp]);

  useEffect(() => {
    // Respect reduced-motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return {
    style: {
      transform: `translateY(${offset}px)`,
      willChange: "transform",
    } as const,
  };
}

/**
 * useScrollProgress — returns 0–1 scroll progress within an element.
 * Useful for progress bars, counters that animate as the section scrolls into view.
 */
export function useScrollProgress<T extends Element = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = 1 - (rect.top - vh * 0.2) / (rect.height + vh * 0.6);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return { ref, progress };
}
