"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { SovereignMap } from './SovereignMap';
import { articles } from '@/lib/data/articles';

const domaines = [
  { t: 'Incendies', d: 'Détection de départs de feu en moins de 60 secondes grâce aux données thermiques.', img: 'earth-surface-2.jpg',
    texte: 'Les mesures thermiques des satellites permettent de repérer un foyer peu après son apparition. Chaque signal est comparé à la normale locale pour limiter les fausses alertes, puis transmis à la sécurité civile avec sa position et un niveau de confiance.',
    points: ['Détection thermique fréquente', 'Comparaison à la normale locale', 'Niveau de confiance affiché', 'Alerte vers la sécurité civile'], lien: '/defense/detection-des-incendies' },
  { t: 'Maritime', d: 'Repérage des navires non déclarés par radar spatial, de jour comme de nuit.', img: 'satellite-orbit.jpg',
    texte: 'Le radar spatial observe de nuit et sous les nuages. Ses détections sont croisées avec les signaux de navigation déclarés pour repérer les navires qui ne se signalent pas et suivre l\'activité dans les zones maritimes européennes.',
    points: ['Radar, jour et nuit', 'Croisement avec les signaux déclarés', 'Suivi de zones maritimes', 'Réduction des faux positifs'], lien: '/defense/surveillance-maritime' },
  { t: 'Agriculture', d: 'Prévision des récoltes plusieurs semaines à l\'avance.', img: 'earth-surface.jpg',
    texte: 'L\'imagerie optique mesure la vigueur des cultures, le radar renseigne sur leur structure et l\'humidité du sol. En fusionnant les deux, on obtient une série continue pour chaque parcelle, même quand les nuages bloquent l\'optique, et une estimation de rendement avec sa marge d\'incertitude.',
    points: ['Fusion radar et optique', 'Série temporelle sans interruption', 'Comparaison aux campagnes passées', 'Estimation avec fourchette'], lien: '/capabilities' },
  { t: 'Infrastructures', d: 'Surveillance des sites critiques et des zones urbaines.', img: 'city-aerial.jpg',
    texte: 'Comparer des observations successives permet de repérer ce qui change autour d\'une installation ou dans une ville : constructions, terrassements, circulation. Chaque détection est replacée dans l\'historique du site pour distinguer un événement notable d\'une variation normale.',
    points: ['Comparaison dans le temps', 'Historique de plusieurs années', 'Distinction normal / inhabituel', 'Rapports exportables'], lien: '/defense/activite-des-sites' },
];

const actus = articles.slice(0, 6).map((a) => ({ cat: a.categorie, t: a.titre, d: a.date, r: a.lecture, href: `/news/${a.slug}` }));

export function HomeFR() {
  const [sel, setSel] = useState(0);
  const d = domaines[sel];
  return (
    <>
      <section className="h-intro">
        <h2>Renseignement souverain.<br />Depuis l'espace.</h2>
        <p>Fractalysium réunit observation satellitaire, intelligence artificielle et science géospatiale pour aider les institutions européennes à détecter les changements et à réagir, partout sur Terre.</p>
        <Link href="/about" className="h-link">À propos de nous</Link>
      </section>

      <section className="h-pair">
        <Link href="/defense" className="h-card h-card--big" style={{ backgroundImage: 'url(/assets/images/station-sol.jpg)' }}>
          <h3>Défense et renseignement</h3>
          <p>Une surveillance continue, par tous les temps, pour les organisations de défense et de sécurité.</p>
        </Link>
        <Link href="/technology" className="h-card h-card--big" style={{ backgroundImage: 'url(/assets/images/radome.jpg)' }}>
          <h3>Technologie et ingénierie</h3>
          <p>Des systèmes conçus en Europe, du capteur à la décision, avec la science au cœur.</p>
        </Link>
      </section>

      <SovereignMap />

      <section className="h-sec">
        <h2>Observer, comprendre, agir</h2>
        <div className="h-grid4">
          {domaines.map((x, i) => (
            <button key={x.t} type="button" aria-expanded={sel === i} onClick={() => setSel(i)}
              className={`h-card h-card--btn ${sel === i ? 'is-on' : ''}`} style={{ backgroundImage: `url(/assets/images/${x.img})` }}>
              <h3>{x.t}</h3><p>{x.d}</p>
            </button>
          ))}
        </div>
        <div className="h-panel" role="region" aria-live="polite" aria-label={d.t}>
          <div><h3>{d.t}</h3><p>{d.texte}</p><Link href={d.lien} className="h-link">Voir le détail</Link></div>
          <ul>{d.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </section>

      <section className="h-mission" style={{ backgroundImage: 'url(/assets/images/dish-sunset.jpg)' }}>
        <div>
          <h2>Des données ouvertes.<br />Un cadre européen.</h2>
          <p>Chaque analyse s'appuie sur Copernicus, fourni librement par le droit européen. Aucune dépendance propriétaire, aucune exposition à une juridiction étrangère.</p>
          <Link href="/platform" className="h-link h-link--light">Découvrir la plateforme</Link>
        </div>
      </section>

      <section className="h-sec">
        <div className="h-head"><h2>Dernières actualités</h2><Link href="/newsroom" className="h-link">Toutes les actualités</Link></div>
        <div className="h-news">
          {actus.map((a) => (
            <Link key={a.t} href={a.href} className="h-n">
              <span className="h-n__m">{a.cat} • {a.d} • {a.r} de lecture</span>
              <h3>{a.t}</h3>
            </Link>
          ))}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .h-intro{padding:96px 20px;max-width:900px;margin:0 auto;text-align:left}
        .h-intro h2,.h-sec h2,.h-mission h2{font-weight:300;font-size:clamp(34px,6vw,64px);line-height:1.05;letter-spacing:-.025em}
        .h-intro p{margin:28px 0;font-size:clamp(16px,2.4vw,20px);line-height:1.6;color:#444;max-width:640px}
        .h-link{display:inline-block;border-bottom:1px solid currentColor;padding-bottom:2px;font-size:15px}
        .h-link--light{color:#fff}
        .h-pair{display:grid;gap:12px;padding:0 12px 12px}
        .h-sec{padding:72px 12px}
        .h-sec h2{padding:0 8px 32px}
        .h-head{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:12px;padding-right:8px}
        .h-grid4{display:grid;gap:12px}
        .h-card{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:340px;padding:28px;color:#fff;background-size:cover;background-position:center;isolation:isolate}
        .h-card--big{min-height:460px}
        .h-card::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.75),rgba(0,0,0,.05) 70%);z-index:-1}
        .h-card h3{font-weight:400;font-size:26px;margin-bottom:8px}
        .h-card p{font-size:15px;line-height:1.5;color:rgba(255,255,255,.85);max-width:420px}
        .h-card:hover,.h-card:focus-visible{outline:2px solid #fff;outline-offset:-6px}
        .h-mission{position:relative;min-height:560px;display:flex;align-items:flex-end;padding:56px 20px;color:#fff;background-size:cover;background-position:center;isolation:isolate}
        .h-mission::before{content:"";position:absolute;inset:0;background:rgba(0,0,0,.5);z-index:-1}
        .h-mission p{margin:24px 0;max-width:560px;line-height:1.6;color:rgba(255,255,255,.88)}
        .h-card--btn{border:0;font:inherit;text-align:left;cursor:pointer;width:100%}
        .h-card.is-on{outline:3px solid #0a1628;outline-offset:-3px}
        .h-panel{display:grid;gap:28px;margin:12px 0 0;padding:32px 28px;background:#f3f4f6}
        .h-panel h3{font-weight:400;font-size:28px;margin-bottom:12px}
        .h-panel p{line-height:1.65;color:#333;max-width:560px;margin-bottom:20px}
        .h-panel ul{list-style:none;padding:0;border-top:1px solid #d6d8dc;align-self:start}
        .h-panel li{padding:16px 0;border-bottom:1px solid #d6d8dc}
        @media(min-width:900px){.h-panel{grid-template-columns:1.3fr 1fr;padding:48px;gap:64px}}
        .h-news{display:grid;gap:0;border-top:1px solid #ddd}
        .h-n{display:block;padding:28px 8px;border-bottom:1px solid #ddd}
        .h-n__m{font-size:13px;color:#777}
        .h-n h3{margin-top:10px;font-weight:400;font-size:clamp(20px,3vw,26px);line-height:1.3;max-width:760px}
        .h-n:hover h3{text-decoration:underline}
        @media(min-width:768px){.h-pair{grid-template-columns:1fr 1fr}.h-grid4{grid-template-columns:repeat(4,1fr)}.h-sec{padding:96px 12px}.h-mission{padding:72px 56px}.h-intro{padding:140px 20px}}
      ` }} />
    </>
  );
}
