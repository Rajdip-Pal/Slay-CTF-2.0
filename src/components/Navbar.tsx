import React from 'react';

import { ThemeContext } from '@/contexts/ThemeProvider';

function Navbar() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <React.Fragment>
      <div
        className={`flex justify-around ${
          theme === 'dark' ? 'text-white' : 'text-bl'
        }`}
      >
        <div>Logo</div>
        <div>options</div>
        <div>Login, Signup</div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
