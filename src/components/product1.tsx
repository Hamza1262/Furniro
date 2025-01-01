import Image from "next/image";
import image11 from "@/images/image (11).png";
import image12 from "@/images/image (12).png";

// pages/index.js
export default function Page1() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 space-y-8 lg:space-y-0 max-w-full h-[670px]">
      {/* Left section */}
      <div className="ml-8 lg:ml-24 w-full lg:w-[50%] text-center lg:text-left">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="mt-4 text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
          Our designer has already created a lot of beautiful room prototypes that
          will inspire you.
        </p>
        <button className="w-[170px] sm:w-[222px] h-[48px] sm:h-[74px] bg-goldbrown text-white mt-6 sm:mt-9">
          Explore More
        </button>
      </div>

      {/* Right section (Images) */}
      <div className="flex justify-center lg:justify-start mt-8 lg:mt-0 w-full lg:w-[50%]">
        <div className="relative flex items-center justify-center space-x-4">
          <div className="relative h-[480px] w-[370px] lg:h-[580px] lg:w-[404px]">
            <Image
              src={image12}
              alt="Image 12"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-[400px] w-[300px] lg:h-[480px] lg:w-[370px] xs:hidden sm:hidden md:block lg:hidden">
            <Image
              src={image11}
              alt="Image 11"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
