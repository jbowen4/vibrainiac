import { ContactSection } from '@/components/contact-section';
import SolutionsSection from '@/components/solutions-section';
import FractionalLeadershipSection from '@/components/fractional-leadership-section';
import HeroSection from '@/components/hero-section';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-background'>
      <HeroSection />
      <FractionalLeadershipSection />
      <SolutionsSection />
      <ContactSection />
    </div>
  );
}
