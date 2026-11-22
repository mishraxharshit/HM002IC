// ─────────────────────────────────────────────────────────────
// INFORMATIONS LÉGALES
// Seuls les champs renseignés s'affichent sur le site : un champ vide
// est simplement omis (aucune valeur fictive n'est publiée).
// Vous pouvez en ajouter plus tard : la ligne correspondante apparaîtra
// automatiquement dans les pages légales.
// ─────────────────────────────────────────────────────────────
export const identite = {
  raison: 'Fractalysium',
  forme: '',
  capital: '',
  immatriculation: '',
  tva: '',
  siege: '',
  directeur: 'Walter Bizzari, président et directeur général',
  contact: '',     // adresse e-mail publique (facultatif)
  hebergeur: '',   // nom et coordonnées de l'hébergeur (facultatif)
  rgpd: '',        // adresse e-mail dédiée aux données personnelles (facultatif)
  conservation: 'supprimés au plus tard douze mois après le dernier échange, sauf obligation légale de conservation',
  transferts: "Nous privilégions des prestataires situés dans l'Union européenne. Si un transfert hors de l'Union était nécessaire, il serait encadré par des garanties appropriées (décision d'adéquation ou clauses contractuelles types)",
  droit: 'Le site est soumis au droit applicable au siège social de la société ; tout litige relève des juridictions compétentes de ce lieu',
};
const i = identite;
const lignes = (...l: (string | false | undefined)[]) => l.filter((x): x is string => Boolean(x));
const viaContact = (adresse: string) => adresse ? `en utilisant le formulaire de la page Contact ou en écrivant à ${adresse}` : 'en utilisant le formulaire de la page Contact';

export type Section = { titre: string; texte: string[] };
export type PageLegale = { titre: string; intro: string; sections: Section[] };

export const pagesLegales: Record<string, PageLegale> = {
  'mentions-legales': {
    titre: 'Mentions légales',
    intro: "Informations sur l'éditeur du site.",
    sections: [
      { titre: 'Éditeur du site', texte: lignes(
        `${i.raison}${i.forme ? `, ${i.forme}` : ''}${i.capital ? `, au capital de ${i.capital}` : ''}.`,
        (i.immatriculation || i.tva) && `${i.immatriculation ? `Immatriculation : ${i.immatriculation}. ` : ''}${i.tva ? `TVA : ${i.tva}.` : ''}`.trim(),
        i.siege && `Siège social : ${i.siege}.`,
        i.contact ? `Contact : ${i.contact}.` : 'Contact : par le formulaire de la page Contact.') },
      { titre: 'Directeur de la publication', texte: [`${i.directeur}.`] },
      ...(i.hebergeur ? [{ titre: 'Hébergement', texte: [`Le site est hébergé par : ${i.hebergeur}.`] }] : []),
      { titre: 'Propriété intellectuelle', texte: ["Les textes, graphismes, logos et éléments du site sont protégés. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.", 'Les marques et noms cités appartiennent à leurs titulaires respectifs.'] },
      { titre: 'Responsabilité', texte: ["Nous veillons à l'exactitude des informations publiées, mais le site est fourni sans garantie. Les articles de recherche et de blog présentent des analyses générales et ne constituent pas un engagement contractuel.", 'Le site peut contenir des liens vers des sites tiers dont nous ne maîtrisons pas le contenu.'] },
      { titre: 'Données personnelles et cookies', texte: ["Le traitement de vos données est décrit dans notre politique de confidentialité. L'usage du stockage local est décrit sur la page Paramètres des cookies."] },
      { titre: 'Droit applicable', texte: [`${i.droit}.`] },
    ],
  },
  'politique-de-confidentialite': {
    titre: 'Politique de confidentialité',
    intro: 'Comment nous traitons les données personnelles des visiteurs de ce site, conformément au règlement (UE) 2016/679 (RGPD).',
    sections: [
      { titre: 'Responsable du traitement', texte: [`${i.raison}${i.siege ? `, ${i.siege}` : ''}. Pour toute question sur vos données, contactez-nous ${viaContact(i.rgpd)}.`] },
      { titre: 'Données concernées', texte: ["Formulaire de contact : si vous nous écrivez, nous recevons les informations que vous saisissez (nom, organisation, adresse e-mail, message). Le formulaire ouvre votre logiciel de messagerie : le message part de votre propre messagerie vers notre adresse de contact.", "Données techniques : comme tout site, les serveurs peuvent enregistrer des informations de connexion (adresse IP, type de navigateur, date et page demandée) à des fins de sécurité et de bon fonctionnement.", "Préférence de langue : votre navigateur mémorise le choix de langue sur votre appareil. Cette information n'est pas envoyée à nos serveurs."] },
      { titre: 'Finalités et bases légales', texte: ["Répondre à vos demandes : mesures précontractuelles ou intérêt légitime à échanger avec les visiteurs qui nous contactent.", 'Sécurité et fonctionnement du site : intérêt légitime.', 'Mémoriser votre langue : fonctionnement du service que vous demandez.', "Nous n'utilisons pas vos données à des fins publicitaires, et nous ne les vendons pas."] },
      { titre: 'Durée de conservation', texte: [`Les échanges sont conservés le temps nécessaire au traitement de votre demande, puis ${i.conservation}. Les journaux techniques sont conservés pour une durée limitée.`] },
      { titre: 'Destinataires', texte: ["Vos données sont accessibles aux membres de nos équipes qui en ont besoin pour répondre, ainsi qu'aux prestataires techniques qui hébergent le site et la messagerie, dans la limite de leurs missions."] },
      { titre: "Transferts hors de l'Union européenne", texte: [`${i.transferts}.`] },
      { titre: 'Vos droits', texte: ["Vous pouvez demander l'accès à vos données, leur rectification, leur effacement, la limitation du traitement, vous opposer à celui-ci et, lorsque c'est applicable, obtenir la portabilité.", `Pour exercer ces droits, contactez-nous ${viaContact(i.rgpd)}. Vous pouvez aussi introduire une réclamation auprès de l'autorité de protection des données compétente (en France, la CNIL : cnil.fr).`] },
      { titre: 'Sécurité', texte: ['Nous appliquons des mesures techniques et organisationnelles adaptées pour protéger les données contre l\'accès non autorisé, la perte ou l\'altération.'] },
      { titre: 'Mises à jour', texte: ['Cette politique peut évoluer. La date de dernière mise à jour figure en haut de la page.'] },
    ],
  },
  'cookies': {
    titre: 'Paramètres des cookies',
    intro: "Ce site n'utilise ni cookie publicitaire ni outil de mesure d'audience tiers.",
    sections: [
      { titre: 'Ce que le site stocke', texte: ["Une seule information est mémorisée dans le stockage local de votre navigateur : votre choix de langue (clé « fx-lang »). Elle reste sur votre appareil et n'est pas transmise à nos serveurs."] },
      { titre: 'Pourquoi aucun bandeau de consentement', texte: ["Le stockage de cette préférence est strictement nécessaire au service que vous demandez (afficher le site dans la langue choisie). À ce titre, il est exempté de consentement. Si nous ajoutons un jour un outil de mesure d'audience ou un contenu tiers, nous demanderons votre accord avant tout dépôt et nous mettrons cette page à jour."] },
      { titre: 'Gérer votre préférence', texte: ['Vous pouvez effacer cette préférence à tout moment avec le bouton ci-dessous, ou depuis les réglages de votre navigateur.'] },
    ],
  },
  'reglement-europeen-ia': {
    titre: "Règlement européen sur l'IA",
    intro: 'Notre approche du règlement (UE) 2024/1689 : une conformité pensée dès la conception de la plateforme.',
    sections: [
      { titre: 'Notre engagement', texte: ["Fractalysium conçoit sa plateforme d'intelligence planétaire cognitive pour respecter le règlement européen sur l'intelligence artificielle. Nous avons annoncé en avril 2026 l'achèvement de l'évaluation de conformité de la plateforme, qui ouvre son déploiement pour la réponse d'urgence et la surveillance des frontières dans l'Union européenne."] },
      { titre: 'Gestion des risques et qualité des données', texte: ["Nos résultats s'appuient en priorité sur des données ouvertes Copernicus, dont la provenance est connue. Chaque résultat indique ses données d'entrée et un niveau de confiance."] },
      { titre: 'Traçabilité', texte: ["Chaque décision du système est enregistrée avec ses données d'entrée, la version du modèle et son niveau de confiance. Un auditeur peut rejouer un résultat et comprendre comment il a été obtenu."] },
      { titre: 'Supervision humaine', texte: ["Nos alertes sont des recommandations. L'opérateur peut les confirmer, les rejeter ou demander plus de contexte avant toute décision."] },
      { titre: 'Documentation technique', texte: ["La documentation technique est produite avec le code et mise à jour à chaque évolution, afin de rester fidèle au système réellement en service."] },
      { titre: 'En savoir plus', texte: ["Pour échanger sur la conformité de la plateforme dans votre contexte, contactez-nous depuis la page Contact. Notre analyse détaillée est disponible dans l'article « Concevoir dès le départ pour le règlement européen sur l'IA »."] },
    ],
  },
};
