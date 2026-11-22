import { notFound } from 'next/navigation';
import { sujets } from '@/lib/data/defense';
import { DefenseDetail } from '@/components/marketing/DefenseDetail';
export function generateStaticParams() { return sujets.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = sujets.find((x) => x.slug === params.slug);
  return s ? { title: `${s.titre} — Fractalysium`, description: s.accroche } : { title: 'Page introuvable — Fractalysium' };
}
export default function Page({ params }: { params: { slug: string } }) {
  const s = sujets.find((x) => x.slug === params.slug);
  if (!s) notFound();
  return <DefenseDetail s={s} />;
}
