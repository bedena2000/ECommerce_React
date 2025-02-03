import { fetchAllCategories } from "@/helpers/services";
import { useEffect, useState } from "react";
import { Link } from "react-router";

// Type
import { Category } from "@/types/types";

// Skeleton Element
import ContentLoader from "react-content-loader";

export default function MainSlider() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to fetch categories");
        console.error("Error fetching categories:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getCategories();
  }, []);

  console.log(categories);

  return (
    <div className="">
      <div className="customContainer">
        <div className="pt-10 flex flex-col">
          {categories &&
            categories.length > 0 &&
            categories.slice(0, 9).map((category: Category) => {
              return (
                <Link
                  className="hover:px-2 py-2 transition-all ease-in delay-50 duration-100 hover:bg-slate-300 cursor-pointer"
                  to={`/search?category=${category.slug}`}
                  key={category.slug}
                >
                  {category.name}
                </Link>
              );
            })}
          {error &&
            error.length > 0 &&
            Array.from({ length: 9 }).map((_, index) => (
              <ContentLoader
                speed={1}
                style={{
                  width: "200px",
                  height: "50px",
                  marginTop: `${index > 0 ? "12px" : ""} `,
                }}
              >
                <rect rx="3" width="200" height="20" />
              </ContentLoader>
            ))}
          {loading &&
            Array.from({ length: 9 }).map((_, index) => (
              <ContentLoader
                speed={1}
                style={{
                  width: "200px",
                  height: "50px",
                  marginTop: `${index > 0 ? "12px" : ""} `,
                }}
              >
                <rect rx="3" width="200" height="20" />
              </ContentLoader>
            ))}
        </div>
      </div>
    </div>
  );
}
