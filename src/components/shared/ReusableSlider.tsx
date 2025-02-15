// Types
import { Product as ProductInterface } from "@/types/types";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";

// Slider style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Product from "@/components/shared/Product";

// Icons

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
import { Navigation } from "swiper/modules";

interface ReusableSliderProps {
  productList: ProductInterface[];
}

export default function ReusableSlider({ productList }: ReusableSliderProps) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
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
        {productList &&
          productList.map((item: ProductInterface) => (
            <SwiperSlide key={item.title}>
              <Product
                id={item.id}
                images={item.images}
                price={item.price}
                title={item.title}
                discountPercentage={item.discountPercentage}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
