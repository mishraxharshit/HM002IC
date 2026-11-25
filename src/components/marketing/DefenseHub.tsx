"use client";
import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CTASection, Footer } from './SiteFooter';
import { groupes, sujets } from '@/lib/data/defense';
import { LazyVideo } from './LazyVideo';

export function DefenseHub() {
  return (
    <main>
      <Navigation />
      <header className="dh-h">
        <LazyVideo src="/assets/videos/defense.mp4" poster="/assets/images/posters/defense.jpg" />
        <div>
          <h1>Des décisions plus rapides pour un avenir plus sûr.</h1>
          <p>Une observation continue, par tous les temps, pour les organisations de défense, de renseignement et de sécurité. De l'accès à la demande jusqu'aux systèmes entièrement souverains.</p>
          <Link href="/contact" className="dh-b">Parler à un expert</Link>
        </div>
      </header>

      <nav className="dh-nav" aria-label="Sections">
        {(Object.keys(groupes) as (keyof typeof groupes)[]).map((g) => <a key={g} href={`#${g}`}>{groupes[g].titre}</a>)}
      </nav>

      {(Object.keys(groupes) as (keyof typeof groupes)[]).map((g) => (
        <section key={g} id={g} className="dh-s">
          <div className="dh-top"><h2>{groupes[g].titre}</h2><p>{groupes[g].texte}</p></div>
          <div className={`dh-grid dh-grid--${g}`}>
            {sujets.filter((s) => s.groupe === g).map((s) => (
              <Link key={s.slug} href={`/defense/${s.slug}`} className="dh-c" style={{ backgroundImage: `url(/assets/images/${s.image})` }}>
                <h3>{s.titre}</h3><p>{s.accroche}</p><span>En savoir plus</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <CTASection />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .dh-h{position:relative;min-height:85vh;display:flex;align-items:flex-end;padding:120px 20px 56px;color:#fff;overflow:hidden;isolation:isolate}
        .dh-h video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
        .dh-h::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.2));z-index:-1}
        .dh-h h1{font-weight:300;font-size:clamp(36px,7vw,80px);line-height:1.03;letter-spacing:-.025em;max-width:900px;margin-bottom:20px}
        .dh-h p{max-width:600px;line-height:1.6;color:rgba(255,255,255,.88);margin-bottom:28px}
        .dh-b{display:inline-block;background:#fff;color:#0a1628;padding:14px 28px;font-size:15px}
        .dh-nav{display:flex;gap:24px;flex-wrap:wrap;padding:18px 20px;border-bottom:1px solid #e1e3e7;position:sticky;top:0;background:#fff;z-index:5;font-size:14px}
        .dh-nav a:hover,.dh-nav a:focus-visible{text-decoration:underline}
        .dh-s{padding:72px 12px;scroll-margin-top:56px}
        .dh-top{padding:0 8px 32px;max-width:760px}
        .dh-top h2{font-weight:300;font-size:clamp(30px,5vw,56px);letter-spacing:-.025em;margin-bottom:14px}
        .dh-top p{line-height:1.6;color:#444}
        .dh-grid{display:grid;gap:12px}
        .dh-c{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:360px;padding:26px;color:#fff;background-size:cover;background-position:center;isolation:isolate}
        .dh-c::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.82),rgba(0,0,0,.08) 75%);z-index:-1}
        .dh-c h3{font-weight:400;font-size:24px;margin-bottom:8px}
        .dh-c p{font-size:15px;line-height:1.5;color:rgba(255,255,255,.85);max-width:420px}
        .dh-c span{margin-top:14px;font-size:14px;border-bottom:1px solid #fff;align-self:flex-start;padding-bottom:2px}
        .dh-c:hover,.dh-c:focus-visible{outline:2px solid #fff;outline-offset:-6px}
        @media(min-width:768px){.dh-h{padding:140px 56px 72px}.dh-nav{padding:18px 56px}.dh-s{padding:96px 12px}.dh-grid--missions{grid-template-columns:repeat(2,1fr)}.dh-grid--donnees{grid-template-columns:repeat(3,1fr)}.dh-grid--usages{grid-template-columns:repeat(3,1fr)}}
      ` }} />
    </main>
  );
}
