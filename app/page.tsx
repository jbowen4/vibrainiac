// import HeroSection from '@/components/hero-section';
// import SolutionsSection from '@/components/solutions-section';
// import GameDevSection from '@/components/game-dev-section';
// import { ContactSection } from '@/components/contact-section';

// export default function Home() {
//   return (
//     <div className='flex flex-col'>
//       <HeroSection />
//       <SolutionsSection />
//       <GameDevSection />
//       <ContactSection />
//     </div>
//   );
// }
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Users,
  Gamepad2,
  Settings,
  Code,
  TestTube,
  Target,
  Mail,
  Phone,
  MapPin,
  Clock,
  Brain,
  Zap,
  Shield,
  Trophy,
  Menu,
} from 'lucide-react';
import Image from 'next/image';
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
