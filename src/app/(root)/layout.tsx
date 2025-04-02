'use client';
import React from 'react';
import { Footer } from '../../components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RainText from '@/components/ui/matrix-code';

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
          {/* <RainText
            fontSize={20}
            color=' rgba(236, 72, 153, 0.8)'
            characters='01'
            fadeOpacity={0.1}
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
