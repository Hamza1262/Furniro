import bgHero from '@/images/bg-hero.jpeg'
import Image from 'next/image';


export default function HeroSection() {
    return (
      <section className="relative w-full h-[812px]">
     
        <Image 
          className="absolute inset-0 w-full h-full object-cover"
          src={bgHero}
          alt="hero img"
          layout="fill" 
        />
  
        <div className="absolute top-[300px] left-[1100px] transform -translate-x-1/2 bg-peach  w-[600px] h-[440px] p-9">
        <div>

        <p className='text-[16px] text-black font-medium'>New Arrival</p>
        <h2 className='text-goldbrown text-[52px] font-bold leading-[60px]'>Discover Our <br /> New Collection </h2>
        <p className='text-[18px] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className='w-[222px] h-[74px] bg-goldbrown text-white mt-9'>BUY NOW</button>
        </div>
        </div>
      </section>
    );
  }
  