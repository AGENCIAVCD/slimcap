"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const siblings = Array.from(element.parentElement?.children ?? []);
    const position = siblings.indexOf(element);
    element.style.setProperty("--reveal-delay", `${Math.min(Math.max(position, 0) * 55, 220)}ms`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          element.classList.remove("is-exiting-up", "is-exiting-down");
          return;
        }

        element.classList.remove("is-visible");
        const leftAbove = entry.boundingClientRect.top < (entry.rootBounds?.top ?? 0);
        element.classList.toggle("is-exiting-up", leftAbove);
        element.classList.toggle("is-exiting-down", !leftAbove);
      },
      { rootMargin: "-7% 0px -7%", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
