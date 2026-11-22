"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ── PAGE HEADER ──────────────────────────────────────────────
export function PageHeader({ eyebrow, title, subtitle, image, imageAlt }: {
  eyebrow: string; title: string; subtitle?: string;
  image?: string; imageAlt?: string;
}) {
  return (
    <>
      <section className="phdr">
        {image && (
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image src={image} alt={imageAlt || title} fill quality={80}
              style={{ objectFit: 'cover', objectPosition: 'center 35%' }}/>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)' }}/>
          </div>
        )}
        <div className="container phdr-content">
          <span className={`eyebrow ${image ? 'eyebrow--light' : ''}`}>{eyebrow}</span>
          <h1 className={`phdr-h1 ${image ? 'phdr-light' : ''}`}>{title}</h1>
          {subtitle && <p className={`phdr-sub ${image ? 'phdr-light' : ''}`}>{subtitle}</p>}
        </div>
      </section>
      <style dangerouslySetInnerHTML={{ __html: `
        .phdr { position: relative; overflow: hidden; padding: 108px 0 48px; background: #fff; border-bottom: 1px solid #e8e8e8; }
        .phdr-content { position: relative; z-index: 10; }
        .phdr-h1 { font-size: clamp(28px, 7vw, 66px); font-weight: 300; color: #1a1a1a; letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 14px; max-width: 680px; }
        .phdr-light { color: #fff !important; }
        .phdr-sub { font-size: clamp(14px, 2.5vw, 17px); color: #6b6b6b; line-height: 1.65; max-width: 540px; font-weight: 300; }
        @media (min-width: 768px) { .phdr { padding: 138px 0 72px; } }
      ` }} />
    </>
  );
}

// ── IMAGE FEATURE SECTION ────────────────────────────────────
export function ImageFeatureSection({ image, imageAlt, imagePosition = 'center', eyebrow, title, body, cta, dark = false, reverse = false }: {
  image: string; imageAlt: string; imagePosition?: string;
  eyebrow: string; title: string; body: string;
  cta?: { label: string; href: string };
  dark?: boolean; reverse?: boolean;
}) {
  return (
    <>
      <section className={`ifs section ${dark ? 'ifs-dark' : ''} ${reverse ? 'ifs-rev' : ''} reveal`}>
        <div className="ifs-img">
          <Image src={image} alt={imageAlt} fill quality={80}
            style={{ objectFit: 'cover', objectPosition: imagePosition }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)' }}/>
        </div>
        <div className="ifs-text">
          <div className="ifs-inner">
            <span className="eyebrow" style={{ color: dark ? '#d4ae6a' : '#b8954a' }}>{eyebrow}</span>
            <h2 className="ifs-h2" style={{ color: dark ? '#fff' : '#1a1a1a' }}>{title}</h2>
            <p className="ifs-body" style={{ color: dark ? 'rgba(255,255,255,0.7)' : '#6b6b6b' }}>{body}</p>
            {cta && (
              <Link href={cta.href} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 14, fontWeight: 500, borderBottom: '1px solid',
                paddingBottom: 2, transition: 'gap 0.2s',
                color: dark ? '#fff' : '#1a1a1a',
                borderBottomColor: dark ? 'rgba(255,255,255,0.4)' : '#e8e8e8',
              }}>{cta.label} →</Link>
            )}
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{ __html: `
        .ifs { display: grid; grid-template-columns: 1fr; padding: 0 !important; }
        .ifs-img { position: relative; height: 240px; overflow: hidden; }
        .ifs-text { padding: 36px 20px; background: #fff; }
        .ifs-dark .ifs-text { background: #0a0a0a; }
        .ifs-h2 { font-size: clamp(22px, 5vw, 38px); font-weight: 300; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 14px; }
        .ifs-body { font-size: 15px; line-height: 1.72; margin-bottom: 22px; }
        .ifs-inner { max-width: 480px; }
        @media (min-width: 768px) {
          .ifs { grid-template-columns: 1fr 1fr; min-height: 480px; }
          .ifs-rev .ifs-img { order: 2; }
          .ifs-rev .ifs-text { order: 1; }
          .ifs-img { height: auto; }
          .ifs-text { padding: 72px 56px; display: flex; align-items: center; }
        }
        @media (min-width: 1024px) { .ifs-text { padding: 80px 64px; } }
      ` }} />
    </>
  );
}

// ── CTA SECTION ──────────────────────────────────────────────
export { CTASection, Footer } from './SiteFooter';
export { ScrollReveal } from './ScrollReveal';
