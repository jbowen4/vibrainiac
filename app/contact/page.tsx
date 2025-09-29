'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [projectType, setProjectType] = useState('');

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData entries into a [string, string][] tuple array
    const entries = Array.from(formData.entries()).map(([key, value]) => [
      key,
      String(value),
    ]);

    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(entries).toString(),
    });

    window.location.href = '/success';
  };

  return (
    <section
      id='contact'
      className='py-24 px-8 bg-gradient-card flex items-center justify-center'>
      <div className='max-w-9xl mx-auto flex flex-col md:flex-row gap-12 xl:gap-32'>
        {/* Header */}
        <div className='text-center md:mb-16 md:w-1/3'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-left leading-'>
            Let&#39;s Build Something Amazing
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-left'>
            Whether you&#39;re looking to onboard a fractional leader or bring a
            game idea to life, we&#39;re here to help. Fill out the form below
            to get started.
          </p>
        </div>

        <div className='md:w-2/3 grid lg:grid-cols-1 gap-12'>
          {/* Contact Form */}
          <Card className='shadow-card group transition-all duration-300 border-accent bg-background/60 backdrop-blur-lg shadow-[0_0_16px_4px_rgba(99,102,241,0.15)] glow-blue-intense'>
            <CardHeader>
              <CardTitle className='text-2xl text-foreground'>
                Get Started Today
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <form
                name='contact'
                onSubmit={handleSubmit}
                className='space-y-6'>
                {/* Required hidden field for Netlify */}{' '}
                <input type='hidden' name='form-name' value='contact' />
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-foreground my-2'>
                      First Name
                    </label>
                    <Input
                      id='firstName'
                      placeholder='John'
                      name='firstName'
                      type='text'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-medium text-foreground my-2'>
                      Last Name
                    </label>
                    <Input
                      id='lastName'
                      placeholder='Doe'
                      name='lastName'
                      type='text'
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-foreground my-2'>
                    Email
                  </label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='john@company.com'
                    name='email'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-foreground my-2'>
                    Company
                  </label>
                  <Input
                    id='company'
                    placeholder='Your Company'
                    name='company'
                    type='text'
                  />
                </div>
                <div>
                  <label
                    htmlFor='project'
                    className='block text-sm font-medium text-foreground my-2'>
                    Project Type
                  </label>
                  <select
                    id='project'
                    name='project'
                    required
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className='w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring'>
                    <option value=''>Select project type</option>
                    <option value='staffing'>
                      Onboard a Fractional Leader
                    </option>
                    <option value='game-dev'>Bring Game Idea to Life</option>
                    <option value='game-dev'>Create an App</option>
                    <option value='other'>Other solution request</option>
                  </select>
                  {/* Only show this if "staffing" is selected */}
                  {projectType === 'staffing' && (
                    <div>
                      <label
                        htmlFor='services'
                        className='block text-sm font-medium text-foreground my-2'>
                        Services
                      </label>
                      <select
                        id='services'
                        name='services'
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
                    className='block text-sm font-medium text-foreground my-2'>
                    Project Details
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Tell us about your project, timeline, and staffing needs...'
                    rows={4}
                  />
                </div>
                <Button
                  size='lg'
                  type='submit'
                  className='w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 mt-8 font-semibold cursor-pointer flex justify-center items-center glow-blue animate-pulse-glow'>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
