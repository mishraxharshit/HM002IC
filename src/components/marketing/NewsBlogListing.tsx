"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { news, type NewsItem } from '@/lib/data/news';

const CATS = ['All', 'Research', 'Field Report', 'Case Study', 'Technical Paper', 'Policy'];

const CAT_COLOR: Record<string, string> = {
  'Research':        '#0038a8',
  'Field Report':    '#2a6e45',
  'Case Study':      '#6b2fa0',
  'Technical Paper': '#b8954a',
  'Policy':          '#c0392b',
};

function Badge({ cat }: { cat: string }) {
  const c = CAT_COLOR[cat] ?? '#6b6b6b';
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em',
      textTransform: 'uppercase', padding: '3px 8px',
      border: `1px solid ${c}33`, background: `${c}0d`, color: c,
      borderRadius: 2, display: 'inline-block',
    }}>{cat}</span>
  );
}

export function NewsBlogListing() {
  const [cat, setCat] = useState('All');

  const featured = news.find(n => n.featured);
  const filtered  = cat === 'All'
    ? news.filter(n => !n.featured)
    : news.filter(n => n.category === cat && !n.featured);

  return (
    <section style={{ padding: '40px 0 60px', background: '#fff' }}>
      <div className="container">

        {/* Featured */}
        {cat === 'All' && featured && (
          <Link href={`/news/${featured.slug}`}>
            <article className="nbl-featured">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#b8954a', color: '#fff', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '3px 10px' }}>
                  Featured
                </span>
                <Badge cat={featured.category}/>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#9b9b9b' }}>
                  {featured.date} · {featured.readTime}
                </span>
              </div>
              <h2 className="nbl-feat-title">{featured.title}</h2>
              <p className="nbl-feat-excerpt">{featured.excerpt}</p>
              <span style={{ fontSize: 13, color: '#b8954a', fontWeight: 500 }}>Read dispatch →</span>
            </article>
          </Link>
        )}

        {/* Filter pills */}
        <div className="nbl-filters">
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cat === c ? 'nbl-pill nbl-pill-active' : 'nbl-pill'}
            >{c}</button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p style={{ padding: '48px 0', textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9b9b9b' }}>
            No articles in this category yet.
          </p>
        ) : (
          <div className="nbl-grid">
            {filtered.map(item => (
              <Link key={item.id} href={`/news/${item.slug}`}>
                <article className="nbl-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                    <Badge cat={item.category}/>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#e0e0e0' }}>/{item.id}</span>
                  </div>
                  <h3 className="nbl-card-title">{item.title}</h3>
                  <p className="nbl-card-excerpt">{item.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid #f0f0f0', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c8c8c8' }}>
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
