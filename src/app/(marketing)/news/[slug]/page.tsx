import { notFound } from 'next/navigation';
import { articles } from '@/lib/data/articles';
import { ArticleFR } from '@/components/marketing/ArticleFR';

export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = articles.find((x) => x.slug === params.slug);
  return a ? { title: `${a.titre} — Fractalysium`, description: a.resume } : { title: 'Page introuvable — Fractalysium' };
}
export default function Page({ params }: { params: { slug: string } }) {
  const a = articles.find((x) => x.slug === params.slug);
  if (!a) notFound();
  return <ArticleFR a={a} />;
}
