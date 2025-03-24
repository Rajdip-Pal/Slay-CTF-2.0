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
      <div className='w-50'></div>
    </React.Fragment>
  );
}

export default TimelineCard;
