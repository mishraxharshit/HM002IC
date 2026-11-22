"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string; imageAlt: string; imagePosition?: string;
  eyebrow: string; title: string; body: string;
  cta?: { label: string; href: string };
  dark?: boolean; reverse?: boolean;
};

export function ImageFeatureSection({
  image, imageAlt, imagePosition = 'center',
  eyebrow, title, body, cta, dark = false, reverse = false,
}: Props) {
  const textBg   = dark ? '#0a0a0a' : '#fff';
  const titleCol = dark ? '#fff'    : '#1a1a1a';
  const bodyCol  = dark ? 'rgba(255,255,255,0.65)' : '#6b6b6b';
  const eyeCol   = dark ? '#d4ae6a' : '#b8954a';

  return (
    <>
      <section className={`imgsec reveal ${reverse ? 'imgsec--rev' : ''}`}>
        {/* Image — always on top on mobile */}
        <div className="imgsec__img">
          <Image src={image} alt={imageAlt} fill quality={80}
            style={{ objectFit:'cover', objectPosition: imagePosition }}/>
          <div className="imgsec__veil" style={{ background: dark
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15))'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.08))'
          }}/>
        </div>
        {/* Text */}
        <div className="imgsec__text" style={{ background: textBg }}>
          <div className="imgsec__inner">
            <span className="eyebrow" style={{ color: eyeCol }}>{eyebrow}</span>
            <h2 className="imgsec__h2" style={{ color: titleCol }}>{title}</h2>
            <p className="imgsec__body" style={{ color: bodyCol }}>{body}</p>
            {cta && (
              <Link href={cta.href} className="link-arrow" style={{ color: dark ? '#fff' : '#1a1a1a' }}>
                {cta.label} →
              </Link>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .imgsec {
          display: grid;
          grid-template-columns: 1fr;
          border-bottom: 1px solid #e8e8e8;
        }
        .imgsec__img {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .imgsec__veil { position: absolute; inset: 0; }
        .imgsec__text {
          padding: 36px 20px;
        }
        .imgsec__inner { max-width: 480px; }
        .imgsec__h2 {
          font-size: clamp(22px, 5vw, 40px);
          font-weight: 300; letter-spacing: -0.025em;
          line-height: 1.15; margin-bottom: 16px;
        }
        .imgsec__body {
          font-size: 15px; line-height: 1.7; margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .imgsec {
            grid-template-columns: 1fr 1fr;
            min-height: 480px;
          }
          .imgsec--rev .imgsec__img { order: 2; }
          .imgsec--rev .imgsec__text { order: 1; }
          .imgsec__img { height: auto; }
          .imgsec__text { padding: 72px 56px; display: flex; align-items: center; }
          .imgsec__inner { max-width: 440px; }
        }
        @media (min-width: 1024px) {
          .imgsec__text { padding: 80px 64px; }
        }
      `}</style>
    </>
  );
}
