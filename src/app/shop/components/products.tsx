"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  category?: {
    _id: string;
    title: string;
  };
};

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products"); // Fetch products from API
        const data = await response.json();
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {loading ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <Link
                href={`/singleproduct/${product._id}`}
                key={product._id}
                className="group relative block border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    className="aspect-square w-full rounded-lg object-cover"
                    width={500}
                    height={500}
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                      New
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{product.title}</h3>
                {product.category && (
                  <p className="text-sm text-gray-600">Category: {product.category.title}</p>
                )}
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                {product.discountPercentage > 0 && (
                  <p className="text-sm text-red-500">Discount: {product.discountPercentage}%</p>
                )}
              </Link>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}



// import Image from "next/image";
// import image1 from "@/images/image (9).png";
// import image2 from "@/images/image (1).png";
// import Link from "next/link";
// import {GET} from "@/app/api/products/route"

// export default function Product() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
//         <h2 className="sr-only">Products</h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

         
//           {/* Product 1 */}
//           <Link href="/singleproduct" className="group relative block" >
//             <div className="relative">
//               <Image
//                 src={image1}
//                 alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
//                 className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//               />
//               <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//                 {/* Button and Text on Hover */}
//                 <div className="flex flex-col items-center justify-center h-full space-y-4">
//                   <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                     Learn More
//                   </button>
//                   <div className="flex space-x-4 text-sm text-white">
//                     <p className="text-white text-sm">Share</p>
//                     <p className="text-white text-sm">Compare</p>
//                     <p className="text-white text-sm">Like</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Earthen Bottle</h3>
//             <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$48</p>
//           </Link>

//         {/* Product 2 */}
//         <Link href="/singleproduct" className="group relative block">
//           <div className="relative">
//             <Image
//               src={image2}
//               alt="Olive drab green insulated bottle with flared screw lid and flat top."
//               className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//             />
//             <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//               {/* Button and Text on Hover */}
//               <div className="flex flex-col items-center justify-center h-full space-y-4">
//                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                   Add to cart
//                 </button>
//                 <div className="flex space-x-4 text-sm text-white">
//                   <p className="text-white text-sm">Share</p>
//                   <p className="text-white text-sm">Compare</p>
//                   <p className="text-white text-sm">Like</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Nomad Tumbler</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
//         </Link>
//         {/* Product 3 */}
//         <Link href="/singleproduct" className="group relative block">
//           <div className="relative">
//             <Image
//               src={image1}
//               alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
//               className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//             />
//             <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//               {/* Button and Text on Hover */}
//               <div className="flex flex-col items-center justify-center h-full space-y-4">
//                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                   Learn More
//                 </button>
//                 <div className="flex space-x-4 text-sm text-white">
//                   <p className="text-white text-sm">Share</p>
//                   <p className="text-white text-sm">Compare</p>
//                   <p className="text-white text-sm">Like</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Earthen Bottle</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$48</p>
//         </Link>

//         {/* Product 4 */}
//         <Link href="/singleproduct" className="group relative block">
//           <div className="relative">
//             <Image
//               src={image2}
//               alt="Olive drab green insulated bottle with flared screw lid and flat top."
//               className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//             />
//             <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//               {/* Button and Text on Hover */}
//               <div className="flex flex-col items-center justify-center h-full space-y-4">
//                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                   Add to cart
//                 </button>
//                 <div className="flex space-x-4 text-sm text-white">
//                   <p className="text-white text-sm">Share</p>
//                   <p className="text-white text-sm">Compare</p>
//                   <p className="text-white text-sm">Like</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Nomad Tumbler</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
//         </Link>
//         {/* Product 5 */}
//         <Link href="/singleproduct" className="group relative block">
//           <div className="relative">
//             <Image
//               src={image1}
//               alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
//               className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//             />
//             <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//               {/* Button and Text on Hover */}
//               <div className="flex flex-col items-center justify-center h-full space-y-4">
//                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                   Learn More
//                 </button>
//                 <div className="flex space-x-4 text-sm text-white">
//                   <p className="text-white text-sm">Share</p>
//                   <p className="text-white text-sm">Compare</p>
//                   <p className="text-white text-sm">Like</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Earthen Bottle</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$48</p>
//         </Link>

//         {/* Product 6 */}
//         <Link href="/singleproduct" className="group relative block">
//           <div className="relative">
//             <Image
//               src={image2}
//               alt="Olive drab green insulated bottle with flared screw lid and flat top."
//               className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//             />
//             <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//               {/* Button and Text on Hover */}
//               <div className="flex flex-col items-center justify-center h-full space-y-4">
//                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                   Add to cart
//                 </button>
//                 <div className="flex space-x-4 text-sm text-white">
//                   <p className="text-white text-sm">Share</p>
//                   <p className="text-white text-sm">Compare</p>
//                   <p className="text-white text-sm">Like</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Nomad Tumbler</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
//         </Link>
//         {/* Product 7 */}
//         <Link href="/singleproduct" className="group relative block">
//           <div className="relative">
//             <Image
//               src={image1}
//               alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
//               className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//             />
//             <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//               {/* Button and Text on Hover */}
//               <div className="flex flex-col items-center justify-center h-full space-y-4">
//                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                   Learn More
//                 </button>
//                 <div className="flex space-x-4 text-sm text-white">
//                   <p className="text-white text-sm">Share</p>
//                   <p className="text-white text-sm">Compare</p>
//                   <p className="text-white text-sm">Like</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Earthen Bottle</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$48</p>
//         </Link>

//         {/* Product 8 */}
//         <Link href="/singleproduct" className="group relative block">
//           <div className="relative">
//             <Image
//               src={image2}
//               alt="Olive drab green insulated bottle with flared screw lid and flat top."
//               className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//             />
//             <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//               {/* Button and Text on Hover */}
//               <div className="flex flex-col items-center justify-center h-full space-y-4">
//                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                   Add to cart
//                 </button>
//                 <div className="flex space-x-4 text-sm text-white">
//                   <p className="text-white text-sm">Share</p>
//                   <p className="text-white text-sm">Compare</p>
//                   <p className="text-white text-sm">Like</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Nomad Tumbler</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
//         </Link>
//         {/* Product 9 */}
//         <Link href="/singleproduct" className="group relative block">
//           <div className="relative">
//             <Image
//               src={image1}
//               alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
//               className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//             />
//             <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//               {/* Button and Text on Hover */}
//               <div className="flex flex-col items-center justify-center h-full space-y-4">
//                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                   Learn More
//                 </button>
//                 <div className="flex space-x-4 text-sm text-white">
//                   <p className="text-white text-sm">Share</p>
//                   <p className="text-white text-sm">Compare</p>
//                   <p className="text-white text-sm">Like</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Earthen Bottle</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$48</p>
//         </Link>

//         {/* Product 10 */}
//         <Link href="/singleproduct" className="group relative block">
//           <div className="relative">
//             <Image
//               src={image2}
//               alt="Olive drab green insulated bottle with flared screw lid and flat top."
//               className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75 xl:aspect-[7/8]"
//             />
//             <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
//               {/* Button and Text on Hover */}
//               <div className="flex flex-col items-center justify-center h-full space-y-4">
//                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
//                   Add to cart
//                 </button>
//                 <div className="flex space-x-4 text-sm text-white">
//                   <p className="text-white text-sm">Share</p>
//                   <p className="text-white text-sm">Compare</p>
//                   <p className="text-white text-sm">Like</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Nomad Tumbler</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
//         </Link>



//       </div>
//     </div>
//     </div>
//   );
// }
