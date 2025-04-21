'use client';
import React, { ReactElement, ReactNode } from 'react';
import Members from '@/webPages/Members';
import { motion } from 'framer-motion';
import { MobileNavContext } from '@/contexts/MobileNavProvider';

function page() {
  const { navShow, toggleNavShow } = React.useContext(MobileNavContext);
  React.useEffect(() => {
    if (navShow) toggleNavShow();
  }, []);
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 50, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className='z-10 min-h-screen'
    >
      <Members />
    </motion.div>
  );
}

export default page;
