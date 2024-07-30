import React from 'react'

function FooterPage() {
  return (
    <div className='h-screen '>
      <div className='w-full h-2/6 border flex justify-around items-center bg-gray-100'>
        <img src="../images/review.jpg" className='w-56 h-56 rounded-full object-cover my-12' />
        <div className='my-12'>
          <p className='text-4xl font-light text-gray-500'>
            "We have been live on InnkeyPMS since January 1, 2013 and very much like the system. <br />
            It is very user-friendly and has enough bells and whistles to allow for sophisticated tracking of <br />
            a variety of statistics. This enables us to base decisions on data rather than gut feeling."
          </p>
          <p className='text-black text-2xl mt-4 '>Dickson Kasenge</p>
          <p className='text-gray-500'>GM / Savoy Hotel</p>
        </div>
      </div>
      <div>
        <img src="../images/sub.png" className='border w-full' />
      </div>
      <div className=''>
      <div className="   w-full h-full bg-black p-24 flex justify-between flex-col ">
        <div className="grid  row-gap-10 mb-8 lg:grid-cols-6 bg-black text-white">
          <div className="md:max-w-md lg:col-span-2 mx-4 my-4">
               
              <span className="ml-2 text-xl font-bold tracking-wide text-blue-500 uppercase ">
              INNKEY INFOSYSTEM PVT LTD.
              </span>
            <div className="mt-4 lg:max-w-sm ">
              <p className="text-sm text-white">
              Innkey Infosystems Pvt. Ltd. is a rapidly growing company in the hospitality 
              industry. We make then most cutting edge software for the global hospitality industry.
              We give them the best products to make their work more easier and profitable so that they can focus on their core business, which is providing the best hospitality to their customers.
              </p>
              
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-white">
              Quick Menue
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-400 text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="tracking-wide text-white font-bold">
              Contact Us:
              </p>
              <p>Innkey PMS, <br />
                36 Vasupujya, <br />
                Satellite Ahmedabad, <br />
                Gujarat 380015.</p>

                <h2 className='mt-6 text-white text-lg font-bold'>Sales and General Enquiries:</h2>
                <p className='text-blue-500'>+91-9825520938</p>

                <h2>Email: <span className='text-blue-500'>sales@innkeypms.net </span></h2>
            </div>
            
            
          </div>
        </div>
        <div className="flex flex-col justify-between p-2 pb-10 border-t sm:flex-row ">
          <p className="text-sm text-white">
          INNKEYPMS © 2011 - 2016. ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <p className='text-gray-500'>Follow us :</p>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default FooterPage
