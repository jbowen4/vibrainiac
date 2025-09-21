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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
              src={'/team-placeholder.jpg'}
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
              <div className='border-l-4 border-primary-glow pl-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Delivery Too Slow or Costly
                </h4>
                <p className='text-muted-foreground'>
                  &quot; We deliver on time, but our processes are
                  over-engineered. We&#39;re not getting enough throughput to
                  scale.&quot;
                </p>
              </div>
              <div className='border-l-4 border-primary-deep pl-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Under Resourced Teams
                </h4>
                <p className='text-muted-foreground'>
                  &quot; Every project has lengthy crunch time. Team health is
                  dropping and our best people are looking elsewhere.&quot;
                </p>
              </div>
              <div className='border-l-4 border-primary-deep pl-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Projects Late or Deadlines Missed Due to Lack of Operations
                  Process
                </h4>
                <p className='text-muted-foreground'>
                  &quot;Our team frequently misses delivery commitments.
                  We&#39;re losing credibility with leadership and customers
                  aren&#39;t happy.&quot;
                </p>
              </div>
            </div>

            <Button
              variant='default'
              size='lg'
              className='bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3'>
              Explore Solutions
              <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
            </Button>
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
