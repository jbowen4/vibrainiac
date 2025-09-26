'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Divide } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ContactSection = () => {
  const [projectType, setProjectType] = useState('');

  return (
    <section id='contact' className='py-24 bg-gradient-card'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
            <span className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
              Let&#39;s Build Something Amazing
            </span>
          </h2>
        </div>

        <div className='grid lg:grid-cols-1 gap-12'>
          {/* Contact Form */}
          <Card className='shadow-card group transition-all duration-300 border-accent bg-background/60 backdrop-blur-lg shadow-[0_0_16px_4px_rgba(99,102,241,0.15)] glow-blue-intense'>
            <CardHeader>
              <CardTitle className='text-2xl text-foreground'>
                Get Started Today
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-foreground mb-2'>
                    First Name
                  </label>
                  <Input id='firstName' placeholder='John' />
                </div>
                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-foreground mb-2'>
                    Last Name
                  </label>
                  <Input id='lastName' placeholder='Doe' />
                </div>
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-foreground mb-2'>
                  Email
                </label>
                <Input id='email' type='email' placeholder='john@company.com' />
              </div>

              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-foreground mb-2'>
                  Company
                </label>
                <Input id='company' placeholder='Your Company' />
              </div>

              <div>
                <label
                  htmlFor='project'
                  className='block text-sm font-medium text-foreground mb-2'>
                  Project Type
                </label>
                <select
                  id='project'
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className='w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring'>
                  <option value=''>Select project type</option>
                  <option value='staffing'>Onboard a Fractional Leader</option>
                  <option value='game-dev'>Bring Game Idea to Life</option>
                  <option value='other'>Other</option>
                </select>
                {/* Only show this if "staffing" is selected */}
                {projectType === 'staffing' && (
                  <div>
                    <label
                      htmlFor='services'
                      className='block text-sm font-medium text-foreground mt-4 mb-2'>
                      Services
                    </label>
                    <select
                      id='services'
                      className='w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring'>
                      <option value=''>Select service</option>
                      <option value='project-management'>
                        Project Management
                      </option>
                      <option value='scrum-master'>Scrum Master</option>
                      <option value='coo'>COO</option>
                      <option value='full-stack-engineering'>
                        Full-Stack Engineering
                      </option>
                      <option value='game-designer'>Game Designer</option>
                      <option value='ui-ux-designer'>UI/UX Designer</option>
                      <option value='social-media-marketing'>
                        Social Media Marketing
                      </option>
                    </select>
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-foreground mb-2'>
                  Project Details
                </label>
                <Textarea
                  id='message'
                  placeholder='Tell us about your project, timeline, and staffing needs...'
                  rows={4}
                />
              </div>

              <Button
                size='lg'
                className='w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 font-semibold cursor-pointer flex justify-center items-center glow-blue animate-pulse-glow'>
                Send Message
              </Button>
            </CardContent>
          </Card>
          <div>
            {/* Trust Indicators */}
            <Card className='shadow-card border-border/50 bg-background/80 backdrop-blur-sm shadow-card group transition-all duration-300 border-accent bg-background/60 backdrop-blur-lg shadow-[0_0_16px_4px_rgba(99,102,241,0.15)] glow-blue-intense'>
              <CardHeader>
                <CardTitle className='text-xl text-foreground mx-auto'>
                  Trusted by Industry Leaders
                </CardTitle>
              </CardHeader>
              <CardContent className='px-6 pb-6'>
                <p className='text-muted-foreground mb-8 max-w-2xl mx-auto text-center'>
                  Trusted leaders who have worked with industry leading
                  companies and consulted with Fortune 500 clients
                </p>
                <div className='space-y-8 w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-8 font-semibold cursor-pointer glow-blue animate-pulse-glow max-w-2xl mx-auto rounded-xl'>
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
                      src='/logos/american-airlines-logo.png'
                      alt='American Airlines'
                      height={50}
                      width={100}
                      className='h-8 w-auto object-contain'
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
