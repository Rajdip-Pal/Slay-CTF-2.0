'use client';

import React from 'react';
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
