'use client';

import React from 'react';
import { NavigationMenuDemo } from './NavigationMenuDemo';
import { Button } from './ui/button';

function Navbar() {
  return (
    <nav className='fixed w-[100%] z-10 from-black via-[rgba(0,0,0,0.5)] to-transparent backdrop-blur-xl flex justify-between p-5 text-white'>
      <div className='h-10 font-bold text-3xl'>SLAY CTF</div>
      <div className='bg-transparent'>
        <NavigationMenuDemo />
      </div>
      <div className='space-x-2'>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}

export default Navbar;
