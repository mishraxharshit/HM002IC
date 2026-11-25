"use client";
import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CTASection, Footer } from './SiteFooter';
import { LazyVideo } from './LazyVideo';

const raisons = [
  ['Un impact concret', 'Votre travail aide des équipes de sécurité civile, de défense et d\'infrastructures à décider plus vite.'],
  ['Des responsabilités tôt', 'Vous prenez des décisions dès les premiers mois, avec des collègues qui vous font confiance.'],
  ['Une science exigeante', 'Radar, optique, thermique, IA : nous travaillons avec des experts de chaque discipline.'],
  ['Un cadre européen', 'Nos projets s\'appuient sur des données ouvertes et un droit européen clair.'],
];
const metiers = [
  ['Science et observation de la Terre', 'Traitement SAR et optique, séries temporelles, télédétection.'],
  ['IA et apprentissage automatique', 'Modèles d\'inférence, raisonnement causal, IA à faible latence.'],
  ['Ingénierie logicielle et données', 'Ingestion de flux, pipelines, plateforme et API.'],
  ['Relations institutionnelles et opérations', 'Programmes publics, partenariats, déploiement client.'],
];
const etapes = ['Vous nous écrivez avec un CV et quelques lignes sur ce que vous voulez construire.', 'Un premier échange avec l\'équipe concernée.', 'Un entretien technique ou scientifique sur un cas réel.', 'Une réponse claire sous quelques jours.'];

export function CareersFR() {
  return (
    <main>
      <Navigation />
      <header className="cr-h">
        <LazyVideo src="/assets/videos/fabrication.mp4" poster="/assets/images/technicien.jpg" />
        <div><h1>Rendre l'impossible possible.</h1>
        <p>Chez Fractalysium, vous prenez vos responsabilités tôt, vous avancez vite et vous résolvez des problèmes difficiles aux côtés d'experts qui se soucient de l'impact. Nous valorisons la curiosité, la rigueur et le courage de remettre en question l'habitude.</p>
        <Link href="/contact" className="cr-b">Postuler</Link></div>
      </header>
      <section className="cr-s"><h2>Pourquoi nous rejoindre</h2>
        <div className="cr-g">{raisons.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></section>
      <section className="cr-s cr-grey"><h2>Domaines de recrutement</h2>
        <ul className="cr-l">{metiers.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}</ul></section>
      <section className="cr-s"><h2>Notre processus de recrutement</h2>
        <ol className="cr-o">{etapes.map((e, i) => <li key={i}><b>{i + 1}</b><span>{e}</span></li>)}</ol></section>
      <section className="cr-s cr-grey"><h2>Candidature spontanée</h2>
        <p className="cr-p">Aucun poste ne correspond à votre profil ? Écrivez-nous quand même : nous lisons chaque candidature.</p>
        <Link href="/contact" className="cr-b">Nous écrire</Link></section>
      <CTASection />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .cr-h{position:relative;min-height:80vh;display:flex;align-items:flex-end;padding:120px 20px 56px;color:#fff;overflow:hidden;isolation:isolate}
        .cr-h video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
        .cr-h::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.78),rgba(0,0,0,.15));z-index:-1}
        .cr-h h1{font-weight:300;font-size:clamp(38px,8vw,88px);line-height:1.02;letter-spacing:-.025em;margin-bottom:20px}
        .cr-h p{max-width:600px;line-height:1.6;color:rgba(255,255,255,.88);margin-bottom:28px}
        .cr-b{display:inline-block;background:#fff;color:#0a1628;padding:14px 28px;font-size:15px}
        .cr-grey .cr-b{background:#0a1628;color:#fff}
        .cr-s{padding:72px 20px;max-width:1280px;margin:0 auto}
        .cr-grey{max-width:none;background:#f3f4f6}
        .cr-grey>*{max-width:1200px;margin-left:auto;margin-right:auto}
        .cr-s h2{font-weight:300;font-size:clamp(28px,4.5vw,48px);letter-spacing:-.02em;margin-bottom:32px}
        .cr-g{display:grid;gap:28px}.cr-g h3{font-weight:500;font-size:19px;margin-bottom:8px}
        .cr-g p,.cr-p{line-height:1.6;color:#444;font-size:15px}.cr-p{margin-bottom:24px;max-width:560px}
        .cr-l{list-style:none;padding:0;border-top:1px solid #d6d8dc}
        .cr-l li{display:grid;gap:4px;padding:22px 0;border-bottom:1px solid #d6d8dc}.cr-l span{color:#555}
        .cr-o{list-style:none;padding:0;display:grid;gap:16px}
        .cr-o li{display:flex;gap:18px;align-items:baseline}.cr-o b{font-weight:300;font-size:32px;min-width:36px}
        @media(min-width:900px){.cr-h{padding:140px 56px 72px}.cr-s{padding:104px 56px}.cr-g{grid-template-columns:repeat(4,1fr)}.cr-l li{grid-template-columns:1fr 1fr}.cr-o{grid-template-columns:repeat(4,1fr)}.cr-o li{flex-direction:column;gap:8px}}
      ` }} />
    </main>
  );
}
