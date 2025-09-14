import { Button } from '@/components/ui/button';
import { ArrowRight, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-background via-blue-50/30 to-accent/5'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.1),transparent_50%)]' />
      {/* Subtle Black Panther theme with purple gradient overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_70%)]' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32'>
        <div className='text-center space-y-8'>
          <div className='flex justify-center mb-8'>
            <Image
              src='/logo.png'
              alt='VIBRAINIAC Logo'
              width={120}
              height={120}
              className='w-24 h-24 lg:w-32 lg:h-32'
            />
          </div>

          <Badge
            variant='outline'
            className='text-foreground border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium'>
            <Brain className='w-4 h-4 mr-2 text-accent' />
            Trusted by Gaming Studios & Fortune 500 Companies
          </Badge>

          {/* Main Headline */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight'>
            Scale Your Vision With{' '}
            <span className='text-accent'>Fractional Leadership</span>
          </h1>

          <p className='text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed'>
            From fractional COOs to full-stack game development teams, we
            deliver the specialized talent that transforms your projects from
            concept to reality.
          </p>

          <div className='flex justify-center pt-4'>
            <Button
              size='lg'
              className='bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-4 text-xl font-semibold cursor-pointer'>
              Start your project
              <ArrowRight className='ml-2 h-6 w-6' />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className='pt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-accent rounded-full' />
              <span className='text-sm font-medium'>US & Offshore Teams</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-accent rounded-full' />
              <span className='text-sm font-medium'>
                20+ Years IT Leadership
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-accent rounded-full' />
              <span className='text-sm font-medium'>AAA Game Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
