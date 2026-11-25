"use client";
import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CTASection, Footer } from './SiteFooter';
import { articles } from '@/lib/data/articles';

export function RechercheFR() {
  const [une, ...reste] = articles;
  return (
    <main>
      <Navigation />
      <section className="rc">
        <h1>Recherche et blog</h1>
        <Link href={`/news/${une.slug}`} className="rc-une" style={{ backgroundImage: `url(/assets/images/${une.image})` }}>
          <span>{une.categorie} • {une.date} • {une.lecture} de lecture</span>
          <h2>{une.titre}</h2>
        </Link>
        <div className="rc-g">
          {reste.map((a) => (
            <Link key={a.slug} href={`/news/${a.slug}`} className="rc-c">
              <div className="rc-i" style={{ backgroundImage: `url(/assets/images/${a.image})` }} />
              <span>{a.categorie} • {a.date} • {a.lecture} de lecture</span>
              <h3>{a.titre}</h3><p>{a.resume}</p>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .rc{padding:130px 12px 72px;max-width:1280px;margin:0 auto}
        .rc h1{font-weight:300;font-size:clamp(38px,7vw,72px);letter-spacing:-.025em;margin:0 8px 40px}
        .rc-une{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:440px;padding:32px;color:#fff;background-size:cover;background-position:center;isolation:isolate;margin-bottom:12px}
        .rc-une::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.78),rgba(0,0,0,.05));z-index:-1}
        .rc-une span{font-size:13px;color:rgba(255,255,255,.8)}
        .rc-une h2{font-weight:300;font-size:clamp(26px,4.5vw,46px);line-height:1.12;max-width:820px;margin-top:10px}
        .rc-g{display:grid;gap:28px 12px}
        .rc-c span{font-size:13px;color:#777}
        .rc-i{aspect-ratio:3/2;background-size:cover;background-position:center;margin-bottom:14px}
        .rc-c h3{font-weight:400;font-size:21px;line-height:1.3;margin:8px 0}
        .rc-c p{font-size:15px;line-height:1.55;color:#555}
        .rc-c:hover h3,.rc-une:hover h2{text-decoration:underline}
        @media(min-width:768px){.rc{padding:150px 56px 96px}.rc-g{grid-template-columns:repeat(3,1fr)}}
      ` }} />
    </main>
  );
}
