'use client';
import React from 'react';
import { Footer } from '../../components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/pages/Hero';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showingHero, setShowingHero] = React.useState(true);

  React.useEffect(() => {
    document.title = showingHero ? 'Welcome to Slay CTF' : 'Slay CTF - Explore';
    setTimeout(() => setShowingHero(false), 3000);
  }, [showingHero]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowingHero(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <React.Fragment>
      {showingHero && <Hero />}
      {!showingHero && (
        <React.Fragment>
          <Navbar />
          {children}
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Layout;
