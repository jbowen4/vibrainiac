import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className='min-h-scrseen bg-background max-w-7xl mx-auto'>
      {/* Section 1: Hero */}
      <section className='container mx-auto px-6 py-16 md:py-24'>
        <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-wide mb-12'>
          About Us
        </h2>
        <p className='text-xl text-center md:text-left lg:text-2xl text-muted-foreground max-w-4xl text-pretty leading-relaxed'>
          Vibrainiac is an independent game development studio founded by a team
          with over 20 years of collective AAA experience. Primarily
          from Electronic Arts (EA), this team has worked on games like Madden
          NFL, NBA Live, College Football & The Sims, just to name a few. With a
          background in crafting world-class entertainment, our team brings the
          expertise, creativity, and technical excellence of AAA development to
          the agility and passion of an indie studio.We are dedicated to
          creating games that not only entertain but also inspire and make a
          positive impact in the world—games that encourage empathy, connection,
          and meaningful experiences for players everywhere. Our mission is to
          prove that games can be both deeply engaging and socially uplifting,
          blending innovation, artistry, and purpose in every project we create.
        </p>
      </section>
    </main>
  );
}
