import "./App.module.scss";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import Main from "./pages/Main/Main.tsx";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Main />} />
        <Route path="/product:id=1" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
