'use client';

// importing needed modules
import React from 'react';
import { useRouter } from 'next/router';

// importing needed components
import Home from '@/components/Home/Home';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero_Landing/Hero';

const page = () => {
  const [showingHero, setShowingHero] = React.useState(true);

  React.useEffect(() => {
    document.title = 'Slay Ctf';
    setTimeout(() => setShowingHero(false), 4000);
  });

  return (
    <React.Fragment>
      {showingHero && <Hero />}
      {!showingHero && (
        <div className='justify-center items-center'>
          <Navbar />
          {/* <Home /> */}
        </div>
      )}
    </React.Fragment>
  );
};

export default page;
