"use client";
import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const BANDS = [
  { id: 'natural', label: 'Couleurs naturelles' },
  { id: 'infra',   label: 'Proche infrarouge' },
  { id: 'thermal', label: 'Thermique'       },
  { id: 'water',   label: 'Indice d\'eau'   },
  { id: 'coastal', label: 'Côtier'          },
  { id: 'rededge', label: 'Bord rouge'      },
  { id: 'cirrus',  label: 'Cirrus'          },
  { id: 'swir2',   label: 'Infrarouge court' },
];

const OVERLAYS: Record<string, string> = {
  infra: 'rgba(160,40,0,0.16)', water: 'rgba(0,80,200,0.24)',
  coastal: 'rgba(0,120,180,0.18)', rededge: 'rgba(120,0,40,0.18)',
  cirrus: 'rgba(255,255,255,0.3)', swir2: 'rgba(60,0,100,0.22)',
};

export function SovereignMap() {
  const mapRef     = useRef<any>(null);
  const lcRef      = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [active,  setActive]  = useState('natural');
  const [lat,     setLat]     = useState('36.5298');
  const [lng,     setLng]     = useState('6.2925');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || mapRef.current) return;
    import('leaflet').then(L => {
      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl;
      const map = L.map('sovereign-map', {
        center: [36.5298, -6.2925], zoom: 11,
        zoomControl: true, attributionControl: false,
      });
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 }).addTo(map);
      map.on('mousemove', (e: any) => {
        setLat(e.latlng.lat.toFixed(4));
        setLng(Math.abs(e.latlng.lng).toFixed(4));
      });
      mapRef.current = map;
      lcRef.current  = document.querySelector('.leaflet-container');
      // make sure Leaflet measures the final container size (avoids tiny / grey tiles)
      [0, 250, 800].forEach(t => window.setTimeout(() => map.invalidateSize(), t));
      if ('ResizeObserver' in window) new ResizeObserver(() => map.invalidateSize()).observe(document.getElementById('sovereign-map')!);
    });
    return () => { if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; } };
  }, [mounted]);

  const switchBand = (band: string) => {
    setActive(band);
    const lc = lcRef.current as HTMLElement | null;
    if (lc) {
      BANDS.forEach(b => lc.classList.remove(`filter-${b.id}`));
      lc.classList.add(`filter-${band}`);
    }
    const ov = overlayRef.current;
    if (ov) {
      ov.style.background = OVERLAYS[band] || '';
      ov.style.opacity    = OVERLAYS[band] ? '1' : '0';
    }
  };

  return (
    <>
      <div className="smap section section--off">
        <div className="smap-header container">
          <div>
            <span className="eyebrow">Couche d'analyse en direct</span>
            <h2 className="smap-h2">Analyse par bande spectrale.<br/>Données de terrain réelles.</h2>
          </div>
          <div className="smap-coords">
            <span>Lat {lat}</span>
            <span>Lng {lng}</span>
            <span>Sentinel MSI actif</span>
          </div>
        </div>

        <div className="smap-viewport">
          {mounted
            ? <div id="sovereign-map" style={{ width: '100%', height: '100%' }}/>
            : <div className="smap-loading"><span className="live-dot" style={{ marginRight: 8 }}/>Connexion au satellite en cours</div>
          }
          <div ref={overlayRef} className="smap-overlay"/>
          <div className="smap-badge-mode">
            {BANDS.find(b => b.id === active)?.label}
          </div>
          <div className="smap-badge-live">
            <span className="live-dot"/>En direct
          </div>
        </div>

        <div className="smap-bands">
          <span className="smap-bands-label">Bandes spectrales</span>
          <div className="smap-pills">
            {BANDS.map(b => (
              <button key={b.id} onClick={() => switchBand(b.id)}
                className={`smap-pill ${active === b.id ? 'active' : ''}`}>
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .smap { padding-top: 40px; padding-bottom: 0 !important; }
        .smap-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 12px; padding-bottom: 20px;
        }
        .smap-h2 { font-size: clamp(20px, 4vw, 32px); font-weight: 300; color: #1a1a1a; letter-spacing: -0.02em; line-height: 1.2; }
        .smap-coords { display: none; font-family: var(--mono); font-size: 11px; color: #9b9b9b; line-height: 1.9; text-align: right; }
        .smap-viewport { position: relative; width: 100%; height: 300px; overflow: hidden; isolation: isolate; }
        .smap-overlay { position: absolute; inset: 0; pointer-events: none; z-index: 400; opacity: 0; transition: background 0.4s, opacity 0.4s; mix-blend-mode: multiply; }
        .smap-loading { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #9b9b9b; background: #f7f7f7; }
        .smap-badge-mode, .smap-badge-live {
          position: absolute; z-index: 500;
          background: rgba(255,255,255,0.93); border: 1px solid #e8e8e8;
          padding: 4px 10px; font-family: var(--mono); font-size: 9px;
          letter-spacing: 0.12em; text-transform: uppercase; color: #3d3d3d;
          pointer-events: none;
        }
        .smap-badge-mode { top: 10px; left: 10px; }
        .smap-badge-live { top: 10px; right: 10px; display: flex; align-items: center; gap: 6px; }
        .smap-bands {
          display: flex; align-items: center; gap: 12px;
          border-top: 1px solid #e8e8e8; padding: 12px 20px;
          overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .smap-bands::-webkit-scrollbar { display: none; }
        .smap-bands-label { font-family: var(--mono); font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: #9b9b9b; flex-shrink: 0; }
        .smap-pills { display: flex; gap: 6px; flex-shrink: 0; }
        .smap-pill {
          font-family: var(--mono); font-size: 9px; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 6px 12px; white-space: nowrap;
          border: 1px solid #e8e8e8; background: #fff; color: #6b6b6b;
          border-radius: 2px; cursor: pointer; transition: all 0.15s;
          -webkit-tap-highlight-color: transparent; min-height: 36px;
        }
        .smap-pill:hover { border-color: #b8954a; color: #b8954a; }
        .smap-pill.active { background: #1a1a1a; border-color: #1a1a1a; color: #fff; }
        @media (min-width: 640px) { .smap-viewport { height: 420px; } }
        @media (min-width: 900px) {
          .smap-viewport { height: 560px; }
          .smap-coords { display: block; }
          .smap-bands { padding: 14px 48px; }
          .smap-bands-label { font-size: 10px; }
          .smap-pill { font-size: 10px; }
        }
      ` }} />
    </>
  );
}
