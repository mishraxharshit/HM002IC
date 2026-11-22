import { PageFR } from '@/components/marketing/PageFR';
export const metadata = { title: "Capacités — Fractalysium" };
export default function Page() {
  return <PageFR titre="Capacités" intro="Cinq domaines d'analyse, une seule plateforme." image="earth-surface-2.jpg" formulaire={false} sections={[
  {titre:"Incendies",texte:"Détection de départs de feu en moins de 60 secondes à partir des données thermiques.",image:"earth-surface-2.jpg"},
  {titre:"Maritime",texte:"Repérage des navires non déclarés par radar spatial, de jour comme de nuit et par tous les temps.",image:"satellite-orbit.jpg"},
  {titre:"Agriculture",texte:"Prévision des récoltes plusieurs semaines à l'avance à l'échelle d'un bassin.",image:"earth-surface.jpg"},
  {titre:"Catastrophes et climat",texte:"Cartographie rapide des zones touchées pour appuyer la sécurité civile.",image:"dish-blue.jpg"},
  {titre:"Zones urbaines",texte:"Suivi de l'évolution des villes et des infrastructures critiques.",image:"city-aerial.jpg"}
  ]} />;
}
