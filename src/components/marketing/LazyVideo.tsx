"use client";
import React, { useEffect, useRef } from 'react';

type Props = {
  src: string;
  poster: string;
  /** Hero video: starts right after the page has loaded instead of waiting for scroll. */
  eager?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Background video that never blocks first paint.
 *  - The poster image shows instantly; the video file is only requested later.
 *  - Below-the-fold videos load when they approach the viewport and pause when off-screen.
 *  - Nothing is downloaded when the visitor prefers reduced motion, has Data Saver on,
 *    or is on a 2G connection — the poster simply stays.
 */
export function LazyVideo({ src, poster, eager = false, className, style }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const conn = (navigator as any).connection;
    const saveData = !!conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType || '');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (saveData || reduced) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      v.src = src;
      v.play().catch(() => {});
    };

    let io: IntersectionObserver | undefined;
    let timer: number | undefined;

    const watch = () => {
      io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) { load(); if (loaded) v.play().catch(() => {}); }
          else if (loaded) v.pause();
        },
        { rootMargin: '200px' }
      );
      io.observe(v);
    };

    if (eager) {
      const start = () => { timer = window.setTimeout(watch, 150); };
      if (document.readyState === 'complete') start();
      else window.addEventListener('load', start, { once: true });
      return () => { window.removeEventListener('load', start); clearTimeout(timer); io?.disconnect(); };
    }
    watch();
    return () => io?.disconnect();
  }, [src, eager]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      className={className}
      style={style}
    />
  );
}
