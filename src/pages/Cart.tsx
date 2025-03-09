// Components

// Icons
import { IoCloseCircle } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// Types
import { RootState } from "@/store/store.ts";
import { cartProduct } from "@/types/types.ts";

// Store
import { useDispatch, useSelector } from "react-redux";
import {increase, decrease, removeFromCart} from "@/store/cartReducer.ts";


export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart);

    const handleIncrease = (productId: number | string) => {
        const item = cartItems.filter((item) => item.product.id === productId)[0];
        dispatch(increase(item.product));
    };

    const handleDecrease = (productId: number | string) => {
        const item = cartItems.filter((item) => item.product.id === productId)[0];
        dispatch(decrease(item.product));
    };

    const handleDelete = (productId: number | string) => {
        const item = cartItems.filter((item) => item.product.id === productId)[0];
        dispatch(removeFromCart(item.product));
    }

    return (
        <div className="mt-[140px] mb-[140px]">
            <div className="customContainer">
                <div>
                    <table className="w-full">
                        <thead className="w-full">
                            <tr className="bg-white shadow-md w-full">
                                <th className="text-start p-6"><p>Product</p></th>
                                <th className="text-start p-6"><p>Price</p></th>
                                <th className="text-start p-6"><p>Quantity</p></th>
                                <th className="text-end p-6"><p>Subtotal</p></th>
                            </tr>
                        </thead>

                        <tbody className="">

                        {
                            cartItems && cartItems.map((item: cartProduct) => {
                                const productItem = item.product;
                                return (
                                    <tr className="bg-white shadow-md w-full">
                                        <th className="text-start p-6 relative">
                                            <IoCloseCircle onClick={() =>  handleDelete(productItem.id)} className="cursor-pointer absolute" size={24} color="red" />
                                            <div className="flex items-center gap-[20px]">
                                                <img className="w-[80px]" src={productItem.images[0]}/>
                                                <p className="text-base font-normal">{productItem.title}</p>
                                            </div>
                                        </th>
                                        <th className="text-start p-6">
                                            <p className="text-base font-normal">${productItem.price}</p>
                                        </th>
                                        <th className="text-start p-6">
                                            <div className="w-[72px] py-[10px] flex justify-center items-center gap-4 border border-gray-400 rounded-md bg-transparent">
                                                <p>{item.quantity}</p>
                                                <div>
                                                    <IoIosArrowUp onClick={() => handleIncrease(productItem.id)} className="cursor-pointer" />
                                                    <IoIosArrowDown onClick={() => handleDecrease(productItem.id)} className="cursor-pointer" />
                                                </div>
                                            </div>
                                        </th>
                                        <th className="text-end p-6">
                                            <p className="text-base font-normal">
                                                ${(+productItem.price * item.quantity).toFixed(2)}
                                            </p>
                                        </th>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}