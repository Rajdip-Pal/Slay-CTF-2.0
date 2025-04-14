'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dotenv from 'dotenv';
import { SlidingNumber } from '@/components/ui/sliding-number';

import SMILE from '@/assets/images/smile2.png';

dotenv.config();
interface ClockProps {
  targetDate?: Date;
}

export function Clock({
  targetDate = new Date('2025-04-27'),
}: ClockProps): React.JSX.Element {
  const [days, setDays] = React.useState<number>(0);
  const [hours, setHours] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);

  React.useEffect(() => {
    const updateTimer = (): void => {
      const now: Date = new Date();
      const diff: number = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const diffDays: number = Math.floor(diff / (1000 * 60 * 60 * 24));
      const diffHours: number = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const diffMinutes: number = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const diffSeconds: number = Math.floor((diff % (1000 * 60)) / 1000);

      setDays(diffDays);
      setHours(diffHours);
      setMinutes(diffMinutes);
      setSeconds(diffSeconds);
    };

    updateTimer();
    const interval: NodeJS.Timeout = setInterval(updateTimer, 1000);

    return (): void => clearInterval(interval);
  }, [targetDate]);

  const Times: {
    Days: number;
    Hours: number;
    Minutes: number;
    Seconds: number;
  } = {
    Days: days,
    Hours: hours,
    Minutes: minutes,
    Seconds: seconds,
  };

  return (
    <div className='relative max-w-[80%] md:max-w-[60%] text-white bg-transparent flex flex-col items-center space-y-5 p-16 border rounded-2xl font-sans'>
      <div className='grid grid-rows-1 grid-cols-4 space-x-3'>
        {(
          ['Days', 'Hours', 'Minutes', 'Seconds'] as Array<keyof typeof Times>
        ).map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center space-y-2'
          >
            <div className='text-5xl w-24 h-20 bg-pink-800 text-center flex justify-center rounded-sm hover:scale-105 duration-700'>
              <SlidingNumber value={Times[item]} padStart={true} />
            </div>
            <div className='text-xl'>{item}</div>
          </div>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center space-y-3'>
        <p>Don't Miss the Chance Registre yourself Now</p>
        <Link
          href={process.env.REGUISTRATION_URL || '/'}
          className='p-2 pl-3 bg-transparent hover:bg-transparent border rounded-sm hover:scale-105 duration-700 hover:shadow-xl hover:shadow-pink-500'
        >
          Register Now
        </Link>
      </div>
      <Image
        src={SMILE}
        alt='smiling'
        className='absolute rounded-full w-28 h-28 -right-14 -top-14 border-4 border-pink-800'
      ></Image>
    </div>
  );
}
