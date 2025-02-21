// Routing
import { Routes, Route } from "react-router";

// Store
import { useDispatch } from "react-redux";
import { fillWithProducts } from "@/store/productsSlice";

// Pages
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import ErrorPage from "@/pages/ErrorPage";
import MainLayout from "@/layout/MainLayout";

// Helpers
import { PAGE_ROUTES } from "@/helpers/PagesList";
import { useEffect } from "react";
import { fetchAllProducts } from "@/helpers/services";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const products = await fetchAllProducts();
        dispatch(fillWithProducts(products.data.products));
      } catch {
        console.log("there is error fetching data");
      }
    };

    getAllProducts();
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={PAGE_ROUTES.HOME} element={<Home />} />
          <Route path={PAGE_ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={PAGE_ROUTES.ERROR} element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
