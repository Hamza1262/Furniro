import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.png'
import search from '@/images/search.png'
import heart from '@/images/heart.png'
import cart from '@/images/cart.png'
import contact from '@/images/contact.png'


export default function Header() {
  return (
    <nav className="bg-white py-4 w-auto h-24">
      <div className="container mx-auto flex items-center justify-between px-6">
     
        <div className="flex items-center">
          <Image
            src={logo} 
            alt='logo'
            height={900}
            width={900}
            className="h-8 w-12"
          />
          <p className="font-bold text-[34px]"> Furniro</p>
        </div>

       
        <div className="flex justify-center space-x-8 w-[430px] h-6">
          <Link href="/">
            <div className="text-black  w-[42px] h-[24px]">HOME</div>
          </Link>
          <Link href="/shop">
            <div className="text-black  w-[42px] h-[24px]">SHOP</div>
          </Link>
          <Link href="/blog">
            <div className="text-black  w-[42px] h-[24px]">BLOG</div>
          </Link>
          <Link href="/content">
            <div className="text-black  w-[42px] h-[24px]">CONTENT</div>
          </Link>
        </div>

     
        <div className="flex space-x-4">
          <Image
            src={contact} 
            alt="img"
            width={100}
            height={100}
            className="h-7 w-7"
          />
           <Image
            src={search} 
            alt="img"
            width={100}
            height={100}
            className="h-7 w-7"
          />
            <Image
            src={heart} 
            alt="img"
            width={100}
            height={100}
            className="h-7 w-7 bg-white"
          />
           <Image
            src={cart} 
            alt="img"
            width={100}
            height={100}
            className="h-7 w-7"
          />
        </div>
      </div>
    </nav>
  );
}
