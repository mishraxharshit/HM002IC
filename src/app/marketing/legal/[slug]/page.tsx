import { notFound } from 'next/navigation';
import { pagesLegales } from '@/lib/data/legal';
import { LegalPage } from '@/components/marketing/LegalPage';
export function generateStaticParams() { return Object.keys(pagesLegales).map((slug) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = pagesLegales[params.slug];
  return p ? { title: `${p.titre} — Fractalysium`, description: p.intro } : { title: 'Page introuvable — Fractalysium' };
}
export default function Page({ params }: { params: { slug: string } }) {
  const p = pagesLegales[params.slug];
  if (!p) notFound();
  return <LegalPage slug={params.slug} p={p} />;
}
