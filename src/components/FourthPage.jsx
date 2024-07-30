import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import CloudIcon from '@mui/icons-material/Cloud';
import EngineeringIcon from '@mui/icons-material/Engineering';

function FourthPage() {
  return (
    <div className='relative h-screen'>
      <img src="../images/emp.jpg" alt="Background" className='w-full h-full object-cover ' />
      <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center space-y-8 text-white'>
        <div className='flex items-start text-center space-x-4 border p-12 shadow-xl cursor-pointer opacity-95 '>
          <PublicIcon className='text-4xl m-4' />
          <div>
            <h1 className='text-4xl font-bold'>Global Distribution</h1>
            <p>
              Intelligent channel manager <br />
              Automatically updates your real-time
              room inventory on new reservation/ <br /> check-ins/checkouts to 
              all the channels. →
            </p>
          </div>
        </div>
        <div className='flex items-start text-center space-x-4 border p-12 shadow-xl cursor-pointer opacity-95'>
          <CloudIcon className='text-4xl m-4' />
          <div>
            <h1 className='text-4xl font-bold'>An Integrated Hotel Management System on Cloud</h1>
            <p>
            The benefits of having a single version of centrally hosted software cannot be <br />
            overstated. Hotel staff doesn't have to wrestle with multiple software versions,
               <br /> multiple platforms and all the associated complexities →
            </p>
          </div>
        </div>
        <div className='flex items-start text-center space-x-4 border p-12 shadow-xl cursor-pointer opacity-95'>
          <EngineeringIcon className='text-4xl m-4 ' />
          <div>
            <h1 className='text-4xl font-bold'>Booking Engine</h1>
            <p>
            Get bookings directly from your website. Prompt for commission free booking <br />
            from your website: rooms, packages, up-sell services. →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
