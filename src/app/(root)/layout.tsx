'use client';
import React from 'react';
import { Footer } from '../../components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/pages/Hero';
import RainText from '@/components/ui/matrix-code';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showingHero, setShowingHero] = React.useState(true);

  React.useEffect(() => {
    document.title = showingHero ? 'Welcome to Slay CTF' : 'Slay CTF - Explore';
    setTimeout(() => setShowingHero(false), 2000);
  }, [showingHero]);

  return (
    <React.Fragment>
      {showingHero && <Hero />}
      {!showingHero && (
        <React.Fragment>
          {/* <RainText
            fontSize={20}
            color='rgba(236, 72, 153, 0.8)'
            characters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            fadeOpacity={0.3}
            speed={1.0}
          /> */}
          <Navbar />
          {children}
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Layout;
