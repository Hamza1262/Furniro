import Image from "next/image"
import image1 from './../../../images/image (1).png';
import image2 from './../../../images/image (2).png';
import image3 from './../../../images/image (3).png';
import image4 from './../../../images/image (4).png';
 
export default function RelatedProducts(){
    return (
        <>
        <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex justify-center">Related Products</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <Image src={image1} alt="image" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

      {/* <!-- More products... --> */}
      <div className="group relative">
        <Image src={image2} alt="image" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

      {/* <!-- More products... --> */}
      <div className="group relative">
        <Image src={image3} alt="image" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

      {/* <!-- More products... --> */}
      <div className="group relative">
        <Image src={image4} alt="image" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

      {/* <!-- More products... --> */}
    </div>
  </div>
</div>

        </>
    )
}