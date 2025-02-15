import Button from "@/components/shared/Button";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="customContainer">
      <div className="mt-[140px] flex flex-col items-center justify-center">
        <p className="text-black text-2xl sm:text-6xl lg:text-8xl font-medium">
          404 Not Found
        </p>
        <p className="lg:mt-[40px] mt-[12px] lg:text-2xl text-[12px] sm:text-sm text-black font-normal">
          Your visited page not found. You may go home page.
        </p>
        <Link to="/">
          <Button
            title="Back to home page"
            classNames="lg:mt-[80px] sm:mt-[40px] mt-[16px]  lg:px-[48px] lg:py-[16px] rounded-none text-black bg-[#DB4444] text-white"
          />
        </Link>
      </div>
    </div>
  );
}
