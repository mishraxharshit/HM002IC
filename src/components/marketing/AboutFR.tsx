"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CTASection, Footer } from './SiteFooter';
import { entreprise as e } from '@/lib/data/entreprise';
import { articles } from '@/lib/data/articles';
import { LazyVideo } from './LazyVideo';

const approche = [
  ['Technologie', 'Radar, optique, thermique et IA réunis dans une même chaîne.', 'circuit-orange.jpg', '/technology'],
  ['Plateforme', 'Une seule plateforme pour observer, comprendre et agir.', 'circuit-bleu.jpg', '/platform'],
  ['Sécurité et conformité', 'Souveraineté des données et conformité au droit européen.', 'laboratoire.jpg', '/security'],
];
const valeurs = [
  ['Rigueur', 'Nous publions ce que nous savons vérifier et nous disons quand notre confiance est limitée.'],
  ['Responsabilité', 'Chacun prend ses décisions tôt et en assume les conséquences.'],
  ['Curiosité', 'Nous cherchons la cause des phénomènes, pas seulement leur détection.'],
  ['Ouverture', 'Nous nous appuyons sur des données ouvertes et partageons nos méthodes.'],
];

export function AboutFR() {
  const [open, setOpen] = useState<number | null>(null);
  const [val, setVal] = useState<number | null>(null);
  const ini = (n: string) => n.replace(/^Dr /, '').split(' ').map((m) => m[0]).join('').slice(0, 2);
  return (
    <main>
      <Navigation />
      <header className="ab-h">
        <LazyVideo src="/assets/videos/lancement.mp4" poster="/assets/images/station-sol.jpg" />
        <div><h1>Renseignement souverain.<br />Depuis l'espace.</h1>
        <p>Nous transformons les données d'observation de la Terre en décisions pour les institutions européennes.</p></div>
      </header>

      <section className="ab-in">
        <h2>Qui sommes-nous</h2>
        <p>Fractalysium réunit observation satellitaire, intelligence artificielle et science géospatiale. Nous aidons les institutions européennes, la sécurité civile et les opérateurs d'infrastructures critiques à détecter les changements et à réagir plus vite, partout sur Terre.</p>
        <Link href="/defense" className="ab-l">Découvrir notre offre défense et renseignement</Link>
      </section>

      <section className="ab-pair">
        <Link href="/defense" className="ab-c" style={{ backgroundImage: 'url(/assets/images/station-sol.jpg)' }}>
          <h3>Défense et renseignement</h3><p>Missions souveraines, accès aux données, cas d'usage détaillés.</p><span>Voir l'offre</span>
        </Link>
        <Link href="/capabilities" className="ab-c" style={{ backgroundImage: 'url(/assets/images/earth-surface.jpg)' }}>
          <h3>Observation de la Terre</h3><p>Incendies, maritime, agriculture, catastrophes, zones urbaines.</p><span>Voir les capacités</span>
        </Link>
      </section>

      <section className="ab-band" style={{ backgroundImage: 'url(/assets/images/radome.jpg)' }}>
        <div><h2>Notre mission</h2>
        <p>Rendre l'observation de la Terre utile, vérifiable et souveraine. Chaque résultat indique ses sources et son niveau de confiance, pour que les décideurs gardent la maîtrise.</p>
        <Link href="/platform" className="ab-l ab-l--w">Découvrir la plateforme</Link></div>
      </section>

      <section className="ab-s">
        <h2>Notre approche</h2>
        <div className="ab-tri">
          {approche.map(([t, d, img, h]) => (
            <Link key={t} href={h} className="ab-c ab-c--s" style={{ backgroundImage: `url(/assets/images/${img})` }}>
              <h3>{t}</h3><p>{d}</p><span>En savoir plus</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="ab-eng">
        <LazyVideo src="/assets/videos/fabrication.mp4" poster="/assets/images/technicien.jpg" />
        <div><h2>Ingénierie et science</h2>
        <p>Des spécialistes de l'observation de la Terre, de l'IA et du logiciel travaillent ensemble, du capteur à la décision, avec une même exigence de rigueur.</p>
        <Link href="/careers" className="ab-l">Rejoindre l'équipe</Link></div>
      </section>

      <section className="ab-s">
        <h2>Nos valeurs</h2>
        <div className="ab-val">
          {valeurs.map(([t, d], i) => (
            <button key={t} aria-expanded={val === i} onClick={() => setVal(val === i ? null : i)}>
              <strong>{t}</strong><span>{val === i ? d : 'Lire'}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="ab-s ab-grey">
        <h2>Notre équipe</h2>
        <div className="ab-team">
          {e.direction.map((m, i) => (
            <button key={m.nom} className="ab-m" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
              <span className="ab-ph" aria-hidden="true">{ini(m.nom)}</span>
              <strong>{m.nom}</strong><em>{m.role}</em>
              {open === i && <span className="ab-bio">{m.bio}</span>}
            </button>
          ))}
        </div>
      </section>

      <section className="ab-s">
        <div className="ab-hd"><h2>Actualités récentes</h2><Link href="/news" className="ab-l">Toutes les actualités</Link></div>
        <div className="ab-news">
          {articles.slice(0, 3).map((a) => (
            <Link key={a.slug} href={`/news/${a.slug}`}>
              <div className="ab-ni" style={{ backgroundImage: `url(/assets/images/${a.image})` }} />
              <span>{a.categorie} • {a.date}</span><h3>{a.titre}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="ab-job">
        <LazyVideo src="/assets/videos/intervention.mp4" poster="/assets/images/technicien.jpg" />
        <div><h2>Rendre l'impossible possible.</h2>
        <p>Vous prenez vos responsabilités tôt et vous résolvez des problèmes difficiles avec des experts qui se soucient de l'impact.</p>
        <Link href="/careers" className="ab-btn">Voir les carrières</Link></div>
      </section>

      <CTASection />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .ab-h,.ab-job,.ab-eng{position:relative;overflow:hidden;isolation:isolate;color:#fff}
        .ab-h video,.ab-job video,.ab-eng video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
        .ab-h::before,.ab-job::before,.ab-eng::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.78),rgba(0,0,0,.15));z-index:-1}
        .ab-h{min-height:85vh;display:flex;align-items:flex-end;padding:120px 20px 56px}
        .ab-h h1{font-weight:300;font-size:clamp(38px,8vw,92px);line-height:1.02;letter-spacing:-.025em;margin-bottom:18px}
        .ab-h p{max-width:520px;line-height:1.6;color:rgba(255,255,255,.88)}
        .ab-in{max-width:960px;padding:88px 20px;margin:0 auto}
        .ab-in h2,.ab-s h2,.ab-band h2,.ab-eng h2,.ab-job h2{font-weight:300;font-size:clamp(30px,5vw,56px);letter-spacing:-.025em;line-height:1.05;margin-bottom:24px}
        .ab-in p{font-size:clamp(17px,2.4vw,22px);line-height:1.6;color:#333;max-width:700px;margin-bottom:28px}
        .ab-l{display:inline-block;border-bottom:1px solid currentColor;padding-bottom:2px;font-size:15px}
        .ab-l--w{color:#fff}
        .ab-pair{display:grid;gap:12px;padding:0 12px 12px}
        .ab-tri{display:grid;gap:12px}
        .ab-c{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:440px;padding:28px;color:#fff;background-size:cover;background-position:center;isolation:isolate}
        .ab-c--s{min-height:340px}
        .ab-c::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.05) 75%);z-index:-1}
        .ab-c h3{font-weight:400;font-size:26px;margin-bottom:8px}
        .ab-c p{font-size:15px;line-height:1.5;color:rgba(255,255,255,.86);max-width:420px}
        .ab-c span{margin-top:14px;font-size:14px;border-bottom:1px solid #fff;align-self:flex-start;padding-bottom:2px}
        .ab-c:hover,.ab-c:focus-visible{outline:2px solid #fff;outline-offset:-6px}
        .ab-band{min-height:520px;display:flex;align-items:flex-end;padding:56px 20px;color:#fff;background-size:cover;background-position:center;position:relative;isolation:isolate;margin:12px 0}
        .ab-band::before{content:"";position:absolute;inset:0;background:rgba(0,0,0,.52);z-index:-1}
        .ab-band p,.ab-eng p,.ab-job p{max-width:560px;line-height:1.6;color:rgba(255,255,255,.88);margin-bottom:24px}
        .ab-s{padding:72px 12px;max-width:1280px;margin:0 auto}
        .ab-s h2{padding:0 8px}
        .ab-grey{max-width:none;background:#f3f4f6}
        .ab-grey>*{max-width:1200px;margin-left:auto;margin-right:auto}
        .ab-eng{min-height:480px;display:flex;align-items:flex-end;padding:56px 20px}
        .ab-val{display:grid;gap:12px;margin-top:32px}
        .ab-val button{text-align:left;background:#f3f4f6;border:0;padding:24px;display:grid;gap:10px;font:inherit;cursor:pointer;min-height:130px;align-content:start}
        .ab-val button:hover,.ab-val button:focus-visible{outline:2px solid #0a1628}
        .ab-val strong{font-weight:500;font-size:19px}.ab-val span{font-size:15px;line-height:1.6;color:#555}
        .ab-team{display:grid;gap:1px;background:#d9dce1;border:1px solid #d9dce1;margin-top:32px;align-items:start}
        .ab-m{background:#fff;border:0;padding:24px;text-align:left;font:inherit;cursor:pointer;display:grid;gap:6px}
        .ab-m:hover,.ab-m:focus-visible{outline:2px solid #0a1628;outline-offset:-2px}
        .ab-ph{width:52px;height:52px;background:#0a1628;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:500;margin-bottom:10px}
        .ab-m strong{font-weight:500;font-size:19px}.ab-m em{font-style:normal;color:#0a1628;font-size:14px}
        .ab-bio{font-size:15px;line-height:1.6;color:#444;margin-top:10px}
        .ab-hd{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:12px;padding-right:8px;margin-bottom:32px}
        .ab-hd h2{margin:0}
        .ab-news{display:grid;gap:24px 12px}
        .ab-ni{aspect-ratio:3/2;background-size:cover;background-position:center;margin-bottom:14px}
        .ab-news span{font-size:13px;color:#777}.ab-news h3{font-weight:400;font-size:21px;line-height:1.3;margin-top:8px}
        .ab-news a:hover h3{text-decoration:underline}
        .ab-job{min-height:520px;display:flex;align-items:flex-end;padding:56px 20px}
        .ab-btn{display:inline-block;background:#fff;color:#0a1628;padding:14px 28px;font-size:15px}
        @media(min-width:768px){.ab-h{padding:140px 56px 72px}.ab-in{padding:140px 56px}.ab-pair{grid-template-columns:1fr 1fr}.ab-tri{grid-template-columns:repeat(3,1fr)}.ab-band,.ab-eng,.ab-job{padding:72px 56px}.ab-s{padding:104px 12px}.ab-val{grid-template-columns:repeat(4,1fr)}.ab-team{grid-template-columns:repeat(4,1fr)}.ab-news{grid-template-columns:repeat(3,1fr)}}
      ` }} />
    </main>
  );
}
