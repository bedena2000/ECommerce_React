// Components
import Button from "@/components/shared/Button";
import { Link } from "react-router";

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

    const totalPrice = cartItems.reduce((total: number, item: cartProduct) => {
        return total + (item.quantity * +item.product.price);
    }, 0);


    return (
        <div className="mt-[140px] mb-[140px]">
            <div className="customContainer">
                <div>
                    <table className="w-full">
                        {
                            cartItems.length > 0 && (
                                <thead className="w-full">
                                    <tr className="bg-white shadow-md w-full">
                                        <th className="text-start p-6"><p>Product</p></th>
                                        <th className="text-start p-6"><p>Price</p></th>
                                        <th className="text-start p-6"><p>Quantity</p></th>
                                        <th className="text-end p-6"><p>Subtotal</p></th>
                                    </tr>
                                </thead>
                            )
                        }

                        <tbody className="">

                        {
                            cartItems && cartItems.map((item: cartProduct) => {
                                const productItem = item.product;
                                return (
                                    <tr key={productItem.id} className="bg-white shadow-md w-full mt-10">
                                        <th className="text-start p-6 relative">
                                            <IoCloseCircle onClick={() =>  handleDelete(productItem.id)} className="cursor-pointer absolute" size={24} color="red" />
                                            <div className="flex items-center gap-[20px]">
                                                <img className="w-[80px]" src={productItem.images[0]} alt={productItem.title + " Image"} />
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

                    {/* Pagination */}
                    {/* Pagination */}

                    {/* Controllers */}
                    {
                        cartItems.length > 0 && (
                            <div className="mt-[24px]">
                                <Link to="/products">
                                    <Button title="Return To Shop" classNames="text-base font-normal px-[48px] py-[16px] border border-gray-400" />
                                </Link>
                            </div>
                        )
                    }
                    {/* Controllers */}

                    {/* Checkout */}
                    <div className="mt-20 flex justify-end">
                        <div className="w-full sm:w-[470px]  px-8 py-6 rounded-md border-2 border-black">
                            <p className="text-xl font-normal">Cart Total</p>

                            <div className="mt-6 flex flex-col gap-[16px]">
                                <div className="flex items-center justify-between pb-3.5 border-b border-gray-400">
                                    <p className="text-base font-normal">Subtotal:</p>
                                    <p className="text-base font-normal">${totalPrice.toFixed(2)}</p>
                                </div>

                                <div className="flex items-center justify-between pb-3.5 border-b border-gray-400">
                                    <p className="text-base font-normal">Shipping:</p>
                                    <p className="text-base font-normal">Free</p>
                                </div>

                                <div className="flex items-center justify-between pb-3.5 ">
                                    <p className="text-base font-normal">Total:</p>
                                    <p className="text-base font-normal">${totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            <Button title="Proceses to checkout" classNames="bg-[#DB4444] text-base font-normal px-[48px] py-[16px] rounded-md text-white m-auto mt-[32px]" />
                        </div>
                    </div>
                    {/* Checkout */}


                </div>
            </div>
        </div>
    )
}