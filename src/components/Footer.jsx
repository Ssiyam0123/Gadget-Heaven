import React from "react";

export default function Footer() {
  return (
    <div className="">
      <div className=" bg-neutral text-neutral-content p-10">
        <div className="text-center border-b-2 pb-5">
          <h1 className="font-bold text-2xl">Gadget Heaven</h1>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>

        <div className="md:flex justify-around mt-7 space-y-5 sm:space-y-0">
          <div className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </div>
          <div className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
            
          </div>
          <div className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
