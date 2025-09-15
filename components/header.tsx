'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Navbar } from './navbar';

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center text-xl font-bold gap-1'>
              <Image
                src='/logo.png'
                alt='VIBRAINIAC Logo'
                width={40}
                height={40}
                className='w-10 h-10'
              />
              Vibrainiac
            </Link>
          </div>

          {/* Navigation */}
          {/* <nav className='hidden md:flex items-center space-x-8'> */}
          <div className='hidden md:flex md:justify-center md:flex-1'>
            <Navbar />
          </div>
          {/* </nav> */}

          {/* Get Started Button */}
          {/* <div className='flex items-center space-x-4'>
            <Link href='#contact' passHref>
              <Button className='bg-accent hover:bg-accent/90 text-accent-foreground'>
                Get Started
              </Button>
            </Link>
            <Button variant='ghost' size='sm' className='md:hidden'>
              <Menu className='h-5 w-5' />
            </Button>
          </div> */}

          {/* Get Started Button */}
          <div className='flex items-center gap-4'>
            <Link href='#contact' passHref>
              <Button className='bg-accent hidden md:inline-flex hover:bg-accent/90 text-accent-foreground'>
                Get Started
              </Button>
            </Link>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon' className='md:hidden'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className='p-3' side='right'>
                <div className='flex flex-col gap-4 py-6'>
                  <Navbar orientation='vertical' />
                  <Link href='#contact' passHref>
                    <Button className='bg-accent hover:bg-accent/90 text-accent-foreground'>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
