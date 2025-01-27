import Image from 'next/image';
import sofa from '@/images/sofa.png';

export default function Section() {
    return (
        <div className="flex flex-wrap justify-between items-center p-4 md:p-8 space-y-4 md:space-y-0">
            
            {/* left side */}
            <div className="w-2/4"> 
                <div className="bg-peach w-[423px] h-[500px] ml-28">
                    <Image src={sofa} alt='sofa img' className='w-[481px] h-[391px] '></Image>
                </div>
            </div>

            {/* right side */}
            <div className="w-2/4">
                <h1>Asgaard sofa</h1>
                <p>Rs. 250,000.00</p>
                <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
               
                <p>Sizes</p>
                <div className='flex space-x-2 py-5'>
                <div className="h-7 w-7 bg-goldbrown rounded-2xl text-white flex justify-center items-center ">L</div>          
                <div className="h-7 w-7 bg-goldbrown rounded-2xl text-white flex justify-center items-center ">xl</div>          
                <div className="h-7 w-7 bg-goldbrown rounded-2xl text-white flex justify-center items-center ">xxl</div>          
                </div>

                <p>Colors</p>
                <div className='flex space-x-2 py-5'>
                     <div className="h-7 w-7 bg-purple-700 rounded-3xl text-white flex justify-center items-center "></div>          
                     <div className="h-7 w-7 bg-black rounded-3xl text-white flex justify-center items-center "></div>          
                     <div className="h-7 w-7 bg-goldbrown rounded-3xl text-white flex justify-center items-center "></div>          
                </div>

                <div className="flex space-x-2">
                <div className="w-28 h-16 border-2 rounded border-gray-600 flex justify-evenly items-center"><span>-</span><span>1</span><a>+</a></div>
                <div className="w-28 h-16 border-2 rounded border-gray-600 flex justify-evenly items-center">Add To Cart</div>
                <div className="w-28 h-16 border-2 rounded border-gray-600 flex justify-evenly items-center">Compare</div>
                </div>

                <div className="  border-2 my-16 "></div>

                <div className="">
                    <p>SKU : 123456</p>
                    <p>Category : Sofa</p>
                    <p>Tags : Sofa, Furniture</p>
                </div>
            </div>
        </div>
    )
}