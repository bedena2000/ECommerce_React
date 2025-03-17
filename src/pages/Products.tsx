import React, { useState, useEffect, KeyboardEventHandler } from "react";

// Types
import { Product as ProductType } from "@/types/types.ts";

// Components
import Product from "@/components/shared/Product";
import Pagination from "@mui/material/Pagination";

// Router
import { useNavigate } from "react-router";

// Icons
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

// Helpers
import { fetchCategoryList } from "@/helpers/services.ts";

// Store
import { useDispatch, useSelector } from "react-redux";
import {
  changeCategory,
  changeSearchTerm,
} from "@/store/searchOptionReducer.ts";
import { RootState } from "@/store/store.ts";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [sliceFirstPart, setSliceFirstPart] = useState(0);
  const [sliceSecondPart, setSliceSecondPart] = useState(6);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let productList = useSelector((state: RootState) => state.products);
  const searchOptions = useSelector(
    (state: RootState) => state.searchOptionDetails
  );

  const handleSearch = () => {
    dispatch(changeSearchTerm(searchTerm));
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;

    dispatch(changeCategory(selectedCategory));
  };

  useEffect(() => {
    const getCategoryList = async () => {
      try {
        const categoryList = await fetchCategoryList();
        setCategoryList(categoryList.data);
        setPageCount(productList.length / 6);
      } catch {
        navigate("/");
      }
    };

    getCategoryList();
  }, []);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    selectedPage: number
  ) => {
    if (selectedPage === 1) {
      setSliceFirstPart(0);
      setSliceSecondPart(6);
    } else {
      setSliceFirstPart(selectedPage * 6);
      setSliceSecondPart(selectedPage * 6 + 6);
    }
  };

  if (searchOptions.searchTerm.length > 0) {
    productList = productList.filter((product: ProductType) => {
      return product.title
        .toString()
        .toLowerCase()
        .includes(searchOptions.searchTerm.toLowerCase());
    });
  }

  if (searchOptions.category.length > 0) {
    productList = productList.filter((product: ProductType) => {
      return product.category === searchOptions.category;
    });
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(changeSearchTerm(searchTerm));
    }
  };

  return (
    <div className="mt-[60px] mb-[60px]">
      <div className="customContainer">
        <div className="flex p-4 gap-6">
          {/* Menu */}
          <div className="p-4 border rounded-md">
            <div className="border-b pb-6">
              <div
                className="flex gap-4 border rounded-md p-2"
                onKeyDown={handleKeyDown}
              >
                <IoSearchOutline
                  className="cursor-pointer"
                  onClick={handleSearch}
                  size={24}
                />
                <input
                  onChange={(event) => setSearchTerm(event.target.value)}
                  value={searchTerm}
                  type="text"
                  className="outline-none font-semibold"
                  placeholder="Search..."
                />
              </div>
            </div>

            <div className="mt-4">
              <select
                onChange={handleCategoryChange}
                className="w-full p-2 cursor-pointer uppercase border border-gray-200 outline-none"
              >
                <option value="">Select category</option>
                {categoryList &&
                  categoryList.map((category: string) => (
                    <option
                      value={category}
                      className="p-2 uppercase cursor-pointer"
                      key={category}
                    >
                      {category.toLocaleLowerCase()}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Search + Content */}
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-3 gap-6">
              {productList &&
                productList
                  .slice(sliceFirstPart, sliceSecondPart)
                  .map((product: ProductType) => {
                    return (
                      <Product
                        key={product.id}
                        id={product.id}
                        images={product.images}
                        price={product.price}
                        title={product.title}
                        discountPercentage={product.discountPercentage}
                      />
                    );
                  })}
            </div>

            {/* Pagination */}
            <div className="mt-12">
              <Pagination count={20} onChange={handlePagination} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
