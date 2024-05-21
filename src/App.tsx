import "./App.module.scss";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import Main from "./pages/Main/Main.tsx";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails.tsx";
import SubCategory from "./pages/Category/SubCategory.tsx";
import ProductsList from "./pages/ProductsList/ProductsList.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Main />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/subcategory/list" element={<ProductsList />} />
        <Route path="/subcategory/product:id=1" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
