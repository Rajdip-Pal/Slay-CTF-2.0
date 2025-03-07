import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemList = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '/about' },
    { name: 'Games', link: '#' },
    { name: 'Rules', link: '#' },
    { name: 'Contact', link: '#' },
    { name: "Faq's", link: '#' },
  ];

  return (
    <header className='absolute w-full p-4 bg-transparent'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <img src='' alt='Logo' className='h-10 w-10' />
          <h1 className='font-squidGame text-4xl text-white ml-3'>
            {'Slay Ctf'}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <ul className='flex gap-6 font-sans text-2xl text-white'>
            {navItemList.map((item, index) => (
              <li key={index} className='relative group'>
                <Link
                  href={item.link}
                  className='relative hover:text-gray-300 transition-all duration-300'
                >
                  {item.name}
                  {/* Underline Effect */}
                  <span className='absolute left-0 bottom-[-4px] w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full rounded'></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Register Button */}
        <div className='hidden md:block'>
          <button className='text-2xl font-sans text-white border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition'>
            {'Register'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden text-white'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className='md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 p-4'>
          <ul className='flex flex-col gap-4 text-center text-white text-2xl'>
            {navItemList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className='relative hover:text-gray-300 transition-all duration-300'
                >
                  {item.name}
                  <span className='absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 hover:w-full'></span>
                </Link>
              </li>
            ))}
            <li>
              <button className='text-2xl font-sans border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition'>
                {'Register'}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
