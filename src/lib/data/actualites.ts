// Actualités — chaque entrée a sa propre page (/marketing/newsroom/[slug]).
// Pour en ajouter : copiez une entrée. Vérifiez chaque affirmation avant publication.
export type Type = 'news' | 'blog' | 'presse' | 'photo' | 'video';
export type Actu = { slug: string; type: Type; tag: string; titre: string; resume: string; date: string; image: string; source?: string; duree?: string; lien?: string; corps: string[] };

export const onglets: { id: 'tout' | Type; label: string }[] = [
  { id: 'tout', label: 'Tout' }, { id: 'news', label: 'Actualités' }, { id: 'blog', label: 'Blog' },
  { id: 'presse', label: 'Presse' }, { id: 'photo', label: 'Photos' }, { id: 'video', label: 'Vidéos' },
];

export const actus: Actu[] = [
  { slug: 'evaluation-de-conformite-reglement-ia', type: 'news', tag: 'Communiqué', date: 'Avril 2026', image: 'satellite-orbit.jpg',
    titre: 'Fractalysium achève l\'évaluation de conformité de sa plateforme au titre du règlement européen sur l\'IA',
    resume: 'La plateforme d\'intelligence planétaire cognitive a terminé son évaluation de conformité, ce qui permet son déploiement pour la réponse d\'urgence et la surveillance des frontières dans l\'Union européenne.',
    corps: ['Fractalysium annonce que sa plateforme d\'intelligence planétaire cognitive a achevé son évaluation de conformité au titre du règlement européen sur l\'IA, qui classe ce type de système parmi les usages à haut risque.', 'Cette étape permet de déployer la plateforme dans des contextes de réponse d\'urgence et de surveillance des frontières au sein de l\'Union européenne.', '## Pourquoi c\'est important', 'Pour un système à haut risque, la conformité suppose une gestion des risques documentée, des données de qualité, une traçabilité des décisions et une supervision humaine. Ces exigences ont été intégrées à l\'architecture dès la conception.', '## Et ensuite', 'Les institutions intéressées peuvent nous contacter pour échanger sur les conditions de déploiement et d\'intégration à leurs outils.'] },
  { slug: 'surveillance-maritime-essai-operationnel', type: 'news', tag: 'Opérations', date: 'Mars 2026', image: 'earth-surface.jpg',
    titre: 'Le suivi maritime de Fractalysium entre en phase d\'essai opérationnel',
    resume: 'Notre système de détection de navires non déclarés est en essai auprès d\'une autorité côtière européenne et traite en temps réel des données radar Sentinel-1 sur trois corridors maritimes.',
    corps: ['Le système de détection de navires non déclarés de Fractalysium est entré en phase d\'essai opérationnel auprès d\'une autorité côtière européenne.', 'Il traite en temps réel des données radar Sentinel-1 sur trois corridors maritimes.', '## Principe', 'Le radar à synthèse d\'ouverture observe de nuit et sous les nuages. Les détections sont croisées avec les signaux de navigation déclarés pour repérer les navires qui ne se signalent pas.', '## Objectif de l\'essai', 'Mesurer la fiabilité des détections en conditions réelles, limiter les fausses alertes et adapter l\'affichage aux besoins des opérateurs.'] },
  { slug: 'alerte-incendie-moins-de-60-secondes', type: 'news', tag: 'Technologie', date: 'Février 2026', image: 'earth-surface-2.jpg',
    titre: 'Le système de détection d\'incendies atteint un délai d\'alerte inférieur à 60 secondes',
    resume: 'Après des tests étendus durant la saison des feux 2025, notre moteur fondé sur Meteosat délivre des alertes exploitables en moins de 60 secondes après la détection d\'un départ de feu.',
    corps: ['Après des tests étendus pendant la saison des feux 2025, le moteur de détection d\'incendies de Fractalysium, fondé sur les données Meteosat, délivre des alertes exploitables en moins de 60 secondes après la détection d\'un départ de feu.', '## Ce que mesure ce délai', 'Il court du moment où le signal thermique est détecté jusqu\'à l\'envoi d\'une alerte comprenant la position et un niveau de confiance.', '## Fiabilité avant tout', 'Chaque signal est comparé à la normale locale pour limiter les fausses alertes. L\'opérateur voit toujours ce que le système sait et ce qu\'il ignore.'] },

  { slug: 'raisonnement-causal', type: 'blog', tag: 'Analyse', date: 'Avril 2026', image: 'spacecraft.jpg', lien: '/marketing/news/au-dela-de-la-detection',
    titre: 'Pourquoi le raisonnement causal est la couche manquante de l\'IA d\'observation de la Terre',
    resume: 'La détection classe des pixels. Le raisonnement explique ce qu\'ils signifient.', corps: [] },
  { slug: 'avantage-copernicus', type: 'blog', tag: 'Opinion', date: 'Mars 2026', image: 'dish-blue.jpg', lien: '/marketing/news/donnees-ouvertes-copernicus',
    titre: 'L\'avantage Copernicus : pourquoi les données satellitaires ouvertes changent tout',
    resume: 'Une infrastructure européenne librement accessible : pourquoi c\'est un atout sous-utilisé.', corps: [] },
  { slug: 'concevoir-pour-le-reglement-ia', type: 'blog', tag: 'Ingénierie', date: 'Janvier 2026', image: 'dish-sunset.jpg', lien: '/marketing/news/concevoir-pour-le-reglement-europeen-sur-lia',
    titre: 'Concevoir pour le règlement européen sur l\'IA dès le premier jour',
    resume: 'Une conformité pensée dès le départ n\'est pas le même produit qu\'une conformité ajoutée à la fin.', corps: [] },

  { slug: 'rapport-politique-spatiale-europeenne-2026', type: 'presse', tag: 'Presse', date: 'Avril 2026', image: 'hero.jpg', source: 'European Space Policy Institute',
    titre: 'Fractalysium cité dans le rapport 2026 sur la politique spatiale européenne',
    resume: 'Le rapport annuel présente Fractalysium comme un exemple de plateforme native Copernicus conçue pour la conformité au règlement européen sur l\'IA.',
    corps: ['Le rapport annuel sur la politique spatiale européenne, publié par l\'European Space Policy Institute, cite Fractalysium comme exemple de plateforme d\'intelligence native Copernicus, conçue pour respecter le règlement européen sur l\'IA.', '## Ce que cela signifie pour nous', 'Cette mention confirme l\'intérêt d\'une approche fondée sur des données ouvertes européennes et une conformité intégrée dès la conception.', 'Retrouvez le rapport sur le site de l\'institut.'] },
  { slug: 'entretien-ia-souveraine-defense-europeenne', type: 'presse', tag: 'Entretien', date: 'Mars 2026', image: 'spacecraft.jpg', source: 'Defence Technology International',
    titre: 'Entretien : construire une IA souveraine pour la défense européenne',
    resume: 'Walter Bizzari, président et directeur général, s\'entretient avec Defence Technology International sur la souveraineté du renseignement satellitaire européen.',
    corps: ['Walter Bizzari, président et directeur général de Fractalysium, s\'est entretenu avec Defence Technology International.', 'L\'échange porte sur la souveraineté du renseignement satellitaire européen et sur l\'intérêt de plateformes natives Copernicus.', '## À retenir', 'Le sujet central est la maîtrise de la chaîne d\'observation : des données ouvertes, un traitement sous juridiction européenne et des résultats vérifiables par l\'utilisateur.', 'L\'entretien complet est disponible auprès du magazine.'] },
  { slug: 'entretien-latence-ia-reponse-aux-catastrophes', type: 'presse', tag: 'Entretien', date: 'Février 2026', image: 'dish-sunset.jpg', source: 'GeoIntelligence Weekly',
    titre: 'Entretien : le directeur de la technologie sur la latence de l\'IA dans la réponse aux catastrophes',
    resume: 'Harshit Mishra explique à GeoIntelligence Weekly les défis d\'ingénierie pour atteindre une latence inférieure à 60 secondes.',
    corps: ['Harshit Mishra, directeur de la technologie de Fractalysium, a répondu aux questions de GeoIntelligence Weekly.', 'La conversation porte sur les défis d\'ingénierie liés à une latence de renseignement satellitaire inférieure à 60 secondes dans les systèmes de réponse aux catastrophes.', '## À retenir', 'Réduire le délai suppose d\'optimiser toute la chaîne : réception des données, traitement, décision du modèle et diffusion de l\'alerte.', 'L\'entretien complet est disponible auprès du magazine.'] },

  { slug: 'exercice-mediterranee-detection-navires', type: 'photo', tag: 'Exercice', date: 'Janvier 2026', image: 'earth-surface.jpg',
    titre: 'Sentinel-1 : détection de navires non déclarés, exercice en Méditerranée',
    resume: 'Imagerie radar issue de l\'exercice de janvier 2026 sur trois corridors maritimes européens.',
    corps: ['Imagerie radar issue de l\'exercice de surveillance maritime de janvier 2026, couvrant trois corridors maritimes européens.', 'Le radar permet d\'observer de nuit et sous les nuages ; les détections sont ensuite croisées avec les signaux de navigation déclarés.'] },
  { slug: 'station-sol-copernicus', type: 'photo', tag: 'Infrastructure', date: 'Décembre 2025', image: 'station-sol.jpg',
    titre: 'Station sol Copernicus : réception des données',
    resume: 'Réception de données Sentinel dans une station européenne, maillon de l\'infrastructure Copernicus qui soutient notre plateforme.',
    corps: ['Réception de données Sentinel dans une station sol européenne.', 'Elle fait partie de l\'infrastructure Copernicus sur laquelle repose notre plateforme.'] },
  { slug: 'analyse-thermique-saison-des-feux-2025', type: 'photo', tag: 'Analyse', date: 'Septembre 2025', image: 'earth-surface-2.jpg',
    titre: 'Analyse thermique de la surface terrestre : saison des feux 2025',
    resume: 'Composite thermique Sentinel-3 montrant les anomalies de température de surface sur la péninsule Ibérique en pleine saison des incendies.',
    corps: ['Composite thermique Sentinel-3 montrant les anomalies de température de la surface terrestre sur la péninsule Ibérique pendant le pic de la saison des incendies 2025.'] },

  { slug: 'demo-alerte-cognitive-incendie', type: 'video', tag: 'Démonstration', date: 'Mars 2026', image: 'earth-surface.jpg', duree: '8 min',
    titre: 'Démonstration : l\'alerte cognitive incendie en temps réel',
    resume: 'Parcours de la chaîne d\'alerte, de la détection thermique Meteosat à la prévision de propagation, avec les données de la saison 2025.',
    corps: ['Parcours de la chaîne d\'alerte cognitive de Fractalysium, de la détection thermique Meteosat à la prévision de propagation, présenté avec les données de la saison des feux 2025.', 'Cette vidéo sera mise en ligne prochainement.'] },
  { slug: 'explication-radar-navires', type: 'video', tag: 'Explication', date: 'Février 2026', image: 'satellite-orbit.jpg', duree: '5 min',
    titre: 'Comment Sentinel-1 détecte les navires non déclarés',
    resume: 'Une courte explication technique sur la surveillance maritime par radar et sur ce que notre couche d\'IA ajoute aux détections brutes.',
    corps: ['Explication technique sur la surveillance maritime par radar à synthèse d\'ouverture : comment fonctionne la physique, et ce que notre couche d\'IA apporte aux détections brutes.', 'Cette vidéo sera mise en ligne prochainement.'] },
  { slug: 'entretien-pdg-souverainete-2026', type: 'video', tag: 'Direction', date: 'Janvier 2026', image: 'spacecraft.jpg', duree: '12 min',
    titre: 'Entretien avec le PDG : le renseignement souverain européen en 2026',
    resume: 'Walter Bizzari sur l\'importance stratégique de la souveraineté du renseignement satellitaire européen et sur la feuille de route de Fractalysium.',
    corps: ['Walter Bizzari, président et directeur général, évoque l\'importance stratégique de la souveraineté du renseignement satellitaire européen, le règlement européen sur l\'IA comme signal de qualité et la feuille de route de Fractalysium.', 'Cette vidéo sera mise en ligne prochainement.'] },
];