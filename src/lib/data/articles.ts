// Articles de recherche et d'ingénierie. Pour en ajouter : copiez une entrée et modifiez-la.
export type Article = { slug: string; categorie: string; titre: string; resume: string; date: string; lecture: string; image: string; corps: string[] };

export const articles: Article[] = [
  {
    slug: 'radar-a-synthese-douverture', categorie: 'Science', date: 'Octobre 2026', lecture: '6 min', image: 'satellite-orbit.jpg',
    titre: 'Voir à travers les nuages : comment fonctionne le radar à synthèse d\'ouverture',
    resume: 'Un radar spatial émet sa propre énergie et mesure l\'écho. Résultat : une image exploitable de nuit, sous les nuages et sous la pluie.',
    corps: [
      'Un satellite optique dépend du soleil et d\'un ciel dégagé. Un radar à synthèse d\'ouverture (SAR) fonctionne autrement : il émet une impulsion micro-onde vers le sol, puis enregistre l\'écho qui revient. Les micro-ondes traversent les nuages, la fumée et la pluie légère, et l\'instrument n\'a besoin d\'aucune lumière.',
      '## Pourquoi « synthèse d\'ouverture »',
      'Pour obtenir une image fine, une antenne devrait être très grande. Le SAR contourne cette contrainte en exploitant le mouvement du satellite : en combinant de nombreuses mesures prises le long de la trajectoire, on reconstitue numériquement une antenne bien plus longue que l\'antenne physique.',
      '## Ce que le radar révèle',
      'L\'écho dépend de la rugosité, de l\'humidité et de la forme de la surface. Une mer calme apparaît sombre, un navire métallique très brillant, un champ labouré rugueux. En comparant deux acquisitions de la même zone, on mesure aussi des déplacements de quelques millimètres : c\'est le principe de l\'interférométrie, utilisée pour suivre l\'affaissement des sols.',
      '## Un complément, pas un remplaçant',
      'Le radar ne remplace pas l\'imagerie optique : il la complète. Notre plateforme fusionne les deux pour garder une observation continue, même quand la météo bloque l\'une des sources.',
    ],
  },
  {
    slug: 'donnees-ouvertes-copernicus', categorie: 'Politique', date: 'Octobre 2026', lecture: '5 min', image: 'dish-sunset.jpg',
    titre: 'Pourquoi des données ouvertes sont le socle de la souveraineté',
    resume: 'Copernicus fournit librement des observations de la Terre. Bâtir dessus, c\'est éviter les dépendances qu\'on ne maîtrise pas.',
    corps: [
      'Copernicus est le programme d\'observation de la Terre de l\'Union européenne. Ses satellites Sentinel produisent des données diffusées librement, complètes et ouvertes. Pour une institution, cela change la nature du risque.',
      '## Moins de dépendances',
      'Une chaîne d\'analyse qui repose sur des données propriétaires peut être interrompue par un contrat, un prix ou une décision hors de votre juridiction. Une chaîne fondée sur des données ouvertes reste reproductible : n\'importe quel auditeur peut retrouver la source d\'un résultat.',
      '## Transparence et vérification',
      'Quand une alerte déclenche une décision publique, il faut pouvoir expliquer d\'où elle vient. Les données ouvertes permettent cette traçabilité, de l\'observation brute jusqu\'à la conclusion.',
      '## Ce que cela implique pour nous',
      'Nous traitons Copernicus comme notre socle et ajoutons, quand c\'est utile, d\'autres sources. Chaque résultat indique ses données d\'entrée, afin que le client garde la maîtrise de l\'ensemble de la chaîne.',
    ],
  },
  {
    slug: 'detecter-un-depart-de-feu', categorie: 'Ingénierie', date: 'Octobre 2026', lecture: '7 min', image: 'earth-surface-2.jpg',
    titre: 'Détecter un départ de feu : du pixel thermique à l\'alerte',
    resume: 'Les satellites géostationnaires observent la même zone toutes les dix à quinze minutes. Le défi est de distinguer un feu d\'un faux positif.',
    corps: [
      'Un satellite géostationnaire reste au-dessus du même point et renvoie une nouvelle image toutes les dix à quinze minutes environ. C\'est une cadence idéale pour repérer l\'apparition d\'un foyer, à condition de savoir lire le signal thermique.',
      '## Le problème des faux positifs',
      'Un sol chauffé par le soleil, un toit métallique ou une installation industrielle peuvent ressembler à un feu. Chaque pixel chaud doit donc être comparé à son comportement habituel : même heure, même saison, même type de surface.',
      '## Notre approche',
      'Nous combinons trois éléments : l\'écart à la normale locale, l\'évolution du pixel d\'une image à l\'autre, et le contexte (végétation, vent, relief). Un modèle attribue ensuite un niveau de confiance, que l\'opérateur voit avec l\'alerte.',
      '## Pourquoi la confiance compte',
      'Une alerte sans niveau de confiance fait perdre du temps. En affichant ce que le système sait et ce qu\'il ignore, nous aidons les équipes à décider plus vite et à hiérarchiser leurs interventions.',
    ],
  },
  {
    slug: 'au-dela-de-la-detection', categorie: 'Recherche', date: 'Septembre 2026', lecture: '8 min', image: 'spacecraft.jpg',
    titre: 'Au-delà de la détection : pourquoi le raisonnement causal compte',
    resume: 'Savoir qu\'un changement a eu lieu ne suffit pas. Il faut comprendre pourquoi, et ce qui va se passer ensuite.',
    corps: [
      'Une chaîne classique d\'observation de la Terre détecte un changement et le classe : forêt qui recule, inondation, chantier. C\'est utile, mais cela s\'arrête là. La décision, elle, dépend de la cause.',
      '## Corrélation et cause',
      'Deux phénomènes qui évoluent ensemble ne sont pas forcément liés. Un modèle qui ne repère que des corrélations peut se tromper dès que le contexte change. Le raisonnement causal pose explicitement la question : qu\'est-ce qui produit quoi ?',
      '## Mémoire d\'un lieu',
      'Un lieu a une histoire. Comparer une observation à ses dix dernières années permet de séparer un événement exceptionnel d\'une variation saisonnière normale.',
      '## Dire quand on ne sait pas',
      'Un système fiable exprime son incertitude. Nos résultats indiquent leur niveau de confiance et les hypothèses retenues, pour que les analystes puissent les contester plutôt que les subir.',
    ],
  },
  {
    slug: 'concevoir-pour-le-reglement-europeen-sur-lia', categorie: 'Ingénierie', date: 'Septembre 2026', lecture: '7 min', image: 'dish-night.jpg',
    titre: 'Concevoir dès le départ pour le règlement européen sur l\'IA',
    resume: 'La conformité se construit dans l\'architecture, pas après coup : documentation, journalisation, supervision humaine.',
    corps: [
      'Le règlement européen sur l\'IA impose des exigences aux systèmes à haut risque : gestion des risques, qualité des données, documentation technique, traçabilité, supervision humaine et robustesse. Les ajouter en fin de projet coûte cher.',
      '## Traçabilité par construction',
      'Chaque décision du système est enregistrée avec ses données d\'entrée, la version du modèle et le niveau de confiance. Un auditeur peut ainsi rejouer un résultat et comprendre comment il a été obtenu.',
      '## L\'humain garde la main',
      'Nos alertes sont des recommandations. L\'opérateur peut les confirmer, les rejeter ou demander plus de contexte. Ce choix de conception est aussi une exigence de sécurité.',
      '## Documentation vivante',
      'La documentation technique est produite avec le code et mise à jour à chaque évolution. Elle reste ainsi fidèle au système réellement en service.',
    ],
  },
  {
    slug: 'fusion-radar-optique-agriculture', categorie: 'Agriculture', date: 'Août 2026', lecture: '6 min', image: 'earth-surface.jpg',
    titre: 'Prévoir les récoltes : fusionner radar et imagerie optique',
    resume: 'L\'optique mesure la santé des cultures, le radar leur structure et l\'humidité du sol. Ensemble, ils comblent les trous laissés par la météo.',
    corps: [
      'Les satellites optiques, comme Sentinel-2, mesurent la vigueur de la végétation sur plusieurs bandes spectrales. Leur limite : les nuages. En période décisive, une région peut rester invisible pendant des semaines.',
      '## Le radar comble les trous',
      'Le radar traverse les nuages et renseigne sur la structure des cultures et l\'humidité des sols. Il fournit un signal régulier là où l\'optique manque.',
      '## Une série temporelle continue',
      'En fusionnant les deux sources, on obtient une série temporelle de chaque parcelle, sans interruption. Des modèles statistiques la comparent aux campagnes précédentes pour estimer le rendement.',
      '## Un résultat utile, une incertitude visible',
      'Une prévision de récolte est une estimation. Nous la livrons avec une fourchette, afin que les décideurs sachent quelle marge de manœuvre ils conservent.',
    ],
  },
];
