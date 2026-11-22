"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsroomItems, type NewsroomItem } from '@/lib/data/newsroom';

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

function SliderCard({ item }: { item: NewsroomItem }) {
  const c = TYPE_COLOR[item.type] ?? '#9b9b9b';
  return (
    <Link
      href={item.external ? item.href : item.href}
      target={item.external ? '_blank' : '_self'}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className="ns-card"
    >
      {/* Image */}
      <div className="ns-card-img">
        <Image src={item.image} alt={item.title} fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}/>
        <div className="ns-card-veil"/>
        {/* Video play icon */}
        {item.type === 'video' && (
          <div className="ns-play">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
        {/* Duration badge */}
        {item.duration && (
          <span className="ns-duration">{item.duration}</span>
        )}
      </div>
      {/* Content */}
      <div className="ns-card-body">
        <div className="ns-card-meta">
          <span className="ns-type-badge" style={{ color: c, borderColor: `${c}33`, background: `${c}0d` }}>
            {TYPE_LABEL[item.type]}
          </span>
          <span className="ns-date">{item.date}</span>
        </div>
        <h3 className="ns-card-title">{item.title}</h3>
        {item.source && (
          <p className="ns-source">{item.source}</p>
        )}
      </div>
    </Link>
  );
}

export function NewsroomSlider() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  // Auto-scroll
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const t = trackRef.current;
      if (!t) return;
      if (t.scrollLeft + t.clientWidth >= t.scrollWidth - 4) {
        t.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        t.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  // Update arrow state
  const onScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    setCanLeft(t.scrollLeft > 10);
    setCanRight(t.scrollLeft + t.clientWidth < t.scrollWidth - 10);
  };

  const scroll = (dir: 'left' | 'right') => {
    trackRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <>
      <section className="ns-section">
        <div className="container">
          {/* Header */}
          <div className="ns-header">
            <div>
              <span className="eyebrow">Newsroom</span>
              <h2 className="ns-h2">Latest from Fractalysium</h2>
            </div>
            <div className="ns-controls">
              <Link href="/marketing/newsroom" className="ns-view-all">
                View all →
              </Link>
              <button
                className="ns-arrow"
                onClick={() => scroll('left')}
                disabled={!canLeft}
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="ns-arrow"
                onClick={() => scroll('right')}
                disabled={!canRight}
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable track — full width, no container clipping */}
        <div
          className="ns-track"
          ref={trackRef}
          onScroll={onScroll}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 2000)}
        >
          {/* Left padding spacer */}
          <div className="ns-spacer"/>
          {newsroomItems.map(item => (
            <SliderCard key={item.id} item={item}/>
          ))}
          {/* Right padding spacer */}
          <div className="ns-spacer"/>
        </div>

        {/* Category pills */}
        <div className="container">
          <div className="ns-pills">
            {Object.entries(TYPE_LABEL).map(([type, label]) => (
              <Link
                key={type}
                href={`/marketing/newsroom?tab=${type}`}
                className="ns-pill"
              >
                <span className="ns-pill-dot" style={{ background: TYPE_COLOR[type] }}/>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .ns-section {
          background: #fff;
          border-top: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
          padding: 56px 0;
          overflow: hidden;
        }
        /* Header */
        .ns-header {
          display: flex; align-items: flex-end;
          justify-content: space-between; flex-wrap: wrap;
          gap: 16px; margin-bottom: 28px;
        }
        .ns-h2 {
          font-size: clamp(22px, 4vw, 36px);
          font-weight: 300; color: #1a1a1a;
          letter-spacing: -0.02em; line-height: 1.15;
        }
        .ns-controls { display: flex; align-items: center; gap: 10px; }
        .ns-view-all {
          font-size: 13px; font-weight: 500; color: #b8954a;
          border-bottom: 1px solid #e8dad4; padding-bottom: 1px;
          transition: border-color 0.2s;
        }
        .ns-view-all:hover { border-color: #b8954a; }
        .ns-arrow {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid #e8e8e8; background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #1a1a1a; transition: all 0.2s;
          -webkit-tap-highlight-color: transparent;
        }
        .ns-arrow:hover:not(:disabled) { border-color: #1a1a1a; background: #1a1a1a; color: #fff; }
        .ns-arrow:disabled { opacity: 0.3; cursor: not-allowed; }

        /* Scrollable track */
        .ns-track {
          display: flex; gap: 16px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; -webkit-overflow-scrolling: touch;
          padding-bottom: 4px;
        }
        .ns-track::-webkit-scrollbar { display: none; }
        .ns-spacer { flex-shrink: 0; width: 20px; }

        /* Cards */
        .ns-card {
          flex-shrink: 0; width: 280px;
          scroll-snap-align: start;
          display: flex; flex-direction: column;
          border: 1px solid #e8e8e8; border-radius: 4px;
          overflow: hidden; background: #fff;
          transition: box-shadow 0.2s, transform 0.2s;
          text-decoration: none;
          cursor: pointer;
        }
        .ns-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .ns-card-img {
          position: relative; height: 160px;
          overflow: hidden; flex-shrink: 0;
        }
        .ns-card-veil {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.35), transparent 60%);
        }
        .ns-play {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center;
        }
        .ns-duration {
          position: absolute; bottom: 10px; right: 10px;
          font-family: var(--mono); font-size: 9px;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #fff; background: rgba(0,0,0,0.5);
          padding: 3px 7px; border-radius: 2px;
        }
        .ns-card-body { padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 6px; }
        .ns-card-meta { display: flex; align-items: center; gap: 8px; }
        .ns-type-badge {
          font-family: var(--mono); font-size: 8px;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 2px 7px; border: 1px solid; border-radius: 2px;
          flex-shrink: 0;
        }
        .ns-date { font-family: var(--mono); font-size: 9px; color: #9b9b9b; }
        .ns-card-title {
          font-size: 13px; font-weight: 500; color: #1a1a1a;
          line-height: 1.4; flex: 1;
          display: -webkit-box; -webkit-line-clamp: 3;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .ns-source { font-size: 11px; color: #9b9b9b; font-style: italic; }

        /* Category pills */
        .ns-pills {
          display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px;
        }
        .ns-pill {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 14px; border: 1px solid #e8e8e8;
          border-radius: 100px; font-size: 12px; font-weight: 500;
          color: #3d3d3d; transition: all 0.2s; background: #fff;
          -webkit-tap-highlight-color: transparent;
        }
        .ns-pill:hover { border-color: #1a1a1a; color: #1a1a1a; }
        .ns-pill-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

        @media (min-width: 640px) {
          .ns-card { width: 300px; }
          .ns-spacer { width: 32px; }
        }
        @media (min-width: 1024px) {
          .ns-card { width: 320px; }
          .ns-card-img { height: 180px; }
          .ns-spacer { width: 48px; }
          .ns-section { padding: 80px 0; }
        }
      ` }} />
    </>
  );
}
