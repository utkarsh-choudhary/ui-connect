import React from 'react';

function FifthPage() {
  return (
    <div className='relative h-screen'>
      <img src="../images/fifth.jpg" alt="" className='h-screen w-full object-cover' />
      <div className='absolute bottom-4 left-4 text-white p-4'>
        <h1 className='text-6xl'>
          "Reward your loyal customers,
          <br /> keep returning them. <br />
          Centralized Customer Profile <br />
          In-Build Virtual Wallet <br />
          Redeemable Loyalty Points"
        </h1>
      </div>
      <div className='absolute top-4 right-4 text-white py-12 space-y-4 flex flex-col  justify-start items-start gap-10 shadow-sm'>
        <div className='  flex flex-col justify-start items-start border-b-2'>
          <h1 className='text-6xl font-bold '>Hotel Chain</h1>
          <p className='text-2xl'>
            Position your properties for growth by <br />
            automating your businesses with an easy-to- <br />
            use enterprise platform that provides
          </p>
        </div>
        <div className='  flex flex-col justify-start items-start border-b-2 '>
          <h1 className='text-6xl font-bold '>Customer Loyalty Program</h1>
          <p className='text-2xl '>
          "Reward your loyal customers, keep returning them.<br />
          Centralized Customer Profile<br />
          In-Build Virtual Wallet
          </p>
        </div>
        <div className='   flex flex-col justify-start items-start border-b-2'>
          <h1 className='text-6xl font-bold '>Integrated Revenue Management</h1>
          <p className='text-2xl '> 
          Automate your pricing strategy <br />
          Let system increase your rate as your <br />
          occupancy level goes up on all sales channels
          </p>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
