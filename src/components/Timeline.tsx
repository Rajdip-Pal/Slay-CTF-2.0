import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

type TimelineCardProps = {
  event: string;
  date: string;
  time?: string;
  description?: string;
};

const Events: TimelineCardProps[] = [
  {
    event: 'Null Meetup',
    date: '26 Apr 2025',
    // time: '10:00 AM',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ut quibusdam molestiae corporis. Aliquam aperiam quae non. Ipsam, odio culpa odit exercitationem repudiandae libero consectetur sapiente voluptates accusantium fugit laboriosam.',
  },
  {
    event: 'CTF Event',
    date: '27 Apr 2025',
    // time: '10:00 AM',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam beatae, rerum odit, architecto ipsa sit consequatur delectus illo aperiam harum distinctio, tenetur facilis dolor nostrum. Consequuntur incidunt quasi sunt enim?',
  },
  {
    event: 'Code Event',
    date: '28 Apr 2025',
    // time: '10:00 AM',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam beatae, rerum odit, architecto ipsa sit consequatur delectus illo aperiam harum distinctio, tenetur facilis dolor nostrum. Consequuntur incidunt quasi sunt enim?',
  },
  {
    event: 'Event End',
    date: '29 Apr 2025',
    // time: '10:00 AM',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam beatae, rerum odit, architecto ipsa sit consequatur delectus illo aperiam harum distinctio, tenetur facilis dolor nostrum. Consequuntur incidunt quasi sunt enim?',
  },
];

function Timeline({ events = Events }: { events?: TimelineCardProps[] }) {
  let isLeft = true;

  return (
    <div
      id='timeline'
      className=' min-w-[80%] min-h-[80%] text-white font-sans flex justify-center'
    >
      <div className='container w-[100%]'>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='text-white text-3xl md:text-4xl font-semibold text-center drop-shadow-[0_0_10px_rgba(236,72,153,0.9)] mb-10'
        >
          Timeline
        </motion.h2>
        {events.map((event, index) => {
          isLeft = !isLeft;
          return (
            <div
              key={index}
              className={`bg-transparent p-10 ${
                !isLeft ? 'pr-10' : 'pl-10'
              } w-[50%] flex ${
                !isLeft
                  ? 'border-r-[4px] border-r-pink-600 flex-row-reverse'
                  : 'ml-[50%] shadow-[-4px_0px_rgba(219,39,119,1)]'
              }`}
            >
              <div className=' border-pink-600 border-4 p-4 rounded-lg hover:scale-[1.04] transition-all duration-300'>
                <h3 className='text-xl font-semibold'>{event.event}</h3>
                <p className='text-gray-400'>{event.date}</p>
                {event.time && <p className='text-gray-400'>{event.time}</p>}
                {event.description && (
                  <p className='text-gray-300 mt-2'>{event.description}</p>
                )}
              </div>
              <div
                className={`absolute ${
                  !isLeft
                    ? '-translate-x-[-155%] -translate-y-[-50%] '
                    : 'translate-x-[-155%] -translate-y-[-50%] '
                } w-10 h-10 rounded-full border-2 border-pink-500 bg-pink-500 flex justify-center items-center`}
              >
                <FaStar />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
