/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
;

export default function Categories({categories}) {

  return (
    <div className="lg:flex lg:flex-col gird col-span-2 md:grid md:col-span-1 p-4 rounded-2xl bg-white ">

          <NavLink to={'/'} className='btn mb-3 hover:bg-[#9538E2] rounded-full hover:text-white'>All Products</NavLink>
      {categories.map((ctg) => (
        <NavLink 
          key={ctg.categoryId}
          to={`/category/${ctg.categoryName}`} 
          className='btn mb-3 hover:bg-[#9538E2] rounded-full hover:text-white'
        >
          {ctg.categoryName}
        </NavLink>
      ))}
    </div>
  );
}
