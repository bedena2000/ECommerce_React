// Images
import playStationImage from "@/assets/img/playstation.png";
import homeIcon from "@/assets/icons/home_icon.png";
import dolarIcon from "@/assets/icons/dolar_icon.png";
import shoppingIcon from "@/assets/icons/shopping_icon.png";
import moneyIcon from "@/assets/icons/money_icons.png";

export default function About() {
    return (
        <div>
            <div className="customContainer">


                <div className="flex my-[140px] items-center justify-between gap-20">
                    <div className="md:w-[525px] w-full md:text-start text-center">
                        <p className="text-[54px] font-semibold">Our Story</p>
                        <p className="text-base font-normal mt-10">
                            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        </p>
                        <p className="text-base font-normal mt-6">
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <img src={playStationImage} alt="playstationImage"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
                    <div className="text-center rounded-[4px] border border-b-amber-100 py-[30px]   ">
                        <div className="m-auto flex items-center justify-center rounded-full w-[80px] h-[80px] bg-gray-300">
                            <div className="flex items-center justify-center rounded-full w-[58px] h-[58px] bg-[#2F2E30]">
                                <img src={homeIcon} alt="homeIcon"/>
                            </div>
                        </div>
                        <p className="mt-6 text-[32px] font-bold">10.5k </p>
                        <p className="text-base font-normal mt-3">Sallers active our site</p>
                    </div>

                    <div className="shadow-xl text-center rounded-[4px] border border-b-amber-100 py-[30px]  bg-[#DB4444] text-white">
                        <div className="m-auto flex items-center justify-center rounded-full w-[80px] h-[80px] bg-[#7D8184]">
                            <div className="flex items-center justify-center rounded-full w-[58px] h-[58px] bg-[#FFFFFF]">
                                <img src={dolarIcon} alt="dolarIcon"/>
                            </div>
                        </div>
                        <p className="mt-6 text-[32px] font-bold">33k</p>
                        <p className="text-base font-normal mt-3">Monthly Product Sale</p>
                    </div>

                    <div className="text-center rounded-[4px] border border-b-amber-100 py-[30px]   ">
                        <div className="m-auto flex items-center justify-center rounded-full w-[80px] h-[80px] bg-gray-300">
                            <div className="flex items-center justify-center rounded-full w-[58px] h-[58px] bg-[#2F2E30]">
                                <img src={shoppingIcon} alt="shoppingIcon"/>
                            </div>
                        </div>
                        <p className="mt-6 text-[32px] font-bold">45.5k</p>
                        <p className="text-base font-normal mt-3">Customer active in our site</p>
                    </div>

                    <div className="text-center rounded-[4px] border border-b-amber-100 py-[30px]   ">
                        <div className="m-auto flex items-center justify-center rounded-full w-[80px] h-[80px] bg-gray-300">
                            <div className="flex items-center justify-center rounded-full w-[58px] h-[58px] bg-[#2F2E30]">
                                <img src={moneyIcon} alt="moneyIcon"/>
                            </div>
                        </div>
                        <p className="mt-6 text-[32px] font-bold">25k</p>
                        <p className="text-base font-normal mt-3">Anual gross sale in our site</p>
                    </div>
                </div>


            </div>
        </div>
    )
}