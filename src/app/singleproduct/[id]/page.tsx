import { useRouter } from "next/router"; // Import useRouter hook
import { useEffect, useState } from "react";
import { GET } from "@/app/api/products/route"; // Assuming you have a function to get product data
import Image from "next/image";

// Define types for the product data
type Product = {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  tags: string[];
  dicountPercentage: number;
  description: string;
  isNew: boolean;
};

export default function SingleProduct() {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = router.query; // This will give you the dynamic id from the URL

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const data = await GET(); // Fetch all products
          const selectedProduct = data.find(
            (prod: Product) => prod._id === id // Find the product by id
          );
          setProduct(selectedProduct || null); // Update state with the selected product
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct(); // Call the function to fetch the product details
    }
  }, [id]); // Re-run the effect if the id changes

  if (!product) {
    return <p>Loading product...</p>; // Display loading message if product is not yet fetched
  }

  return (
    <div className="p-4 md:p-8 space-y-8 md:space-y-0">
      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-peach w-full max-w-[423px] h-[500px] flex justify-center items-center">
            <Image
              src={product.imageUrl} // Display image dynamically based on the product
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

          {/* Add other sections like sizes, colors, etc. */}
        </div>
      </div>
    </div>
  );
}





// import Section from "../components/product"
// import ProductDescription from '../components/discription';
// import RelatedProducts from "../components/relatedproduct";


// export default function SingleProduct() {
//     return(
//         <>
        


//         {/* <Section/>
//         <ProductDescription/>
//         <RelatedProducts/> */}
//         </>
//     )
// }