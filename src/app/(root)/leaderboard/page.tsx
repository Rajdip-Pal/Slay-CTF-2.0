import React from 'react';
import { MobileNavContext } from '@/contexts/MobileNavProvider';

function page() {
  const { navShow, toggleNavShow } = React.useContext(MobileNavContext);
  React.useEffect(() => {
    if (navShow) toggleNavShow();
  }, []);
  return (
    <div className='flex flex-col items-center justify-center h-screen text-white bg-transparent'>
      <h1>Leaderboard</h1>
      <p>Leaderboard page</p>
    </div>
  );
}

export default page;
