import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaProduct } from "../../schemas/productSchemas";
import {
  createProduct,
  editProduct,
} from "../../features/products/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductForm = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaProduct),
  });

  useEffect(() => {
    if (id) {
      const productEdit = products.find(
        (product) => product.id === parseInt(id)
      );
      if (productEdit) {
        reset(productEdit);
      }
    }
  }, [id, products, reset]);

  const handleAddOrUpdateProduct = async (data) => {
    setIsLoading(true);
    try {
      if (id) {
        await dispatch(editProduct({ id, product: data })).unwrap();
      } else {
        await dispatch(createProduct(data)).unwrap();
      }
      nav("/");
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
      <form onSubmit={handleSubmit(handleAddOrUpdateProduct)}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            placeholder="Title"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            className="form-control"
            type="number"
            id="price"
            placeholder="Price"
            step="any"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Description"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary w-100">
            {id ? "Cập nhật" : "Thêm mới"}
          </button>
        </div>
      </form>

      {isLoading && (
        <div className="loader">
          <span>Đang xử lý...</span>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
