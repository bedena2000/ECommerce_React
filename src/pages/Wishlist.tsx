// Components
import Button from "@/components/shared/Button.tsx";
import WishlistProduct from "@/components/shared/WishlistProduct.tsx";


// Store
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/wishlistReducer.ts";

// Routing
import { Link } from "react-router";
import { RootState } from "@/store/store.ts";

// Types
import { Product } from "@/types/types.ts";


export default function Wishlist() {
    const wishlistProducts = useSelector((state: RootState) => state.wishlist);
    const dispatch = useDispatch();

    console.log(wishlistProducts);

    return (
        <div className="mt-20 mb-20">
            <div className="customContainer">

                <div>

                    <div className="flex sm:flex-row sm:gap-0 flex-col gap-8 items-center justify-between">
                        <p className="text-[26px] font-semibold">Wishlist ({wishlistProducts.length})</p>
                        <Link to="/cart">
                            <Button classNames="px-[48px] py-[16px]" title="Move All To Bag" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-8">
                        {
                            wishlistProducts.map((product: Product) => <WishlistProduct product={product} />)
                        }
                    </div>


                </div>

            </div>
        </div>
    )
}