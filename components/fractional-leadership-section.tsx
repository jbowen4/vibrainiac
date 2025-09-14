import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Trophy } from 'lucide-react';

const FractionalLeadershipSection = () => {
  return (
    <section className='py-20 bg-muted/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
            Solution Focused Fractional Leaders
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Expert leadership that adapts to your unique challenges and drives
            measurable results.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          <Card className='p-6 border-2 hover:border-accent/20 transition-colors bg-card/50'>
            <CardContent className='p-0 text-center'>
              <div className='p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <Zap className='h-8 w-8 text-accent' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>
                From Chaos to Launch
              </h3>
              <p className='text-muted-foreground'>
                Getting projects and teams on track to deliver strong results
              </p>
            </CardContent>
          </Card>

          <Card className='p-6 border-2 hover:border-accent/20 transition-colors bg-card/50'>
            <CardContent className='p-0 text-center'>
              <div className='p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <Shield className='h-8 w-8 text-accent' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>
                Leading IT Teams
              </h3>
              <p className='text-muted-foreground'>
                Over 20 years of experience building and managing
                high-performance teams
              </p>
            </CardContent>
          </Card>

          <Card className='p-6 border-2 hover:border-accent/20 transition-colors bg-card/50'>
            <CardContent className='p-0 text-center'>
              <div className='p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <Trophy className='h-8 w-8 text-accent' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>
                AAA Game Teams
              </h3>
              <p className='text-muted-foreground'>
                7 years leading AAA game development teams to successful
                launches
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FractionalLeadershipSection;
