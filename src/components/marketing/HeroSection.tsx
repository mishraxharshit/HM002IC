"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LazyVideo } from './LazyVideo';

export function HeroSection() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(`${String(n.getUTCHours()).padStart(2,'0')}:${String(n.getUTCMinutes()).padStart(2,'0')}:${String(n.getUTCSeconds()).padStart(2,'0')} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <LazyVideo eager src="/assets/videos/intervention.mp4" poster="/assets/images/posters/intervention.jpg"
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
          <div className="hero-veil"/>
        </div>

        <div className="hero-content">
          <p className="eyebrow eyebrow--light">Intelligence planétaire cognitive</p>
          <h1 className="hero-h1">
            Voir la Terre.<br/>
            La comprendre.<br/>
            Agir.
          </h1>
          <p className="hero-desc">
            Fractalysium développe des systèmes de renseignement satellitaire pour les agences publiques
            européennes, la sécurité civile et les opérateurs d'infrastructures critiques.
            Fondé sur les données ouvertes Copernicus. Soumis au droit de l'UE.
          </p>
          <div className="hero-btns">
            <Link href="/marketing/contact" className="btn btn-dark">Demander l'accès</Link>
            <Link href="/marketing/capabilities" className="btn btn-outline">Nos capacités</Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          position: relative; height: 100dvh; min-height: 580px;
          overflow: hidden; display: flex; align-items: flex-end;
        }
        .hero-media { position: absolute; inset: 0; }
        .hero-veil {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.08) 100%);
        }
        .hero-content {
          position: relative; z-index: 10;
          padding: 0 20px 68px; width: 100%; max-width: 660px;
        }
        .hero-h1 {
          font-size: clamp(38px, 10vw, 86px);
          font-weight: 300; color: #fff;
          line-height: 1.0; letter-spacing: -0.025em; margin-bottom: 18px;
        }
        .hero-desc {
          font-size: clamp(14px, 3vw, 17px);
          color: rgba(255,255,255,0.78); line-height: 1.65;
          font-weight: 300; max-width: 500px; margin-bottom: 28px;
        }
        .hero-btns { display: flex; gap: 10px; flex-wrap: wrap; }
        .hero-hud {
          position: absolute; bottom: 18px; right: 20px;
          z-index: 10; display: flex; align-items: center; gap: 18px;
        }
        .hud-item {
          font-family: var(--mono); font-size: 10px;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); display: flex; align-items: center;
        }
        .hud-clock { display: none; }
        .hud-alt   { display: none; }
        @media (min-width: 480px) { .hud-clock { display: flex; } }
        @media (min-width: 768px) {
          .hero-content { padding: 0 48px 80px; }
          .hero-hud { right: 48px; bottom: 28px; }
          .hud-alt { display: flex; }
        }
      ` }} />
    </>
  );
}
