'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RULES_IMAGE } from '@/logos/slay-ctf';

const rules = [
  'Participants are allowed to use any tool (online/offline) for solving the challenges.',
  'Flag sharing is strictly prohibited. It will cause a ban from the CTF for both players.',
  'The duration of the CTF is 2.5 hours.',
  'Any type of attack on the CTF website is strictly prohibited.',
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Rules() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className='relative bg-transparent border border-white/20 rounded-xl p-6 max-w-3xl mx-auto mt-10 backdrop-blur-md'
      id='rules'
    >
      {/* Static Circular Image */}
      <div className='absolute -top-8 -left-8 w-24 h-24 rounded-full bg-white/10 border-2 border-pink-500 overflow-hidden '>
        <Image
          src='/images/rules-image_optimized.png'
          alt='Rules Image'
          width={100}
          height={100}
          className='object-cover w-full h-full'
        />
      </div>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='text-white text-3xl md:text-4xl font-semibold mb-6 text-center drop-shadow-[0_0_10px_rgba(236,72,153,0.9)]'
      >
        Rules
      </motion.h2>

      {/* Animated Rules List */}
      <motion.div
        variants={containerVariants}
        className='text-white text-sm md:text-base leading-relaxed space-y-3 pl-4'
      >
        {rules.map((rule, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className='flex items-start gap-2 p-4 rounded-lg hover:bg-white/10 transition duration-300 hover:shadow-[0_0_10px_rgba(236,72,153,0.6)]'
          >
            <span className='text-pink-400'>▶</span>
            {rule}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Rules;
