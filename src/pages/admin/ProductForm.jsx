import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createNew, getById, updateById } from "../../axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaProduct } from "../../schemas/productSchemas";

const ProductForm = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  // const initValue = {
  //   title: "",
  //   price: 0,
  //   description: "",
  // };
  // const [product, setProduct] = useState(initValue);
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: zodResolver(schemaProduct) });
  console.log(watch("title"));

  id &&
    useEffect(() => {
      (async () => {
        const data = await getById("/products", id);
        reset(data);
      })();
    }, [id]);
  // id &&
  //   useEffect(() => {
  //     if (id) {
  //       (async () => {
  //         try {
  //           const data = await getById("/products", id);
  //           setProduct(data);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       })();
  //     }
  //   }, [id]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProduct((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   (async () => {
  //     try {
  //       if (id) {
  //         await updateById("/products", id, product);
  //       } else {
  //         await create("/products", product);
  //       }

  //       window.confirm("Quay lại trang chủ ?") && nav("/admin/products");
  //     } catch (error) {
  //       console.error(error);
  //       alert("Đã xảy ra lỗi");
  //     }
  //   })();
  // };

  const handleAddProduct = async (product) => {
    setLoading(true);
    try {
      if (id) {
        const data = await updateById("/products", id, product);
        console.log(data);
      } else {
        const data = await createNew("/products", product);
        console.log(data);
      }
      if (
        window.confirm(
          "Sản phẩm đã được thêm/cập nhật thành công. Bạn có muốn quay lại danh sách sản phẩm?"
        )
      ) {
        nav("/admin/products");
      } else {
        reset();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            // value={product.title}
            // onChange={handleChange}
            // required
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">{errors.title?.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            className="form-control"
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            step="any"
            // value={product.price}
            // onChange={handleChange}
            // required
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-danger">{errors.price?.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            placeholder="Description"
            // value={product.description}
            // onChange={handleChange}
            // required
            {...register("description", { required: true })}
          />
        </div>

        {
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-100">
              {id ? "Cập nhật" : "Thêm mới"}
            </button>
          </div>
        }
      </form>
      {loading && (
        <div className="loader">
          <span>Đang xử lý...</span>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
