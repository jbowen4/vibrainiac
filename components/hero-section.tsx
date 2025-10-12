import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Briefcase,
  Lightbulb,
  Gamepad2,
  Gamepad,
  Puzzle,
} from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Services',
      description:
        'Our Fractional Leaders bring strategy and gaming-inspired skills to elevate your business performance. From project rescue to growth planning, we guide you with a playbook built for results.',
      href: '#services',
    },
    {
      icon: Lightbulb,
      title: 'Solutions',
      description:
        'Our solutions team designs and builds custom applications that simplify operations, spark engagement, and scale with your business.',
      href: '#solutions',
    },
    {
      icon: Gamepad2,
      title: 'Game Dev',
      description:
        'Have a game idea? Our creative developers and designers bring it to life—from prototype to full experience.',
      href: '#game-dev',
    },
  ];

  return (
    <section className='container mx-auto px-8 py-16 md:py-16 lg:py-24'>
      <div className='grid gap-12 lg:grid-cols-2 lg:gap-16 items-center'>
        <div className='text-left space-y-8'>
          {/* Main Headline */}
          <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance leading-tight text-center md:text-left'>
            Elevating Business Through Games, Tech, and Leadership
            {/* <span className='bg-gradient-to-r from-[#6EAEFF] to-[#0269E5] bg-clip-text text-transparent font-extrabold relative'>
              Fractional Leadership
            </span> */}
          </h1>

          <p className='text-xl text-center md:text-left lg:text-2xl text-muted-foreground max-w-4xl text-pretty leading-relaxed'>
            Fractional leaders, app solutions, and creative game development--
            built from the future.
          </p>

          {/* Stats */}
          <div className='flex flex-wrap gap-8 mb-12 justify-center md:justify-start'>
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

          <div className='flex flex-col sm:flex-row pt-4 gap-4 sm:gap-8 w-full max-w-2xl justify-center md:justify-start'>
            <Link href='/contact' className='flex justify-center'>
              <Button
                size='lg'
                className='bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-6 text-lg font-semibold cursor-pointer flex justify-between items-center w-auto min-w-[180px] glow-blue animate-pulse-glow'>
                Get Started
                <ArrowRight className='h-20 w-20' />
                {/* <Puzzle className='h-8 w-8 ml-2' /> */}
              </Button>
            </Link>
            {/* <Link href='#game-dev' className='flex justify-center'>
              <Button
                size='lg'
                className='bg-foreground hover:bg-foreground/90 text-accent px-6 py-6 font-semibold cursor-pointer flex justify-between items-center w-auto min-w-[180px] glow-white animate-pulse-glow'>
                Gamify your idea
                <Gamepad className='h-8 w-8' />
              </Button>
            </Link> */}
          </div>

          {/* Trust Indicators */}
          <div className='pt-12 flex flex-wrap items-center gap-8 text-muted-foreground justify-center md:justify-start'>
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

        <div className='space-y-4'>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className='p-6 hover:shadow-lg transition-shadow duration-300'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                    <Icon className='w-6 h-6 text-primary' />
                  </div>
                  <div className='flex-1 space-y-3'>
                    <h3 className='font-sans text-xl font-semibold'>
                      {service.title}
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      {service.description}
                    </p>
                    <Button
                      variant='ghost'
                      className='group px-0 hover:bg-transparent'
                      asChild>
                      <a href={service.href}>
                        Learn more
                        <ArrowRight className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1' />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
