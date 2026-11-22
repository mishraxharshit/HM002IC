"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LINKS = [
  { label: 'Défense',     href: '/marketing/defense'      },
  { label: 'Capacités',   href: '/marketing/capabilities' },
  { label: 'Technologie', href: '/marketing/technology'   },
  { label: 'Plateforme',  href: '/marketing/platform'     },
  { label: 'Recherche',   href: '/marketing/news'         },
  { label: 'Actualités',  href: '/marketing/newsroom'     },
];

export function Navigation() {
  const [solid, setSolid] = useState(false);
  const [dark,  setDark]  = useState(true);
  const [open,  setOpen]  = useState(false);
  const pathname = usePathname();
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef  = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  // Header style on scroll
  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 56);
      setDark(window.scrollY < 56);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer when switching to desktop width
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 900) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Scroll lock + Escape key + focus management
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
      burgerRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const isDark = dark && !solid;

  return (
    <>
      <header className={['nav-header', solid ? 'nav-solid' : ''].join(' ')}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className={isDark ? 'nav-logo nav-logo--light' : 'nav-logo'}>
            <div className="nav-logo-img-wrap">
              <Image
                src="/assets/icons/logo.png"
                alt="Fractalysium"
                width={32}
                height={32}
                style={{
                  objectFit: 'contain',
                  filter: solid ? 'invert(1)' : 'none',
                  transition: 'filter 0.3s',
                }}
                priority
              />
            </div>
            <span className="nav-logo-text">Fractalysium</span>
          </Link>

          {/* Desktop links */}
          <nav className="nav-links" aria-label="Main navigation">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href}
                className={[
                  'nav-link',
                  isDark ? 'nav-link--light' : '',
                  isActive(l.href) ? 'nav-link--active' : '',
                ].join(' ')}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="nav-right">
            <Link
              href="/marketing/contact"
              className={['nav-cta', isDark ? 'nav-cta--light' : ''].join(' ')}
            >
              <span>Request Access</span>
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <button
              ref={burgerRef}
              onClick={() => setOpen(true)}
              className={isDark ? 'nav-burger nav-burger--light' : 'nav-burger'}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 7h16M3 12h16M3 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/*
        Drawer + backdrop live OUTSIDE <header>.
        The header uses backdrop-filter when solid, which would otherwise
        turn it into the containing block for position:fixed children.
      */}
      <div
        className={['drawer-backdrop', open ? 'is-open' : ''].join(' ')}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer"
        className={['drawer', open ? 'is-open' : ''].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        aria-hidden={!open}
      >
        {/* Top bar */}
        <div className="drawer-top">
          <Link href="/" className="drawer-brand" onClick={() => setOpen(false)}>
            <Image
              src="/assets/icons/logo.png"
              alt=""
              width={28}
              height={28}
              style={{ objectFit: 'contain' }}
            />
            <span>Fractalysium</span>
          </Link>
          <button
            ref={closeRef}
            className="drawer-close"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          >
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="drawer-nav" aria-label="Mobile navigation">
          <span className="drawer-eyebrow">Navigation</span>
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={['drawer-link', isActive(l.href) ? 'is-active' : ''].join(' ')}
              style={{ '--i': i } as React.CSSProperties}
              aria-current={isActive(l.href) ? 'page' : undefined}
              tabIndex={open ? 0 : -1}
            >
              <span className="drawer-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="drawer-label">{l.label}</span>
              <svg className="drawer-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="drawer-foot">
          <Link
            href="/marketing/contact"
            className="drawer-cta"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Request Access
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <p className="drawer-note">Built on Copernicus · Governed by EU law</p>
        </div>
      </aside>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── HEADER ─────────────────────────────────────────── */
        .nav-header { position:fixed;top:0;left:0;right:0;z-index:1100;background:transparent;border-bottom:1px solid transparent;transition:background 0.3s,border-color 0.3s; }
        .nav-solid  { background:rgba(255,255,255,0.97);border-bottom-color:#e8e8e8;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px); }
        .nav-inner  { max-width:1280px;margin:0 auto;padding:0 20px;height:64px;display:flex;align-items:center;justify-content:space-between;gap:16px; }

        .nav-logo { display:flex;align-items:center;gap:10px;font-size:15px;font-weight:600;letter-spacing:-0.01em;color:#1a1a1a;flex-shrink:0;transition:color 0.25s;text-decoration:none; }
        .nav-logo--light { color:rgba(255,255,255,0.95); }
        .nav-logo-img-wrap { width:32px;height:32px;flex-shrink:0;display:flex;align-items:center;justify-content:center; }
        .nav-logo-text { white-space:nowrap; }

        .nav-links { display:none;align-items:center;gap:32px;flex:1;justify-content:center; }
        .nav-link  { font-size:13px;font-weight:400;color:#6b6b6b;transition:color 0.2s;white-space:nowrap;text-decoration:none; }
        .nav-link--light  { color:rgba(255,255,255,0.78); }
        .nav-link--active { color:#1a1a1a; }
        .nav-link--light.nav-link--active { color:#fff; }
        .nav-link:hover   { color:#1a1a1a; }
        .nav-link--light:hover { color:#fff; }

        .nav-right { display:flex;align-items:center;gap:10px;flex-shrink:0; }
        .nav-cta {
          display:inline-flex;align-items:center;gap:8px;
          height:40px;padding:0 16px 0 18px;border-radius:999px;
          font-size:13px;font-weight:500;letter-spacing:0.01em;white-space:nowrap;
          background:#0a1628;color:#fff;border:1px solid #0a1628;
          box-shadow:0 1px 2px rgba(10,22,40,0.18),0 6px 16px -6px rgba(10,22,40,0.45);
          transition:background 0.25s,color 0.25s,border-color 0.25s,box-shadow 0.25s,transform 0.25s;
          -webkit-tap-highlight-color:transparent;
        }
        .nav-cta svg { transition:transform 0.3s var(--ease,ease); }
        .nav-cta:hover { background:#1d3557;border-color:#1d3557;transform:translateY(-1px); }
        .nav-cta:hover svg { transform:translateX(3px); }
        .nav-cta:active { transform:translateY(0) scale(0.98); }
        .nav-cta:focus-visible { outline:2px solid #b8954a;outline-offset:3px; }
        /* over the dark hero: glass pill */
        .nav-cta--light {
          background:rgba(255,255,255,0.12);color:#fff;border-color:rgba(255,255,255,0.38);
          backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:none;
        }
        .nav-cta--light:hover { background:#fff;color:#0a1628;border-color:#fff; }
        @media (max-width:520px) {
          .nav-inner { gap:8px;padding:0 14px; }
          .nav-right { gap:2px; }
          .nav-cta { height:34px;padding:0 13px;font-size:12px; }
          .nav-cta svg { display:none; }
          .nav-logo { gap:8px;font-size:14px; }
          .nav-burger { margin-right:-10px; }
        }
        @media (max-width:359px) { .nav-logo-text { display:none; } }

        .nav-burger { display:flex;align-items:center;justify-content:center;width:44px;height:44px;margin-right:-8px;color:#1a1a1a;cursor:pointer;-webkit-tap-highlight-color:transparent; }
        .nav-burger--light { color:rgba(255,255,255,0.9); }

        /* ── DRAWER ─────────────────────────────────────────── */
        .drawer-backdrop {
          position:fixed;inset:0;z-index:1190;
          background:rgba(5,10,20,0.6);
          backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);
          opacity:0;visibility:hidden;
          transition:opacity 0.35s var(--ease,ease),visibility 0s linear 0.35s;
        }
        .drawer-backdrop.is-open { opacity:1;visibility:visible;transition-delay:0s; }

        .drawer {
          position:fixed;top:0;right:0;bottom:0;z-index:1200;
          width:min(88vw,380px);height:100vh;height:100dvh;
          display:flex;flex-direction:column;
          background:#0a1628;color:#fff;
          border-left:1px solid rgba(255,255,255,0.08);
          box-shadow:-24px 0 60px rgba(0,0,0,0.35);
          transform:translateX(100%);visibility:hidden;
          transition:transform 0.45s var(--ease,cubic-bezier(0.16,1,0.3,1)),visibility 0s linear 0.45s;
          padding-top:env(safe-area-inset-top,0px);
          padding-bottom:env(safe-area-inset-bottom,0px);
          overscroll-behavior:contain;
        }
        .drawer.is-open { transform:translateX(0);visibility:visible;transition-delay:0s; }

        /* subtle gold glow in the corner */
        .drawer::before {
          content:"";position:absolute;top:-120px;right:-120px;width:300px;height:300px;
          background:radial-gradient(circle,rgba(184,149,74,0.22) 0%,transparent 70%);
          pointer-events:none;
        }

        .drawer-top { position:relative;display:flex;align-items:center;justify-content:space-between;height:64px;padding:0 20px;border-bottom:1px solid rgba(255,255,255,0.08);flex-shrink:0; }
        .drawer-brand { display:flex;align-items:center;gap:10px;font-size:15px;font-weight:600;letter-spacing:-0.01em;color:#fff; }
        .drawer-close {
          width:40px;height:40px;margin-right:-6px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.14);
          transition:background 0.2s,border-color 0.2s,transform 0.3s var(--ease,ease);
          -webkit-tap-highlight-color:transparent;
        }
        .drawer-close:hover { background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.3);transform:rotate(90deg); }

        .drawer-nav { position:relative;flex:1;overflow-y:auto;padding:28px 20px 12px;display:flex;flex-direction:column; }
        .drawer-eyebrow { font-family:var(--mono,monospace);font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#b8954a;margin-bottom:10px; }

        .drawer-link {
          display:flex;align-items:center;gap:16px;
          padding:17px 0;
          border-bottom:1px solid rgba(255,255,255,0.07);
          color:rgba(255,255,255,0.88);
          -webkit-tap-highlight-color:transparent;
          opacity:0;transform:translateX(24px);
          transition:color 0.2s,padding-left 0.3s var(--ease,ease);
        }
        .drawer.is-open .drawer-link {
          opacity:1;transform:none;
          transition:opacity 0.5s var(--ease,ease) calc(0.12s + var(--i) * 0.05s),
                     transform 0.5s var(--ease,ease) calc(0.12s + var(--i) * 0.05s),
                     color 0.2s,padding-left 0.3s var(--ease,ease);
        }
        .drawer-num   { font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.08em;color:rgba(255,255,255,0.35);width:20px;flex-shrink:0;transition:color 0.2s; }
        .drawer-label { flex:1;font-size:22px;font-weight:300;letter-spacing:-0.02em; }
        .drawer-arrow { color:#b8954a;opacity:0;transform:translateX(-6px);transition:opacity 0.25s,transform 0.3s var(--ease,ease); }

        .drawer-link:hover,
        .drawer-link:active { color:#fff;padding-left:6px; }
        .drawer-link:hover .drawer-arrow,
        .drawer-link:active .drawer-arrow { opacity:1;transform:none; }
        .drawer-link.is-active { color:#d4ae6a; }
        .drawer-link.is-active .drawer-num   { color:#b8954a; }
        .drawer-link.is-active .drawer-arrow { opacity:1;transform:none; }
        .drawer-link:focus-visible,
        .drawer-close:focus-visible,
        .drawer-cta:focus-visible { outline:2px solid #b8954a;outline-offset:3px; }

        .drawer-foot { position:relative;padding:16px 20px 22px;border-top:1px solid rgba(255,255,255,0.08);flex-shrink:0; }
        .drawer-cta {
          display:flex;align-items:center;justify-content:center;gap:10px;
          min-height:52px;border-radius:4px;
          background:#fff;color:#0a1628;font-size:14px;font-weight:500;
          transition:background 0.2s,gap 0.3s var(--ease,ease);
          -webkit-tap-highlight-color:transparent;
        }
        .drawer-cta:hover,.drawer-cta:active { background:#d4ae6a;gap:14px; }
        .drawer-note { margin-top:14px;text-align:center;font-family:var(--mono,monospace);font-size:10px;letter-spacing:0.1em;color:rgba(255,255,255,0.35); }

        /* ── BREAKPOINTS ───────────────────────────────────── */
        @media (min-width:900px) {
          .nav-inner  { padding:0 48px; }
          .nav-links  { display:flex; }
          .nav-burger { display:none; }
          .drawer,.drawer-backdrop { display:none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .drawer,.drawer-backdrop,.drawer-link,.drawer-close,.drawer-arrow { transition:none !important; }
          .drawer-link { opacity:1;transform:none; }
        }
      ` }} />
    </>
  );
}
