import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export interface TestimonialAuthor {
  name: string;
  title: string;
  avatar: string;
  linkedin: string;
  github: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  className?: string;
}

export function TestimonialCard({ author, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-xl',
        'p-4 text-start sm:p-6',
        'max-w-[320px] sm:max-w-[320px]',
        'transition-colors duration-300',
        'space-y-2',
        className
      )}
    >
      <div className='flex-col justify-center items-center gap-3 space-y-3 text-pink-600 hover:scale-110 transition-all duration-1000'>
        <Avatar className='max-h-[200px] max-w-[200px] h-80 w-80 rounded-xl'>
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className='flex flex-col items-center space-y-2'>
          <h3 className='text-md font-semibold leading-none text-white hover:text-gray-600 transition-all duration-1000'>
            {author.name}
          </h3>
          <div className='text-sm text'>{author.title}</div>
          <div className='flex items-center gap-2 mt-2 '>
            <Link
              href={author.linkedin || '/'}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm  text-blue-600 hover:text-muted-foreground'
            >
              <FaLinkedin className='h-5 w-5' />
            </Link>
            <Link
              href={author.github || '/'}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-white hover:text-muted-foreground'
            >
              <FaGithub className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
