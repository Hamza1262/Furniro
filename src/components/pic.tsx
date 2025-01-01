import Image from 'next/image';
import image13 from '@/images/image (13).jpg';

export default function Section() {
    return (
        <div>
            <Image src={image13} alt="image" height={2000} width={2000} className="w-screen h-[800px] object-cover rounded-lg mt-10" />
        </div>
    )
}