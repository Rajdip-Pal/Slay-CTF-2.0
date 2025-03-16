import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Home,
  Menu,
  X,
  Settings,
  HelpCircle,
  Gamepad,
  Book,
} from 'lucide-react';
import { RainbowButton } from '@/components/ui/rainbow-button';

import { AnimatePresence, motion } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import path from 'path';
import { table } from 'console';

interface Tab {
  title: string;
  icon: LucideIcon;
  link: string;
  type?: never;
}

interface Separator {
  type: 'separator';
  title?: never;
  link?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? '.5rem' : 0,
    paddingLeft: isSelected ? '1rem' : '.5rem',
    paddingRight: isSelected ? '1rem' : '.5rem',
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: 'auto', opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: 'spring', bounce: 0, duration: 0.6 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = 'text-primary',
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef(null);

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  const Separator = () => (
    <div className='mx-1 h-[24px] w-[1.2px] bg-border' aria-hidden='true' />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        'flex flex-wrap items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm',
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === 'separator') {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate='animate'
            custom={selected === index}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              'relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300',
              selected === index
                ? cn('bg-muted', activeColor)
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <Icon size={20} />
            <AnimatePresence initial={false}>
              {selected === index && (
                <motion.span
                  variants={spanVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  transition={transition}
                  className='overflow-hidden'
                >
                  <Link href={tab.link}>{tab.title}</Link>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemList = [
    { title: 'Home', link: '#', icon: Home },
    { title: 'Game', link: '#', icon: Gamepad },
    { title: 'Rules', link: '#', icon: Book },
    // { type: 'separator' },
    { title: 'Settings', link: '#', icon: Settings },
    { title: 'Support', link: '#', icon: HelpCircle },
  ];

  return (
    <header className='absolute w-full p-4 bg-transparent'>
      <div className='container mx-auto flex items-center justify-between'>
        <h1 className='font-squidGame text-4xl text-white ml-3'>
          {'Slay Ctf'}
        </h1>

        <ExpandableTabs tabs={navItemList} className='dark' />

        <div className='hidden md:block'>
          <RainbowButton className='text-2xl font-sans text-white border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition'>
            {'Register'}
          </RainbowButton>
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
                  {item.title}
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
