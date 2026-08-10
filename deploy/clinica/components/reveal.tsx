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

    let animationFrame = 0;
    const updateVisibility = () => {
      animationFrame = 0;
      const bounds = element.getBoundingClientRect();
      const topLimit = window.innerHeight * 0.07;
      const bottomLimit = window.innerHeight * 0.93;
      const isVisible = bounds.bottom > topLimit && bounds.top < bottomLimit;

      element.classList.toggle("is-visible", isVisible);
      element.classList.toggle("is-exiting-up", !isVisible && bounds.bottom <= topLimit);
      element.classList.toggle("is-exiting-down", !isVisible && bounds.top >= bottomLimit);
    };
    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateVisibility);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
