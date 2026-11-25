"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CTASection, Footer } from './SiteFooter';
import { actus, onglets } from '@/lib/data/actualites';

export function NewsroomFR() {
  const [t, setT] = useState<string>('tout');
  const liste = actus.filter((a) => t === 'tout' || a.type === t);
  return (
    <main>
      <Navigation />
      <section className="nr">
        <h1>Actualités</h1>
        <div className="nr-t" role="tablist" aria-label="Filtrer par type">
          {onglets.map((o) => (
            <button key={o.id} role="tab" aria-selected={t === o.id} className={t === o.id ? 'on' : ''} onClick={() => setT(o.id)}>{o.label}</button>
          ))}
        </div>
        <div className="nr-g">
          {liste.map((a) => (
            <Link key={a.slug} href={a.lien || `/newsroom/${a.slug}`} className="nr-c">
              <div className="nr-i" style={{ backgroundImage: `url(/assets/images/${a.image})` }} />
              <span>{a.tag} • {a.date}{a.duree ? ` • ${a.duree}` : ''}{a.source ? ` • ${a.source}` : ''}</span>
              <h2>{a.titre}</h2>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .nr{padding:130px 12px 72px;max-width:1280px;margin:0 auto}
        .nr h1{font-weight:300;font-size:clamp(38px,7vw,72px);letter-spacing:-.025em;margin:0 8px 28px}
        .nr-t{display:flex;gap:8px;flex-wrap:wrap;margin:0 8px 36px}
        .nr-t button{border:1px solid #c9ccd1;background:#fff;padding:9px 18px;font:inherit;font-size:14px;cursor:pointer}
        .nr-t button:hover,.nr-t button:focus-visible{border-color:#0a1628}
        .nr-t .on{background:#0a1628;color:#fff;border-color:#0a1628}
        .nr-g{display:grid;gap:32px 12px}
        .nr-i{aspect-ratio:3/2;background-size:cover;background-position:center;margin-bottom:14px}
        .nr-c span{font-size:13px;color:#777}
        .nr-c h2{font-weight:400;font-size:21px;line-height:1.3;margin-top:8px}
        .nr-c:hover h2,.nr-c:focus-visible h2{text-decoration:underline}
        @media(min-width:768px){.nr{padding:150px 56px 96px}.nr-g{grid-template-columns:repeat(3,1fr)}}
      ` }} />
    </main>
  );
}
