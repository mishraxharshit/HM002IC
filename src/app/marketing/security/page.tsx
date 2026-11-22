import { PageFR } from '@/components/marketing/PageFR';
export const metadata = { title: "Sécurité — Fractalysium" };
export default function Page() {
  return <PageFR titre="Sécurité" intro="Des systèmes conçus pour la confiance, la conformité et la souveraineté." image="dish-night.jpg" formulaire={false} sections={[
  {titre:"Conformité européenne",texte:"Nos systèmes sont conçus dès l'origine pour respecter le règlement européen sur l'IA et le RGPD.",image:"city-aerial.jpg"},
  {titre:"Souveraineté des données",texte:"Hébergement et traitement sous juridiction européenne, avec un contrôle total par le client.",image:"earth-surface.jpg"}
  ]} />;
}
