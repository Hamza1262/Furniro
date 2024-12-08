import bedroom from '@/images/bedroom.png'
import dining from '@/images/dining.png'
import living from '@/images/living.png'
import Image from 'next/image'

export default function Subhero(){
    return (
        <>
        <div className="h-[685px] w-[1183] pt-20 pb-20 pl-30 m-20 flex flex-col align-middle items-center   ">
            <div className="">
            <h1 className="flex justify-center font-bold text-3xl">Browse The Range</h1>
            <p className="flex justify-center font-normal text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
            <div className="flex justify-between">
            <div className='h-[540px] w-[380px] flex flex-col items-center' >
                <Image src={dining} alt='dining' height={900} width={900} 
                className='h-[480px] w-[350px]' />
                <p className='font-bold mt-8'>Dining</p>
            </div>
            <div className='h-[540px] w-[380px] flex flex-col items-center' >
                <Image src={living} alt='living' height={900} width={900} 
                className='h-[480px] w-[350px]' />
                <p className='font-bold mt-8'>Living</p>
            </div>
            <div className='h-[540px] w-[380px] flex flex-col items-center' >
                <Image src={bedroom} alt='bedroom' height={900} width={900} 
                className='h-[480px] w-[350px]' />
                <p className='font-bold mt-8'>Bedroom</p>
            </div>
            </div>
        </div>
        </>
    )


}