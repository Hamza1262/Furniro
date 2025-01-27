import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logo.png'; 
import sofa from '@/images/sofa1.png';

// Cart Component
const Cart = () => {
  const cartItem = {
    name: 'Asgaard sofa',
    price: 250000.00,
    quantity: 1,
    image: sofa, 
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <div className="text-amber-500 text-2xl mb-2">
                <Image src={logo} alt='logo' className='w-16 h-16'></Image>
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
            <div className="bg-[#FFF9F3] p-4 mb-4 grid grid-cols-4 font-medium">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>

            <div className="bg-white p-4 shadow-sm rounded-lg">
              <div className="grid grid-cols-4 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <span className="font-medium">{cartItem.name}</span>
                </div>
                <div>Rs. {cartItem.price.toLocaleString()}</div>
                <div>
                  <input
                    type="number"
                    value={cartItem.quantity}
                    className="w-16 p-2 border rounded-lg"
                    min="1"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>Rs. {(cartItem.price * cartItem.quantity).toLocaleString()}</span>
                  <button className="text-amber-500 hover:text-amber-600">
                    <span className="sr-only">Remove item</span>
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="lg:w-1/3">
            <div className="bg-[#FFF9F3] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {(cartItem.price * cartItem.quantity).toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-amber-500">Rs. {(cartItem.price * cartItem.quantity).toLocaleString()}</span>
                </div>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Cart,};