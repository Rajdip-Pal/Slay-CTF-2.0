'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import SLAY_LOGO, { TWITTER_LOGO } from '../../logos/slay-ctf';

function Footerdemo({
  quickLinks = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About Us',
      link: '/about',
    },
    {
      text: 'Rules',
      link: '/#rules',
    },
    {
      text: 'Timeline',
      link: '/#timeline',
    },
  ],
  contactUs = {
    phone: '+91 8509768930',
    email: 'rajdippal.rp@outlook.com',
  },
  followUs = [
    {
      icon: <FaLinkedin />,
      text: 'Linkedin',
      link: '',
      hoverMessage: 'Connect with us on Linkedin.',
    },
    {
      icon: <FaInstagram />,
      text: 'Instagram',
      link: '',
      hoverMessage: 'Follow us on Instagram',
    },
    {
      icon: <FaFacebook />,
      text: 'Facebook',
      link: '',
      hoverMessage: 'Follow us on Facebook',
    },
    {
      icon: <TWITTER_LOGO />,
      text: 'X',
      link: '',
      hoverMessage: 'Follow us on X',
    },
    {
      icon: <FaDiscord />,
      text: 'Discord',
      link: '',
      hoverMessage: 'Connect in Discord',
    },
  ],
}: {
  quickLinks?: {
    text: string;
    link: string;
  }[];
  contactUs?: {
    address?: {
      street?: string;
      city: string;
      state: string;
      country: string;
      zipcode: string;
    };
    phone?: string;
    email?: string;
  };
  followUs?: {
    icon: React.ReactNode;
    text: string;
    link: string;
    hoverMessage: string;
  }[];
}) {
  return (
    <footer className='relative text-white transition-colors duration-300 bg-gradient-to-t from-black  via-[rgba(0,0,0,0.5)] to-transparent backdrop-blur-xl'>
      <div className='container mx-auto px-4 py-12 md:px-6 lg:px-8'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div className='hidden md:block relative'>
            <h2 className='mb-4 text-3xl font-bold tracking-tight'>
              <SLAY_LOGO />
            </h2>
            <div className='absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl' />
          </div>

          {/* QUICK LINK SECTION */}
          <section className='quickLinks'>
            <h3 className='mb-4 text-lg font-semibold'>Quick Links</h3>
            <nav className='space-y-2 text-sm'>
              {...quickLinks.map((item, index): React.ReactNode => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className='block transition-colors hover:text-gray-500'
                  >
                    {item.text}
                  </Link>
                );
              })}
            </nav>
          </section>

          {/* Contact Us Section */}
          <section className='contactUs'>
            <h3 className='mb-4 text-lg font-semibold'>Contact Us</h3>
            <address className='space-y-2 text-sm not-italic'>
              {contactUs.address?.street && (
                <p>Street: {contactUs.address.street}</p>
              )}
              {contactUs.address?.city && <p>City: {contactUs.address.city}</p>}
              {contactUs.address?.state && (
                <p>State: {contactUs.address.state}</p>
              )}
              {contactUs.address?.country && (
                <p>Country: {contactUs.address.country}</p>
              )}
              {contactUs.address?.zipcode && (
                <p>Pin code: {contactUs.address.zipcode}</p>
              )}
              {contactUs.phone && <p>Phone: {contactUs.phone}</p>}
              {contactUs.email && <p>Phone: {contactUs.email}</p>}
            </address>
          </section>

          {/* Follow Us Section */}
          <section className='relative'>
            <h3 className='mb-4 text-lg font-semibold'>Follow Us</h3>
            <div className='mb-6 flex space-x-4'>
              {followUs.map((item, index) => {
                return (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={item.link}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Button
                            variant='outline'
                            size='icon'
                            className='rounded-full bg-black'
                          >
                            <div className='h-4 w-4 flex justify-center align-middle'>
                              {item.icon}
                            </div>
                          </Button>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.hoverMessage}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          </section>
        </div>

        {/* Botom Footer Section */}
        <section className='bootomFooter'>
          <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row'>
            <p className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()}{' '}
              <a
                href='https://www.linkedin.com/company/z3r0l0g0n/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Z3R0_LOGON
              </a>
              . All rights reserved.
            </p>
            <nav className='flex gap-4 text-sm'>
              <a href='#rules' className='transition-colors hover:text-primary'>
                Privacy Policy
              </a>
              <a href='#rules' className='transition-colors hover:text-primary'>
                Terms of Service
              </a>
            </nav>
          </div>
        </section>
      </div>
    </footer>
  );
}

export { Footerdemo };
