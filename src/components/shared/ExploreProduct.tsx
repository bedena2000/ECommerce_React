import CategoryTitle from "@/components/shared/CategoryTitle";
import { Link } from "react-router";
import Button from "@/components/shared/Button";
import { useSelector } from "react-redux";  
import { RootState } from "@/store/store";
import ReusableSlider from "./ReusableSlider";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Navigation} from "swiper/modules";
import {Product as ProductInterface} from "@/types/types.ts";
import Product from "@/components/shared/Product.tsx";
import {useState} from "react";

export default function ExploreProduct() {
  const products = useSelector((state: RootState) => state.products);
  const [swiperInstance, setSwiperInstance] = useState<Swiper>(null);

  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 8) {
    chunkedProducts.push(products.slice(i, i + 8));
  }

  return (
    <div className="mt-[71px]">
      <div className="customContainer">
        <CategoryTitle title="Our Products" />
        <p className="mt-5 text-2xl lg:text-4xl font-medium">
          Explore Our Products
        </p>

        {/*<div>*/}
        {/*  {products && products.length > 0 && (*/}
        {/*    <ReusableSlider productList={products} rows={2} />*/}
        {/*  )}*/}
        {/*</div>*/}

        <div>
          {
            products && products.length > 0 && (
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
                        spaceBetween={20}
                        modules={[Navigation]}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        slidesPerView={1}
                        navigation={false}
                        breakpoints={{
                          640: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 1,
                          },
                          1024: {
                            slidesPerView: 1,
                          },
                        }}
                    >
                      {chunkedProducts.map((chunk, chunkIndex) => (
                          <SwiperSlide key={chunkIndex}>
                            <div className="grid grid-cols-1 gap-6">
                              {/* Row 1 */}
                              <div className="grid grid-cols-4 gap-4  rounded-lg">
                                {chunk.slice(0, 4).map((item) => (
                                    <div key={item.title} className="w-full">
                                      <Product
                                          id={item.id}
                                          images={item.images}
                                          price={item.price}
                                          title={item.title}
                                          discountPercentage={item.discountPercentage}
                                      />
                                    </div>
                                ))}
                                {/* Fill empty slots in Row 1 if less than 4 items */}
                                {chunk.slice(0, 4).length < 4 &&
                                    Array(4 - chunk.slice(0, 4).length)
                                        .fill(null)
                                        .map((_, i) => (
                                            <div key={`empty-1-${i}`} className="w-full invisible">
                                              <Product
                                                  id={0}
                                                  images={[]}
                                                  price={0}
                                                  title=""
                                                  discountPercentage={0}
                                              />
                                            </div>
                                        ))}
                              </div>
                              {/* Row 2 */}
                              <div className="grid grid-cols-4 gap-4  rounded-lg">
                                {chunk.slice(4, 8).map((item) => (
                                    <div key={item.title} className="w-full">
                                      <Product
                                          id={item.id}
                                          images={item.images}
                                          price={item.price}
                                          title={item.title}
                                          discountPercentage={item.discountPercentage}
                                      />
                                    </div>
                                ))}
                                {/* Fill empty slots in Row 2 if less than 4 items */}
                                {chunk.slice(4, 8).length < 4 &&
                                    Array(4 - chunk.slice(4, 8).length)
                                        .fill(null)
                                        .map((_, i) => (
                                            <div key={`empty-2-${i}`} className="w-full invisible">
                                              <Product
                                                  id={0}
                                                  images={[]}
                                                  price={0}
                                                  title=""
                                                  discountPercentage={0}
                                              />
                                            </div>
                                        ))}
                              </div>
                            </div>
                          </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
              )
          }
        </div>

        <div className="mt-[60px] flex items-center justify-center">
          <Link to="/products">
            <Button
              title="View All Products"
              classNames="bg-[#DB4444] px-[48px] py-[16px] rounded-[2px] text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
