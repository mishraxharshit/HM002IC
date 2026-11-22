"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';

export function CTASection() {
  const { t, tr } = useTranslation();
  return (
    <>
      <section className="cta reveal">
        <div className="container-narrow">
          <span className="eyebrow" style={{ textAlign:'center', display:'block' }}>{t(tr.cta.eyebrow)}</span>
          <div className="cta__btns">
            <Link href="/marketing/contact" className="btn-dark">{t(tr.cta.primary)}</Link>
            <Link href="/marketing/capabilities" className="link-arrow">{t(tr.cta.secondary)} →</Link>
          </div>
        </div>
      </section>
      <style jsx>{`
        .cta { padding: 64px 0; background: #fff; border-top: 1px solid #e8e8e8; text-align: center; }
        .cta__btns { display:flex; align-items:center; justify-content:center; gap:20px; margin-top:28px; flex-wrap:wrap; }
        @media (min-width: 768px) { .cta { padding: 96px 0; } }
      `}</style>
    </>
  );
}

export function Footer() {
  const { t, tr } = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="container">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
                <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
              </svg>
              <span>Fractalysium</span>
            </div>
            <p className="footer__tagline">{t(tr.footer.tagline)}</p>
            <p className="footer__eu">
              <span style={{ color:'#b8954a' }}>★★★★★★★★★★★★</span>{' '}
              Souveraineté UE · Copernicus · RGPD
            </p>
          </div>

          {/* Links grid */}
          <div className="footer__grid">
            <div className="footer__col">
              <h4 className="footer__col-h">Plateforme</h4>
              <ul>
                <li><Link href="/marketing/capabilities">Capacités</Link></li>
                <li><Link href="/marketing/technology">Technologie</Link></li>
                <li><Link href="/marketing/security">Sécurité</Link></li>
                <li><Link href="/marketing/news">Recherche</Link></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-h">Entreprise</h4>
              <ul>
                <li><Link href="/marketing/about">À propos</Link></li>
                <li><Link href="/marketing/about#careers">Carrières</Link></li>
                <li><Link href="/marketing/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-h">Mentions légales</h4>
              <ul>
                <li><Link href="#">{t(tr.footer.privacy)}</Link></li>
                <li><Link href="#">{t(tr.footer.terms)}</Link></li>
                <li><Link href="/marketing/security">Règlement européen sur l'IA</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer__bottom">
            <p className="footer__copy">{t(tr.footer.copy)}</p>
            <div className="footer__status">
              <span className="live-dot"/>
              <span>Tous les flux Sentinel sont nominaux</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer { background: #fff; border-top: 1px solid #e8e8e8; padding: 40px 0 24px; }
        .footer__brand { margin-bottom: 32px; }
        .footer__logo { display:flex; align-items:center; gap:8px; font-size:14px; font-weight:600; color:#1a1a1a; letter-spacing:-0.01em; margin-bottom:10px; }
        .footer__tagline { font-size:13px; color:#6b6b6b; line-height:1.6; max-width:320px; margin-bottom:8px; }
        .footer__eu { font-family:var(--mono,monospace); font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:#9b9b9b; }
        .footer__grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; padding-bottom:28px; border-bottom:1px solid #e8e8e8; margin-bottom:20px; }
        .footer__col-h { font-family:var(--mono,monospace); font-size:9px; letter-spacing:0.18em; text-transform:uppercase; color:#9b9b9b; margin-bottom:12px; }
        .footer__col ul { list-style:none; display:flex; flex-direction:column; gap:8px; }
        .footer__col a { font-size:13px; color:#6b6b6b; transition:color 0.2s; }
        .footer__col a:hover { color:#1a1a1a; }
        .footer__bottom { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; }
        .footer__copy { font-size:11px; color:#9b9b9b; }
        .footer__status { display:flex; align-items:center; gap:6px; font-family:var(--mono,monospace); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:#2a6e45; }
        @media (min-width: 768px) {
          .footer { padding: 56px 0 28px; }
          .footer__brand { margin-bottom: 40px; }
          .footer__grid { grid-template-columns: repeat(3,1fr); gap:40px; }
          .footer__eu { font-size: 10px; }
        }
      `}</style>
    </>
  );
}
