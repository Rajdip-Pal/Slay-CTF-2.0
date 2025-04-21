import About from '@/webPages/About';
import React from 'react';
import { MobileNavContext } from '@/contexts/MobileNavProvider';

const page = () => {
  const { navShow, toggleNavShow } = React.useContext(MobileNavContext);
  React.useEffect(() => {
    if (navShow) toggleNavShow();
  }, []);

  return <About />;
};

export default page;
