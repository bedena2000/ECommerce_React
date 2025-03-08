// Types
import { Product } from "@/types/types.ts";

// Icons
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

// Routing
import { Link } from "react-router";



interface WishlistProductProps {
    product: Product;
}

export default function WishlistProduct({ product }: WishlistProductProps) {
    return (
        <div className="flex flex-col">
            {/* Top part */}
            <div className="h-[250px] bg-[#F5F5F5] rounded-md relative flex flex-col justify-center items-center">
                <img src={product.images[0]} alt="" className="w-full h-full object-contain" />

                <Link to={`/cart`} className="transition-all duration-200 ease-in bg-[#363738] hover:bg-gray-400 w-full text-center absolute bottom-0 h-[41px]">
                    <div className="flex justify-center items-center text-white gap-3 h-full  ">
                        <IoCartOutline size={24} />
                        <p>Add To Cart</p>
                    </div>
                </Link>

                {
                    product.discountPercentage && (<div className="absolute left-3 top-3 bg-[#DB4444] text-[12px] px-3 py-1 text-white rounded-[4px]">
                        -{product.discountPercentage}%
                    </div>)
                }

                <div className="absolute cursor-pointer top-3 right-3 w-[34px] h-[34px] transition-all ease-in duration-100 hover:bg-gray-300 bg-white rounded-full flex justify-center items-center">
                    <FaRegTrashAlt size={18} />
                </div>
            </div>
            {/* Top part */}

            {/* Bottom part */}
            <div className="mt-4 ">
                <p className="text-base font-medium">{product.title}</p>
                <p className="mt-2 text-[#DB4444] font-medium text-base">${product.price}</p>
            </div>
            {/* Bottom part */}
        </div>
    )
}