'use client';

// importing needed modules
import React from 'react';

// importing needed components
import ThemeProvider from '@/contexts/ThemeProvider';
import Home from '@/components/Home';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const page = () => {
  const [showingHero, setShowingHero] = React.useState(true);

  React.useEffect(() => {
    document.title = 'Slay Ctf';
    setTimeout(() => setShowingHero(false), 4000);
  });

  return (
    <ThemeProvider>
      <React.Fragment>
        {showingHero && <Hero />}
        {!showingHero && (
          <div className='justify-center items-center'>
            <Navbar />
            <Home />
          </div>
        )}
      </React.Fragment>
    </ThemeProvider>
  );
};

export default page;
