"use client";
import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CTASection, Footer } from './SiteFooter';
import { actus, type Actu } from '@/lib/data/actualites';

export function NewsroomDetail({ a }: { a: Actu }) {
  const autres = actus.filter((x) => x.slug !== a.slug && x.type === a.type).concat(actus.filter((x) => x.type !== a.type)).slice(0, 3);
  return (
    <main>
      <Navigation />
      <header className="nd-h" style={{ backgroundImage: `url(/assets/images/${a.image})` }}>
        <div>
          <Link href="/newsroom" className="nd-back">Actualités</Link>
          <span>{a.tag} • {a.date}{a.duree ? ` • ${a.duree}` : ''}</span>
          <h1>{a.titre}</h1>
        </div>
      </header>
      <article className="nd-b">
        <p className="nd-lead">{a.resume}</p>
        {a.source && <p className="nd-src">Source : {a.source}</p>}
        {a.corps.map((p, i) => p.startsWith('## ') ? <h2 key={i}>{p.slice(3)}</h2> : <p key={i}>{p}</p>)}
        <p className="nd-ct">Contact presse et institutions : <Link href="/contact">nous écrire</Link></p>
      </article>
      <section className="nd-m">
        <h2>À lire aussi</h2>
        {autres.map((x) => <Link key={x.slug} href={x.lien || `/newsroom/${x.slug}`}><span>{x.tag} • {x.date}</span><h3>{x.titre}</h3></Link>)}
        <Link href="/newsroom" className="nd-all">Toutes les actualités</Link>
      </section>
      <CTASection />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .nd-h{min-height:60vh;display:flex;align-items:flex-end;padding:120px 20px 48px;color:#fff;background-size:cover;background-position:center;position:relative;isolation:isolate}
        .nd-h::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.2));z-index:-1}
        .nd-back{display:inline-block;font-size:14px;border-bottom:1px solid rgba(255,255,255,.5);margin-bottom:18px}
        .nd-h span{display:block;font-size:13px;color:rgba(255,255,255,.8)}
        .nd-h h1{font-weight:300;font-size:clamp(28px,5.5vw,58px);line-height:1.08;letter-spacing:-.02em;max-width:900px;margin-top:12px}
        .nd-b{max-width:720px;margin:0 auto;padding:56px 20px}
        .nd-b p{font-size:18px;line-height:1.75;color:#333;margin-bottom:20px}
        .nd-lead{font-size:21px!important;color:#111!important}
        .nd-src{font-size:14px!important;color:#777!important}
        .nd-b h2{font-weight:400;font-size:26px;margin:36px 0 12px}
        .nd-ct{margin-top:40px;font-size:15px!important}.nd-ct a{text-decoration:underline}
        .nd-m{max-width:1000px;margin:0 auto;padding:24px 20px 72px}
        .nd-m>h2{font-weight:300;font-size:32px;margin-bottom:20px}
        .nd-m a{display:block;padding:22px 0;border-top:1px solid #ddd}
        .nd-m span{font-size:13px;color:#777}.nd-m h3{font-weight:400;font-size:21px;margin-top:6px}
        .nd-m a:hover h3{text-decoration:underline}.nd-all{border-bottom:1px solid #ddd;font-size:15px}
        @media(min-width:900px){.nd-h{padding:140px 56px 64px}}
      ` }} />
    </main>
  );
}
