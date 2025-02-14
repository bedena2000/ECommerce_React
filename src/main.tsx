import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Store
import { Provider } from "react-redux";
import store from "@/store/store.ts";

// Routing
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
