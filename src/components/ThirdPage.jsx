import React from 'react';
import StyleSharpIcon from '@mui/icons-material/StyleSharp';
import RoomServiceSharpIcon from '@mui/icons-material/RoomServiceSharp';
import SellSharpIcon from '@mui/icons-material/SellSharp';
import SettingsSuggestSharpIcon from '@mui/icons-material/SettingsSuggestSharp';
import DinnerDiningSharpIcon from '@mui/icons-material/DinnerDiningSharp';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import CalculateIcon from '@mui/icons-material/Calculate';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ListIcon from '@mui/icons-material/List';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import BadgeIcon from '@mui/icons-material/Badge';

function ThirdPage() {
  return (
    <div className='relative h-screen overflow-hidden'>
      <img src="../images/pic_cred.jpg" alt="" className='absolute inset-0 h-full w-full object-cover' />
      <div className='relative z-10 p-8 bg-white bg-opacity-75 h-full overflow-y-auto'>
        <h1 className='text-black text-4xl sm:text-6xl font-bold my-8'>
          Inkey Features
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='border-r-2 pr-4 hover:shadow-2xl flex flex-col items-start'>
            <StyleSharpIcon className='text-6xl text-orange-500' />
            <h2 className='text-3xl'>Reservation</h2>
            <p>With intuitive and integrated dashboard <br />and views, our reservation system...</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='border-r-2 pr-4 hover:shadow-2xl flex flex-col items-start'>
            <RoomServiceSharpIcon className='text-6xl text-orange-500'/>
            <h2 className='text-3xl'>FRONTDESK</h2>
            <p>Operation at frontdesk are carried out <br /> in the quickest and simplest way so...</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='hover:shadow-2xl flex flex-col items-start'>
            <SellSharpIcon className='text-6xl text-orange-500'/>
            <h2 className='text-3xl'>POINT OF SALE</h2>
            <p>Our POS system is designed to give <br /> restaurants all the tool it requires to...</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='border-r-2 pr-4 hover:shadow-2xl flex flex-col items-start'>
            <SettingsSuggestSharpIcon className='text-6xl text-orange-500' />
            <h2 className='text-3xl'>MATERIAL MANAGEMENT</h2>
            <p>Robust material management module <br />allows real-time tracking of inventory...</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='border-r-2 pr-4 hover:shadow-2xl flex flex-col items-start'>
            <DinnerDiningSharpIcon className='text-6xl text-orange-500'/>
            <h2 className='text-3xl'>BANQUET & CONFERENCING</h2>
            <p>Manage all your events ranging from <br /> banquets to conferences to parties,...</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='hover:shadow-2xl flex flex-col items-start'>
            <CleaningServicesIcon className='text-6xl text-orange-500'/>
            <h2 className='text-3xl'>HOUSE KEEPING</h2>
            <p>Our housekeeping module is full synk <br /> with frontdesk allows yours...</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='border-r-2 pr-4 hover:shadow-2xl flex flex-col items-start'>
            <CalculateIcon className='text-6xl text-orange-500' />
            <h2 className='text-3xl'>FINANCIAL ACCOUNTING</h2>
            <p>Keep track of your revenues and  <br />financial. Plan for the future with an...</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='border-r-2 pr-4 hover:shadow-2xl flex flex-col items-start'>
            <CardGiftcardIcon className='text-6xl text-orange-500'/>
            <h2 className='text-3xl'>GIFT SHOP</h2>
            <p>Easily manage your gift or souvenir <br /> shop inside the hotel with bar-code...</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='hover:shadow-2xl flex flex-col items-start'>
            <ListIcon className='text-6xl text-orange-500'/>
            <h2 className='text-3xl'>FOOD CASTING</h2>
            <p>Reduce your expenditure and increase <br /> profits with a close control on your...</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='border-r-2 pr-4 hover:shadow-2xl flex flex-col items-start'>
            <LocalLaundryServiceIcon className='text-6xl text-orange-500' />
            <h2 className='text-3xl'>LAUNDARY MANAGEMENT</h2>
            <p>Manage guest as well as house <br /> laundry, system allows to keep track of</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='border-r-2 pr-4 hover:shadow-2xl flex flex-col items-start'>
            <SportsBarIcon className='text-6xl text-orange-500'/>
            <h2 className='text-3xl'>MINIBAR</h2>
            <p>Seperate minibar module allows <br /> housekeeper to charge for minibar</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
          <div className='hover:shadow-2xl flex flex-col items-start'>
            <BadgeIcon className='text-6xl text-orange-500'/>
            <h2 className='text-3xl'>HR & PAYROLL</h2>
            <p>Manage guest as well as house <br /> laundry, system allows to keep track of</p>
            <a className='text-sm cursor-pointer mt-auto self-end'>Read more...</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
