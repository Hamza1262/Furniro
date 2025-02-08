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







// import Image from "next/image"
// import image1 from "@/images/image (1).png"
// import image2 from "@/images/image (2).png"
// import image3 from "@/images/image (3).png"
// import image4 from "@/images/image (4).png"
// import image5 from "@/images/image (5).png"
// import image6 from "@/images/image (6).png"
// import image9 from "@/images/image (9).png"


// export default function Product (){
//     return(
//         <>
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-black text-3xl font-bold flex justify-center mb-10">Our Products</h2>

//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           <a href="/singleproduct" className="group">
//             <Image src={image9} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"/>
//             <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
//             <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
//           </a>
//           <a href="/singleproduct" className="group">
//             <Image src={image1} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"/>
//             <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
//             <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
//           </a>
//           <a href="/singleproduct" className="group">
//             <Image src={image1} alt="Person using a pen to cross a task off a productivity paper card." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"/>
//             <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
//             <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
//           </a>
//           <a href="/singleproduct" className="group">
//             <Image src={image2} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"/>
//             <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
//             <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
//           </a>
//           <a href="/singleproduct" className="group">
//         <Image src={image3} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"/>
//         <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
//         <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
//       </a>
//       <a href="/singleproduct" className="group">
//         <Image src={image4} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"/>
//         <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
//         <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
//       </a>
//       <a href="/singleproduct" className="group">
//         <Image src={image5} alt="Person using a pen to cross a task off a productivity paper card." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"/>
//         <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
//         <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
//       </a>
//       <a href="/singleproduct" className="group">
//         <Image src={image6} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"/>
//         <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
//         <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
//       </a>
//     </div>
//   </div>
// </div> 

//         </>
//     )
// }