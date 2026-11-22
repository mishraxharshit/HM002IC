"use client";
import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { Footer } from './SiteFooter';

const hrefs: Record<string, string> = {"Communiqué": "/marketing/contact", "Opérations": "/marketing/contact", "Presse": "/marketing/contact", "Entretien": "/marketing/contact", "Technologie": "/marketing/news/detecter-un-depart-de-feu", "Analyse": "/marketing/news/au-dela-de-la-detection", "Politique": "/marketing/news/donnees-ouvertes-copernicus", "Ingénierie": "/marketing/news/concevoir-pour-le-reglement-europeen-sur-lia", "Collaboration": "/marketing/news/radar-a-synthese-douverture", "Science": "/marketing/news/detecter-un-depart-de-feu"};
const items = [
  ['Communiqué', 'Fractalysium achève l\'évaluation de conformité de son système à haut risque au titre du règlement européen sur l\'IA', 'Avril 2026'],
  ['Opérations', 'Le suivi maritime de Fractalysium entre en phase d\'essai opérationnel', 'Mars 2026'],
  ['Technologie', 'Le système de détection d\'incendies atteint un délai d\'alerte inférieur à 60 secondes', 'Février 2026'],
  ['Analyse', 'Pourquoi le raisonnement causal est la couche manquante de l\'IA d\'observation de la Terre', 'Avril 2026'],
  ['Politique', 'L\'avantage Copernicus : pourquoi les données satellitaires ouvertes changent tout', 'Mars 2026'],
  ['Ingénierie', 'Concevoir pour le règlement européen sur l\'IA dès le premier jour', 'Janvier 2026'],
  ['Presse', 'Fractalysium cité dans le rapport 2026 sur la politique spatiale européenne', 'Avril 2026'],
  ['Entretien', 'Construire une IA souveraine pour la défense européenne', 'Mars 2026'],
  ['Collaboration', 'Exercice en Méditerranée : détection de navires non déclarés par radar Sentinel-1', 'Janvier 2026'],
  ['Science', 'Analyse thermique de la surface terrestre : saison des incendies 2025', 'Septembre 2025'],
];

export function ActusFR({ titre }: { titre: string }) {
  return (
    <main>
      <Navigation />
      <section className="ac">
        <h1>{titre}</h1>
        <div className="ac__l">
          {items.map(([c, t, d]) => (
            <Link key={t} href={hrefs[c] || "/marketing/news"} className="ac__i">
              <span>{c} • {d}</span><h2>{t}</h2>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .ac{padding:140px 20px 80px;max-width:1100px;margin:0 auto}
        .ac h1{font-weight:300;font-size:clamp(38px,7vw,72px);letter-spacing:-.025em;margin-bottom:48px}
        .ac__l{border-top:1px solid #ddd}
        .ac__i{display:block;padding:28px 0;border-bottom:1px solid #ddd}
        .ac__i span{font-size:13px;color:#777}
        .ac__i h2{margin-top:10px;font-weight:400;font-size:clamp(20px,3vw,26px);line-height:1.3;max-width:780px}
        .ac__i:hover h2{text-decoration:underline}
      ` }} />
    </main>
  );
}
