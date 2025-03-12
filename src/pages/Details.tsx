// Component
import Button from "@/components/shared/Button";

// Hooks
import { useEffect, useState } from "react";

// Store
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store.ts";

// Types
import { Product } from "@/types/types";

// Helpers
import { fetchSingleProduct } from "@/helpers/services.ts";

// Icons
import { CiHeart } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import returnIcon from "@/assets/icons/Icon-return.png";

// Routing
import { redirect, useNavigate } from "react-router";

export default function Details() {
    const [product, setProduct] = useState<Product>();
    const [productImages, setProductImages] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const itemId = useSelector((state: RootState) => state.details);

    useEffect(() => {

        if(!itemId) {
            navigate('/');
        };

        const fetchProduct = async () => {
            const product = await fetchSingleProduct(itemId);
            setProduct(product.data);
            setProductImages(product.data.images);
        };

        fetchProduct();
    }, [itemId]);



    return (
        <div className="">
            <div className="customContainer">

                <div className="mt-[140px] mb-[140px]">
                    {
                        product && (
                            <div className="flex flex-col lg:flex-row gap-[30px]">

                                <div className="flex flex-col md:flex-row gap-[30px]">
                                    <div className="flex md:flex-col gap-4">
                                        {
                                            product.images && product.images.length > 0 && product.images.slice(0, 4).map((image: string, index: number) => (
                                                <div key={image} className="flex-wrap md:flex-nowrap md:w-[170px] md:h-[138px] w-[100px] h-[100px] p-5 cursor-pointer bg-[#F5F5F5]">
                                                    <img className="w-full h-full object-contain" src={image} alt=""/>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="bg-[#F5F5F5] w-full lg:w-[445px] h-[400px] sm:h-[600px]">
                                        <img className="w-full h-full object-contain" src={productImages[currentImageIndex]} alt="main"/>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="text-2xl font-semibold">{product.title}</p>
                                        <p className="text-2xl font-normal mt-[16px]">${product.price}</p>
                                        <p className="text-sm mt-[24px] pb-6 border-b border-[#000000]">
                                            {product.description}
                                        </p>
                                        <div className="flex items-center gap-6 mt-[24px]">
                                            <Button title="Buy Now" classNames="text-white bg-[#DB4444] px-[48px] py-[10px] rounded-md" />
                                            <div className="cursor-pointer w-[40px] h-[40px] flex justify-center items-center rounded-md border border-gray-600 ">
                                                <CiHeart size={24}  />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <div className="flex flex-wrap items-center gap-4 border px-4 py-6 border-gray-600">
                                            <FaCarSide className="w-[40px] h-[40px] object-fill" />
                                            <div>
                                                <p className="text-base font-normal">Free Delivery</p>
                                                <p className="text-[10px] mt-[8px] underline">Enter your postal code for Delivery Availability</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 border px-4 py-6 border-gray-600 border-t-0">
                                            <img className="w-[40px] h-[40px]" src={returnIcon} alt="return icon"/>
                                            <div>
                                                <p className="text-base font-normal">Free Delivery</p>
                                                <p className="text-[10px] mt-[8px]">Enter your postal code for Delivery Availability</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}