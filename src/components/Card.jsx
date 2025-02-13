import React from 'react'
import { NavLink } from 'react-router-dom';
import ReactStars from    "react-rating-stars-component";
import { render } from "react-dom";




export default function Card({product}) {
    const {productImage, productTitle, price, productId} = product || {};


    return (
        <div >
            <div className="card border-2 bg-white">
      <figure className="px-10 pt-10">
        <img
          src={productImage}
          alt="images"
          className="rounded-xl h-36 bg-cover" />
      </figure>
      <div className="card-body h-52">
        <h2 className="card-title">{productTitle}</h2>
        <p>Price:{price}$</p>
        <div className="card-actions">
          <NavLink 

        to={`/cardDetails/${productId}`} 
        className="btn rounded-full text-[#53008C] border-[#BC7EE3] bg-white hover:bg-[#BC7EE3] hover:text-white"
    >
        View Details
    </NavLink>
        </div>
      </div>
    </div>
        </div>
      )
}
