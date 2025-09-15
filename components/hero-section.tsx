import { Button } from '@/components/ui/button';
import { Brain, Gamepad, Puzzle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

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

          <div className='flex justify-center'>
            <Badge
              variant='outline'
              className='text-foreground border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium max-w-full sm:max-w-fit break-words whitespace-normal'>
              <Brain className='w-4 h-4 mr-2 text-accent' />
              Trusted by Gaming Studios & Fortune 500 Companies
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight'>
            Scale Your Vision With{' '}
            <span className='text-accent'>Fractional Leadership</span>
          </h1>

          <p className='text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed'>
            Expert leaders at a fraction of the cost that adapt to your unique
            challenges with precision-matched talent that accelerate your
            project delivery and operational excellence.
          </p>

          {/* Stats */}
          <div className='flex flex-wrap justify-center gap-8 mb-12'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-primary'>500+</div>
              <div className='text-sm text-muted-foreground'>
                Projects Delivered
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-primary'>98%</div>
              <div className='text-sm text-muted-foreground'>
                Client Satisfaction
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-primary'>24h</div>
              <div className='text-sm text-muted-foreground'>Response Time</div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row justify-center pt-4 gap-4 sm:gap-8 w-full max-w-2xl mx-auto'>
            <Link href='#contact' className='flex justify-center'>
              <Button
                size='lg'
                className='bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-6 font-semibold cursor-pointer flex justify-between items-center w-auto min-w-[240px]'>
                Fractional Leader Request
                <Puzzle className='h-8 w-8 ml-2' />
              </Button>
            </Link>
            <Link href='#contact' className='flex justify-center'>
              <Button
                size='lg'
                className='bg-foreground hover:bg-foreground/90 text-accent-foreground px-6 py-6 font-semibold cursor-pointer flex justify-between items-center w-auto min-w-[180px]'>
                Gamify your idea
                <Gamepad className='h-8 w-8' />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className='pt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground'>
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
