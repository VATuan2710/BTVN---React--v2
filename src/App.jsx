import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import ProductTable from "./pages/admin/ProductTable";
import Footer from "./components/footer/Footer";
import ShopPage from "./pages/ShopPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import DashBoardPage from "./pages/admin/DashBoardPage";
import ProductForm from "./pages/admin/ProductForm";
import { getAll, removeById } from "../src/axios/index";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAll("/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  const handleRemoveProduct = (id) => {
    if (window.confirm("Are you sure?")) {
      (async () => {
        try {
          const res = await removeById("/products", id);
          if (res.status === 200) {
            const newProducts = products.filter((item) => item.id !== id);
            setProducts(newProducts);
          } else {
            console.log("Error removing product!");
          }
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      })();
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/admin" element={<DashBoardPage />}>
          <Route
            path="products"
            element={
              <ProductTable
                products={products}
                onRemove={handleRemoveProduct}
              />
            }
          />
          <Route path="products/add" element={<ProductForm />} />
          <Route path="products/update/:id" element={<ProductForm />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
