// Routing
import { Routes, Route, useNavigate } from "react-router";

// Store
import { useDispatch } from "react-redux";
import { fillWithProducts } from "@/store/productsSlice";

// Pages
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import ErrorPage from "@/pages/ErrorPage";
import MainLayout from "@/layout/MainLayout";
import SignUp from "@/pages/SignUp";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Wishlist from "@/pages/Wishlist";
import Cart from "@/pages/Cart";
import Details from "@/pages/Details";
import Products from "@/pages/Products";

// Helpers
import { PAGE_ROUTES } from "@/helpers/PagesList";
import { useEffect } from "react";
import { fetchAllProducts } from "@/helpers/services";

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const products = await fetchAllProducts();
        dispatch(fillWithProducts(products.data.products));
      } catch {
        navigate("/404");
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
          <Route path={PAGE_ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={PAGE_ROUTES.CONTACT} element={<Contact />} />
          <Route path={PAGE_ROUTES.ABOUT} element={<About />} />
          <Route path={PAGE_ROUTES.WISHLIST} element={<Wishlist />} />
          <Route path={PAGE_ROUTES.CART} element={<Cart />} />
          <Route path={PAGE_ROUTES.DETAILS} element={<Details />} />
          <Route path={PAGE_ROUTES.PRODUCTS} element={<Products />} />
          <Route path={PAGE_ROUTES.ERROR} element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
