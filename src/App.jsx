import React from 'react'
import { CartProvider } from './components/CartContext'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
   <CartProvider>
      <MainLayout/>
   </CartProvider>
  )
}
