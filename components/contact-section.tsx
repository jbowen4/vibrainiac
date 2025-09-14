import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

// Contact Section Component
export function ContactSection() {
  return (
    <section className='py-20 bg-muted/30' id='contact'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Card className='border-2 border-accent/20 bg-card/50 backdrop-blur-sm'>
          <CardContent className='p-8 lg:p-12'>
            <div className='text-center'>
              <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-12'>
                Quick Contact
              </h2>

              <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8'>
                {/* Email */}
                <div className='flex flex-col items-center space-y-3'>
                  <div className='p-4 bg-accent/10 rounded-full'>
                    <Mail className='h-6 w-6 text-accent' />
                  </div>
                  <div className='text-center'>
                    <p className='font-semibold text-foreground'>Email</p>
                    <a
                      href='mailto:info@vibrainiac.com'
                      className='text-accent hover:text-accent/80 transition-colors'>
                      info@vibrainiac.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex flex-col items-center space-y-3'>
                  <div className='p-4 bg-accent/10 rounded-full'>
                    <Phone className='h-6 w-6 text-accent' />
                  </div>
                  <div className='text-center'>
                    <p className='font-semibold text-foreground'>Phone</p>
                    <a
                      href='tel:+14076036527'
                      className='text-accent hover:text-accent/80 transition-colors'>
                      (407) 603-6527
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className='flex flex-col items-center space-y-3'>
                  <div className='p-4 bg-accent/10 rounded-full'>
                    <MapPin className='h-6 w-6 text-accent' />
                  </div>
                  <div className='text-center'>
                    <p className='font-semibold text-foreground'>
                      Global Reach
                    </p>
                    <p className='text-muted-foreground'>US & Offshore</p>
                  </div>
                </div>

                {/* Support */}
                <div className='flex flex-col items-center space-y-3'>
                  <div className='p-4 bg-accent/10 rounded-full'>
                    <Clock className='h-6 w-6 text-accent' />
                  </div>
                  <div className='text-center'>
                    <p className='font-semibold text-foreground'>Support</p>
                    <p className='text-muted-foreground'>24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
