// Routing
import { Routes, Route } from "react-router";

// Pages
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import ErrorPage from "@/pages/ErrorPage";
import MainLayout from "@/layout/MainLayout";

// Helpers
import { PAGE_ROUTES } from "@/helpers/PagesList";

export default function App() {
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
