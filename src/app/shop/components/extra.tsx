import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

export default function Section() {
    return (
        <div className="flex flex-wrap justify-around items-center p-4 md:p-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-12 h-12 p-2 rounded-full flex items-center justify-center bg-gray-200">
                    <EmojiEventsOutlinedIcon />
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-black">High Quality</h1>
                    <p className="text-sm md:text-xl font-medium text-gray-800">Crafted from top materials</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-12 h-12 p-2 rounded-full flex items-center justify-center bg-gray-200">
                    <CheckCircleOutlineOutlinedIcon />
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-black">Warranty Protection</h1>
                    <p className="text-sm md:text-xl font-medium text-gray-800">Over 2 years</p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-12 h-12 p-2 rounded-full flex items-center justify-center bg-gray-200">
                    <LocalShippingOutlinedIcon />
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-black">Free Shipping</h1>
                    <p className="text-sm md:text-xl font-medium text-gray-800">Order over 150 $</p>
                </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-12 h-12 p-2 rounded-full flex items-center justify-center bg-gray-200">
                    <SupportAgentOutlinedIcon />
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-black">24 / 7 Support</h1>
                    <p className="text-sm md:text-xl font-medium text-gray-800">Dedicated support</p>
                </div>
            </div>
        </div>
    );
}
