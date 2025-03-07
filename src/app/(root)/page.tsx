'use client'; // eslint-disable-line

// importing needed modules
import React from 'react';

// importing needed components
import Home from '@/components/Home/Home';
import Navbar from '@/components/Navbar/Navbar';

const page = () => {
  React.useEffect(() => {
    document.title = 'Slay Ctf';
  });

  return (
    <div className='justify-center items-center'>
      <Navbar />
      {/* <Home /> */}
    </div>
  );
};

export default page;
