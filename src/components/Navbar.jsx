import { NavLink, useLocation } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { FavContext } from "./FavouriteContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { favItem } = useContext(FavContext);
  const location = useLocation();
  const navBarColor = location.pathname === '/' ? 'bg-[#9538E2] text-white w-[95%] mx-auto rounded-t-2xl mt-5' : 'bg-[F7F7F7] mt-5 w-[95%] mx-auto';

  const links = (
    <div className="flex flex-col lg:flex-row items-center justify-center text-center space-x-5 sm:space-x-0 sm:space-y-2 lg:space-y-0">

      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/news"}>News</NavLink>
      </li>
    </div>
  );

  return (
    <div>
      <div className={`navbar ${navBarColor}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <NavLink to={"/dashboard"}>
            <FaCartPlus></FaCartPlus>
          </NavLink>
          <span className="relative bottom-3 right-3 text-red-600">{cartItems.length}</span>
          <NavLink to={"/dashboard/wishlist"}>
            <FaHeart></FaHeart>
          </NavLink>
          <span className="relative bottom-3 right-3 text-red-600">{favItem.length}</span>
        </div>
      </div>
    </div>
  );
}
