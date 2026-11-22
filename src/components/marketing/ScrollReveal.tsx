"use client";
import { useEffect, useRef } from 'react';

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach(r => io.observe(r));
    return () => io.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}
