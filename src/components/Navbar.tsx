'use client';

import React from 'react';
import Link from 'next/link';
import dotenv from 'dotenv';

import { NavigationMenuDemo } from './NavigationMenuDemo';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

dotenv.config();
const navContent = [
  { title: 'Home', href: '/', expandable: false },
  { title: 'About', href: '/about', expandable: false },
  { title: 'Members', href: '/members', expandable: false },
  { title: 'Leaderboard', href: '/leaderboard', expandable: false },
  { title: 'Timeline', href: '/events', expandable: false },
];

function Navbar() {
  const [showingMobileNavabar, setShowingMobileNavbar] = React.useState(false);

  return (
    <React.Fragment>
      <nav className='hidden fixed w-[100%] z-10 from-black via-[rgba(0,0,0,0.5)] to-transparent backdrop-blur-xl md:flex justify-between p-5 text-white'>
        <div className='h-10 font-bold text-3xl'>
          <Link href='/'>SLAY CTF</Link>
        </div>
        <NavigationMenuDemo content={navContent} />
        <div className='space-x-2'>
          <Button
            onClick={() =>
              (window.location.href = process.env.LOGIN_URL || '/')
            }
          >
            Login
          </Button>
          <Button
            onClick={() =>
              (window.location.href = process.env.REGUISTRATION_URL || '/')
            }
          >
            Register
          </Button>
        </div>
      </nav>
      <nav className='md:hidden fixed w-[100%] z-10 from-black via-[rgba(0,0,0,0.5)] to-transparent backdrop-blur-xl flex justify-between p-5 text-white'>
        <div className='h-10 font-bold text-xl'>
          <Link href='/'>SLAY CTF</Link>
        </div>

        <div className='h-10 flex items-center space-x-2'>
          <Button
            onClick={() =>
              (window.location.href = process.env.LOGIN_URL || '/')
            }
          >
            Login
          </Button>
          {showingMobileNavabar ? (
            <X
              className='h-[100%] text-white'
              onClick={() => setShowingMobileNavbar(false)}
            />
          ) : (
            <Menu
              className='h-[100%] text-white'
              onClick={() => setShowingMobileNavbar(true)}
            />
          )}

          {showingMobileNavabar && (
            <>
              <motion.div
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -300 }}
                transition={{
                  opacity: { duration: 0.3 },
                  y: { type: 'spring', stiffness: 300, damping: 30 },
                }}
                className='fixed top-0 left-0 w-full z-10 p-10 pt-0  flex flex-col items-center backdrop-blur-xl space-y-2  mt-16 '
              >
                <div className='flex flex-col items-center space-y-2 w-full  bg-black/50 backdrop-blur-xl rounded-xl p-5'>
                  {navContent.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className='text-lg text-white hover:text-gray-300 hover:border-gray-300 w-[100%] text-center py-2'
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
