"use client";
import React, { useEffect, useState } from 'react';

type Stat = { value: string; label: string };

const DEFAULT: Stat[] = [
  { value: '0.3m',  label: 'Résolution au sol'   },
  { value: '140+',  label: 'Satellites'           },
  { value: '96%',   label: 'Précision de détection'   },
  { value: '<60s',  label: 'Délai d\'alerte'        },
  { value: '5',     label: 'Domaines d\'analyse' },
  { value: 'UE',    label: 'Juridiction'   },
];

export function StatsSection() {
  const [stats, setStats] = useState<Stat[]>(DEFAULT);

  useEffect(() => {
    // Pas d'API configurée (ex. déploiement Vercel statique) : on garde les valeurs par défaut
    // plutôt que d'appeler localhost depuis le navigateur des visiteurs.
    const api = process.env.NEXT_PUBLIC_API_URL;
    if (!api) return;
    fetch(`${api}/api/v1/platform/stats`)
      .then(r => r.json())
      .then(d => { if (d?.stats?.length) setStats(d.stats); })
      .catch(() => {});
  }, []);

  return (
    <>
      <div className="stats">
        {stats.map((s, i) => (
          <div key={i} className="stat">
            <span className="stat-val">{s.value}</span>
            <span className="stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .stats {
          display: grid; grid-template-columns: repeat(3, 1fr);
          background: #fff; border-bottom: 1px solid #e8e8e8;
        }
        .stat {
          padding: 20px 12px;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          border-right: 1px solid #f0f0f0; border-bottom: 1px solid #f0f0f0;
        }
        .stat:nth-child(3n) { border-right: none; }
        .stat:nth-last-child(-n+3) { border-bottom: none; }
        .stat-val {
          font-family: var(--mono); font-size: clamp(16px, 4vw, 22px);
          font-weight: 500; color: #1a1a1a; letter-spacing: -0.01em; line-height: 1;
        }
        .stat-lbl {
          font-family: var(--mono); font-size: 9px;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #9b9b9b; text-align: center; line-height: 1.4;
        }
        @media (min-width: 640px) {
          .stats { grid-template-columns: repeat(6, 1fr); }
          .stat { border-bottom: none; }
          .stat:nth-child(3n) { border-right: 1px solid #f0f0f0; }
          .stat:last-child { border-right: none; }
          .stat { padding: 24px 8px; }
          .stat-lbl { font-size: 10px; }
        }
        @media (min-width: 1024px) {
          .stat { padding: 28px 16px; }
        }
      ` }} />
    </>
  );
}
