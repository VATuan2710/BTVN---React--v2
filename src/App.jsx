import { useEffect, useState } from "react";
import Header from "./component/header/Header";
import ProductList from "./pages/admin/ProductList";
import Footer from "./component/footer/Footer";
import ShopPage from "./pages/ShopPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import DashBoardPage from "./pages/admin/DashBoardPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <>
      {/* <button onClick={() => setShow(!show)}>Toggle</button>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {count} */}
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 
        <Route path="/admin" element={<DashBoardPage />} />
        <Route path="/admin/products" element={<ProductList />} /> */}

        <Route path="/admin" element={<DashBoardPage />}>
          {" "}
          <Route path="/admin/products" element={<ProductList />} />
        </Route>

        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
