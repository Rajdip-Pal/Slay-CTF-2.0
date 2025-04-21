'use client';

import React from 'react';
import ThemeProvider from '@/contexts/ThemeProvider';
import Home from '@/pages/Home';
import MobileNavContextProvider, {
  MobileNavContext,
} from '@/contexts/MobileNavProvider';

const page = () => {
  const { navShow, toggleNavShow } = React.useContext(MobileNavContext);
  React.useEffect(() => {
    if (navShow) toggleNavShow();
  }, []);

  return (
    <ThemeProvider>
      <MobileNavContextProvider>
        <React.Fragment>
          <Home />
        </React.Fragment>
      </MobileNavContextProvider>
    </ThemeProvider>
  );
};

export default page;
