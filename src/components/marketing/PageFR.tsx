"use client";
import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CTASection, Footer } from './SiteFooter';
import { ContactForm } from './Contact';

type Sec = { titre: string; texte: string; image?: string; lien?: [string, string] };

export function PageFR({ titre, intro, image, sections, formulaire }: {
  titre: string; intro: string; image: string; sections: Sec[]; formulaire?: boolean;
}) {
  return (
    <main>
      <Navigation />
      <header className="pf-h" style={{ backgroundImage: `url(/assets/images/${image})` }}>
        <div><h1>{titre}</h1><p>{intro}</p></div>
      </header>
      {sections.map((s, i) => (
        <section key={s.titre} className={`pf-s ${i % 2 ? 'pf-s--r' : ''}`} id={s.titre.toLowerCase().startsWith('carri') ? 'carrieres' : undefined}>
          <div className="pf-t">
            <h2>{s.titre}</h2>
            <p>{s.texte}</p>
            {s.lien && <Link href={s.lien[1]} className="pf-l">{s.lien[0]}</Link>}
          </div>
          {s.image && <div className="pf-i" style={{ backgroundImage: `url(/assets/images/${s.image})` }} role="img" aria-label={s.titre} />}
        </section>
      ))}
      {formulaire && (
        <section className="pf-f">
          <h2>Écrivez-nous</h2>
          <ContactForm />
        </section>
      )}
      <CTASection />
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .pf-h{min-height:70vh;display:flex;align-items:flex-end;padding:120px 20px 56px;color:#fff;background-size:cover;background-position:center;position:relative;isolation:isolate}
        .pf-h::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.75),rgba(0,0,0,.15));z-index:-1}
        .pf-h h1{font-weight:300;font-size:clamp(38px,8vw,84px);line-height:1.02;letter-spacing:-.025em;margin-bottom:18px}
        .pf-h p{max-width:560px;line-height:1.6;color:rgba(255,255,255,.85);font-size:clamp(16px,2.4vw,19px)}
        .pf-s{display:grid;gap:32px;padding:64px 20px;align-items:center}
        .pf-s h2,.pf-f h2{font-weight:300;font-size:clamp(28px,4.5vw,46px);letter-spacing:-.02em;margin-bottom:18px}
        .pf-s p{max-width:540px;line-height:1.65;color:#444}
        .pf-l{display:inline-block;margin-top:20px;border-bottom:1px solid currentColor;padding-bottom:2px;font-size:15px}
        .pf-i{min-height:300px;background-size:cover;background-position:center}
        .pf-f{padding:64px 20px;background:#f3f4f6}
        @media(min-width:900px){.pf-h{padding:140px 56px 72px}.pf-s{grid-template-columns:1fr 1fr;padding:96px 56px;gap:64px}.pf-s--r .pf-t{order:2}.pf-i{min-height:420px}.pf-f{padding:96px 56px}}
      ` }} />
    </main>
  );
}
