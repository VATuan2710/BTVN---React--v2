import React from "react";

const ProductsList = () => {
  const handleRemove = (id) => {
    // logic xoa
  };
  return (
    <div>
      <h1>Danh sach san pham</h1>
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button onClick={() => handleRemove()}>Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
