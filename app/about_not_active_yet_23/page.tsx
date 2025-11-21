import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className='min-h-scrseen bg-background max-w-7xl mx-auto'>
      {/* Section 1: Hero */}
      <section className='container mx-auto px-6 py-16 md:py-24'>
        <h2 className='text-lg font-bold tracking-wide text-muted-foreground mb-12'>
          ABOUT US
        </h2>

        {/* Large heading and paragraph aligned to bottom */}
        <div className='grid md:grid-cols-2 gap-12 items-end mb-16'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance'>
            Elite solutions consulting agency for fractional leaders
          </h1>
          <p className='text-lg leading-relaxed text-muted-foreground'>
            We partner with forward-thinking organizations to deliver strategic
            insights and transformative solutions. Our fractional leadership
            model brings executive-level expertise exactly when and where you
            need it most.
          </p>
        </div>

        {/* Center-aligned image with rounded corners */}
        <div className='flex justify-center'>
          <div className='w-full max-w-2xl'>
            <Image
              src='/lady-giving-presentation.webp'
              alt='Modern consulting workspace'
              width={800}
              height={600}
              className='rounded-2xl w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className='max-w-6xl container mx-auto px-6 py-16 md:py-24'>
        <div className='grid md:grid-cols-2 gap-16 items-start'>
          <div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
              Our Story
            </h2>
          </div>
          <div className='space-y-6'>
            <p className='text-lg leading-relaxed text-foreground'>
              Founded in 2018, we recognized a critical gap in the market:
              growing companies needed senior leadership expertise but
              weren&apos;t ready for full-time executive hires. We pioneered a
              new approach that brings seasoned C-suite professionals to
              organizations on a fractional basis.
            </p>
            <p className='text-lg leading-relaxed text-foreground'>
              Today, we&apos;ve helped over 200 companies navigate complex
              challenges, from scaling operations to digital transformation. Our
              network of elite consultants brings decades of combined experience
              across industries, ensuring you get the right expertise for your
              unique situation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Meet Our Team */}
      <section className='container mx-auto px-6 py-16 md:py-24'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-16'>
          Meet Our Team
        </h2>

        {/* Founder Card - Large */}
        <Card className='max-w-5xl mx-auto mb-16 overflow-hidden shadow-card group transition-all duration-300 border-accent bg-background/60 backdrop-blur-lg shadow-[0_0_16px_4px_rgba(99,102,241,0.15)] glow-blue-intense px-8'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 py-8 md:py-12 flex flex-col justify-center'>
              <h3 className='text-3xl mb-2'>Regine Bowen</h3>
              <p className='text-accent font-medium mb-6'>
                Founder & Managing Partner
              </p>
              <p className='text-lg leading-relaxed text-muted-foreground mb-4'>
                With over 20 years of executive leadership experience, Sarah has
                guided Fortune 500 companies through transformative growth
                phases. She holds an MBA from Stanford and previously served as
                COO at TechVentures Inc.
              </p>
              <p className='text-lg leading-relaxed text-muted-foreground'>
                Sarah&apos;s vision for fractional leadership has revolutionized
                how mid-sized companies access top-tier strategic guidance. Her
                approach combines data-driven insights with human-centered
                leadership principles.
              </p>
            </div>
            <div className='relative h-[400px] md:h-auto'>
              <Image
                src='/professional-man-portrait.png'
                alt='Sarah Mitchell, Founder'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </Card>

        {/* Team Members - 3 Cards */}
        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {/* Team Member 1 */}
          <Card className='overflow-hidden border-accent'>
            <div className='p-4'>
              <div className='relative h-64 w-full mb-4'>
                <Image
                  src='/professional-man-portrait.png'
                  alt='Michael Chen'
                  fill
                  className='object-cover rounded-lg'
                />
              </div>
              <h4 className='text-xl mb-1'>Michael Chen</h4>
              <p className='text-sm text-accent font-medium mb-3'>
                Senior Strategy Consultant
              </p>
              <p className='text-sm leading-relaxed text-muted-foreground'>
                Former VP of Strategy at GlobalTech. Specializes in market
                expansion and operational efficiency. 15+ years driving growth
                for B2B SaaS companies.
              </p>
            </div>
          </Card>

          {/* Team Member 2 */}
          <Card className='overflow-hidden border-accent'>
            <div className='p-4'>
              <div className='relative h-64 w-full mb-4'>
                <Image
                  src='/professional-man-portrait.png'
                  alt='Elena Rodriguez'
                  fill
                  className='object-cover rounded-lg'
                />
              </div>
              <h4 className='text-xl mb-1'>Elena Rodriguez</h4>
              <p className='text-sm text-accent font-medium mb-3'>
                Financial Operations Lead
              </p>
              <p className='text-sm leading-relaxed text-muted-foreground'>
                Ex-CFO with expertise in financial restructuring and capital
                strategy. Helped 50+ companies optimize their financial
                operations and secure funding.
              </p>
            </div>
          </Card>

          {/* Team Member 3 */}
          <Card className='overflow-hidden border-accent'>
            <div className='p-4'>
              <div className='relative h-64 w-full mb-4'>
                <Image
                  src='/professional-man-portrait.png'
                  alt='David Park'
                  fill
                  className='object-cover rounded-lg'
                />
              </div>
              <h4 className='text-xl mb-1'>David Park</h4>
              <p className='text-sm text-accent font-medium mb-3'>
                Technology & Innovation Advisor
              </p>
              <p className='text-sm leading-relaxed text-muted-foreground'>
                Former CTO at multiple startups. Guides companies through
                digital transformation and technology stack optimization. Expert
                in AI integration.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <div className='flex flex-col items-center justify-center mx-auto mb-20'>
        {/* Join Our Team Section */}
        <h4 className='md:text-4xl text-center mb-6'>Want to join our team?</h4>
        <a href='http://google.com'>
          <Button
            variant='default'
            size='lg'
            className='bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer'>
            Send an application
            <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
          </Button>
        </a>
      </div>
    </main>
  );
}
