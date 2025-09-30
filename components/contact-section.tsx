'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section id='contact' className='py-24 bg-gradient-card'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-1 gap-12'>
          <div>
            {/* Trust Indicators */}
            <Card className='shadow-card group transition-all duration-300 border-accent bg-background/60 backdrop-blur-lg shadow-[0_0_16px_4px_rgba(99,102,241,0.15)] glow-blue-intense'>
              <CardHeader>
                <CardTitle className='text-2xl text-foreground mx-auto'>
                  Trusted by Industry Leaders
                </CardTitle>
              </CardHeader>
              <CardContent className='px-6 pb-6'>
                <p className='text-muted-foreground mb-8 max-w-2xl mx-auto text-center'>
                  Trusted leaders who have worked with industry leading
                  companies and consulted with Fortune 500 clients
                </p>
                <div className='space-y-8 w-full bg-[#6EAEFF] text-accent-foreground px-6 py-8 font-semibold glow-blue animate-pulse-glow max-w-2xl mx-auto rounded-xl sm:px-8'>
                  <div className='flex justify-center items-center gap-8'>
                    <Image
                      src='/logos/ea-logo.png'
                      alt='EA'
                      height={50}
                      width={100}
                      className='h-10 w-auto object-contain'
                    />
                    <Image
                      src='/logos/att-logo.png'
                      alt='AT&T'
                      height={50}
                      width={100}
                      className='h-10 w-auto object-contain'
                    />
                    <Image
                      src='/logos/ibm-logo.png'
                      alt='IBM'
                      height={50}
                      width={100}
                      className='h-10 w-auto object-contain'
                    />
                  </div>
                  <div className='flex flex-wrap justify-center items-center gap-8'>
                    <Image
                      src='/logos/morgan-stanley.png'
                      alt='Morgan Stanley'
                      height={50}
                      width={100}
                      className='h-8 w-auto object-contain'
                    />
                    <Image
                      src='/logos/sprint-logo.png'
                      alt='Sprint'
                      height={50}
                      width={100}
                      className='h-8 w-auto object-contain'
                    />
                    <Image
                      src='/logos/us-bank-logo.png'
                      alt='US Bank'
                      height={50}
                      width={100}
                      className='h-8 w-auto object-contain'
                    />
                    <Image
                      src='/logos/american-airlines-logo.webp'
                      alt='American Airlines'
                      height={50}
                      width={100}
                      className='h-10 w-auto object-contain'
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
