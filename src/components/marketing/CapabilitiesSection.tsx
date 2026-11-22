"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const CAPS = [
  {
    id: '01', label: 'Disaster Early Warning',
    image: '/assets/images/earth-surface.jpg',
    tag: 'Meteosat · Sentinel-3 · ERA5',
    desc: 'We detect wildfires, floods, and industrial accidents from satellite data in under 60 seconds. Our cognitive forecasting engine tells responders where to position resources before an incident escalates. Earlier detection means faster response and better outcomes.',
  },
  {
    id: '02', label: 'Maritime Security',
    image: '/assets/images/satellite-orbit.jpg',
    tag: 'Sentinel-1 SAR · AIS Correlation',
    desc: 'Sentinel-1 radar satellites cover European waters in all weather conditions, day and night. We cross-reference radar detections against vessel transponder data to identify ships operating without identification. Our behavioural analysis engine flags unusual movement patterns for maritime authority review.',
  },
  {
    id: '03', label: 'Urban and Infrastructure',
    image: '/assets/images/city-aerial.jpg',
    tag: 'Sentinel-1 InSAR · Copernicus Urban Atlas',
    desc: 'We map ground movement across European cities to millimetre precision using radar satellite data. Our platform identifies bridges, pipelines, and buildings showing early signs of structural stress, ranked by risk level, so infrastructure managers can prioritise inspections before problems become failures.',
  },
  {
    id: '04', label: 'Climate and Environment',
    image: '/assets/images/earth-surface-2.jpg',
    tag: 'Sentinel-5P · ERA5 · CO2M',
    desc: 'Daily atmospheric maps from Sentinel-5P allow us to track methane, nitrogen dioxide, and carbon dioxide at facility level. We identify the source of emissions, quantify the volumes, and generate evidence packages for environmental regulators and compliance authorities.',
  },
  {
    id: '05', label: 'Agriculture and Food Security',
    image: '/assets/images/dish-sunset.jpg',
    tag: 'Sentinel-2 · Sentinel-3 · ERA5 Soil',
    desc: 'Vegetation index data from Sentinel-2 fused with soil moisture and temperature readings gives us an early view of crop stress across entire regions. We produce district level harvest forecasts up to 90 days ahead of harvest, and we identify whether stress is caused by drought, disease, or management.',
  },
];

export function CapabilitiesSection() {
  const [active, setActive] = useState(0);
  const cap = CAPS[active];

  return (
    <section className="caps section section--off reveal">
      <div className="container">
        <span className="eyebrow">Core Capabilities</span>
        <h2 className="caps-h2">
          Five domains.<br/>
          <span style={{ color: '#b8954a' }}>One platform.</span>
        </h2>

        {/* Mobile: accordion */}
        <div className="caps-mobile">
          {CAPS.map((c, i) => (
            <div key={c.id} className={i === active ? 'acc acc-open' : 'acc'}>
              <button className="acc-btn" onClick={() => setActive(i)}>
                <span className="acc-num">{c.id}</span>
                <span className="acc-name">{c.label}</span>
                <span className="acc-icon">{i === active ? '−' : '+'}</span>
              </button>
              {i === active && (
                <div className="acc-body">
                  <div className="acc-img-wrap">
                    <Image src={c.image} alt={c.label} fill style={{ objectFit: 'cover' }}/>
                    <div className="img-veil"/>
                    <span className="img-tag">{c.tag}</span>
                  </div>
                  <p className="acc-desc">{c.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: tabs */}
        <div className="caps-desktop">
          <div className="caps-tabs">
            {CAPS.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={i === active ? 'caps-tab caps-tab-active' : 'caps-tab'}
              >
                <span className="caps-tab-num">{c.id}</span>
                <span className="caps-tab-name">{c.label}</span>
              </button>
            ))}
          </div>
          <div className="caps-panel">
            <div className="caps-panel-img">
              <Image src={cap.image} alt={cap.label} fill style={{ objectFit: 'cover' }}/>
              <div className="img-veil"/>
              <span className="img-tag">{cap.tag}</span>
            </div>
            <div className="caps-panel-body">
              <h3 className="caps-panel-title">{cap.label}</h3>
              <p className="caps-panel-desc">{cap.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
