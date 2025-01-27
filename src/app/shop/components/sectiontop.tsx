import Image from "next/image";
import logo from '@/images/logo.png'; 
import Link from "next/link";


export default function SectionTop() {
    return (<>
<div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <div className="text-amber-500 text-2xl mb-2">
                <Image src={logo} alt='logo' className='w-16 h-16'/>
            </div>
            <h1 className="text-2xl font-semibold mb-2">Contact</h1>
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-900">Contact</span>
            </div>
          </div>
        </div>
      </div></>);
}