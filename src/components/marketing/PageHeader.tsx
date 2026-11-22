"use client";
import React from 'react';
import Image from 'next/image';

type Props = {
  eyebrow: string; title: string; subtitle?: string;
  image?: string; imageAlt?: string;
};

export function PageHeader({ eyebrow, title, subtitle, image, imageAlt }: Props) {
  return (
    <>
      <section className="phdr">
        {image && (
          <div className="phdr__media">
            <Image src={image} alt={imageAlt || title} fill quality={80}
              style={{ objectFit:'cover', objectPosition:'center 35%' }}/>
            <div className="phdr__veil"/>
          </div>
        )}
        <div className="container phdr__content">
          <span className={`eyebrow ${image ? 'eyebrow--light' : ''}`}>{eyebrow}</span>
          <h1 className={`phdr__h1 ${image ? 'phdr__h1--light' : ''}`}>{title}</h1>
          {subtitle && <p className={`phdr__sub ${image ? 'phdr__sub--light' : ''}`}>{subtitle}</p>}
        </div>
      </section>
      <style jsx>{`
        .phdr {
          position: relative; overflow: hidden;
          padding: 110px 0 48px;
          background: #fff; border-bottom: 1px solid #e8e8e8;
        }
        .phdr__media { position: absolute; inset: 0; }
        .phdr__veil {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.15) 100%);
        }
        .phdr__content { position: relative; z-index: 10; }
        .phdr__h1 {
          font-size: clamp(28px, 7vw, 68px);
          font-weight: 300; color: #1a1a1a;
          letter-spacing: -0.03em; line-height: 1.05;
          margin-bottom: 14px; max-width: 680px;
        }
        .phdr__h1--light { color: #fff; }
        .phdr__sub {
          font-size: clamp(14px, 2.5vw, 17px);
          color: #6b6b6b; line-height: 1.6;
          max-width: 540px; font-weight: 300;
        }
        .phdr__sub--light { color: rgba(255,255,255,0.72); }
        @media (min-width: 768px) {
          .phdr { padding: 140px 0 72px; }
        }
      `}</style>
    </>
  );
}
