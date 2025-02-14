import CategoryTitle from "@/components/shared/CategoryTitle";
import ReusableSlider from "@/components/shared/ReusableSlider";
import SaleTimer from "@/components/shared/SaleTimer";
import { RootState } from "@/store/store";
import { Product } from "@/types/types";
import { useEffect, useState } from "react";

// Store
import { useSelector } from "react-redux";
import Button from "@/components/shared/Button";
import { Link } from "react-router";

export default function SalesSection() {
  const products = useSelector((state: RootState) => state.products);
  const [productFinalList, setProductFinalList] = useState<Product[]>([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const listSize = products.length;
      const listOfRandomItems: number[] = [];

      const min = 0;
      const max = listSize;

      for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min)) + min;
        while (listOfRandomItems.includes(randomNumber)) {
          randomNumber = Math.floor(Math.random() * (max - min)) + min;
        }

        listOfRandomItems.push(randomNumber);
      }

      const finalList: Product[] = listOfRandomItems.map(
        (itemIndex: number) => products[itemIndex]
      );
      setProductFinalList(finalList);
    }
  }, [products]);

  return (
    <div className="mt-[140px]">
      <div className="customContainer">
        <CategoryTitle title="Today's" />
        <div className="flex justify-between lg:justify-start items-center gap-[87px] mt-6">
          <p className="text-2xl lg:text-4xl font-medium">Flash Sales</p>
          <SaleTimer days={3} hours={23} minutes={19} seconds={56} />
        </div>
        {products && products.length > 0 && (
          <ReusableSlider productList={productFinalList} />
        )}

        <div className="pb-[59px] mt-[60px] border-b border-gray-200 mb-2">
          <Link to="/products"><Button title="View All Products"
            classNames="bg-[#DB4444] text-[#FAFAFA] px-[48px] py-[16px] rounded-[0px] mx-auto"
          /></Link>
        </div>
      </div>
    </div>
  );
}
