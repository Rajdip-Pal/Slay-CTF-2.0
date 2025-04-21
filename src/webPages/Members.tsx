'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Member from '../components/MemberCard';
import { TestimonialCardProps } from '../components/ui/testimonial-card';
import { EVENT_MEMBERS } from '@/constants';

const CoreTeam: TestimonialCardProps[] = EVENT_MEMBERS;

function Members() {
  React.useEffect(() => {
    document.title = 'Members | Slay Ctf';
  }, []);

  return (
    <React.Fragment>
      <motion.div className='w-full flex flex-col items-center justify-center p-16'>
        <div className='flex flex-col items-center justify-center flex-wrap space-y-1'>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='text-white text-3xl md:text-4xl font-semibold text-center drop-shadow-[0_0_10px_rgba(236,72,153,0.9)] mb-5 font-sans'
          >
            Our Team
          </motion.h2>
        </div>
        <Member testimonials={CoreTeam} />
      </motion.div>
    </React.Fragment>
  );
}

export default Members;
