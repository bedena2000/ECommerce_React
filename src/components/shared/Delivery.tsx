// Icons
import DeliveryCarIcon from '@/assets/icons/icon-delivery.png';
import CustomerServiceIcon from '@/assets/icons/Icon-Customer service.png';
import MoneyBackIcon from '@/assets/icons/Icon-secure.png';

export default function Delivery () {
    return (
        <div className="mt-[140px]">
            <div className="customContainer">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-0 grid-cols-1 gap-16 md:gap-16">
                    <div className="lg:text-center lg:flex flex-col justify-center">
                        {/* Icons */}
                        <div className="m-auto mb-[35px] flex items-center justify-center rounded-full bg-gray-500 w-[80px] h-[80px]">
                            <div className="flex items-center justify-center rounded-full bg-black w-[58px] h-[58px]">
                                <img src={DeliveryCarIcon} alt="DeliveryCarIcon"/>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-black text-center">
                            <p className="text-sm md:text-xl font-semibold">FREE AND FAST DELIVERY</p>
                            <p className="text-[12px] md:text-sm mt-2 font-normal">Free delivery for all orders over $140</p>
                        </div>
                    </div>

                    <div className="lg:text-center lg:flex flex-col justify-center">
                        {/* Icons */}
                        <div className="m-auto mb-[35px] flex items-center justify-center rounded-full bg-gray-500 w-[80px] h-[80px]">
                            <div className="flex items-center justify-center rounded-full bg-black w-[58px] h-[58px]">
                                <img src={CustomerServiceIcon} alt="CustomerServiceIcon"/>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-black text-center">
                            <p className="text-sm md:text-xl font-semibold">24/7 CUSTOMER SERVICE</p>
                            <p className="text-[12px] md:text-sm mt-2 font-normal">Friendly 24/7 customer support</p>
                        </div>
                    </div>

                    <div className="lg:text-center lg:flex flex-col justify-center">
                        {/* Icons */}
                        <div className="m-auto mb-[35px] flex items-center justify-center rounded-full bg-gray-500 w-[80px] h-[80px]">
                            <div className="flex items-center justify-center rounded-full bg-black w-[58px] h-[58px]">
                                <img src={MoneyBackIcon} alt="MoneyBackIcon"/>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-black text-center">
                            <p className="text-sm md:text-xl font-semibold">MONEY BACK GUARANTEE</p>
                            <p className="text-[12px] md:text-sm mt-2 font-normal">We return money within 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

