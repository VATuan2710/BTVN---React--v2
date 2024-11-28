import React, { useState, useEffect } from "react";
import "../../assets/scss/ProductList.scss";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleRemove = (id) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm không ?")) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      }).then(() => {
        setProducts(products.filter((product) => product.id !== id));
      });
    }
  };

  return (
    <div className="table-container">
      <h1>Danh sách sản phẩm</h1>
      <Link to="/admin/add-product">
        <button className="add-product-btn">Thêm sản phẩm</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => handleRemove(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
