import React, { useContext, useEffect, useState } from "react";
import { FaCartPlus, FaDollarSign, FaHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CartContext } from "../CartContext";
import { toast } from "react-toastify";
import { FavContext } from "../FavouriteContext";

export default function CardDetails() {
  const details = useLoaderData();
  const { id } = useParams();
  const [cards, setCards] = useState(false);
  const [isFav, setFav] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);

  const { favItem } = useContext(FavContext);
  const { addToFav } = useContext(FavContext);

  useEffect(() => {
    const singleData = details.find((card) => card.productId == id);
    setCards(singleData);
  }, [details, id]);

  const [userRating, setUserRating] = useState(4);

  const handleAddToCart = (data) => {
    addToCart(data);
  };

  const outOfStock = () => {
    return toast.error("Out of stock");
  };

  const handleToAddFav = (data) => {
    const isExisted = favItem.find((item) => item.productId === data.productId);
    if (isExisted) {
      return toast.error("Item is already in the cart");
    } else {
      addToFav(data);
      setFav(true);
      return toast.success("Item added to wish list");
    }
  };

  const {
    productTitle,
    productImage,
    price,
    description,
    specification,
    rating,
    availability,
  } = cards || {};

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-[#9538E2] to-[#9538E2] pb-28">
        <h1 className="text-3xl font-bold mb-4 text-white">Product Details</h1>
        <p className="text-base font-normal mb-8 text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="w-8/12 mx-auto relative bottom-16 rounded-2xl z-50 bg-white lg:flex p-5 items-center justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 mx-auto">
          <img
            src={productImage}
            className="w-full mx-auto rounded-2xl object-cover"
            alt=""
          />
        </div>

        <div className="ml-10">
          <h1 className="text-2xl font-semibold mb-3">{productTitle}</h1>
          <p className="flex items-center font-semibold text-lg mb-5">
            Price: <FaDollarSign /> {price}
          </p>
          <p className="mb-5">
            {availability ? (
              <button className="btn btn-sm rounded-full btn-outline btn-success">
                In Stock
              </button>
            ) : (
              <button className="btn btn-sm rounded-full btn-outline btn-error">
                Out Of Stock
              </button>
            )}
          </p>

          <p className="font-normal text-slate-400">{description}</p>

          <p className="font-bold text-lg mb-2 mt-4">Specification:</p>
          <ul>
            {specification?.map((info, i) => (
              <li className="list-decimal text-slate-400" key={i}>
                {info}
              </li>
            ))}
          </ul>

          <p className="font-bold text-lg mt-4 mb-4">Rating</p>
          <div className="flex items-center gap-5">
            <ReactStars
              count={5}
              value={userRating}
              onChange={(newRating) => setUserRating(newRating)}
              size={24}
              activeColor="#ffd700"
            />
            ,<button className="btn btn-sm">{rating}</button>
          </div>

          <div className="flex mt-5 gap-5">
            {availability ? (
              <button
                onClick={() => handleAddToCart(cards)}
                className="flex btn rounded-full bg-[#9037D9] text-white"
              >
                Add To Cart <FaCartPlus />
              </button>
            ) : (
              <button
                onClick={outOfStock}
                className="flex btn rounded-full bg-red-600 text-white"
              >
                Out of Stock <FaCartPlus />
              </button>
            )}

            <button
              onClick={() => handleToAddFav(cards)}
              disabled={isFav}
              className="btn rounded-full border-2 bg-white"
            >
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
