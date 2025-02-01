import Image from 'next/image';
import sofa from '@/images/sofa.png';

export default function Section() {
  return (
    <div className="p-4 md:p-8 space-y-8 md:space-y-0">

      {/* Product Section */}
      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        
        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-peach w-full max-w-[423px] h-[500px] flex justify-center items-center">
            <Image src={sofa} alt="sofa img" className="w-full max-w-[481px] h-auto" />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl sm:mt-5 font-semibold">Asgaard sofa</h1>
          <p className="text-2xl font-medium text-gray-600">Rs. 250,000.00</p>
          <p className="text-sm md:text-base text-gray-500 py-4">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          
          {/* Sizes Section */}
          <p className="font-semibold">Sizes</p>
          <div className="flex space-x-3 py-4">
            <div className="h-7 w-7 bg-goldbrown rounded-2xl text-white flex justify-center items-center">L</div>
            <div className="h-7 w-7 bg-goldbrown rounded-2xl text-white flex justify-center items-center">XL</div>
            <div className="h-7 w-7 bg-goldbrown rounded-2xl text-white flex justify-center items-center">XXL</div>
          </div>

          {/* Colors Section */}
          <p className="font-semibold">Colors</p>
          <div className="flex space-x-3 py-4">
            <div className="h-7 w-7 bg-purple-700 rounded-3xl text-white flex justify-center items-center"></div>
            <div className="h-7 w-7 bg-black rounded-3xl text-white flex justify-center items-center"></div>
            <div className="h-7 w-7 bg-goldbrown rounded-3xl text-white flex justify-center items-center"></div>
          </div>

          {/* Quantity, Add to Cart & Compare */}
          <div className="flex space-x-4 py-4">
            <div className="w-24 h-12 border-2 rounded-lg border-gray-600 flex justify-evenly items-center">
              <span>-</span><span>1</span><a>+</a>
            </div>
            <div className="w-32 h-12 bg-amber-500 text-white rounded-lg flex justify-center items-center cursor-pointer hover:bg-amber-600 transition-colors">
              Add To Cart
            </div>
            <div className="w-32 h-12 border-2 rounded-lg border-gray-600 flex justify-center items-center cursor-pointer hover:bg-gray-200 transition-colors">
              Compare
            </div>
          </div>

          <div className="border-t-2 my-8"></div>

          {/* Product Info */}
          <div className="text-sm text-gray-600 space-y-2">
            <p><span className="font-semibold">SKU:</span> 123456</p>
            <p><span className="font-semibold">Category:</span> Sofa</p>
            <p><span className="font-semibold">Tags:</span> Sofa, Furniture</p>
          </div>
        </div>
      </div>
    </div>
  );
}
