import React from 'react';

function TimelineCard({
  content = {
    date: '',
    event: '',
    time: '',
    description: '',
  },
}: {
  content?: {
    date: String;
    event: String;
    time: string;
    description?: string;
  } | null;
}) {
  return (
    <React.Fragment>
      <div className='w-50 h-30'></div>
    </React.Fragment>
  );
}

function Timeline({
  content = [
    {
      date: '',
      event: '',
      time: '',
      description: '',
    },
  ],
}: {
  content?: {
    date: String;
    event: String;
    time: string;
    description?: string;
  }[];
}) {
  return (
    <React.Fragment>
      {content.map(() => {
        return <></>;
      })}
    </React.Fragment>
  );
}

export default Timeline;
