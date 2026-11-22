"use client";
import React from 'react';
import Link from 'next/link';
import { news, type NewsItem } from '@/lib/data/news';

function renderContent(raw: string) {
  return raw.trim().split(/\n\n+/).map((block, i) => {
    if (block.startsWith('## ')) return <h2 key={i} className="art-h2">{block.replace(/^## /, '')}</h2>;
    const parts = block.split(/\*\*(.+?)\*\*/g);
    return <p key={i} className="art-p">{parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}</p>;
  });
}

const CAT_COLOR: Record<string, string> = {
  'Research':'#0038a8','Field Report':'#2a6e45','Case Study':'#6b2fa0','Technical Paper':'#b8954a','Policy':'#c0392b',
};

export function NewsArticle({ item }: { item: NewsItem }) {
  const idx  = news.findIndex(n => n.slug === item.slug);
  const prev = idx > 0 ? news[idx - 1] : null;
  const next = idx < news.length - 1 ? news[idx + 1] : null;
  const color = CAT_COLOR[item.category] ?? '#b8954a';

  return (
    <>
      <section className="art-hdr">
        <div className="container-narrow">
          <Link href="/marketing/news" className="art-back">← All Dispatches</Link>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10, alignItems:'center', marginBottom:16 }}>
            <span className="art-badge" style={{ borderColor:`${color}33`, background:`${color}0d`, color }}>{item.category}</span>
            <span className="art-date">{item.date} · {item.readTime}</span>
          </div>
          <h1 className="art-h1">{item.title}</h1>
          <p className="art-standfirst" style={{ borderLeftColor: color }}>{item.excerpt}</p>
          <div className="art-author">
            <div className="art-avatar">{item.author.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
            <div>
              <div style={{ fontSize:13, fontWeight:600, color:'#1a1a1a' }}>{item.author}</div>
              <div style={{ fontFamily:'var(--mono)', fontSize:9, letterSpacing:'0.12em', textTransform:'uppercase', color:'#9b9b9b', marginTop:2 }}>{item.authorRole}</div>
            </div>
          </div>
        </div>
      </section>

      <article className="art-body">
        <div className="container-narrow">
          <div className="art-content">{renderContent(item.content)}</div>
          <div className="art-about">
            <div style={{ fontFamily:'var(--mono)', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase', color:'#b8954a', marginBottom:8 }}>About Fractalysium</div>
            <p style={{ fontSize:13, color:'#6b6b6b', lineHeight:1.65 }}>Fractalysium is a European sovereign satellite intelligence company. Built on Copernicus open data. Governed by EU law.</p>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12, marginTop:28 }}>
            <Link href="/marketing/contact" className="btn btn-dark">Request a Briefing</Link>
            <Link href="/marketing/news" style={{ display:'flex', alignItems:'center', fontSize:14, color:'#1a1a1a', borderBottom:'1px solid #e8e8e8', paddingBottom:2 }}>All Dispatches →</Link>
          </div>
        </div>
      </article>

      {(prev || next) && (
        <nav style={{ borderTop:'1px solid #e8e8e8', background:'#f7f7f7' }}>
          <div className="container-narrow">
            <div className="art-nav">
              {prev ? (
                <Link href={`/marketing/news/${prev.slug}`} className="art-nav-item">
                  <span className="art-nav-dir">← Previous</span>
                  <span className="art-nav-title">{prev.title}</span>
                </Link>
              ) : <div/>}
              {next ? (
                <Link href={`/marketing/news/${next.slug}`} className="art-nav-item" style={{ textAlign:'right' }}>
                  <span className="art-nav-dir">Next →</span>
                  <span className="art-nav-title">{next.title}</span>
                </Link>
              ) : <div/>}
            </div>
          </div>
        </nav>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .art-hdr { padding: 100px 0 40px; background:#fff; border-bottom:1px solid #e8e8e8; }
        .art-back { display:inline-flex; align-items:center; font-family:var(--mono); font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:#9b9b9b; margin-bottom:24px; transition:color 0.2s; min-height:36px; }
        .art-back:hover { color:#1a1a1a; }
        .art-badge { font-family:var(--mono); font-size:9px; letter-spacing:0.14em; text-transform:uppercase; padding:3px 10px; border:1px solid; border-radius:2px; }
        .art-date { font-family:var(--mono); font-size:9px; color:#9b9b9b; }
        .art-h1 { font-size:clamp(22px,5vw,40px); font-weight:300; color:#1a1a1a; letter-spacing:-0.025em; line-height:1.15; margin-bottom:18px; }
        .art-standfirst { font-size:clamp(14px,2.5vw,17px); color:#6b6b6b; line-height:1.65; font-weight:300; border-left:3px solid; padding-left:18px; margin-bottom:24px; }
        .art-author { display:flex; align-items:center; gap:12px; padding-top:18px; border-top:1px solid #f0f0f0; }
        .art-avatar { width:40px; height:40px; flex-shrink:0; background:#f7f7f7; border:1px solid #e8e8e8; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:600; color:#9b9b9b; }
        .art-body { padding:48px 0 56px; background:#fff; }
        .art-content { display:flex; flex-direction:column; gap:18px; }
        .art-about { margin-top:40px; padding:20px; background:#fdf9f3; border:1px solid #e8dad4; border-left:3px solid #b8954a; }
        .art-nav { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:#e8e8e8; }
        .art-nav-item { background:#fff; padding:20px; display:flex; flex-direction:column; gap:6px; transition:background 0.2s; }
        .art-nav-item:hover { background:#fafafa; }
        .art-nav-dir { font-family:var(--mono); font-size:9px; letter-spacing:0.1em; text-transform:uppercase; color:#9b9b9b; }
        .art-nav-title { font-size:13px; font-weight:500; color:#1a1a1a; line-height:1.35; }
        @media (min-width:768px) { .art-hdr { padding:130px 0 56px; } .art-body { padding:64px 0 72px; } }
      ` }} />
      <style dangerouslySetInnerHTML={{ __html: `
        .art-h2 { font-size:clamp(18px,3vw,22px); font-weight:500; color:#1a1a1a; margin-top:32px; margin-bottom:8px; line-height:1.3; }
        .art-p { font-size:clamp(15px,2.5vw,16px); color:#3d3d3d; line-height:1.82; }
        .art-p strong { color:#1a1a1a; font-weight:600; }
      ` }} />
    </>
  );
}
