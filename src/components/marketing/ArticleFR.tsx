"use client";
import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CTASection, Footer } from './SiteFooter';
import { articles, type Article } from '@/lib/data/articles';

export function ArticleFR({ a }: { a: Article }) {
  const autres = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  return (
    <main>
      <Navigation />
      <header className="ar-h" style={{ backgroundImage: `url(/assets/images/${a.image})` }}>
        <div><span>{a.categorie} • {a.date} • {a.lecture} de lecture</span><h1>{a.titre}</h1></div>
      </header>
      <article className="ar-b">
        <p className="ar-lead">{a.resume}</p>
        {a.corps.map((p, i) => p.startsWith('## ') ? <h2 key={i}>{p.slice(3)}</h2> : <p key={i}>{p}</p>)}
        <p className="ar-sig">Équipe de recherche Fractalysium</p>
      </article>
      <section className="ar-m">
        <h2>À lire aussi</h2>
        {autres.map((x) => <Link key={x.slug} href={`/marketing/news/${x.slug}`}><span>{x.categorie} • {x.date}</span><h3>{x.titre}</h3></Link>)}
        <Link href="/marketing/news" className="ar-all">Tous les articles</Link>
      </section>
      <CTASection />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .ar-h{min-height:60vh;display:flex;align-items:flex-end;padding:120px 20px 48px;color:#fff;background-size:cover;background-position:center;position:relative;isolation:isolate}
        .ar-h::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.78),rgba(0,0,0,.15));z-index:-1}
        .ar-h span{font-size:13px;color:rgba(255,255,255,.8)}
        .ar-h h1{font-weight:300;font-size:clamp(30px,5.5vw,60px);line-height:1.08;letter-spacing:-.02em;max-width:900px;margin-top:12px}
        .ar-b{max-width:720px;margin:0 auto;padding:56px 20px}
        .ar-b p{font-size:18px;line-height:1.75;color:#333;margin-bottom:20px}
        .ar-lead{font-size:21px!important;color:#111!important}
        .ar-b h2{font-weight:400;font-size:26px;margin:36px 0 12px}
        .ar-sig{margin-top:40px;font-size:14px!important;color:#777!important}
        .ar-m{max-width:1000px;margin:0 auto;padding:24px 20px 72px}
        .ar-m>h2{font-weight:300;font-size:32px;margin-bottom:20px}
        .ar-m a{display:block;padding:22px 0;border-top:1px solid #ddd}
        .ar-m span{font-size:13px;color:#777}
        .ar-m h3{font-weight:400;font-size:21px;margin-top:6px}
        .ar-m a:hover h3{text-decoration:underline}
        .ar-all{border-bottom:1px solid #ddd;font-size:15px}
        @media(min-width:900px){.ar-h{padding:140px 56px 64px}}
      ` }} />
    </main>
  );
}
