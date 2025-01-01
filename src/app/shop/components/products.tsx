import Image from "next/image";
import image1 from "@/images/image (9).png";
import image2 from "@/images/image (1).png";
import image3 from "@/images/image (10).png";
import image4 from "@/images/image (2).png";

export default function Product() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="sr-only">Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* Product 1 */}
          <a href="#" className="group relative">
            <Image
              src={image1}
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$48</p>
          </a>

          {/* Product 2 */}
          <a href="#" className="group relative">
            <Image
              src={image2}
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                Add to cart
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Nomad Tumbler</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
          </a>

          {/* Product 3 */}
          <a href="#" className="group relative">
            <Image
              src={image3}
              alt="Person using a pen to cross a task off a productivity paper card."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$89</p>
          </a>

          {/* Product 4 */}
          <a href="#" className="group relative">
            <Image
              src={image4}
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Machined Mechanical Pencil</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
          </a>
          <a href="#" className="group relative">
            <Image
              src={image1}
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$48</p>
          </a>

          {/* Product 2 */}
          <a href="#" className="group relative">
            <Image
              src={image2}
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                Add to cart
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Nomad Tumbler</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
          </a>

          {/* Product 3 */}
          <a href="#" className="group relative">
            <Image
              src={image3}
              alt="Person using a pen to cross a task off a productivity paper card."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$89</p>
          </a>

          {/* Product 4 */}
          <a href="#" className="group relative">
            <Image
              src={image4}
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Machined Mechanical Pencil</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
          </a>
          <a href="#" className="group relative">
            <Image
              src={image1}
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$48</p>
          </a>

          {/* Product 2 */}
          <a href="#" className="group relative">
            <Image
              src={image2}
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                Add to cart
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Nomad Tumbler</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
          </a>

          {/* Product 3 */}
          <a href="#" className="group relative">
            <Image
              src={image3}
              alt="Person using a pen to cross a task off a productivity paper card."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$89</p>
          </a>

          {/* Product 4 */}
          <a href="#" className="group relative">
            <Image
              src={image4}
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Machined Mechanical Pencil</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
          </a>
          <a href="#" className="group relative">
            <Image
              src={image1}
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$48</p>
          </a>

          {/* Product 2 */}
          <a href="#" className="group relative">
            <Image
              src={image2}
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                Add to cart
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Nomad Tumbler</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
          </a>

          {/* Product 3 */}
          <a href="#" className="group relative">
            <Image
              src={image3}
              alt="Person using a pen to cross a task off a productivity paper card."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$89</p>
          </a>

          {/* Product 4 */}
          <a href="#" className="group relative">
            <Image
              src={image4}
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:block hidden transition-all duration-300 ease-in-out rounded-lg">
              {/* Button and Text on Hover */}
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm transition duration-300 hover:bg-yellow-600">
                  Learn More
                </button>
                <div className="flex space-x-4 text-sm text-white">
                <p className="text-white text-sm">Share</p>
                <p className="text-white text-sm">Compare</p>
                <p className="text-white text-sm">Like</p>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">Machined Mechanical Pencil</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 group-hover:text-goldbrown transition-colors duration-300 ease-in-out">$35</p>
          </a>
        </div>
      </div>
    </div>
  );
}
