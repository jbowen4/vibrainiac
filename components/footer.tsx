import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-card border-t'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div className='md:col-span-2'>
            <div className='flex items-center mb-4'>
              <Image
                src='/logo.png'
                alt='VIBRAINIAC Logo'
                width={32}
                height={32}
                className='w-8 h-8 mr-3'
              />
              <span className='text-xl font-bold text-foreground'>
                Vibrainiac
              </span>
            </div>
            <p className='text-muted-foreground mb-4 max-w-md'>
              Scaling visions with fractional leadership and specialized gaming
              talent. From concept to reality.
            </p>
            <div className='flex space-x-4'>
              <a
                href='mailto:info@vibrainiac.com'
                className='text-accent hover:text-accent/80'>
                <Mail className='h-5 w-5' />
              </a>
              <a
                href='tel:+14076036527'
                className='text-accent hover:text-accent/80'>
                <Phone className='h-5 w-5' />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-semibold text-foreground mb-4'>Site Map</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <Link href='/#solutions'>
                  <p className='hover:text-accent transition-colors'>
                    Solutions
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <p className='hover:text-accent transition-colors'>About</p>
                </Link>
              </li>
              <li>
                <Link href='/#contact'>
                  <p className='hover:text-accent transition-colors'>Contact</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-semibold text-foreground mb-4'>Contact</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>info@vibrainiac.com</li>
              <li>(407) 603-6527</li>
            </ul>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm text-muted-foreground'>
            © {currentYear} Vibrainiac. All rights reserved.
          </p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <a
              href='#'
              className='text-sm text-muted-foreground hover:text-accent transition-colors'>
              Privacy Policy
            </a>
            <a
              href='#'
              className='text-sm text-muted-foreground hover:text-accent transition-colors'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
