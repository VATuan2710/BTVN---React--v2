import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProducts,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../../services/productService";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getAllProducts();
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    return await addProducts(product);
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, product }) => {
    return await updateProduct(id, product);
  }
);

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    await deleteProduct(id);
    return id;
  }
);
