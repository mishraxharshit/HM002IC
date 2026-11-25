"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { Footer } from './SiteFooter';
import type { PageLegale } from '@/lib/data/legal';

const lien = (t: string) => t.split(/(\[[^\]]+\])/g).map((p, k) => p.startsWith('[') ? <mark key={k}>{p}</mark> : p);

export function LegalPage({ slug, p }: { slug: string; p: PageLegale }) {
  const [msg, setMsg] = useState('');
  const effacer = () => {
    try { localStorage.removeItem('fx-lang'); setMsg('Préférence effacée. Le site reprendra sa langue par défaut au prochain chargement.'); }
    catch { setMsg('Votre navigateur ne permet pas cette action ; utilisez ses réglages.'); }
  };
  const incomplet = p.sections.some((s) => s.texte.some((t) => t.includes('[')));
  return (
    <main>
      <Navigation />
      <header className="lg-h"><div><h1>{p.titre}</h1><p>{p.intro}</p><small>Dernière mise à jour : octobre 2026</small></div></header>
      <article className="lg-b">
        {incomplet && <p className="lg-flag" role="note">À compléter : les champs surlignés doivent être remplacés par les informations officielles de la société avant publication (src/lib/data/legal.ts).</p>}
        {p.sections.map((s) => (
          <section key={s.titre}><h2>{s.titre}</h2>{s.texte.map((t, i) => <p key={i}>{lien(t)}</p>)}</section>
        ))}
        {slug === 'cookies' && (<div className="lg-act"><button onClick={effacer}>Effacer ma préférence de langue</button>{msg && <p role="status">{msg}</p>}</div>)}
        <nav className="lg-n" aria-label="Autres pages légales">
          <Link href="/legal/politique-de-confidentialite">Politique de confidentialité</Link>
          <Link href="/legal/mentions-legales">Mentions légales</Link>
          <Link href="/legal/reglement-europeen-ia">Règlement européen sur l'IA</Link>
          <Link href="/legal/cookies">Paramètres des cookies</Link>
          <Link href="/contact">Nous contacter</Link>
        </nav>
      </article>
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .lg-h{background:#0a1628;color:#fff;padding:140px 20px 56px}
        .lg-h h1{font-weight:300;font-size:clamp(34px,6vw,64px);letter-spacing:-.025em;line-height:1.05;margin-bottom:16px}
        .lg-h p{max-width:640px;line-height:1.6;color:rgba(255,255,255,.8);margin-bottom:14px}
        .lg-h small{color:rgba(255,255,255,.6)}
        .lg-b{max-width:760px;margin:0 auto;padding:56px 20px 72px}
        .lg-b h2{font-weight:500;font-size:22px;margin:36px 0 10px}
        .lg-b p{line-height:1.75;color:#333;margin-bottom:14px}
        .lg-b mark{background:#fff0c2;padding:0 3px}
        .lg-flag{border:1px solid #b7791f;color:#8a5a00!important;padding:10px 14px;font-size:14px}
        .lg-act{margin-top:28px}.lg-act button{background:#0a1628;color:#fff;border:0;padding:12px 24px;font:inherit;cursor:pointer}
        .lg-act button:hover,.lg-act button:focus-visible{background:#1d3557}
        .lg-n{display:flex;flex-wrap:wrap;gap:10px 24px;margin-top:56px;padding-top:24px;border-top:1px solid #ddd;font-size:14px}
        .lg-n a:hover,.lg-n a:focus-visible{text-decoration:underline}
        @media(min-width:900px){.lg-h{padding:160px 56px 64px}}
      ` }} />
    </main>
  );
}
