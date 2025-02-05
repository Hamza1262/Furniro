"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logo.png'; 
import sofa from '@/images/sofa1.png';

// Cart Component
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Asgaard sofa',
      price: 250000.00,
      quantity: 1,
      image: sofa, 
    }
  ]);

  // Function to handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Function to handle item removal (Optional)
  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the subtotal for a specific cart item
  const getItemSubtotal = (item: { price: number, quantity: number }) => {
    return item.price * item.quantity;
  };

  // Calculate the total price of all items in the cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + getItemSubtotal(item), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <div className="text-amber-500 text-2xl mb-2">
              <Image src={logo} alt='logo' className='w-16 h-16' />
            </div>
            <h1 className="text-2xl font-semibold mb-2">Cart</h1>
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-900">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-[#FFF9F3] p-4 mb-4 grid grid-cols-4 font-medium text-sm sm:text-base">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>

            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="bg-white p-4 shadow-sm rounded-lg mb-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                      <Image
                        src={cartItem.image}
                        alt={cartItem.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{cartItem.name}</span>
                  </div>
                  <div className="text-sm sm:text-base">Rs. {cartItem.price.toLocaleString()}</div>
                  <div>
                    <input
                      type="number"
                      value={cartItem.quantity}
                      onChange={(e) => handleQuantityChange(cartItem.id, Number(e.target.value))}
                      className="w-16 p-2 border rounded-lg text-sm sm:text-base"
                      min="1"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span>Rs. {getItemSubtotal(cartItem).toLocaleString()}</span>
                    <button 
                      className="text-amber-500 hover:text-amber-600 text-lg"
                      onClick={() => handleRemoveItem(cartItem.id)}
                    >
                      <span className="sr-only">Remove item</span>
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Totals */}
          <div className="lg:w-1/3">
            <div className="bg-[#FFF9F3] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Subtotal</span>
                  <span>Rs. {getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold text-sm sm:text-base">
                  <span>Total</span>
                  <span className="text-amber-500">Rs. {getCartTotal().toLocaleString()}</span>
                </div>
                <Link href={"/checkout"}>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
                    Check Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cart };
