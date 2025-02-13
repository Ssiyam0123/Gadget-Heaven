import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function NewsPage() {
  const data = useLoaderData();

  return (

    <div className='mb-10'>
<div className='mb-10'>
  <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-[#9538E2] to-[#9538E2] pb-12">
    <h1 className="text-5xl font-bold mb-4 text-white">Tech News</h1>
    <p className="text-lg font-normal mb-8 text-white w-[95%] mx-auto text-center">
      Stay updated with the latest breakthroughs in technology. From cutting-edge gadgets to revolutionary software, explore what's making waves in the tech world today!
    </p>
  </div>
</div>

    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] mx-auto mt-10'>
      {data.techNews.map((info, i) => (
        <div key={i} className="card border-2 rounded-lg bg-white">
          <figure>
            <img
              src={info.link}
              alt={info.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">{info.title}</h2>
            <p className="text-sm text-gray-700">{info.description}</p>
            <p className="text-sm text-gray-700">Author: {info.author}</p>
            <p className="text-sm text-gray-700">Date: {info.date}</p>
            <div className="card-actions justify-end mt-4">
              <a  className="btn rounded-full text-[#53008C] border-[#BC7EE3] bg-white hover:bg-[#BC7EE3] hover:text-white">Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
}
