"use client";
import React from 'react';
import Link from 'next/link';

export function CTASection() {
  return (
    <>
      <section className="cta2">
        <div>
          <h2>Contactez-nous</h2>
          <p>Échangez avec nos experts pour découvrir ce que des données d'observation fiables peuvent apporter à votre organisation.</p>
        </div>
        <Link href="/marketing/contact" className="cta2__b">Prenons contact</Link>
      </section>
      <style dangerouslySetInnerHTML={{ __html: `
        .cta2{display:flex;flex-direction:column;gap:24px;padding:72px 20px;background:#f3f4f6}
        .cta2 h2{font-weight:300;font-size:clamp(30px,5vw,52px);letter-spacing:-.02em;margin-bottom:12px}
        .cta2 p{max-width:560px;line-height:1.6;color:#444}
        .cta2__b{align-self:flex-start;background:#0a1628;color:#fff;padding:14px 28px;font-size:15px}
        .cta2__b:hover,.cta2__b:focus-visible{background:#1d3557}
        @media(min-width:768px){.cta2{flex-direction:row;justify-content:space-between;align-items:center;padding:96px 56px}}
      ` }} />
    </>
  );
}

const cols = [
  { h: 'Entreprise', l: [['À propos', '/marketing/about'], ['Carrières', '/marketing/careers'], ['Actualités', '/marketing/newsroom'], ['Recherche', '/marketing/news'], ['Contact', '/marketing/contact']] },
  { h: 'Offre', l: [['Défense et renseignement', '/marketing/defense'], ['Capacités', '/marketing/capabilities'], ['Technologie', '/marketing/technology'], ['Plateforme', '/marketing/platform'], ['Sécurité', '/marketing/security']] },
  { h: 'Partenaires', l: [['Programmes et partenaires', '/#programmes'], ['Copernicus', '/marketing/platform']] },
  // Colonne « Réseaux » masquée tant que les comptes ne sont pas publics.
  // { h: 'Réseaux', l: [['LinkedIn', '#'], ['X', '#'], ['YouTube', '#'], ['Instagram', '#']] },
];

export function Footer() {
  return (
    <>
      <footer className="ft">
        <div className="ft__top">
          <Link href="/" className="ft__logo">Fractalysium</Link>
          <div className="ft__cols">
            {cols.map((c) => (
              <div key={c.h}>
                <h4>{c.h}</h4>
                <ul>{c.l.map(([t, h]) => <li key={t}>{h === '#' ? <span className="ft__soon">{t}<small>Bientôt disponible</small></span> : <Link href={h}>{t}</Link>}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="ft__bot">
          <span>© 2026 Fractalysium. Tous droits réservés.</span>
          <span className="ft__legal">
            <Link href="/marketing/legal/politique-de-confidentialite">Politique de confidentialité</Link>
            <Link href="/marketing/legal/mentions-legales">Mentions légales</Link>
            <Link href="/marketing/legal/reglement-europeen-ia">Règlement européen sur l'IA</Link>
            <Link href="/marketing/legal/cookies">Paramètres des cookies</Link>
          </span>
          <span className="ft__lang" role="img" aria-label="France" title="France">
            <i className="ft__bar ft__bar--blue"/><i className="ft__bar ft__bar--white"/><i className="ft__bar ft__bar--red"/>
          </span>
        </div>
      </footer>
      <style dangerouslySetInnerHTML={{ __html: `
        .ft{background:#0a1628;color:#fff;padding:64px 20px 28px}
        .ft__top{display:grid;gap:40px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,.18)}
        .ft__logo{font-size:26px;font-weight:300;letter-spacing:-.01em}
        .ft__cols{display:grid;grid-template-columns:1fr 1fr;gap:32px}
        .ft h4{font-weight:500;font-size:15px;margin-bottom:14px}
        .ft ul{list-style:none;padding:0;display:grid;gap:10px}
        .ft li a{color:rgba(255,255,255,.7);font-size:14px}
        .ft li a:hover,.ft li a:focus-visible{color:#fff;text-decoration:underline}
        .ft__soon{display:flex;align-items:center;gap:10px;flex-wrap:wrap;color:rgba(255,255,255,.55);font-size:14px;cursor:default}
        .ft__soon small{font-size:11px;letter-spacing:.02em;border:1px solid rgba(255,255,255,.3);padding:2px 8px;border-radius:999px;color:rgba(255,255,255,.7)}
        .ft__bot{display:flex;flex-direction:column;gap:14px;padding-top:24px;font-size:13px;color:rgba(255,255,255,.6)}
        .ft__legal{display:flex;flex-wrap:wrap;gap:8px 20px}
        .ft__legal a:hover{color:#fff}
        .ft__lang{display:inline-flex;align-items:center;gap:6px}
        .ft__bar{display:block;width:30px;height:3px;border-radius:2px}
        .ft__bar--blue{background:#2f4f9e}
        .ft__bar--white{background:#fff}
        .ft__bar--red{background:#c8403a}
        @media(min-width:900px){.ft{padding:80px 56px 32px}.ft__top{grid-template-columns:1fr 3fr}.ft__cols{grid-template-columns:repeat(3,1fr)}.ft__bot{flex-direction:row;justify-content:space-between;align-items:center}}
      ` }} />
    </>
  );
}
