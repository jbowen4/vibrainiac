import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SuccessPage() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-200px)] px-4'>
      <div className='text-center max-w-md space-y-6'>
        <div className='flex justify-center'>
          <CheckCircle className='size-16 text-accent' />
        </div>

        <h1 className='font-bold text-4xl text-white'>
          Form submitted successfully!
        </h1>

        <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-left'>
          Thank you for submitting. Our team will be reaching out to you soon.
          We look forward to working with you.
        </p>

        <Button
          asChild
          className='bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer'>
          <Link href='/'>Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
