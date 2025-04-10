import React from 'react';

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
    description: 'The CTF competition begins.',
  },
  {
    event: 'CTF Ends',
    date: '2023-10-02',
    // time: '10:00 AM',
    description: 'The CTF competition ends.',
  },
];

function Timeline() {
  return <div></div>;
}

export default Timeline;
