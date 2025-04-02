import React from 'react';
import Member from './MemberCard';

function Members() {
  return (
    <React.Fragment>
      <div className='w-full min-h-[60vh] flex flex-col items-center justify-center space-y-10'>
        <div className='w-full flex flex-col items-center justify-center mt-32'>
          <div className='flex flex-col items-center justify-center flex-wrap space-y-1'>
            <h2 className='text-white text-3xl px-7'>Core Team</h2>
            <div className='bg-[#EC4899] w-[100%] h-1 rounded-full'></div>
          </div>
          <Member />
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-32'>
          <div className='flex flex-col items-center justify-center flex-wrap space-y-1'>
            <h2 className='text-white text-2xl px-7'>Extended Core Team</h2>
            <div className='bg-[#EC4899] w-[100%] h-1 rounded-full'></div>
          </div>
          <Member />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Members;
