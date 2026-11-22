// À PROPOS — équipe et informations de l'entreprise.
// Les sections « histoire » et « implantations » s'affichent dès qu'elles contiennent des entrées.
// `role` = affichage français ; `roleEn` = intitulé anglais (pour une future version anglaise).
export const entreprise = {
  direction: [
    { nom: 'Walter Bizzari', roleEn: 'Chairman and Chief Executive Officer', role: 'Président et directeur général', bio: "Dirige Fractalysium avec un accent sur l'infrastructure européenne de renseignement souverain et les partenariats stratégiques avec les agences gouvernementales et les institutions de défense de l'UE.", photo: '' },
    { nom: 'Harshit Mishra', roleEn: 'Chief Technology Officer', role: 'Directeur de la technologie', bio: "Conçoit la plateforme cognitive de Fractalysium et dirige l'équipe d'ingénierie chargée de la fusion de données satellitaires, des pipelines d'inférence IA et des systèmes de conformité au règlement européen sur l'IA.", photo: '' },
    { nom: 'Dr Elena Kovacs', roleEn: 'Chief Science Officer', role: 'Directrice scientifique', bio: "Quatorze ans à l'ESA sur le programme Copernicus Sentinel. Pionnière des pipelines de fusion de données multi-sources pour le renseignement environnemental opérationnel.", photo: '' },
    { nom: 'Matthias Bauer', roleEn: 'Head of Data', role: 'Responsable des données', bio: "Ancien responsable de recherche en inférence causale dans une université technique européenne. Expert du raisonnement probabiliste et de l'architecture de conformité au règlement européen sur l'IA.", photo: '' },
    { nom: 'Isabelle Marchetti', roleEn: 'Director, Government Relations', role: 'Directrice des relations institutionnelles', bio: "Ancienne conseillère politique de la Commission européenne sur le programme spatial de l'UE. Spécialiste de la gouvernance Copernicus et des achats de défense européens.", photo: '' },
    { nom: 'Dr Andrei Rusu', roleEn: 'Senior Earth Observation Scientist', role: 'Scientifique senior en observation de la Terre', bio: "Spécialiste de la télédétection, expert du traitement SAR Sentinel-1 et des séries temporelles InSAR. Dirige les travaux sur la déformation du sol et la surveillance maritime.", photo: '' },
    { nom: 'Sofia Vasquez', roleEn: 'AI Platform Engineer', role: 'Ingénieure plateforme IA', bio: "Construit et maintient le pipeline d'inférence, des modèles embarqués en périphérie au raisonnement cognitif dans le cloud. Spécialisée dans l'IA géospatiale à faible latence à l'échelle de production.", photo: '' },
    { nom: 'Lukas Keller', roleEn: 'Geospatial Systems Engineer', role: 'Ingénieur systèmes géospatiaux', bio: "Responsable de l'architecture d'ingestion des données, de l'intégration des flux Copernicus et des normes de sortie compatibles INSPIRE. Veille à ce que chaque observation passe du satellite à l'analyse sans perte.", photo: '' },
  ],
  histoire: [] as { annee: string; texte: string }[],
  implantations: [] as string[],
};