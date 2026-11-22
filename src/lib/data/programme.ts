// ─────────────────────────────────────────────────────────────
// PROGRAMMES & PARTENAIRES
// Seules les informations renseignées s'affichent sur le site :
//  - financementPublic.organisme vide  → la ligne n'apparaît pas
//  - partenaires vide                  → la liste n'apparaît pas
// Un partenaire peut être indiqué par son pays seul : { pays: 'Grèce' }
// (ajoutez `nom` uniquement si vous avez l'accord écrit du partenaire).
// `verified: false` affiche un avertissement sous les chiffres ;
// passez-le à true quand les chiffres sont documentés.
// ─────────────────────────────────────────────────────────────
export type Partenaire = { pays: string; nom?: string };

export const programme: {
  verified: boolean;
  chiffres: { valeur: string; libelle: string }[];
  financementPublic: { organisme: string; source: string };
  partenaires: Partenaire[];
} = {
  verified: false,
  chiffres: [
    { valeur: '1,78 Md€', libelle: 'Commandes en cours' },
    { valeur: '673 M€', libelle: 'Commandes livrées' },
  ],
  financementPublic: { organisme: '', source: '' },
  partenaires: [],
};