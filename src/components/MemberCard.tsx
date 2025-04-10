import {
  TestimonialCard,
  TestimonialCardProps,
} from '@/components/ui/testimonial-card';

export default function Member({
  testimonials,
}: {
  testimonials: TestimonialCardProps[];
}) {
  return (
    <div className='flex flex-col gap-8 p-6'>
      <div className='space-y-8'>
        <div className='grid gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
