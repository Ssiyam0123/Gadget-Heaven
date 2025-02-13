import React, { useContext } from "react";
import { FavContext } from "./FavouriteContext";
import { CartContext } from "./CartContext";

export default function WishList() {
  const { favItem, removeFromFav } = useContext(FavContext);
  console.log(favItem);
  const { addToCart } = useContext(CartContext)

  const handleAddToCardButton = (item) =>{
        addToCart(item)
  }

  return (
    <div className="mt-10 mb-10">
      <h1 className="font-semibold text-lg ">WishList</h1>
      <div className="space-y-10 mt-12">
        {favItem.length === 0 ? (
          <p className="font-bold text-6xl text-center mb-10"> No items in your wishlist</p>
        ) : (
          favItem.map((item, index) => (
            <div 
            className="flex flex-col sm:flex-row border-2 rounded-2xl p-4 space-y-4 sm:space-y-0 sm:space-x-6"
            key={index}>
               <div className="w-full sm:w-1/4">
                <img className="w-full h-auto sm:h-36 rounded-xl " src={item.productImage} alt={item.productTitle} />
              </div>
              <div>
             <h2 className="font-semibold text-xl mb-4">{item.productTitle}</h2>
              <p className="font-normal mb-4">Description: <span className="text-slate-400 text-base">{item.description}</span></p>
              <p className="mb-5">price: $ {item.price}</p>
              <button
              className='bg-[#9538E2] text-white btn rounded-full'
              onClick={()=>handleAddToCardButton(item)} >Add to Card</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
