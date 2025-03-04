// Components
import BestSellingSection from "@/components/BestSellingSection";
import CategorySection from "@/components/CategorySection";
import MainSlider from "@/components/MainSlider";
import SalesSection from "@/components/SalesSection";
import AdvertisingSecondSection from "@/components/shared/AdvertisingSecondSection";
import ExploreProduct from "@/components/shared/ExploreProduct";
import NewArrival from '@/components/NewArrival.tsx';
import Delivery from '@/components/shared/Delivery.tsx';

export default function Home() {
  return (
    <div className="px-2">
      <MainSlider />
      <SalesSection />
      <CategorySection />
      <BestSellingSection />
      <AdvertisingSecondSection />
      <ExploreProduct />
      <NewArrival />
      <Delivery />
    </div>
  );
}
