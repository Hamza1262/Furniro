"use client";

import { useEffect, useState } from "react";
import Image from "next/image";  // Correct import for Image component from Next.js
import Link from "next/link";    // Correct import for Link component from Next.js

// Define types for cart items
type CartItem = {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cart
      .map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  const removeItem = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    updateCart(updatedCart);
  };

  const totalValue = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {cart.length > 0 ? (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">Rs. {item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item._id)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
              <p className="text-lg font-semibold">Rs. {item.price * item.quantity}</p>
              <button
                onClick={() => removeItem(item._id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-xl font-semibold mt-6">
            Total: Rs. {totalValue}
          </div>
          <div className="mt-4">
            <Link href="/products" className="text-blue-500 hover:underline">
              Add More Products
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-lg">
          Your cart is empty.{" "}
          <Link href="/shop" className="text-blue-500 hover:underline">
            Shop Now
          </Link>
        </p>
      )}
    </div>
  );
}
