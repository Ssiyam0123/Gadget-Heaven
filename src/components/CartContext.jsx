

import { createContext, useState } from 'react';
import { toast } from 'react-toastify'; 

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
    return toast.error('item removed')
  };

  const addToCart = (item) => {
    const isExisted = cartItems.find((cartItem) => cartItem.productId === item.productId);
    if (isExisted) {
      toast.error('Item is already in the cart');
      return; 
    }
    setCartItems((prevItems) => [...prevItems, item]);
    toast.success('Item added to cart');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
