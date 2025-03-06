// Icons
import sendIcon from '@/assets/icons/icon-send.png';

const Footer = () => {
    return (
        <div className="bg-black mt-[140px]">
            <div className="customContainer">
                <div className="flex md:flex-row gap-16 md:gap-0 flex-col justify-between py-[80px]">
                    {/* Left side */}
                    <div className="text-white">

                        <p className="text-2xl font-bold">Exclusive</p>
                        <p className="mt-6 font-medium text-xl">Subscribe</p>
                        <p className="mt-6 font-normal text-base">Get 10% off your first order</p>

                        <div className="w-[240px] md:w-auto overflow-hidden flex items-center gap-[32px] mt-[16px] px-4 py-3 border border-white rounded-md">
                            <input type="text" placeholder="Enter your email"
                                   className="outline-none text-white/60 font-normal text-base bg-transparent w-full"
                            />
                            <img className="cursor-pointer" src={sendIcon} alt="sendIcon" />
                        </div>

                    </div>
                    {/* Left side */}


                    {/* Right side */}
                    <div className="text-white flex gap-[87px]">
                        <div>
                            <ul className="flex flex-col gap-6">
                                <div>
                                    <li className="text-xl font-normal cursor-pointer">Account</li>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <li className="cursor-pointer text-base">My Account</li>
                                    <li className="cursor-pointer text-base">Login / Register</li>
                                    <li className="cursor-pointer text-base">Cart</li>
                                    <li className="cursor-pointer text-base">Wishlist</li>
                                    <li className="cursor-pointer text-base">Shop</li>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-6">
                                <div>
                                    <li className="text-xl font-normal cursor-pointer">Quick Link</li>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <li className="cursor-pointer text-base">Privacy Policy</li>
                                    <li className="cursor-pointer text-base">Terms Of Use</li>
                                    <li className="cursor-pointer text-base">FAQ</li>
                                    <li className="cursor-pointer text-base">Contact</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* Right side */}

                </div>
            </div>
        </div>
    )
};

export default Footer;