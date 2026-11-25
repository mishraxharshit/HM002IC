"use client";
import React, { useEffect, useRef, useState } from 'react';

/* ────────────────────────────────────────────────────────────────
   Formulaire de contact qualifié — Fractalysium

   Variables d'environnement :
     NEXT_PUBLIC_API_URL=https://api.votre-domaine.eu   (obligatoire en production)

   Rappel : la validation côté navigateur améliore l'expérience mais ne
   protège pas. L'API doit REVALIDER chaque champ, limiter le débit (rate limit),
   et échapper/neutraliser les contenus avant tout e-mail ou export (CSV, CRM).
   ──────────────────────────────────────────────────────────────── */

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'config';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000');

const FALLBACK_EMAIL = 'contact@fractalysium.com';

// Mettre à false pour accepter les adresses personnelles (gmail, outlook…).
const REQUIRE_PROFESSIONAL_EMAIL = true;
const FREE_MAIL = /@(gmail|googlemail|yahoo|ymail|hotmail|outlook|live|msn|icloud|me|aol|gmx|mail|yandex|proton|protonmail|orange|wanadoo|free|sfr|laposte)\.[a-z.]+$/i;

const MIN_FILL_MS = 4000; // un humain ne remplit pas ce formulaire en moins de 4 s

const ORG_TYPES = [
  'Ministère / administration centrale',
  'Agence publique ou institution européenne',
  'Défense / forces armées',
  'Sécurité civile / protection civile',
  'Opérateur d\'infrastructures critiques (OIV / OSE)',
  'Recherche / université',
  'Industriel / intégrateur',
  'Organisation internationale / ONG',
  'Autre',
];

const COUNTRIES = [
  'France', 'Allemagne', 'Autriche', 'Belgique', 'Bulgarie', 'Chypre', 'Croatie', 'Danemark', 'Espagne', 'Estonie',
  'Finlande', 'Grèce', 'Hongrie', 'Irlande', 'Italie', 'Lettonie', 'Lituanie', 'Luxembourg', 'Malte', 'Pays-Bas',
  'Pologne', 'Portugal', 'Roumanie', 'Slovaquie', 'Slovénie', 'Suède', 'Tchéquie',
  'Norvège', 'Royaume-Uni', 'Suisse', 'Autre pays',
];

const DOMAINS = [
  'Alerte précoce aux catastrophes',
  'Sécurité maritime',
  'Infrastructures et zones urbaines',
  'Climat et environnement',
  'Agriculture et sécurité alimentaire',
  'Défense et renseignement',
  'Partenariat de recherche',
  'Autre',
];

const SENSITIVITY = [
  'Données ouvertes / non sensibles',
  'Usage interne (diffusion restreinte)',
  'Sensible (confidentiel)',
  'Très sensible (nécessite un cadre d\'habilitation)',
  'À déterminer avec vos équipes',
];

const TIMELINES = ['Immédiat (moins de 3 mois)', '3 à 6 mois', '6 à 12 mois', 'Phase d\'exploration'];
const DEPLOYMENTS = ['Plateforme souveraine hébergée', 'Sur site / réseau isolé', 'Hybride', 'À définir'];
const CHANNELS = ['E-mail', 'Téléphone', 'Visioconférence', 'Rencontre en personne'];

type Form = {
  prenom: string; nom: string; fonction: string; email: string; tel: string;
  org: string; typeOrg: string; pays: string;
  domaine: string; sensibilite: string; calendrier: string; deploiement: string; canal: string;
  message: string; consent: boolean; siteweb: string; // siteweb = honeypot
};

const EMPTY: Form = {
  prenom: '', nom: '', fonction: '', email: '', tel: '',
  org: '', typeOrg: '', pays: '',
  domaine: '', sensibilite: '', calendrier: '', deploiement: 'À définir', canal: 'E-mail',
  message: '', consent: false, siteweb: '',
};

type Errors = Partial<Record<keyof Form, string>>;

// Supprime caractères de contrôle et marques bidirectionnelles (usurpation visuelle).
const clean = (v: string) =>
  v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g, '').trim();

function validate(f: Form): Errors {
  const e: Errors = {};
  const len = (v: string, min: number, max: number) => v.length >= min && v.length <= max;

  if (!len(clean(f.prenom), 2, 60)) e.prenom = 'Indiquez votre prénom.';
  if (!len(clean(f.nom), 2, 60)) e.nom = 'Indiquez votre nom.';
  if (!len(clean(f.fonction), 2, 80)) e.fonction = 'Indiquez votre fonction.';

  const mail = clean(f.email).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail) || mail.length > 254) e.email = 'Adresse e-mail invalide.';
  else if (REQUIRE_PROFESSIONAL_EMAIL && FREE_MAIL.test(mail))
    e.email = 'Merci d\'utiliser votre adresse e-mail professionnelle.';

  if (f.tel && !/^[+()\d\s.-]{6,20}$/.test(clean(f.tel))) e.tel = 'Numéro de téléphone invalide.';

  if (!len(clean(f.org), 2, 120)) e.org = 'Indiquez le nom de votre organisation.';
  if (!f.typeOrg) e.typeOrg = 'Sélectionnez un type d\'organisation.';
  if (!f.pays) e.pays = 'Sélectionnez un pays.';

  if (!f.domaine) e.domaine = 'Sélectionnez un domaine.';
  if (!f.sensibilite) e.sensibilite = 'Sélectionnez un niveau de sensibilité.';
  if (!f.calendrier) e.calendrier = 'Sélectionnez un calendrier.';

  if (!len(clean(f.message), 20, 2000)) e.message = 'Décrivez votre besoin (20 caractères minimum).';
  if (!f.consent) e.consent = 'Votre accord est nécessaire pour traiter votre demande.';
  return e;
}

const ORDER: (keyof Form)[] = [
  'prenom', 'nom', 'fonction', 'email', 'tel', 'org', 'typeOrg', 'pays',
  'domaine', 'sensibilite', 'calendrier', 'message', 'consent',
];

export function ContactForm() {
  const [f, setF] = useState<Form>(EMPTY);
  const [err, setErr] = useState<Errors>({});
  const [s, setS] = useState<Status>('idle');
  const openedAt = useRef(0);

  useEffect(() => { openedAt.current = Date.now(); }, []);

  const set = <K extends keyof Form>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const v = (e.target as HTMLInputElement).type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
      setF(p => ({ ...p, [k]: v as Form[K] }));
      if (err[k]) setErr(p => ({ ...p, [k]: undefined }));
    };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (s === 'sending') return;

    const errors = validate(f);
    setErr(errors);
    const first = ORDER.find(k => errors[k]);
    if (first) { document.getElementById(`cf-${first}`)?.focus(); return; }

    // Anti-robot : champ piège rempli ou envoi anormalement rapide → on fait semblant de réussir.
    if (f.siteweb || Date.now() - openedAt.current < MIN_FILL_MS) { setS('sent'); return; }

    if (!API_URL) { setS('config'); return; }

    const c = (v: string) => clean(v);
    const details = [
      `Fonction : ${c(f.fonction)}`,
      `Type d'organisation : ${f.typeOrg}`,
      `Pays : ${f.pays}`,
      f.tel ? `Téléphone : ${c(f.tel)}` : null,
      `Domaine d'intérêt : ${f.domaine}`,
      `Sensibilité des données : ${f.sensibilite}`,
      `Calendrier : ${f.calendrier}`,
      `Déploiement souhaité : ${f.deploiement}`,
      `Canal de réponse préféré : ${f.canal}`,
    ].filter(Boolean).join('\n');

    // Champs historiques (name / email / org / domain / message) conservés pour rester
    // compatible avec l'API actuelle ; les détails sont aussi ajoutés au message.
    const payload = {
      name: `${c(f.prenom)} ${c(f.nom)}`,
      email: c(f.email).toLowerCase(),
      org: c(f.org),
      domain: f.domaine,
      message: `${c(f.message)}\n\n--- Informations de qualification ---\n${details}`,
      first_name: c(f.prenom),
      last_name: c(f.nom),
      job_title: c(f.fonction),
      phone: c(f.tel),
      org_type: f.typeOrg,
      country: f.pays,
      data_sensitivity: f.sensibilite,
      timeline: f.calendrier,
      deployment: f.deploiement,
      preferred_channel: f.canal,
      consent: true,
      consent_at: new Date().toISOString(),
      locale: 'fr',
    };

    setS('sending');
    const ctrl = new AbortController();
    const timer = window.setTimeout(() => ctrl.abort(), 15000);
    try {
      const r = await fetch(`${API_URL}/api/v1/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
        cache: 'no-store',
        signal: ctrl.signal,
      });
      setS(r.ok ? 'sent' : 'error');
      if (r.ok) setF(EMPTY);
    } catch {
      setS('error');
    } finally {
      window.clearTimeout(timer);
    }
  };

  if (s === 'sent') {
    return (
      <div className="cf-ok" role="status">
        <span className="live-dot" style={{ marginTop: 6 }} />
        <div>
          <strong>Merci, votre demande a bien été transmise.</strong>
          <p>Un membre de notre équipe vous répondra sous deux jours ouvrés, par le canal que vous avez indiqué.</p>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .cf-ok{display:flex;gap:12px;align-items:flex-start;padding:22px 24px;background:#f0f9f4;border:1px solid #b8e0ca;border-radius:4px;color:#2a6e45;max-width:860px}
          .cf-ok strong{display:block;font-weight:500;margin-bottom:4px}
          .cf-ok p{font-size:14px;line-height:1.6;max-width:none!important}
        ` }} />
      </div>
    );
  }

  const field = (k: keyof Form) => ({
    id: `cf-${k}`,
    'aria-invalid': err[k] ? true : undefined,
    'aria-describedby': err[k] ? `cf-${k}-err` : undefined,
  });
  const msg = (k: keyof Form) =>
    err[k] ? <span id={`cf-${k}-err`} className="cf-err">{err[k]}</span> : null;
  const errCount = Object.values(err).filter(Boolean).length;

  return (
    <>
      <div className="cf-secure" role="note">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="10.5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        <p>
          Connexion chiffrée (HTTPS). Ce formulaire n'utilise ni cookie ni traceur et ne conserve rien dans votre navigateur.
          <strong> N'y transmettez aucune information classifiée ou sensible</strong> : un échange sécurisé sera organisé après qualification de votre demande.
        </p>
      </div>

      <form onSubmit={submit} noValidate autoComplete="on" className="cf-form" aria-label="Formulaire de contact">
        {errCount > 0 && (
          <div className="cf-summary" role="alert">
            Merci de corriger {errCount} champ{errCount > 1 ? 's' : ''} avant d'envoyer.
          </div>
        )}

        {/* Champ piège — invisible pour les humains */}
        <div className="cf-hp" aria-hidden="true">
          <label>Ne pas remplir<input tabIndex={-1} autoComplete="off" name="siteweb" value={f.siteweb} onChange={set('siteweb')} /></label>
        </div>

        <fieldset className="cf-set">
          <legend><span>01</span> Votre identité</legend>
          <div className="cf-row">
            <div className="cf-g"><label className="cf-l" htmlFor="cf-prenom">Prénom *</label>
              <input className="form-input" {...field('prenom')} value={f.prenom} onChange={set('prenom')} maxLength={60} autoComplete="given-name" />{msg('prenom')}</div>
            <div className="cf-g"><label className="cf-l" htmlFor="cf-nom">Nom *</label>
              <input className="form-input" {...field('nom')} value={f.nom} onChange={set('nom')} maxLength={60} autoComplete="family-name" />{msg('nom')}</div>
          </div>
          <div className="cf-g"><label className="cf-l" htmlFor="cf-fonction">Fonction *</label>
            <input className="form-input" {...field('fonction')} value={f.fonction} onChange={set('fonction')} maxLength={80} autoComplete="organization-title" placeholder="Ex. : Responsable de la sécurité civile" />{msg('fonction')}</div>
          <div className="cf-row">
            <div className="cf-g"><label className="cf-l" htmlFor="cf-email">E-mail professionnel *</label>
              <input className="form-input" type="email" inputMode="email" {...field('email')} value={f.email} onChange={set('email')} maxLength={254} autoComplete="email" placeholder="prenom.nom@organisation.eu" />{msg('email')}</div>
            <div className="cf-g"><label className="cf-l" htmlFor="cf-tel">Téléphone (facultatif)</label>
              <input className="form-input" type="tel" inputMode="tel" {...field('tel')} value={f.tel} onChange={set('tel')} maxLength={20} autoComplete="tel" placeholder="+33 …" />{msg('tel')}</div>
          </div>
        </fieldset>

        <fieldset className="cf-set">
          <legend><span>02</span> Votre organisation</legend>
          <div className="cf-g"><label className="cf-l" htmlFor="cf-org">Nom de l'organisation *</label>
            <input className="form-input" {...field('org')} value={f.org} onChange={set('org')} maxLength={120} autoComplete="organization" placeholder="Ministère, agence, institution, entreprise" />{msg('org')}</div>
          <div className="cf-row">
            <div className="cf-g"><label className="cf-l" htmlFor="cf-typeOrg">Type d'organisation *</label>
              <select className="form-input cf-select" {...field('typeOrg')} value={f.typeOrg} onChange={set('typeOrg')}>
                <option value="">Sélectionner</option>{ORG_TYPES.map(o => <option key={o}>{o}</option>)}</select>{msg('typeOrg')}</div>
            <div className="cf-g"><label className="cf-l" htmlFor="cf-pays">Pays *</label>
              <select className="form-input cf-select" {...field('pays')} value={f.pays} onChange={set('pays')} autoComplete="country-name">
                <option value="">Sélectionner</option>{COUNTRIES.map(o => <option key={o}>{o}</option>)}</select>{msg('pays')}</div>
          </div>
        </fieldset>

        <fieldset className="cf-set">
          <legend><span>03</span> Votre besoin</legend>
          <div className="cf-row">
            <div className="cf-g"><label className="cf-l" htmlFor="cf-domaine">Domaine d'intérêt *</label>
              <select className="form-input cf-select" {...field('domaine')} value={f.domaine} onChange={set('domaine')}>
                <option value="">Sélectionner</option>{DOMAINS.map(o => <option key={o}>{o}</option>)}</select>{msg('domaine')}</div>
            <div className="cf-g"><label className="cf-l" htmlFor="cf-sensibilite">Sensibilité des données *</label>
              <select className="form-input cf-select" {...field('sensibilite')} value={f.sensibilite} onChange={set('sensibilite')}>
                <option value="">Sélectionner</option>{SENSITIVITY.map(o => <option key={o}>{o}</option>)}</select>{msg('sensibilite')}</div>
          </div>
          <div className="cf-row">
            <div className="cf-g"><label className="cf-l" htmlFor="cf-calendrier">Calendrier du projet *</label>
              <select className="form-input cf-select" {...field('calendrier')} value={f.calendrier} onChange={set('calendrier')}>
                <option value="">Sélectionner</option>{TIMELINES.map(o => <option key={o}>{o}</option>)}</select>{msg('calendrier')}</div>
            <div className="cf-g"><label className="cf-l" htmlFor="cf-deploiement">Déploiement souhaité</label>
              <select className="form-input cf-select" {...field('deploiement')} value={f.deploiement} onChange={set('deploiement')}>
                {DEPLOYMENTS.map(o => <option key={o}>{o}</option>)}</select></div>
          </div>
          <div className="cf-g"><label className="cf-l" htmlFor="cf-canal">Canal de réponse préféré</label>
            <select className="form-input cf-select" {...field('canal')} value={f.canal} onChange={set('canal')}>
              {CHANNELS.map(o => <option key={o}>{o}</option>)}</select></div>
          <div className="cf-g"><label className="cf-l" htmlFor="cf-message">Décrivez votre besoin *</label>
            <textarea className="form-input" rows={6} {...field('message')} value={f.message} onChange={set('message')} maxLength={2000}
              placeholder="Contexte, zone d'intérêt, type d'analyse attendu, contraintes de souveraineté ou de conformité…" />
            <span className="cf-count">{f.message.length} / 2000</span>{msg('message')}</div>
        </fieldset>

        <div className="cf-consent">
          <label className="cf-check">
            <input type="checkbox" {...field('consent')} checked={f.consent} onChange={set('consent')} />
            <span>
              J'accepte que Fractalysium traite ces informations pour répondre à ma demande, conformément à la{' '}
              <a href="/legal/politique-de-confidentialite" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>.
              Je peux exercer mes droits (accès, rectification, effacement) à tout moment. *
            </span>
          </label>
          {msg('consent')}
        </div>

        <div className="cf-actions">
          <button className="cf-submit" type="submit" disabled={s === 'sending'}>
            {s === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {s === 'error' && <p className="cf-fail" role="alert">L'envoi a échoué. Réessayez ou écrivez-nous à {FALLBACK_EMAIL}.</p>}
          {s === 'config' && <p className="cf-fail" role="alert">Le service d'envoi n'est pas disponible. Écrivez-nous à {FALLBACK_EMAIL}.</p>}
        </div>
      </form>

      <style dangerouslySetInnerHTML={{ __html: `
        .cf-secure{display:flex;gap:12px;align-items:flex-start;max-width:860px;margin-bottom:28px;padding:16px 18px;background:#0a1628;color:rgba(255,255,255,.86);border-radius:4px}
        .cf-secure svg{flex-shrink:0;margin-top:2px;color:#d4ae6a}
        .cf-secure p{font-size:13px;line-height:1.6;max-width:none!important;color:inherit!important}
        .cf-secure strong{color:#fff;font-weight:500}
        .cf-form{max-width:860px;display:block!important}
        .cf-summary{margin-bottom:20px;padding:12px 16px;border:1px solid #e5b4ad;background:#fdf3f1;color:#a93226;font-size:14px;border-radius:4px}
        .cf-hp{position:absolute!important;left:-9999px;width:1px;height:1px;overflow:hidden}
        .cf-set{border:0;padding:0;margin:0 0 34px;min-width:0}
        .cf-set legend{display:flex;align-items:center;gap:12px;font-size:18px;font-weight:400;letter-spacing:-.01em;color:#1a1a1a;padding:0 0 16px;margin-bottom:4px;width:100%;border-bottom:1px solid #d9dce1}
        .cf-set legend span{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:#b8954a}
        .cf-row{display:flex;flex-direction:column}
        .cf-g{display:flex!important;flex-direction:column;gap:6px;margin-top:18px}
        .cf-l{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6b6b6b}
        .cf-form .form-input{background:#fff;border:1px solid #c9ccd1;padding:13px 14px;font-size:15px}
        .cf-form .form-input:focus{border-color:#0a1628;box-shadow:0 0 0 3px rgba(10,22,40,.12)}
        .cf-form .form-input[aria-invalid="true"]{border-color:#c0392b}
        .cf-select{padding-right:40px!important;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%230a1628' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;cursor:pointer}
        .cf-err{font-size:12.5px;color:#c0392b}
        .cf-count{align-self:flex-end;font-family:var(--mono);font-size:10px;color:#9b9b9b}
        .cf-consent{margin:6px 0 24px}
        .cf-check{display:flex!important;gap:12px;align-items:flex-start;font-size:13.5px!important;line-height:1.6;color:#444!important;cursor:pointer}
        .cf-check input{flex-shrink:0;width:18px;height:18px;margin-top:2px;padding:0!important;-webkit-appearance:auto;appearance:auto;accent-color:#0a1628}
        .cf-check a{text-decoration:underline;text-underline-offset:2px}
        .cf-actions{display:flex;flex-wrap:wrap;align-items:center;gap:16px}
        .cf-submit{display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 28px;background:#0a1628;color:#fff;font-size:15px;font-weight:500;border-radius:4px;transition:background .2s,gap .3s}
        .cf-submit:hover:not(:disabled){background:#1d3557;gap:14px}
        .cf-submit:disabled{opacity:.6;cursor:wait}
        .cf-submit:focus-visible{outline:2px solid #b8954a;outline-offset:3px}
        .cf-fail{font-size:13.5px;color:#c0392b;max-width:none!important}
        @media(min-width:640px){.cf-row{flex-direction:row;gap:18px}.cf-row .cf-g{flex:1;min-width:0}}
      ` }} />
    </>
  );
}
