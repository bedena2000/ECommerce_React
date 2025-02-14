import React from "react";

// Icons
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface ProductProps {
  title: string | number;
  price: number | string;
  discountPercentage?: number | string | null | undefined;
  images: string[];
}

const Product = ({
  images,
  price,
  title,
  discountPercentage,
}: ProductProps) => {
  return (
    <div className="cursor-pointer">
      {/* top part */}
      <div className="bg-[#F5F5F5] p-3 relative h-[250px]">
        {discountPercentage && (
          <div className="absolute w-auto h-auto px-3 py-1 bg-[#DB4444] text-[#FAFAFA] text-xs rounded-[4px]">
            -{discountPercentage}%
          </div>
        )}
        <img src={images[0]} alt="productImage" className="w-full h-full object-cover" />
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <div className="bg-[#FFFFFF] p-1 rounded-full cursor-pointer transition-all duration-100 ease-in hover:bg-slate-200">
            <CiHeart size={28} />
          </div>
          <div className="bg-[#FFFFFF] p-1 rounded-full cursor-pointer transition-all duration-100 ease-in hover:bg-slate-200">
            <MdOutlineRemoveRedEye size={28} />
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="mt-4 ">
        <p className="text-black text-sm font-semibold">{title}</p>
        <p className="mt-2 text-[#DB4444] font-semibold text-xs">${price}</p>
      </div>
    </div>
  );
};

export default Product;
