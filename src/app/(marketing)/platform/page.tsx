import { PageFR } from '@/components/marketing/PageFR';
export const metadata = { title: "Plateforme — Fractalysium" };
export default function Page() {
  return <PageFR titre="Plateforme" intro="Une seule plateforme opérationnelle pour observer, comprendre et agir." image="dish-blue.jpg" formulaire={false} sections={[
  {titre:"Données ouvertes Copernicus",texte:"Chaque analyse s'appuie sur Copernicus, fourni librement par le droit européen, sans dépendance à des données propriétaires.",image:"dish-sunset.jpg"},
  {titre:"Accès par API",texte:"Intégrez nos résultats directement dans vos outils et vos centres opérationnels.",image:"circuit-bleu.jpg",lien:["Demander l'accès", "/contact"]}
  ]} />;
}
