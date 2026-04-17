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

/**
 * useCounterAnimation — animates a number from 0 to `target`
 * when the referenced element scrolls into view.
 */
export function useCounterAnimation(
  target: number,
  duration = 1800,
  options: UseScrollAnimationOptions = {},
) {
  const { threshold = 0.3, rootMargin = "0px" } = options;
  const ref = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, started]);

  useEffect(() => {
    if (!started) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setCount(target);
      return;
    }

    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { ref, count };
}

/**
 * useTiltEffect — 3D card tilt based on mouse position within element.
 * Returns event handlers and a style object.
 */
export function useTiltEffect(maxTilt = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) return;

      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = -y * maxTilt;
      const rotateY = x * maxTilt;
      setTiltStyle({
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      });
    },
    [maxTilt],
  );

  const onMouseLeave = useCallback(() => {
    setTiltStyle({
      transform:
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
      willChange: "transform",
    });
  }, []);

  return { ref, tiltStyle, onMouseMove, onMouseLeave };
}
