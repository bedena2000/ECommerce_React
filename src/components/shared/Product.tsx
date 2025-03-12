import React, {useEffect, useState} from "react";

// Icons
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";

// Helpers
import { fetchSingleProduct } from "@/helpers/services";

// Store
import { addToWishlist } from "@/store/wishlistReducer.ts";
import { addToDetails } from "@/store/detailsReducer.ts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store.ts";

interface ProductProps {
  id: string | number;
  title: string | number;
  price: number | string;
  discountPercentage?: number | string | null | undefined;
  images: string[];
}

const Product = ({
  id,
  images,
  price,
  title,
  discountPercentage,
}: ProductProps) => {
  const [isAlreadyInList, setIsAlreadyInList] = useState(false);
  const dispatch = useDispatch();

  const handleWishlist = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const fetchProduct = async () => {
      const product = await fetchSingleProduct(id);
      if(!product) return;

      dispatch(addToWishlist(product.data));
      setIsAlreadyInList(true);
    };

    fetchProduct();
  }

  const handleCart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const handleDetails = () => {
      dispatch(addToDetails(+id));
  };

  return (
    <Link to={`/details`} onClick={handleDetails} className="relative z-10">
      <div className="cursor-pointer">
        {/* top part */}
        <div className="bg-[#F5F5F5] p-3 relative h-[250px]">
          {discountPercentage && (
            <div className="absolute w-auto h-auto px-3 py-1 bg-[#DB4444] text-[#FAFAFA] text-xs rounded-[4px]">
              -{discountPercentage}%
            </div>
          )}
          <img
            src={images[0]}
            alt="productImage"
            className="w-full h-full object-cover"
          />
          <div className="absolute right-3 top-3 flex flex-col gap-2">
            {
              !isAlreadyInList && (
                <div onClick={handleWishlist} className="bg-[#FFFFFF] relative z-20 p-1 rounded-full cursor-pointer transition-all duration-100 ease-in hover:bg-slate-200">
                  <CiHeart size={28} />
                </div>
              )
            }
            <div onClick={handleCart} className="bg-[#FFFFFF] relative z-20 p-1 rounded-full cursor-pointer transition-all duration-100 ease-in hover:bg-slate-200">
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
    </Link>
  );
};

export default Product;
