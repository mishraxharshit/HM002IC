// Fractalysium i18n — 7 European languages
export type Lang = 'en' | 'fr' | 'de' | 'es' | 'it' | 'nl' | 'pl';

export const languages: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English',    flag: 'GB' },
  { code: 'fr', label: 'Français',   flag: 'FR' },
  { code: 'de', label: 'Deutsch',    flag: 'DE' },
  { code: 'es', label: 'Español',    flag: 'ES' },
  { code: 'it', label: 'Italiano',   flag: 'IT' },
  { code: 'nl', label: 'Nederlands', flag: 'NL' },
  { code: 'pl', label: 'Polski',     flag: 'PL' },
];

type T = Record<Lang, string>;

export const tr = {
  nav: {
    brief:        { en:'The Brief',      fr:'Le Brief',           de:'Das Briefing',      es:'El Informe',       it:'Il Briefing',       nl:'Het Briefing',      pl:'Briefing'          } as T,
    capabilities: { en:'Capabilities',  fr:'Capacités',          de:'Fähigkeiten',       es:'Capacidades',      it:'Capacità',          nl:'Capaciteiten',      pl:'Możliwości'        } as T,
    technology:   { en:'Technology',    fr:'Technologie',        de:'Technologie',        es:'Tecnología',       it:'Tecnologia',        nl:'Technologie',       pl:'Technologia'       } as T,
    security:     { en:'Security',      fr:'Sécurité',           de:'Sicherheit',         es:'Seguridad',        it:'Sicurezza',         nl:'Veiligheid',        pl:'Bezpieczeństwo'    } as T,
    research:     { en:'Research',      fr:'Recherche',          de:'Forschung',          es:'Investigación',    it:'Ricerca',           nl:'Onderzoek',         pl:'Badania'           } as T,
    about:        { en:'About',         fr:'À propos',           de:'Über uns',           es:'Nosotros',         it:'Chi siamo',         nl:'Over ons',          pl:'O nas'             } as T,
    access:       { en:'Request Access',fr:'Demander l\'accès',  de:'Zugang beantragen',  es:'Solicitar acceso', it:'Richiedi accesso',  nl:'Toegang aanvragen', pl:'Poproś o dostęp'   } as T,
  },
  hero: {
    tag:   { en:'Geospatial Intelligence', fr:'Intelligence Géospatiale', de:'Geospatiale Intelligenz', es:'Inteligencia Geoespacial', it:'Intelligenza Geospaziale', nl:'Geospatiale Intelligentie', pl:'Inteligencja Geoprzestrzenna' } as T,
    h1a:   { en:'See further.', fr:'Voir plus loin.', de:'Weiter sehen.', es:'Ver más lejos.', it:'Vedere oltre.', nl:'Verder zien.', pl:'Widzieć dalej.' } as T,
    h1b:   { en:'Act first.',   fr:'Agir en premier.', de:'Zuerst handeln.', es:'Actuar primero.', it:'Agire per primi.', nl:'Eerst handelen.', pl:'Działać pierwszy.' } as T,
    desc:  {
      en: 'Cognitive Planetary Intelligence for defence ministries, intelligence agencies, and critical infrastructure protection across Europe.',
      fr: 'Intelligence Planétaire Cognitive pour les ministères de la défense, les agences de renseignement et la protection des infrastructures critiques en Europe.',
      de: 'Kognitive Planetare Intelligenz für Verteidigungsministerien, Nachrichtendienste und den Schutz kritischer Infrastrukturen in Europa.',
      es: 'Inteligencia Planetaria Cognitiva para ministerios de defensa, agencias de inteligencia y protección de infraestructuras críticas en Europa.',
      it: 'Intelligenza Planetaria Cognitiva per ministeri della difesa, agenzie di intelligence e protezione delle infrastrutture critiche in Europa.',
      nl: 'Cognitieve Planetaire Intelligentie voor defensieministeries, inlichtingendiensten en bescherming van kritieke infrastructuur in Europa.',
      pl: 'Kognitywna Inteligencja Planetarna dla ministerstw obrony, agencji wywiadowczych i ochrony infrastruktury krytycznej w Europie.',
    } as T,
    primary:   { en:'Request Access',    fr:'Demander l\'accès',  de:'Zugang beantragen',  es:'Solicitar acceso', it:'Richiedi accesso',  nl:'Toegang aanvragen', pl:'Poproś o dostęp'   } as T,
    secondary: { en:'Read the Brief ↓', fr:'Lire le brief ↓',   de:'Briefing lesen ↓',   es:'Leer el informe ↓',it:'Leggi il briefing ↓',nl:'Lees briefing ↓', pl:'Czytaj briefing ↓' } as T,
    live:      { en:'Live Feed',         fr:'Flux en direct',     de:'Live-Feed',          es:'En vivo',          it:'Live',              nl:'Live',              pl:'Na żywo'           } as T,
  },
  stats: {
    resolution: { en:'Resolution',      fr:'Résolution',    de:'Auflösung',    es:'Resolución',    it:'Risoluzione',    nl:'Resolutie',    pl:'Rozdzielczość'  } as T,
    satellites:  { en:'Satellites',     fr:'Satellites',    de:'Satelliten',   es:'Satélites',     it:'Satelliti',      nl:'Satellieten',  pl:'Satelity'       } as T,
    accuracy:    { en:'Accuracy',       fr:'Précision',     de:'Genauigkeit',  es:'Precisión',     it:'Precisione',     nl:'Nauwkeurigheid',pl:'Dokładność'    } as T,
    latency:     { en:'Latency',        fr:'Latence',       de:'Latenz',       es:'Latencia',      it:'Latenza',        nl:'Latentie',     pl:'Opóźnienie'     } as T,
    domains:     { en:'Domains',        fr:'Domaines',      de:'Domänen',      es:'Dominios',      it:'Domini',         nl:'Domeinen',     pl:'Domeny'         } as T,
    sovereign:   { en:'EU Sovereign',   fr:'Souverain UE',  de:'EU-Souverän',  es:'Soberano UE',   it:'Sovrano UE',     nl:'EU-Soeverein', pl:'Suwerenny UE'   } as T,
  },
  intel: {
    eyebrow: { en:'Who We Are', fr:'Qui sommes-nous', de:'Wer wir sind', es:'Quiénes somos', it:'Chi siamo', nl:'Wie wij zijn', pl:'Kim jesteśmy' } as T,
    display: {
      en: 'Fractalysium is a European sovereign intelligence company fusing satellite sensing, frontier AI, and geospatial science into a single operational platform — engineered for those who cannot afford to be wrong.',
      fr: 'Fractalysium est une société de renseignement souveraine européenne fusionnant la détection satellitaire, l\'IA de pointe et la science géospatiale en une seule plateforme opérationnelle — conçue pour ceux qui ne peuvent pas se permettre de se tromper.',
      de: 'Fractalysium ist ein europäisches souveränes Geheimdienstunternehmen, das Satellitenerfassung, KI an der Spitze und Geowissenschaft zu einer einzigen operativen Plattform vereint — entwickelt für jene, die es sich nicht leisten können, falsch zu liegen.',
      es: 'Fractalysium es una empresa europea de inteligencia soberana que fusiona la detección satelital, la IA de vanguardia y la ciencia geoespacial en una plataforma operativa única — diseñada para quienes no pueden permitirse equivocarse.',
      it: 'Fractalysium è un\'azienda europea di intelligence sovrana che fonde il rilevamento satellitare, l\'AI all\'avanguardia e la scienza geospaziale in un\'unica piattaforma operativa — progettata per chi non può permettersi di sbagliare.',
      nl: 'Fractalysium is een Europees soeverein inlichtingenbedrijf dat satellietdetectie, frontier AI en geospatiële wetenschap samenvoegt in één operationeel platform — ontworpen voor degenen die het zich niet kunnen veroorloven om fout te zitten.',
      pl: 'Fractalysium to europejska suwerenna firma wywiadowcza łącząca wykrywanie satelitarne, zaawansowaną sztuczną inteligencję i naukę geoprzestrzenną w jedną platformę operacyjną — zaprojektowaną dla tych, którzy nie mogą pozwolić sobie na błąd.',
    } as T,
  },
  map: {
    eyebrow: { en:'Live Intelligence Layer', fr:'Couche Intelligence Live', de:'Live-Intelligenzebene', es:'Capa de Inteligencia Live', it:'Strato Intelligence Live', nl:'Live Intelligentielaag', pl:'Warstwa Wywiadu Live' } as T,
    h2a:     { en:'Spectral band analysis.', fr:'Analyse par bande spectrale.', de:'Spektralbandanalyse.', es:'Análisis de banda espectral.', it:'Analisi per banda spettrale.', nl:'Spectraalbandanalyse.', pl:'Analiza pasma spektralnego.' } as T,
    h2b:     { en:'Real terrain data.',      fr:'Données terrain réelles.',    de:'Echte Geländedaten.',  es:'Datos de terreno reales.',    it:'Dati del terreno reali.',      nl:'Echte terreingegevens.',   pl:'Rzeczywiste dane terenu.'  } as T,
    bands:   { en:'Spectral Bands', fr:'Bandes Spectrales', de:'Spektralbänder', es:'Bandas Espectrales', it:'Bande Spettrali', nl:'Spectraalbanden', pl:'Pasma Spektralne' } as T,
    active:  { en:'Active', fr:'Actif', de:'Aktiv', es:'Activo', it:'Attivo', nl:'Actief', pl:'Aktywny' } as T,
  },
  capabilities: {
    eyebrow: { en:'Core Capabilities', fr:'Capacités Principales', de:'Kernfähigkeiten', es:'Capacidades Clave', it:'Capacità Chiave', nl:'Kernmogelijkheden', pl:'Kluczowe Możliwości' } as T,
    h2a:     { en:'Five domains.', fr:'Cinq domaines.', de:'Fünf Domänen.', es:'Cinco dominios.', it:'Cinque domini.', nl:'Vijf domeinen.', pl:'Pięć domen.' } as T,
    h2b:     { en:'One sovereign platform.', fr:'Une plateforme souveraine.', de:'Eine souveräne Plattform.', es:'Una plataforma soberana.', it:'Una piattaforma sovrana.', nl:'Één soeverein platform.', pl:'Jedna suwerenna platforma.' } as T,
  },
  cta: {
    eyebrow:  { en:'Ready to see further?', fr:'Prêt à voir plus loin?', de:'Bereit, weiter zu sehen?', es:'¿Listo para ver más lejos?', it:'Pronto a vedere oltre?', nl:'Klaar om verder te kijken?', pl:'Gotowy zobaczyć dalej?' } as T,
    primary:  { en:'Request Access', fr:'Demander l\'accès', de:'Zugang beantragen', es:'Solicitar acceso', it:'Richiedi accesso', nl:'Toegang aanvragen', pl:'Poproś o dostęp' } as T,
    secondary:{ en:'View Capabilities', fr:'Voir les capacités', de:'Fähigkeiten ansehen', es:'Ver capacidades', it:'Vedi capacità', nl:'Bekijk mogelijkheden', pl:'Zobacz możliwości' } as T,
  },
  footer: {
    tagline:   { en:'Sovereign intelligence for those who cannot afford to be wrong.', fr:'Renseignement souverain pour ceux qui ne peuvent pas se permettre de se tromper.', de:'Souveräne Intelligenz für jene, die es sich nicht leisten können, falsch zu liegen.', es:'Inteligencia soberana para quienes no pueden permitirse equivocarse.', it:'Intelligence sovrana per chi non può permettersi di sbagliare.', nl:'Soevereine intelligentie voor degenen die het zich niet kunnen veroorloven om fout te zitten.', pl:'Suwerenny wywiad dla tych, którzy nie mogą pozwolić sobie na błąd.' } as T,
    copy:      { en:'© 2026 Fractalysium. All rights reserved.', fr:'© 2026 Fractalysium. Tous droits réservés.', de:'© 2026 Fractalysium. Alle Rechte vorbehalten.', es:'© 2026 Fractalysium. Todos los derechos reservados.', it:'© 2026 Fractalysium. Tutti i diritti riservati.', nl:'© 2026 Fractalysium. Alle rechten voorbehouden.', pl:'© 2026 Fractalysium. Wszelkie prawa zastrzeżone.' } as T,
    privacy:   { en:'Privacy Policy', fr:'Confidentialité', de:'Datenschutz', es:'Privacidad', it:'Privacy', nl:'Privacybeleid', pl:'Prywatność' } as T,
    terms:     { en:'Terms of Use', fr:'Conditions', de:'Nutzungsbedingungen', es:'Términos', it:'Termini', nl:'Voorwaarden', pl:'Warunki' } as T,
  },
  contact: {
    eyebrow:  { en:'Classified Access', fr:'Accès Classifié', de:'Klassifizierter Zugang', es:'Acceso Clasificado', it:'Accesso Classificato', nl:'Geclassificeerde Toegang', pl:'Dostęp Zastrzeżony' } as T,
    h1:       { en:'Request Access', fr:'Demander l\'accès', de:'Zugang beantragen', es:'Solicitar acceso', it:'Richiedi accesso', nl:'Toegang aanvragen', pl:'Poproś o dostęp' } as T,
    name:     { en:'Full Name', fr:'Nom complet', de:'Vollständiger Name', es:'Nombre completo', it:'Nome completo', nl:'Volledige naam', pl:'Imię i nazwisko' } as T,
    email:    { en:'Email Address', fr:'Adresse e-mail', de:'E-Mail-Adresse', es:'Correo electrónico', it:'Indirizzo email', nl:'E-mailadres', pl:'Adres e-mail' } as T,
    org:      { en:'Organisation', fr:'Organisation', de:'Organisation', es:'Organización', it:'Organizzazione', nl:'Organisatie', pl:'Organizacja' } as T,
    domain:   { en:'Intelligence Domain', fr:'Domaine de renseignement', de:'Intelligenzbereich', es:'Dominio de inteligencia', it:'Dominio intelligence', nl:'Intelligentiedomein', pl:'Domena wywiadu' } as T,
    message:  { en:'Message', fr:'Message', de:'Nachricht', es:'Mensaje', it:'Messaggio', nl:'Bericht', pl:'Wiadomość' } as T,
    send:     { en:'Submit Request', fr:'Soumettre', de:'Einreichen', es:'Enviar', it:'Invia', nl:'Indienen', pl:'Wyślij' } as T,
    success:  { en:'Request received. We will be in contact within 48 hours.', fr:'Demande reçue. Nous vous contacterons dans les 48 heures.', de:'Anfrage erhalten. Wir werden uns innerhalb von 48 Stunden melden.', es:'Solicitud recibida. Nos pondremos en contacto en 48 horas.', it:'Richiesta ricevuta. Ti contatteremo entro 48 ore.', nl:'Verzoek ontvangen. We nemen binnen 48 uur contact op.', pl:'Wniosek otrzymany. Skontaktujemy się w ciągu 48 godzin.' } as T,
  },
} as const;

export type TDict = typeof tr;

export function t(node: T, lang: Lang): string {
  return node[lang] ?? node.en;
}
