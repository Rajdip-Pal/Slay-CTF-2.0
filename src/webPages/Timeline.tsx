'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { EVENT_TIMES } from '@/constants';

export type TimelineCardProps = {
  event: string;
  date: string;
  time?: string;
  description?: string;
};

const Events: TimelineCardProps[] = EVENT_TIMES;

function Timeline({ events = Events }: { events?: TimelineCardProps[] }) {
  React.useEffect(() => {
    document.title = 'Events | Slay Ctf';
  });

  return (
    <div className='flex flex-col items-center'>
      <div className='flex max-w-[80%] md:max-w- mid:min-w-[80%]  min-h-[80%] text-white font-sans justify-center'>
        <div className='container w-[100%]'>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='text-white text-3xl md:text-4xl font-semibold text-center drop-shadow-[0_0_10px_rgba(236,72,153,0.9)] mb-10'
          >
            Timeline
          </motion.h2>
          {(() => {
            let isLeft = true;
            return (
              <div className='relative hidden md:block'>
                {events.map((event, index) => {
                  isLeft = !isLeft;
                  return (
                    <div
                      key={index}
                      className={`relative bg-transparent p-10 ${
                        !isLeft ? 'pr-10' : 'pl-10'
                      } w-[50%] flex ${
                        !isLeft ? 'flex-row-reverse' : 'ml-[50.2%] '
                      }`}
                    >
                      <div className=' border-pink-600 border-4 p-4 rounded-lg hover:scale-[1.04] transition-all duration-300'>
                        <h3 className='text-xl font-semibold'>{event.event}</h3>
                        <strong className='text-gray-400'>
                          {event.date}, {event.time}
                        </strong>
                        {event.description && (
                          <p className='text-gray-300 mt-2'>
                            {event.description}
                          </p>
                        )}
                      </div>
                      <div
                        className={`absolute ${
                          !isLeft ? '-right-[1.38rem]' : '-left-[1.37rem]'
                        } w-10 h-10 z-10 rounded-full border-2 border-pink-500 bg-pink-500 flex justify-center items-center hover:animate-bounce duration-700`}
                      >
                        <FaStar />
                      </div>
                    </div>
                  );
                })}
                <span className='absolute h-full w-[6px] top-0 bg-pink-700 left-[49.9%] rounded-xl'></span>
              </div>
            );
          })()}
          <div className='relative md:hidden flex flex-col items-end space-y-10 border-l-4 border-pink-700'>
            {events.map((event, index) => {
              return (
                <div key={index} className='relative flex justify-end'>
                  <div
                    className={` bg-transparent w-[90%] flex items-end text`}
                  >
                    <div className=' border-pink-600 border-4 p-4 rounded-lg hover:scale-[1.04] transition-all duration-300'>
                      <h3 className='text-xl font-semibold'>{event.event}</h3>
                      <strong className='text-gray-400'>
                        {event.date} , {event.time}
                      </strong>
                      {event.description && (
                        <p className='text-gray-300 mt-2'>
                          {event.description}
                        </p>
                      )}
                    </div>
                    <div
                      className={`absolute -left-[1.35rem] top-5 w-10 h-10 rounded-full border-2 border-pink-500 bg-pink-500 flex justify-center items-center hover:animate-bounce duration-700`}
                    >
                      <FaStar />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
