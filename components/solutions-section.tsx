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
  Users,
  Settings,
  Code,
  Gamepad2,
  Target,
  TestTube,
} from 'lucide-react';
import solutionsImage from '@/assets/solutions-staffing.jpg';

const SolutionsSection = () => {
  return (
    <section className='py-20 bg-background' id='solutions'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
            Two Core Solutions for Your Success
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Whether you need operational support or specialized gaming talent,
            we have the expertise to scale your team.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Solution Support Staffing */}
          <Card className='p-8 border-2 hover:border-accent/20 transition-colors bg-gradient-to-br from-card to-accent/5'>
            <CardContent className='p-0'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-accent/10 rounded-lg'>
                  <Settings className='h-8 w-8 text-accent' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-foreground'>
                    Solution Support Staffing
                  </h3>
                  <p className='text-muted-foreground'>
                    Strategic leadership & operational excellence
                  </p>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <Users className='h-5 w-5 text-accent mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Project Management
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Expert PMs to drive your initiatives forward
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Target className='h-5 w-5 text-accent mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Operations Support
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Streamline processes and optimize workflows
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Settings className='h-5 w-5 text-accent mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Fractional COO
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      C-level operational leadership on demand
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team to Implement Game Ideas */}
          <Card className='p-8 border-2 hover:border-accent/20 transition-colors bg-gradient-to-br from-card to-accent/5'>
            <CardContent className='p-0'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-accent/10 rounded-lg'>
                  <Gamepad2 className='h-8 w-8 text-accent' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-foreground'>
                    Team to Implement Game Ideas
                  </h3>
                  <p className='text-muted-foreground'>
                    Complete game development teams
                  </p>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <Code className='h-5 w-5 text-accent mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Full-Stack Engineering
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Frontend, backend, and infrastructure experts
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <TestTube className='h-5 w-5 text-accent mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      QA & Testing
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Comprehensive testing and quality assurance
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Users className='h-5 w-5 text-accent mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Design & Project Management
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Creative design and project coordination
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <h3 className='text-2xl font-bold text-foreground mb-4'>
            Ready to Scale Your Vision?
          </h3>
          <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Whether you need immediate support or want to build a long-term
            partnership, we're here to help you find the perfect talent for your
            projects.
          </p>
          <Button
            size='lg'
            className='bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3'>
            Schedule a Consultation
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
