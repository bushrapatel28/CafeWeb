import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import MenuPage from "./pages/MenuPage";
import SuppliersPage from "./pages/SuppliersPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:category" element={<MenuPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
