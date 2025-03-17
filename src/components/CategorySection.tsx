import React, { useState } from "react";
import CategoryTitle from "@/components/shared/CategoryTitle";

// Category Icons
import {
  MdFace2,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GiPerfumeBottle } from "react-icons/gi";
import { BsHouses } from "react-icons/bs";
import { PiBowlFood } from "react-icons/pi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { IoShirtOutline } from "react-icons/io5";
import { GiSonicShoes } from "react-icons/gi";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";

// Slider style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Link } from "react-router";

// Store
import { useDispatch } from "react-redux";
import { changeCategory } from "@/store/searchOptionReducer";

export default function CategorySection() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const dispatch = useDispatch();

  const listOfCategories = [
    {
      id: 1,
      title: "Beauty",
      icon: <MdFace2 size={32} />,
    },
    {
      id: 2,
      title: "Fragrances",
      icon: <GiPerfumeBottle size={32} />,
    },
    {
      id: 3,
      title: "Furniture",
      icon: <BsHouses size={32} />,
    },
    {
      id: 4,
      title: "Groceries",
      icon: <PiBowlFood size={32} />,
    },
    {
      id: 5,
      title: "Kitchen Accessories",
      icon: <TbToolsKitchen2 size={32} />,
    },
    {
      id: 6,
      title: "Laptops",
      icon: <FaLaptopCode size={32} />,
    },
    {
      id: 7,
      title: "Mens Shirts",
      icon: <IoShirtOutline size={32} />,
    },
    {
      id: 8,
      title: "Mens Shoes",
      icon: <GiSonicShoes size={32} />,
    },
  ];

  const handleCategory = (item: {
    id: number;
    title: string;
    icon: SVGElement;
  }) => {
    const category = item.title.toLowerCase();

    dispatch(changeCategory(category));
  };

  return (
    <div className="mt-[80px]">
      <div className="customContainer">
        <CategoryTitle title="Categories" />
        <p className="mt-5 text-2xl lg:text-4xl font-medium">
          Browse By Category
        </p>

        <div>
          <div className="mt-24 lg:mt-10 relative">
            <div className="flex items-center gap-2 absolute -top-16 left-0 lg:right-0 z-10 lg:left-auto">
              <div
                className="p-3 rounded-full bg-[#F5F5F5] transition-all ease-in duration-400 hover:bg-slate-200 inline-block cursor-pointer"
                onClick={() => swiperInstance?.slidePrev()}
              >
                <MdOutlineKeyboardArrowLeft size={18} />
              </div>
              <div
                className="p-3 rounded-full bg-[#F5F5F5] transition-all ease-in duration-400 hover:bg-slate-200 inline-block cursor-pointer"
                onClick={() => swiperInstance?.slideNext()}
              >
                <MdOutlineKeyboardArrowRight size={18} />
              </div>
            </div>
            <Swiper
              spaceBetween={50}
              modules={[Navigation]}
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {listOfCategories.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Link to={`/products`} onClick={() => handleCategory(item)}>
                      <div className="p-6 flex flex-col items-center justify-between gap-4 border border-gray-300 rounded-md">
                        <div>{item.icon}</div>
                        <div>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
