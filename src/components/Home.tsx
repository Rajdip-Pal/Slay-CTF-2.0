import React from 'react';
import { ThemeContext } from '@/contexts/ThemeProvider';

function Home() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      <img
        src="/images/slayy.png"
        alt="Slay CTF Logo"
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
      />
    </div>
  );
}

export default Home;
