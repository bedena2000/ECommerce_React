// Routing
import { Outlet } from "react-router";

// Components
import AdvertisingSection from "@/components/shared/AdvertisingSection";
import Header from "@/components/shared/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <AdvertisingSection />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
