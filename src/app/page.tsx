import { Navigation }       from '@/components/marketing/Navigation';
import { HeroSection }      from '@/components/marketing/HeroSection';
import { HomeFR }           from '@/components/marketing/HomeFR';
import { ProgrammeSection } from '@/components/marketing/ProgrammeSection';
import { CTASection, Footer } from '@/components/marketing/Layout';
export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <HomeFR />
      <ProgrammeSection />
      <CTASection />
      <Footer />
    </main>
  );
}
