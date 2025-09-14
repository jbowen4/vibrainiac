'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Navbar } from '@/components/navbar';
import Image from 'next/image';

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
          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='#solutions'
              className='text-foreground hover:text-accent transition-colors font-medium'>
              Solutions
            </a>
            <a
              href='#about'
              className='text-foreground hover:text-accent transition-colors font-medium'>
              About
            </a>
            <a
              href='#contact'
              className='text-foreground hover:text-accent transition-colors font-medium'>
              Contact
            </a>
          </nav>

          {/* Get Started Button */}
          <div className='flex items-center space-x-4'>
            <Button className='bg-accent hover:bg-accent/90 text-accent-foreground'>
              Get Started
            </Button>
            <Button variant='ghost' size='sm' className='md:hidden'>
              <Menu className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
