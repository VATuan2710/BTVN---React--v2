import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { create, getById, updateById } from "../../axios"; 

const ProductForm = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const initValue = {
    title: "",
    price: 0,
    description: "",
  };
  const [product, setProduct] = useState(initValue);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const data = await getById("/products", id);
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      })();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        if (id) {
          await updateById("/products", id, product);
          alert("Cập nhật sản phẩm thành công!");
        } else {
          await create("/products", product);
          alert("Thêm sản phẩm thành công!");
        }

        nav("/admin/products");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Đã xảy ra lỗi, vui lòng thử lại.");
      }
    })();
  };

  return (
    <div>
      <h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
      <form onSubmit={handleSubmit}>
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
            value={product.title}
            onChange={handleChange}
            required
          />
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
            value={product.price}
            onChange={handleChange}
            required
          />
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
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary w-100">
            {id ? "Cập nhật" : "Thêm mới"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
