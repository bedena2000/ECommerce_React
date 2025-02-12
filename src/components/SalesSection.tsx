import CategoryTitle from "@/components/shared/CategoryTitle";
import ReusableSlider from "@/components/shared/ReusableSlider";
import SaleTimer from "@/components/shared/SaleTimer";

export default function SalesSection() {
  return (
    <div className="mt-[140px]">
      <div className="customContainer">
        <CategoryTitle title="Today's" />
        <div className="flex items-center gap-[87px] mt-6">
          <p className="text-4xl font-medium">Flash Sales</p>
          <SaleTimer days={3} hours={23} minutes={19} seconds={56} />
        </div>
        <ReusableSlider />
      </div>
    </div>
  );
}
