import { PageFR } from '@/components/marketing/PageFR';
export const metadata = { title: "Technologie — Fractalysium" };
export default function Page() {
  return <PageFR titre="Technologie" intro="Du capteur à la décision : une chaîne complète, conçue en Europe." image="satellite-orbit.jpg" formulaire={false} sections={[
  {titre:"Raisonnement cognitif",texte:"Notre système ne se limite pas à classer ce qu'il voit : il raisonne sur les causes, garde la mémoire des évolutions d'un lieu et indique son niveau de confiance.",image:"spacecraft.jpg",lien:["Lire le document technique", "/news"]},
  {titre:"Données radar et thermiques",texte:"Nous combinons radar à synthèse d'ouverture, imagerie optique et mesures thermiques pour observer en continu.",image:"radome.jpg"},
  {titre:"Ingénierie logicielle",texte:"Une plateforme conçue pour la fiabilité, avec des alertes rapides et des résultats que les équipes peuvent vérifier.",image:"circuit-orange.jpg"}
  ]} />;
}
