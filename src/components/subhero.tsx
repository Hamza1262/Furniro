import bedroom from '@/images/bedroom.png'
import dining from '@/images/dining.png'
import living from '@/images/living.png'
import Image from 'next/image'

export default function Subhero() {
    return (
        <>
            <div className="h-auto pt-20 pb-20 pl-8 pr-8 m-4 flex flex-col items-center">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl sm:text-4xl">Browse The Range</h1>
                    <p className="font-normal text-[18px] sm:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="h-auto w-full sm:w-[380px] flex flex-col items-center">
                        <div className="relative">
                            <Image src={dining} alt='dining' height={900} width={900} className='h-[480px] w-full sm:w-[350px] object-cover rounded-md transition-transform transform hover:scale-105 hover:shadow-lg' />
                        </div>
                        <p className='font-bold mt-8 text-center'>Dining</p>
                    </div>
                    <div className="h-auto w-full sm:w-[380px] flex flex-col items-center">
                        <div className="relative">
                            <Image src={living} alt='living' height={900} width={900} className='h-[480px] w-full sm:w-[350px] object-cover rounded-md transition-transform transform hover:scale-105 hover:shadow-lg' />
                        </div>
                        <p className='font-bold mt-8 text-center'>Living</p>
                    </div>
                    <div className="h-auto w-full sm:w-[380px] flex flex-col items-center">
                        <div className="relative">
                            <Image src={bedroom} alt='bedroom' height={900} width={900} className='h-[480px] w-full sm:w-[350px] object-cover rounded-md transition-transform transform hover:scale-105 hover:shadow-lg' />
                        </div>
                        <p className='font-bold mt-8 text-center'>Bedroom</p>
                    </div>
                </div>
            </div>
        </>
    )
}
