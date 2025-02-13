import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function GadgetsList() {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setButtons(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-center font-bold text-2xl">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex justify-around">
        <div className="flex flex-col p-4 rounded-2xl bg-white w-[20%]">
          {buttons.categories?.map((ctg) => (
            <NavLink
              to={`/category/${ctg.category_name}`} 
              className="btn mb-3 hover:bg-[#9538E2] rounded-full hover:text-white"
              key={ctg.category_id}
            >
              {ctg.category_name}
            </NavLink>
          ))}
        </div>

        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}
