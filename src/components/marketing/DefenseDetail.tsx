"use client";
import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CTASection, Footer } from './SiteFooter';
import { sujets, groupes, type Sujet } from '@/lib/data/defense';

export function DefenseDetail({ s }: { s: Sujet }) {
  const autres = sujets.filter((x) => x.groupe === s.groupe && x.slug !== s.slug).slice(0, 3);
  return (
    <main>
      <Navigation />
      <header className="dd-h" style={{ backgroundImage: `url(/assets/images/${s.image})` }}>
        <div>
          <Link href="/marketing/defense" className="dd-back">Défense et renseignement · {groupes[s.groupe].titre}</Link>
          <h1>{s.titre}</h1><p>{s.accroche}</p>
        </div>
      </header>
      <section className="dd-b">
        <div>{s.corps.map((p, i) => <p key={i}>{p}</p>)}</div>
        <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </section>
      <section className="dd-o">
        <h2>Dans la même catégorie</h2>
        <div>{autres.map((x) => <Link key={x.slug} href={`/marketing/defense/${x.slug}`}><h3>{x.titre}</h3><p>{x.accroche}</p></Link>)}</div>
        <Link href="/marketing/defense" className="dd-all">Voir toute l'offre défense et renseignement</Link>
      </section>
      <CTASection />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .dd-h{min-height:65vh;display:flex;align-items:flex-end;padding:120px 20px 52px;color:#fff;background-size:cover;background-position:center;position:relative;isolation:isolate}
        .dd-h::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.2));z-index:-1}
        .dd-back{font-size:14px;color:rgba(255,255,255,.8);border-bottom:1px solid rgba(255,255,255,.5)}
        .dd-h h1{font-weight:300;font-size:clamp(34px,6.5vw,72px);line-height:1.04;letter-spacing:-.025em;margin:18px 0 14px;max-width:880px}
        .dd-h p{max-width:600px;line-height:1.6;color:rgba(255,255,255,.88)}
        .dd-b{display:grid;gap:36px;padding:64px 20px;max-width:1200px;margin:0 auto}
        .dd-b p{font-size:18px;line-height:1.7;color:#333;margin-bottom:18px;max-width:640px}
        .dd-b ul{list-style:none;padding:0;border-top:1px solid #d6d8dc;align-self:start}
        .dd-b li{padding:18px 0;border-bottom:1px solid #d6d8dc}
        .dd-o{padding:56px 20px 72px;background:#f3f4f6}
        .dd-o>*{max-width:1200px;margin-left:auto;margin-right:auto}
        .dd-o h2{font-weight:300;font-size:clamp(26px,4vw,40px);margin-bottom:24px}
        .dd-o div{display:grid;gap:12px;margin-bottom:28px}
        .dd-o div a{background:#fff;padding:24px;display:block}
        .dd-o h3{font-weight:500;font-size:19px;margin-bottom:8px}.dd-o p{font-size:15px;line-height:1.5;color:#555}
        .dd-o div a:hover,.dd-o div a:focus-visible{outline:2px solid #0a1628}
        .dd-all{border-bottom:1px solid currentColor;padding-bottom:2px;font-size:15px;display:inline-block}
        @media(min-width:900px){.dd-h{padding:140px 56px 64px}.dd-b{grid-template-columns:1.4fr 1fr;padding:96px 56px;gap:72px}.dd-o{padding:80px 56px}.dd-o div{grid-template-columns:repeat(3,1fr)}}
      ` }} />
    </main>
  );
}
