import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories";

export default function Home() {
  const categories = useLoaderData();
  //   console.log(categories);
  return (
    <div className="w-[95%] mx-auto">
     <div className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#9538E2] to-[#9538E2] rounded-b-2xl text-center">
  <h1 className="w-[95%] mx-auto font-bold text-3xl mb-4 text-white">
  Upgrade Your Tech Accessorize with Gadget Heaven Accessories  </h1>
  <p className="w-[95%] mx-auto  font-normal mb-6 lg:mb-8 text-white">
  Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
  </p>
  <a
    href="#shopNow"
    className="px-5 mb-5 sm:px-6 py-2 sm:py-3 bg-white text-[#9538E2] font-semibold rounded-full transition hover:bg-gray-200"
  >
    Shop Now
  </a>
</div>


     <div className="w-full sm:w-10/12 lg:w-8/12 mx-auto relative bottom-16 z-50">
  <img
    src="../banner.jpg"
    className="max-w-[75%] mx-auto rounded-2xl object-cover border-2 p-4"
    alt=""
  />
</div>


      <div>
        <h1 id="shopNow" className="text-center font-bold text-4xl mb-14">
          Explore Cutting-Edge Gadgets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-[80%] mx-auto">
          {/* Sidebar */}
          <div className="col-span-1">
            <Categories categories={categories} />
          </div>

          {/* Main Content */}
          <div className="col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
