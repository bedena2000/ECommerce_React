import { fetchAllCategories, fetchSingleCategory } from "@/helpers/services";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

// Type
import { Category, CategoryData } from "@/types/types";

// Skeleton Element
import ContentLoader from "react-content-loader";

export default function MainSlider() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setIsLoading] = useState(false);
  const [categoryData, setCategorydata] = useState<CategoryData[]>([]);
  const [numberOfSlides, setNumberOfSlider] = useState(0);
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllCategories();
        setCategories(data.slice(0, 9));
        const promises = data
          .slice(0, 9)
          .map((category: Category) => fetchSingleCategory(category.slug));
        const responses = await Promise.all(promises);
        setCategorydata(responses.map((response) => response.data));
        setNumberOfSlider(
          responses.map((response) => response.data)[0].products.length
        );
      } catch (err) {
        setError("Failed to fetch categories");
        console.error("Error fetching categories:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getCategories();

    const interval = setInterval(() => {
      setCurrentSliderIndex((prevIndex) => {
        if (prevIndex + 1 === numberOfSlides) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [numberOfSlides]);

  const handleSlider = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const targetElement = event.currentTarget;
    const elementIndex = Number(targetElement.dataset.element_index);
    setCurrentSliderIndex(elementIndex);
  };

  return (
    <div className="">
      <div className="customContainer">
        <div className="flex gap-[45px] justify-stretch">
          <div className="flex flex-col justify-between pt-10 pr-6 border-r border-black/20">
            {categories &&
              categories.length > 0 &&
              categories.map((category: Category) => {
                return (
                  <Link
                    className="hover:px-2 transition-all ease-in delay-50 duration-100 hover:bg-slate-300 cursor-pointer"
                    to={`/search?category=${category.slug}`}
                    key={category.slug}
                  >
                    {category.name}
                  </Link>
                );
              })}

            {(loading || error) &&
              Array.from({ length: 9 }).map((_, index) => (
                <ContentLoader
                  speed={1}
                  style={{
                    width: "200px",
                    height: "50px",
                    marginTop: `${index > 0 ? "12px" : ""} `,
                  }}
                  key={Math.random()}
                >
                  <rect rx="3" width="200" height="20" />
                </ContentLoader>
              ))}
          </div>

          {categoryData && categoryData.length > 0 && (
            <div className="w-full h-[350px] pt-5 relative overflow-hidden bg-black mt-10">
              {/* Pictures */}
              <div
                className="w-full h-full flex transition-all duration-300 ease-in items-center gap-2 absolute top-10 left-0"
                style={{
                  width: `${categoryData[0].products.length * 100}%`,
                  transform: `translateX(-${
                    (100 / numberOfSlides) * currentSliderIndex
                  }%)`,
                }}
              >
                {categoryData[1].products.map((product) => (
                  <img
                    className="object-contain w-full h-full"
                    src={product.thumbnail}
                    alt="image"
                    key={product.thumbnail}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="absolute bottom-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 z-20">
                {categoryData &&
                  categoryData.length &&
                  categoryData[0].products.map((product, index) => (
                    <div
                      key={product.thumbnail}
                      className={`w-[18px] h-[18px] bg-gray-600 rounded-full cursor-pointer transition-all duration-100 ease-in hover:bg-slate-400 hover:border-4 hover:border-green-600 ${
                        currentSliderIndex === index
                          ? "border-4 border-green-600"
                          : ""
                      }`}
                      onClick={handleSlider}
                      data-element_index={index}
                    ></div>
                  ))}
              </div>
            </div>
          )}

          {loading && (
            <ContentLoader
              speed={0.8}
              viewBox="0 0 476 560"
              style={{
                width: "100%",
                height: "760px",
              }}
            >
              <rect x="15" y="46" rx="20" ry="20" width="393" height="349" />
            </ContentLoader>
          )}
        </div>
      </div>
    </div>
  );
}
