import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function SecondPage() {
  return (
    <div className='h-screen'>
    <div className=' flex'>
    <div className=' flex '>
        <img src="../images/bed&breakfast.jpg" alt="" className=' w-auto ' />
    </div>
    <div className='m-6 relative py-24'>
        <h1 className=' justify-center flex items-center text-6xl'>Bed & <br /> Breakfast</h1>
            <button className='border p-2 m-1 text-white bg-gray-400'>Know More</button>
            <ArrowForwardIosIcon className='relative'/>
            <button className='border p-2 text-white bg-gray-400'>Success Stories</button>
            <ArrowForwardIosIcon/>
    </div>
    <div className=' flex '>
        <img src="../images/kitchen.jpeg" alt="" className=' w-auto h-96' />
    </div>
    <div className='m-6 relative py-24'>
        <h1 className=' justify-center flex items-center text-6xl'>Service <br />Apartment</h1>
            <button className='border p-2 m-1 text-white bg-gray-400'>Know More</button>
            <ArrowForwardIosIcon className='relative'/>
            <button className='border p-2 text-white bg-gray-400'>Success Stories</button>
            <ArrowForwardIosIcon/>
    </div>
    </div>
    <div className=' flex'>
    
    <div className='m-6 relative py-24'>
        <h1 className=' justify-center flex items-center text-6xl'>Hotels</h1>
            <button className='border p-2 m-1 text-white bg-gray-400'>Know More</button>
            <ArrowForwardIosIcon className='relative'/>
            <button className='border p-2 text-white bg-gray-400'>Success Stories</button>
            <ArrowForwardIosIcon/>
    </div>
    <div className=' flex '>
        <img src="../images/hotel.jpg" alt="" className='w-auto h-96' />
    </div>
    
    <div className='m-6 relative py-24'>
        <h1 className=' justify-center flex items-center text-6xl'>Resorts</h1>
            
            <button className='border p-2 m-1 text-white bg-gray-400'>Know More</button>
            <ArrowForwardIosIcon className='h-full'/>
            <button className='border p-2 text-white bg-gray-400'>Success Stories</button>
            <ArrowForwardIosIcon/>
    </div>
    <div className=' flex '>
        <img src="../images/resorts.jpeg" alt="" className=' w-auto h-96' />
    </div>
    </div>
    <div className='bg-orange-500 w-full p-32 flex justify-center items-center'>
        <p className='text-white text-6xl flex items-center justify-center text-center'>PMS On Cloud - <br /> Monitor your business in real-time </p>
        
      </div>
    </div>
  )
}

export default SecondPage
