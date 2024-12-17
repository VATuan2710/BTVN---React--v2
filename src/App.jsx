import React, { createContext, useEffect, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductForm from "./pages/admin/ProductForm";
import ProductTable from "./pages/admin/ProductTable";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      {/* <ProductProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/products" element={<ProductTable />} />
          <Route path="/admin/products/add" element={<ProductForm />} />
          <Route path="/admin/products/update/:id" element={<ProductForm />} />
        </Routes>
      </ProductProvider> */}

      <Routes>
        <Route path="/" element={<ProductTable />} />
        <Route path="/admin/products/add" element={<ProductForm />} />
        <Route path="/admin/products/edit/:id" element={<ProductForm />} />

        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};
export default App;
