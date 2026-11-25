import { notFound } from 'next/navigation';
import { actus } from '@/lib/data/actualites';
import { NewsroomDetail } from '@/components/marketing/NewsroomDetail';
export function generateStaticParams() { return actus.filter((a) => !a.lien).map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = actus.find((x) => x.slug === params.slug);
  return a ? { title: `${a.titre} — Fractalysium`, description: a.resume } : { title: 'Page introuvable — Fractalysium' };
}
export default function Page({ params }: { params: { slug: string } }) {
  const a = actus.find((x) => x.slug === params.slug && !x.lien);
  if (!a) notFound();
  return <NewsroomDetail a={a} />;
}
