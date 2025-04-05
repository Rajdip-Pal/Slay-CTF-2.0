import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import squidGameLogo from '@/assets/images/squidGameLogo.png';
import cardBoardTexture from '@/assets/images/card-board-texture.jpeg';

export interface TestimonialAuthor {
  name: string;
  title: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  className?: string;
}

export function TestimonialCard({ author, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'flex rounded-lg border-t',
        'hover:linear-gradient bg-gradient-to-tl',
        'card bg-[url(/images/card-board-texture.png)]',
        'border border-muted/50',
        'hover:from-muted/60 hover:to-muted/20',
        'max-w-[320px] sm:max-w-[320px]',
        'transition-colors duration-300',
        'space-y-2',
        className
      )}
    >
      <div className='w-16 h-full overflow-hidden'>
        <Image src={squidGameLogo} alt='' className='h-full' />
      </div>
      <div className='flex justify-center items-center gap-3 space-y-3'>
        <Avatar className='h-100 w-100 '>
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className='flex flex-col items-center space-y-2'>
          <h3 className='text-md font-semibold leading-none'>{author.name}</h3>
          <div className='bg-[#260C19] p-2 rounded-md text-sm text-white'>
            {author.title}
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <Link href={'/'} className='text-sm hover:text-muted-foreground'>
              <FaLinkedin className='h-5 w-5' />
            </Link>
            <Link href={'/'} className='text-sm hover:text-muted-foreground'>
              <FaGithub className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
