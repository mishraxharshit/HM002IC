import { Navigation }         from '@/components/marketing/Navigation';
import { PageHeader, CTASection, Footer } from '@/components/marketing/Layout';
import { ScrollReveal }       from '@/components/marketing/ScrollReveal';
import { ContactForm }        from '@/components/marketing/Contact';
import { NewsBlogListing }    from '@/components/marketing/NewsBlogListing';
import { NewsArticle }        from '@/components/marketing/NewsArticle';
import { notFound }           from 'next/navigation';
import { getNewsBySlug, news } from '@/lib/data/news';

// ── ABOUT ─────────────────────────────────────────────────────
const TEAM = [
  {
    i: 'WB', name: 'Walter Bizzari',
    role: 'Chairman and Chief Executive Officer',
    bio: 'Leads Fractalysium with a focus on European sovereign intelligence infrastructure and strategic partnerships with government agencies and defence institutions across the EU.',
  },
  {
    i: 'HM', name: 'Harshit Mishra',
    role: 'Chief Technology Officer',
    bio: 'Architects the Fractalysium cognitive platform, leading the engineering team responsible for satellite data fusion, AI inference pipelines, and EU AI Act compliance systems.',
  },
  {
    i: 'EK', name: 'Dr. Elena Kovacs',
    role: 'Chief Science Officer',
    bio: 'Fourteen years at ESA working on the Copernicus Sentinel programme. Pioneer of multi-source data fusion pipelines for operational environmental intelligence.',
  },
  {
    i: 'MB', name: 'Matthias Bauer',
    role: 'Head of Cognitive AI',
    bio: 'Former causal inference research lead at a European technical university. Expert in probabilistic reasoning and EU AI Act compliance architecture.',
  },
  {
    i: 'IM', name: 'Isabelle Marchetti',
    role: 'Director, Government Relations',
    bio: 'Former policy adviser to the European Commission on the EU Space Programme. Specialist in Copernicus governance and European defence procurement.',
  },
  {
    i: 'AR', name: 'Dr. Andrei Rusu',
    role: 'Senior Earth Observation Scientist',
    bio: 'Remote sensing specialist with deep expertise in Sentinel-1 SAR processing and InSAR time series analysis. Leads the ground deformation and maritime domain awareness research streams.',
  },
  {
    i: 'SV', name: 'Sofia Vasquez',
    role: 'AI Platform Engineer',
    bio: 'Builds and maintains the Fractalysium inference pipeline, from onboard edge models to cloud-side cognitive reasoning. Specialises in low-latency geospatial AI systems at production scale.',
  },
  {
    i: 'LK', name: 'Lukas Keller',
    role: 'Geospatial Systems Engineer',
    bio: 'Responsible for data ingestion architecture, Copernicus feed integration, and INSPIRE-compatible output standards. Ensures every observation moves from satellite to analysis with no data loss.',
  },
];

const MILESTONES = [
  { year: '2024', text: 'Fractalysium founded. Core team assembled from ESA, European universities, and EU policy institutions.' },
  { year: '2024', text: 'Sentinel-1 SAR maritime detection engine validated in Mediterranean exercise. Eleven vessels identified, three confirmed by coastal authority.' },
  { year: '2025', text: 'Cognitive platform reaches sub-60-second wildfire alert latency. Danube Basin agricultural pilot delivers 62-day harvest forecast with 4.3 percent mean error.' },
  { year: '2026', text: 'EU AI Act high risk system conformity completed. Maritime Domain Awareness platform enters operational trial with European coastal authority.' },
];

export function AboutPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Who We Are"
        title="Intelligence, reimagined."
        subtitle="Fractalysium is a European satellite intelligence company. We build the reasoning layer between open satellite data and the institutions that need to act on it."
        image="/assets/images/spacecraft.jpg"
        imageAlt="Spacecraft above Earth"
      />

      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Mission</span>
          <p className="display-text">
            We turn the world's most comprehensive open satellite programme into real time
            intelligence for European institutions. The data is European. The reasoning is ours.
            The decisions belong to you.
          </p>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <span className="eyebrow">Our Journey</span>
          <div style={{ marginTop: 24, border: '1px solid #e8e8e8', background: '#fff' }}>
            {MILESTONES.map((m, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '68px 1fr',
                borderBottom: i < MILESTONES.length - 1 ? '1px solid #f0f0f0' : 'none',
              }}>
                <div style={{ padding: '16px', fontFamily: 'var(--mono)', fontSize: 'clamp(14px,3vw,20px)', fontWeight: 500, color: '#b8954a', borderRight: '1px solid #f0f0f0', display: 'flex', alignItems: 'flex-start' }}>
                  {m.year}
                </div>
                <div style={{ padding: '16px 20px', fontSize: 14, color: '#6b6b6b', lineHeight: 1.65 }}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">The Team</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: '#e8e8e8', border: '1px solid #e8e8e8', marginTop: 24 }}>
            {TEAM.map(m => (
              <div key={m.name} style={{ background: '#fff', padding: '28px 24px' }}>
                <div style={{ width: 44, height: 44, background: '#f7f7f7', border: '1px solid #e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13, color: '#9b9b9b', marginBottom: 14 }}>
                  {m.i}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', marginBottom: 2 }}>{m.name}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8954a', marginBottom: 10 }}>{m.role}</div>
                <p style={{ fontSize: 13, color: '#6b6b6b', lineHeight: 1.65 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="section section--off">
        <div className="container">
          <span className="eyebrow">Careers</span>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 300, color: '#1a1a1a', letterSpacing: '-0.02em', marginBottom: 14, lineHeight: 1.2 }}>
            Build satellite intelligence for Europe.
          </h2>
          <p style={{ fontSize: 15, color: '#6b6b6b', lineHeight: 1.72, maxWidth: 540, marginBottom: 28 }}>
            We are a small European team solving problems at the intersection of satellite
            intelligence, causal AI, and EU governance. If you want to build things that
            matter, get in touch.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 1, background: '#e8e8e8', border: '1px solid #e8e8e8', marginBottom: 20 }}>
            {[
              ['Senior Earth Observation Data Scientist', 'Europe · Remote · Full Time'],
              ['Cognitive AI Engineer',                   'Europe · Remote · Full Time'],
            ].map(([t, l]) => (
              <div key={t} style={{ background: '#fff', padding: '20px 22px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8954a', marginBottom: 6 }}>Open</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#1a1a1a', marginBottom: 4 }}>{t}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#9b9b9b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9b9b9b' }}>
            Open applications:{' '}
            <span style={{ color: '#1a1a1a' }}>careers@fractalysium.com</span>
          </p>
        </div>
      </section>

      <ScrollReveal><CTASection /></ScrollReveal>
      <Footer />
    </main>
  );
}

// ── CONTACT ───────────────────────────────────────────────────
export function ContactPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Get in Touch"
        title="Request Access."
        subtitle="We work with European government agencies, civil defence services, defence ministries, port authorities, agricultural ministries, and critical infrastructure operators. Every request is reviewed personally."
      />
      <section className="section">
        <div className="container">
          {/* contact-layout and contact-aside classes are in globals.css */}
          <div className="contact-layout">
            <ContactForm />
            <aside className="contact-aside">
              <div className="contact-info-box">
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8954a', marginBottom: 10 }}>
                  Contact
                </div>
                {[
                  ['Email',         'contact@fractalysium.com'],
                  ['Web',           'fractalysium.com'],
                  ['Jurisdiction',  'European Union'],
                  ['Response time', '2 business days'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 6, fontSize: 13, flexWrap: 'wrap' }}>
                    <span style={{ color: '#9b9b9b', fontFamily: 'var(--mono)', fontSize: 10 }}>{k}</span>
                    <span style={{ color: '#1a1a1a', fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>
              <div className="contact-who-box">
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8954a', marginBottom: 12 }}>
                  Who We Work With
                </div>
                {[
                  'European government agencies',
                  'Civil defence and emergency services',
                  'Defence ministries',
                  'Port and maritime authorities',
                  'Agricultural ministries',
                  'Critical infrastructure operators',
                  'Research institutions',
                ].map(s => (
                  <div key={s} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#6b6b6b', marginBottom: 8, lineHeight: 1.4 }}>
                    <span style={{ color: '#b8954a', flexShrink: 0 }}>→</span>{s}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

// ── NEWS LISTING ──────────────────────────────────────────────
export function NewsPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Intelligence Dispatch"
        title="Latest research and field reports."
        subtitle="Research papers, case studies, and analysis from the Fractalysium team."
        image="/assets/images/dish-blue.jpg"
        imageAlt="Satellite dish"
      />
      <NewsBlogListing />
      <Footer />
    </main>
  );
}

// ── ARTICLE ───────────────────────────────────────────────────
export function ArticlePage({ slug }: { slug: string }) {
  const item = getNewsBySlug(slug);
  if (!item) notFound();
  return (
    <main>
      <Navigation />
      <NewsArticle item={item} />
      <Footer />
    </main>
  );
}
