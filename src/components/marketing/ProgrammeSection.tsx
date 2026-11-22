"use client";
import React from 'react';
import { programme as p } from '@/lib/data/programme';

export function ProgrammeSection() {
  return (
    <>
      <section className="prog" id="programmes">
        <div className="prog__in">
          <h2 className="prog__h">Programmes et partenaires</h2>
          <div className="prog__nums">
            {p.chiffres.map((c) => (
              <div key={c.libelle}>
                <div className="prog__v">{c.valeur}</div>
                <div className="prog__l">{c.libelle}</div>
              </div>
            ))}
          </div>
          {p.financementPublic.organisme && (
            <p className="prog__fund">
              Financement public : {p.financementPublic.organisme}
              {p.financementPublic.source && <> — <a href={p.financementPublic.source}>source</a></>}
            </p>
          )}
          {p.partenaires.length > 0 && (
            <ul className="prog__list">
              {p.partenaires.map((x) => (
                <li key={x.pays}><strong>{x.pays}</strong>{x.nom && <span>{x.nom}</span>}</li>
              ))}
            </ul>
          )}
          {!p.verified && (
            <p className="prog__flag" role="note">
              Certaines données confidentielles sont disponibles pour de nouveaux partenaires et clients après validation de renseignements de notre service compliance.
            </p>
          )}
        </div>
      </section>
      <style dangerouslySetInnerHTML={{ __html: `
        .prog{background:#f3f4f6;color:#0a1628;padding:72px 20px}
        .prog__in{max-width:1200px;margin:0 auto}
        .prog__h{font-weight:300;font-size:clamp(30px,5vw,56px);letter-spacing:-.025em;margin-bottom:40px}
        .prog__nums{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));margin-bottom:12px}
        .prog__nums>div{background:#0a1628;color:#fff;padding:36px 28px;min-height:220px;display:flex;flex-direction:column;justify-content:flex-end}
        .prog__v{font-weight:300;font-size:clamp(48px,8vw,88px);line-height:1;letter-spacing:-.03em}
        .prog__l{margin-top:12px;color:rgba(255,255,255,.7);font-size:15px}
        .prog__fund{background:#fff;padding:24px 28px;line-height:1.6;margin-bottom:12px}
        .prog__fund a{text-decoration:underline}
        .prog__list{list-style:none;padding:0;display:grid;gap:12px}
        .prog__list li{background:#fff;display:flex;justify-content:space-between;gap:16px;padding:22px 28px}
        .prog__list span{color:#555}
        .prog__flag{margin-top:20px;display:inline-block;padding:8px 12px;border:1px solid #b7791f;color:#8a5a00;font-size:13px}
        @media(min-width:768px){.prog{padding:96px 56px}.prog__list{grid-template-columns:repeat(3,1fr)}.prog__list li{flex-direction:column;min-height:140px}}
      ` }} />
    </>
  );
}