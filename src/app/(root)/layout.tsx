'use client';
import React from 'react';
import { Footer } from '../../components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showingHero, setShowingHero] = React.useState(true);

  React.useEffect(() => {
    document.title = 'SLAY CTF';
    setTimeout(() => setShowingHero(false), 2000);
  });

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
