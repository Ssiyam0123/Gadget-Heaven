import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Hero() {
   
  return (
    <div>
        <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-[#9538E2] to-[#9538E2] rounded-2xl pb-28">
      <h1 className="text-5xl font-bold mb-4 text-white">Welcome to GadgetHeaven!</h1>
      <p className="text-lg font-normal mb-8 text-white">
        Your go-to destination for the latest and greatest gadgets.
      </p>
      

        <button className="px-6 py-3 bg-white text-[#9538E2] font-semibold rounded-full transition">
          Shop Now
        </button>
      </div>


      <div className='w-8/12 mx-auto relative bottom-16 rounded-2xl z-50'>
        <img className='rounded-2xl border-2 p-8  w-[80%] mx-auto' src="../../../public/banner.jpg"/>
      </div>
    </div>

  );
}
