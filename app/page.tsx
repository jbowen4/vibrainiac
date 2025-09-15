import SolutionsSection from '@/components/solutions-section';
import FractionalLeadershipSection from '@/components/fractional-leadership-section';
import HeroSection from '@/components/hero-section';
import GameDevSection from '@/components/game-dev-section';
import ContactSection from '@/components/contact-section';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-background'>
      <HeroSection />
      <FractionalLeadershipSection />
      <GameDevSection />
      <SolutionsSection />
      <ContactSection />
    </div>
  );
}
