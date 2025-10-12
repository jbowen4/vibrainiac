import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Users,
  Briefcase,
  Settings,
  Code,
  Gamepad2,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const FractionalLeadershipSection = () => {
  const solutions = [
    {
      icon: <Briefcase className='h-8 w-8' />,
      title: 'Project Management',
      description:
        'PMI Certified & Scrum Agile certified Project Managers & Scrum masters',
    },
    {
      icon: <Settings className='h-8 w-8' />,
      title: 'Operations Support',
      description: 'Streamline processes and scale your operational efficiency',
    },
    {
      icon: <Users className='h-8 w-8' />,
      title: 'Product Mangement',
      description:
        'Development leadership to align strategic goals with customer expectations ensuring all product requirements are well executed',
    },
    {
      icon: <Code className='h-8 w-8' />,
      title: 'Full-Stack Engineering',
      description: 'End-to-end development expertise for any tech stack',
    },
    {
      icon: <Gamepad2 className='h-8 w-8' />,
      title: 'Game Design Support',
      description: 'UI/ UX, Prototypes, Narrative Design, Writing/ Editing',
    },
    {
      icon: <Rocket className='h-8 w-8' />,
      title: 'Offshore Teams',
      description: 'Global talent pool with seamless collaboration',
    },
  ];

  return (
    <section id='solutions' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
            Solution-Focused Leaders
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Expert leaders at a fraction of the cost that adapt to your unique
            challenges with precision-matched talent that accelerate your
            project delivery and operational excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-12 items-center my-20'>
          {/* Image Side */}
          <div className='relative'>
            <Image
              src={'/lady-giving-presentation.webp'}
              alt='Professional staffing solutions'
              height={500}
              width={600}
              className='rounded-2xl shadow-card'
            />
            <div className='absolute inset-0 bg-gradient-primary/10 rounded-2xl'></div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className='text-2xl font-bold mb-6 text-foreground'>
              When Do Teams Call Us?
            </h3>

            <div className='space-y-6 mb-8'>
              <div className='border-l-4 border-accent pl-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Deliver faster. Scale smarter.
                </h4>
                <p className='text-muted-foreground'>
                  Get projects out the door on time without the wasted cost of
                  over-engineered processes.
                </p>
              </div>
              <div className='border-l-4 border-accent pl-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Boost capacity. Protect your people.
                </h4>
                <p className='text-muted-foreground'>
                  Add the right support so your team avoids burnout and stays
                  focused on what they do best.
                </p>
              </div>
              <div className='border-l-4 border-accent pl-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Hit deadlines. Build trust.
                </h4>
                <p className='text-muted-foreground'>
                  Put solid operations in place that keep commitments,
                  strengthen credibility, and keep customers happy.
                </p>
              </div>
              <div className='border-l-4 border-accent pl-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Expand globally. Save locally.
                </h4>
                <p className='text-muted-foreground'>
                  Tap into skilled offshore talent to increase bandwidth and cut
                  costs without sacrificing quality.
                </p>
              </div>
            </div>

            <Link href='/contact'>
              <Button
                variant='default'
                size='lg'
                className='bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 cursor-pointer'>
                Explore Solutions
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Button>
            </Link>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className='group hover:shadow-[0_0_24px_6px_rgba(99,102,241,0.25)] transition-all duration-300 hover:scale-105 border-accent bg-background/60 backdrop-blur-lg shadow-[0_0_16px_4px_rgba(99,102,241,0.15)]'>
              <CardHeader>
                <div className='flex items-center space-x-3'>
                  <div className='p-2 bg-primary/10 rounded-lg text-primary group-hover:text-primary-glow transition-colors'>
                    {solution.icon}
                  </div>
                  <CardTitle className='text-lg text-foreground'>
                    {solution.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-muted-foreground'>
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FractionalLeadershipSection;
