import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LanguageIcon from '@mui/icons-material/Language';

function FirstPage() {
  return (
    <div className="relative flex flex-col h-screen bg-blue-950">
      <div className="relative z-20 flex items-end justify-end space-x-4 p-4">
      <div className='relative flex justify-end items-end'>
        <input 
          type="text" 
          placeholder='Search' 
          className='p-2 rounded-full text-black' 
        />
        <SearchIcon className="absolute flex justify-end items-end  text-gray-500"/>
        </div>
        <button className='text-white border border-white px-6 py-2 rounded-full bg-red-700 hover:bg-orange-800'>
          Customer Login
        </button>
      </div>
      <img 
        src="../images/image.png.jpeg" 
        className="absolute inset-0 w-full h-5/6 object-cover" 
        alt="Background" 
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-6xl mb-4">Hotel Management Made Easy</h1>
        <p className='text-white text-2xl mb-8'>
          A comprehensive suite of hospitality software products that help you<br />
          manage your hotel operations so that you can focus on your customers
        </p>
        <div className='space-x-4'>
          <button className='text-white border border-white px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600'>
            Request a demo
          </button>
          <button className='text-white border border-white px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600'>
            Free Consulting
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center align-middle py-8 text-2xl text-white">
        <div>
        <AccessTimeIcon className='text-orange-500' />
        <h3>3 Years</h3>
        <p>Since We Launched</p>
        </div>
        <div>
            <PersonIcon className='text-orange-500'/>
            <h3>400 +</h3>
            <p>Clients</p>
        </div>
        <div>
            <VpnKeyIcon className='text-orange-500'/>
            <h3>17000+</h3>
            <p>Room Managed</p>
        </div>
        <div>
            <PersonIcon className='text-orange-500'/>
            <h3>19 Million+</h3>
            <p>Yearly Transaction</p>
        </div>
        <div>
            <LanguageIcon className='text-orange-500'/>
            <h3>11 Countries</h3>
            <p>Global Support</p>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
