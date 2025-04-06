import React from 'react';
import Member from './MemberCard';
import { TestimonialCardProps } from './ui/testimonial-card';

const CoreTeam: TestimonialCardProps[] = [
  {
    author: {
      name: 'Souhardya Deb',
      title: 'Web Leader',
      avatar: './images/memebrs/souhardya.png',
      linkedin: 'https://www.linkedin.com/in/souhardya-deb-921578254/',
      github: 'https://github.com/Souhardya03',
    },
  },
];
const ExtendedCoreTeam: TestimonialCardProps[] = [
  {
    author: {
      name: 'Rajdip Pal',
      title: 'Web Developer',
      avatar: './images/memebrs/rajdip.png',
      linkedin: 'https://www.linkedin.com/in/rajdip-pal/',
      github: 'https://github.com/Rajdip-Pal',
    },
  },
];

function Members() {
  return (
    <React.Fragment>
      <div className='w-full min-h-[60vh] flex flex-col items-center justify-center space-y-10'>
        <div className='w-full flex flex-col items-center justify-center mt-32'>
          <div className='flex flex-col items-center justify-center flex-wrap space-y-1'>
            <h2 className='text-white text-3xl px-7'>Core Team</h2>
            <div className='bg-[#EC4899] w-[100%] h-1 rounded-full'></div>
          </div>
          <Member testimonials={CoreTeam} />
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-32'>
          <div className='flex flex-col items-center justify-center flex-wrap space-y-1'>
            <h2 className='text-white text-2xl px-7'>Extended Core Team</h2>
            <div className='bg-[#EC4899] w-[100%] h-1 rounded-full'></div>
          </div>
          <Member testimonials={ExtendedCoreTeam} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Members;
