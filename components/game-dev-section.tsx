import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Palette,
  Code2,
  TestTube,
  Users,
  Globe,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const GameDevSection = () => {
  const capabilities = [
    {
      icon: <Palette className='h-6 w-6' />,
      title: 'Game Design',
      description:
        'Creative visionaries who craft engaging gameplay experiences',
    },
    {
      icon: <Code2 className='h-6 w-6' />,
      title: 'Full-Stack Development',
      description: 'Complete game development from concept to deployment',
    },
    {
      icon: <TestTube className='h-6 w-6' />,
      title: 'QA & Testing',
      description: 'Rigorous testing to ensure flawless player experiences',
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: 'Project Management',
      description: 'Specialized game development project coordination',
    },
    {
      icon: <Globe className='h-6 w-6' />,
      title: 'Global Teams',
      description:
        'Access worldwide talent pools for cost-effective development',
    },
    {
      icon: <Zap className='h-6 w-6' />,
      title: 'Rapid Deployment',
      description: 'Fast team assembly to meet tight development schedules',
    },
  ];

  const technologies = [
    'Unity',
    'Unreal Engine',
    'React Native',
    'Flutter',
    'Node.js',
    'Python',
    'C#',
    'JavaScript',
    'AWS',
    'Firebase',
  ];

  return (
    <section id='game-dev' className='py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          {/* <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
            <span className='bg-gradient-hero bg-clip-text text-transparent'>
              Game Development Teams
            </span>
          </h2> */}
          <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
            Game & App Development Team
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Turn your game idea into reality with our specialized development
            teams. From indie concepts to enterprise gaming platforms, we
            deliver the talent to bring your vision to life.
          </p>
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Content Side */}
          <div>
            <h3 className='text-2xl font-bold mb-6 text-foreground'>
              Complete Game Development Ecosystem
            </h3>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start space-x-3'>
                <p className='text-muted-foreground'>
                  <strong className='text-foreground'>
                    Concept to Launch:
                  </strong>{' '}
                  End-to-end development teams that handle every aspect of game
                  creation
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <p className='text-muted-foreground'>
                  <strong className='text-foreground'>
                    Platform Expertise:
                  </strong>{' '}
                  Mobile, console, PC, and web gaming across all major platforms
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <p className='text-muted-foreground'>
                  <strong className='text-foreground'>Scalable Teams:</strong>{' '}
                  From solo developers to full studio-scale teams based on your
                  needs
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className='mb-8'>
              <h4 className='font-semibold text-foreground text-xl mb-4'>
                Technologies We Master
              </h4>
              <div className='flex flex-wrap gap-2'>
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium glow-white-minimal'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Link href={'/contact'}>
              <Button
                size='lg'
                className='bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-6 font-semibold cursor-pointer flex justify-between items-center w-auto min-w-[240px] glow-blue animate-pulse-glow'>
                Start Your Game Project
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Button>
            </Link>
          </div>

          {/* Image Side */}
          <div className='relative'>
            <Image
              src={'/team-placeholder.jpg'}
              alt='Game development team'
              className='rounded-2xl shadow-card'
              height={500}
              width={600}
            />
            <div className='absolute inset-0 bg-gradient-hero/10 rounded-2xl'></div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className='group hover:shadow-[0_0_24px_6px_rgba(99,102,241,0.25)] transition-all duration-300 hover:scale-105 border-accent bg-background/60 backdrop-blur-lg shadow-[0_0_16px_4px_rgba(99,102,241,0.15)]'>
              <CardHeader>
                <div className='flex items-center space-x-3'>
                  <div className='p-2 bg-primary/10 rounded-lg text-primary group-hover:text-primary-glow transition-colors'>
                    {capability.icon}
                  </div>
                  <CardTitle className='text-lg text-foreground'>
                    {capability.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-muted-foreground'>
                  {capability.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center bg-gradient-card rounded-2xl p-8 border border-primary/10'>
          <h3 className='text-2xl font-bold mb-4 text-foreground'>
            Ready to Build the Next Gaming Success?
          </h3>
          <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
            Whether you&#39;re a startup with a revolutionary game concept or an
            established company expanding into gaming, we have the specialized
            talent to make it happen.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-6 font-semibold cursor-pointer flex justify-between items-center w-auto min-w-[240px] glow-blue animate-pulse-glow'>
                Contact Us to Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDevSection;
