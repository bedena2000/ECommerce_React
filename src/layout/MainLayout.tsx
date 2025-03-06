// Routing
import { Outlet } from "react-router";

// Components
import AdvertisingSection from "@/components/shared/AdvertisingSection";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import PathToPage from "@/components/PathToPage.tsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <AdvertisingSection />
      <Header />

      <main>
        <Outlet />
      </main>
        <Footer />

    </div>
  );
}
