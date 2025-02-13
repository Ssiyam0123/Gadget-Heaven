import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "./CartContext";
import { FavContext } from "./FavouriteContext";
import { FaSort } from "react-icons/fa";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [sorting, setSortBy] = useState([]);
  const modalRef = useRef(null);
  const handleBySort = (sort) => {
    if (sort === "price") {
      const sorted = [...cartItems].sort((a, b) => b.price - a.price);
      setSortBy(sorted);
    }
  };

const navigate = useNavigate();

  const handlePurchaseButton = () => {
    cartItems.forEach((element) => removeFromCart(element.productId));
    setTotal(0);
    modalRef.current.close();
    toast.success('Thanks for shoping')
  };

  const handlePurchase = () => {
    modalRef.current.showModal();
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setSortBy(cartItems);
    const newTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [cartItems]);

  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-5 py-4">
        <h1 className="font-semibold text-lg">Cart</h1>
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5">
          <h1 className="font-semibold text-lg">Total cost: {total} $</h1>
          <button
            onClick={() => handleBySort("price")}
            className="flex items-center gap-2 btn-outline btn rounded-full border-[#9538E2] hover:bg-[#9538E2] text-[#9538E2]"
          >
            Sort by Price <FaSort />
          </button>
          <button
          disabled={cartItems.length === 0}
            className="bg-[#9538E2] text-white btn rounded-full"
            onClick={() => handlePurchase(sorting)}
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="space-y-10 mt-12">
        {sorting.length > 0 ? (
          sorting.map((cartItem, i) => (
            <div
              className="flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl p-4 mb-4"
              key={i}
            >
              <div className="w-full sm:w-1/4 mx-auto mb-4 sm:mb-0">
                <img
                  className="w-full h-auto sm:h-36 rounded-xl"
                  src={cartItem.productImage}
                  alt="product"
                />
              </div>
              <div className="w-full sm:w-2/4 mx-auto">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-xl mb-4">
                    {cartItem.productTitle}
                  </h1>
                  <button
                    onClick={() => removeFromCart(cartItem.productId)}
                    className="btn btn-outline rounded-full btn-sm"
                  >
                    X
                  </button>
                </div>
                <p className="font-normal text-lg text-slate-400 mb-4">
                  {cartItem.description}
                </p>
                <p className="font-semibold text-lg">
                  Price: ${cartItem.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-[80%] mx-auto">
            <img className="w-1/2 mx-auto" src="../emptyCart.png" alt="" />
            <p className="text-center font-bold text-2xl pb-7 pt-4">
              select your item first
            </p>
          </div>
        )}
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box flex flex-col">
          <div className="flex items-center justify-center">
            <img src="../Group.png" alt="" />
          </div>
          <div className="text-center space-y-4 mt-4">
            <h1 className="font-bold text-xl">Payment Successfull</h1>
            <p>Thanks For Purchasing</p>
            <p>Total : {total}</p>
          </div>
          <div className="flex w-full justify-center">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full flex justify-center"
            >
              
                <div className="w-44 text-center">
                  <button
                   disabled={cartItems.length === 0}
                  onClick={()=> {handlePurchaseButton(); navigate('/')}}
                  className="btn w-full">Close</button>
                </div>

            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
