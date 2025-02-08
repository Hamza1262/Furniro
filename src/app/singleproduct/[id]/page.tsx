"use client"; // Add this at the top

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GET } from "@/app/api/products/route"; // Assuming this fetches product data
import Image from "next/image";

// Define types for the product data
type Product = {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  description: string;
  isNew: boolean;
};

export default function SingleProduct() {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null); // State for error messages
  const [isPopupVisible, setPopupVisible] = useState(false); // State for popup visibility
  const { id } = useParams(); // Use useParams() to get the dynamic route ID

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await GET(); // Fetch product data

        // Check if the response was successful
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data: Product[] = await response.json(); // Parse JSON data

        // Check if data is valid
        if (!data || data.length === 0) {
          throw new Error("No products found.");
        }

        const selectedProduct: Product | undefined = data.find(
          (prod) => prod._id === id
        ); // Find product by ID

        if (!selectedProduct) {
          throw new Error("Product not found.");
        }

        setProduct(selectedProduct); // Set the product if found
        setError(null); // Clear any previous errors

      } catch (err: any) {
        // Handle errors from the try block
        if (err instanceof Error) {
          setError(err.message); // Set error message
        } else {
          setError("An unknown error occurred.");
        }
        setProduct(null); // Clear the product on error
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const addToCart = () => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingProduct = cart.find((item: Product) => item._id === product._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));

      // Show the popup
      setPopupVisible(true);

      // Hide the popup after 2000ms (2 seconds)
      setTimeout(() => {
        setPopupVisible(false);
      }, 2000);
    }
  };

  if (error) {
    return <div className="text-center text-red-600">{error}</div>; // Display error message if any error occurs
  }

  if (!product) {
    return <p>Loading product...</p>; // Display loading message when data is being fetched
  }

  return (
    <div className="p-4 md:p-8 space-y-8 md:space-y-0">
      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-peach w-full max-w-[423px] h-[500px] flex justify-center items-center">
            <Image
              src={product.imageUrl}
              alt={product.title}
              className="w-full max-w-[481px] h-auto"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl sm:mt-5 font-semibold">{product.title}</h1>
          <p className="text-2xl font-medium text-gray-600">Rs. {product.price}</p>
          <p className="text-sm md:text-base text-gray-500 py-4">{product.description}</p>
          <button
            onClick={addToCart}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Popup for "Item Added to Cart" */}
      {isPopupVisible && (
        <div className="popup">
          <p>Item added to cart!</p>
        </div>
      )}

      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 20px;
          border-radius: 8px;
          font-size: 16px;
          z-index: 1000;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
