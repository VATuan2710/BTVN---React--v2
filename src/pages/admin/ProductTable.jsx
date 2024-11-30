import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, removeById } from "../../axios";

const ProductTable = () => {
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

  const handleRemove = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      (async () => {
        try {
          await removeById("/products", id);
          const updatedProducts = products.filter((item) => item.id !== id);
          setProducts(updatedProducts);
        } catch (error) {
          console.error("Error removing product:", error);
        }
      })();
    }
  };

  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
      <Link to="/admin/products/add" className="btn btn-primary">
        Thêm mới sản phẩm
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <Link
                    to={`/admin/products/update/${item.id}`}
                    className="btn btn-warning"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Không có sản phẩm nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
