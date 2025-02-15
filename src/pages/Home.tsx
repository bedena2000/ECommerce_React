// Components
import BestSellingSection from "@/components/BestSellingSection";
import CategorySection from "@/components/CategorySection";
import MainSlider from "@/components/MainSlider";
import SalesSection from "@/components/SalesSection";
import AdvertisingSecondSection from "@/components/shared/AdvertisingSecondSection";

export default function Home() {
  return (
    <div className="px-2">
      <MainSlider />
      <SalesSection />
      <CategorySection />
      <BestSellingSection />
      <AdvertisingSecondSection />
    </div>
  );
}
