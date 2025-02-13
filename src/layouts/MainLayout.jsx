import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { CartContext, CartProvider } from "../components/CartContext";
import { FavProvider } from "../components/FavouriteContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function MainLayout() {
  return (
    <CartProvider>
      <FavProvider>
        <ToastContainer />
       <div className="bg-[#F7F7F7]">
       <div className="h-16">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
       </div>
      </FavProvider>
    </CartProvider>
  );
}
