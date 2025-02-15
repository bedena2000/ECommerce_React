import { useSelector } from "react-redux";
import CategoryTitle from "@/components/shared/CategoryTitle";
import { RootState } from "@/store/store";
import { Product as ProductInterface } from "@/types/types";
import Product from "@/components/shared/Product";
import Button from "./shared/Button";
import { Link } from "react-router";

export default function BestSellingSection() {
  const products = useSelector((state: RootState) => state.products).slice(
    0,
    4
  );

  return (
    <div className="mt-20">
      <div className="customContainer">
        <div>
          <CategoryTitle title="This Month" />
          <div className="flex items-center justify-between">
            <p className="mt-5 text-2xl lg:text-4xl font-medium">
              Best Selling Products
            </p>
            <Link to="/products">
              <Button
                title="View all"
                classNames="bg-[#DB4444] px-[48px] py-[16px] rounded-[2px] text-white"
              />
            </Link>
          </div>
          <div className="mt-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-[30px] justify-between">
              {products &&
                products.map((item: ProductInterface) => (
                  <Product
                    id={item.id}
                    images={item.images}
                    price={item.price}
                    title={item.title}
                    discountPercentage={item.discountPercentage}
                    key={item.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
