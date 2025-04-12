'use client';
import React from 'react';
import { SlidingNumber } from '@/components/ui/sliding-number';

interface ClockProps {
  targetDate?: Date;
}

export function Clock({
  targetDate = new Date('2025-04-27'),
}: ClockProps): React.JSX.Element {
  const [hours, setHours] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);

  React.useEffect(() => {
    const updateTimer = (): void => {
      const now: Date = new Date();
      const diff: number = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const diffHours: number = Math.floor(diff / (1000 * 60 * 60));
      const diffMinutes: number = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const diffSeconds: number = Math.floor((diff % (1000 * 60)) / 1000);

      setHours(diffHours);
      setMinutes(diffMinutes);
      setSeconds(diffSeconds);
    };

    updateTimer();
    const interval: NodeJS.Timeout = setInterval(updateTimer, 1000);

    return (): void => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className='flex items-center gap-0.5 font-mono'>
      <SlidingNumber value={hours} padStart={true} />
      <span className='text-zinc-500'>:</span>
      <SlidingNumber value={minutes} padStart={true} />
      <span className='text-zinc-500'>:</span>
      <SlidingNumber value={seconds} padStart={true} />
    </div>
  );
}
