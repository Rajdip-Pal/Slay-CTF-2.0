'use client';

// importing needed modules
import React from 'react';
// import '../globals.css';
// importing needed components
import ThemeProvider from '@/contexts/ThemeProvider';
import Home from '@/pages/Home';

const page = () => {
  return (
    <ThemeProvider>
      <React.Fragment>
        <Home />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default page;
