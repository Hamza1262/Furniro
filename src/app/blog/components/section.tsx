import Image from "next/image"
import Link from "next/link"
import logo from "@/images/logo.png"
import image17 from "@/images/image (17).jpeg"
import image18 from "@/images/image (18).jpeg"
import image19 from "@/images/image (19).jpeg"
import image20 from "@/images/image (20).jpeg"
import image21 from "@/images/image (21).jpeg"
import image22 from "@/images/image (22).jpeg"
import image23 from "@/images/image (23).jpeg"
import image24 from "@/images/image (24).jpeg"
import SearchIcon from "@mui/icons-material/Search";

export default function Section() {
    return (
        <>
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col items-center">
                        <div className="text-amber-500 text-2xl mb-2">
                            <Image src={logo} alt='logo' className='w-16 h-16' />
                        </div>
                        <h1 className="text-2xl font-semibold mb-2">Blog</h1>
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                            <span className="text-gray-400">&gt;</span>
                            <span className="text-gray-900">Blog</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row px-4 md:px-20 py-8 gap-12">
                <div className="flex-1">
                    <div className="mb-8">
                        <Image src={image17} alt="" className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg" />
                        <h1 className="text-3xl font-bold mt-4">Going all-in with millennial design</h1>
                        <p className="text-base text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    </div>

                    <div className="mb-8">
                        <Image src={image18} alt="" className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg" />
                        <h1 className="text-3xl font-bold mt-4">Going all-in with millennial design</h1>
                        <p className="text-base text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    </div>

                    <div className="mb-8">
                        <Image src={image19} alt="" className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg" />
                        <h1 className="text-3xl font-bold mt-4">Going all-in with millennial design</h1>
                        <p className="text-base text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 border-b-2 pb-4">
                            <input type="text" placeholder="Search..." className="w-full border border-gray-300 px-4 py-2 rounded-md" />
                            <SearchIcon />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold">Categories</h2>
                        <div className="flex flex-col sm:flex-row xxs:flex-row justify-between mt-6">
                            <div className="space-y-4">
                                <p>Crafts</p>
                                <p>Design</p>
                                <p>Handmade</p>
                                <p>Interior</p>
                                <p>Wood</p>
                            </div>
                            <div className="space-y-4">
                                <p>2</p>
                                <p>8</p>
                                <p>7</p>
                                <p>1</p>
                                <p>6</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold">Recent Posts</h2>
                        {[image20, image21, image22, image23, image24].map((img, index) => (
                            <div key={index} className="flex items-center gap-6 mb-6">
                                <div className="h-20 w-20">
                                    <Image src={img} alt="" className="h-20 w-20 rounded-xl object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium">Going all-in with millennial design</h3>
                                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
