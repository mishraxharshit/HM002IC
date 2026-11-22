"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsroomItems, TABS, type MediaType, type NewsroomItem } from '@/lib/data/newsroom';

const TYPE_COLOR: Record<string, string> = {
  news:  '#0038a8',
  blog:  '#2a6e45',
  media: '#6b2fa0',
  photo: '#b8954a',
  video: '#c0392b',
};

const TYPE_LABEL: Record<string, string> = {
  news:  'News',
  blog:  'Blog',
  media: 'Press',
  photo: 'Photo',
  video: 'Video',
};

function Badge({ type }: { type: string }) {
  const c = TYPE_COLOR[type] ?? '#9b9b9b';
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em',
      textTransform: 'uppercase', padding: '3px 8px',
      border: `1px solid ${c}33`, background: `${c}0d`, color: c,
      borderRadius: 2, display: 'inline-block', flexShrink: 0,
    }}>
      {TYPE_LABEL[type] ?? type}
    </span>
  );
}

function NewsroomCard({ item }: { item: NewsroomItem }) {
  return (
    <Link
      href={item.href}
      target={item.external ? '_blank' : '_self'}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className="nr-card"
    >
      <div className="nr-card-img">
        <Image src={item.image} alt={item.title} fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}/>
        <div className="nr-card-veil"/>
        {item.type === 'video' && (
          <div className="nr-play">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
        {item.duration && (
          <span className="nr-duration">{item.duration}</span>
        )}
      </div>
      <div className="nr-card-body">
        <div className="nr-card-meta">
          <Badge type={item.type}/>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#9b9b9b' }}>{item.date}</span>
        </div>
        <h3 className="nr-card-title">{item.title}</h3>
        <p className="nr-card-summary">{item.summary}</p>
        {item.source && (
          <p className="nr-source">via {item.source}</p>
        )}
        <span className="nr-card-link">
          {item.type === 'video' ? 'Watch' : item.type === 'photo' ? 'View' : 'Read'} →
        </span>
      </div>
    </Link>
  );
}

// Featured card — larger, for the first item
function FeaturedCard({ item }: { item: NewsroomItem }) {
  return (
    <Link
      href={item.href}
      target={item.external ? '_blank' : '_self'}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className="nr-featured"
    >
      <div className="nr-featured-img">
        <Image src={item.image} alt={item.title} fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }} quality={85}/>
        <div className="nr-featured-veil"/>
        {item.type === 'video' && (
          <div className="nr-play nr-play-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
      </div>
      <div className="nr-featured-body">
        <div className="nr-card-meta">
          <Badge type={item.type}/>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#9b9b9b' }}>{item.date}</span>
        </div>
        <h2 className="nr-featured-title">{item.title}</h2>
        <p className="nr-featured-summary">{item.summary}</p>
        {item.source && <p className="nr-source">via {item.source}</p>}
        <span className="nr-card-link">
          {item.type === 'video' ? 'Watch' : item.type === 'photo' ? 'View' : 'Read'} →
        </span>
      </div>
    </Link>
  );
}

export function NewsroomPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Read ?tab= from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab && TABS.some(t => t.id === tab)) setActiveTab(tab);
  }, []);

  const filtered = activeTab === 'all'
    ? newsroomItems
    : newsroomItems.filter(i => i.type === activeTab);

  const featured = filtered[0];
  const rest     = filtered.slice(1);

  return (
    <>
      {/* Tab bar */}
      <div className="nr-tabs">
        <div className="container">
          <div className="nr-tab-list">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? 'nr-tab nr-tab-active' : 'nr-tab'}
              >
                {tab.label}
                <span className="nr-tab-count">
                  {tab.id === 'all' ? newsroomItems.length : newsroomItems.filter(i => i.type === tab.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="nr-section">
        <div className="container">
          {filtered.length === 0 ? (
            <p className="nr-empty">No content in this category yet.</p>
          ) : (
            <>
              {/* Featured */}
              {featured && <FeaturedCard item={featured}/>}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="nr-grid">
                  {rest.map(item => (
                    <NewsroomCard key={item.id} item={item}/>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        /* TABS */
        .nr-tabs { background: #fff; border-bottom: 1px solid #e8e8e8; position: sticky; top: 64px; z-index: 100; }
        .nr-tab-list { display: flex; gap: 0; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .nr-tab-list::-webkit-scrollbar { display: none; }
        .nr-tab {
          display: flex; align-items: center; gap: 7px;
          padding: 16px 20px; font-size: 13px; font-weight: 400;
          color: #9b9b9b; white-space: nowrap; cursor: pointer;
          border-bottom: 2px solid transparent; transition: all 0.2s;
          -webkit-tap-highlight-color: transparent; flex-shrink: 0;
        }
        .nr-tab:hover { color: #1a1a1a; }
        .nr-tab-active { color: #1a1a1a; border-bottom-color: #1a1a1a; }
        .nr-tab-count {
          font-family: var(--mono); font-size: 9px; letter-spacing: 0.08em;
          background: #f0f0f0; color: #9b9b9b; padding: 2px 6px; border-radius: 10px;
        }
        .nr-tab-active .nr-tab-count { background: #1a1a1a; color: #fff; }

        /* SECTION */
        .nr-section { padding: 40px 0 64px; background: #fff; }
        .nr-empty { padding: 60px 0; text-align: center; font-family: var(--mono); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #9b9b9b; }

        /* FEATURED */
        .nr-featured {
          display: grid; grid-template-columns: 1fr;
          border: 1px solid #e8e8e8; border-left: 3px solid #b8954a;
          margin-bottom: 2px; cursor: pointer; overflow: hidden;
          transition: box-shadow 0.2s; text-decoration: none;
        }
        .nr-featured:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
        .nr-featured-img { position: relative; height: 240px; }
        .nr-featured-veil { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.55), transparent 70%); }
        .nr-featured-body { padding: 28px 24px; display: flex; flex-direction: column; gap: 10px; }
        .nr-featured-title { font-size: clamp(18px, 3.5vw, 28px); font-weight: 300; color: #1a1a1a; letter-spacing: -0.015em; line-height: 1.25; }
        .nr-featured-summary { font-size: 14px; color: #6b6b6b; line-height: 1.65; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

        /* GRID */
        .nr-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: #e8e8e8; border: 1px solid #e8e8e8; margin-top: 2px; }
        .nr-card { background: #fff; display: flex; flex-direction: column; cursor: pointer; transition: background 0.2s; text-decoration: none; }
        .nr-card:hover { background: #fafafa; }
        .nr-card-img { position: relative; height: 180px; overflow: hidden; flex-shrink: 0; }
        .nr-card-veil { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.3), transparent 60%); }
        .nr-card-body { padding: 18px 20px; display: flex; flex-direction: column; gap: 7px; flex: 1; }
        .nr-card-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .nr-card-title { font-size: 14px; font-weight: 500; color: #1a1a1a; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .nr-card-summary { font-size: 12px; color: #9b9b9b; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; flex: 1; }
        .nr-card-link { font-size: 12px; font-weight: 500; color: #b8954a; margin-top: 4px; }
        .nr-source { font-size: 11px; color: #9b9b9b; font-style: italic; }

        /* Shared image helpers */
        .nr-play {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.2); backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center;
        }
        .nr-play-lg { width: 56px; height: 56px; }
        .nr-duration {
          position: absolute; bottom: 10px; right: 10px;
          font-family: var(--mono); font-size: 9px;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #fff; background: rgba(0,0,0,0.55);
          padding: 3px 7px; border-radius: 2px;
        }

        @media (min-width: 640px) {
          .nr-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 768px) {
          .nr-featured { grid-template-columns: 1.2fr 1fr; }
          .nr-featured-img { height: auto; min-height: 320px; }
          .nr-featured-body { padding: 36px 32px; justify-content: center; }
        }
        @media (min-width: 1024px) {
          .nr-grid { grid-template-columns: repeat(3, 1fr); }
          .nr-section { padding: 56px 0 80px; }
        }
      ` }} />
    </>
  );
}
