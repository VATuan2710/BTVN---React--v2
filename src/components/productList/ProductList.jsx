import React from "react";
import { useState } from "react";
import { datas } from "../../datas/data";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  const [visibleProduct, setvisibleProduct] = useState(10);

  const handleSeeMore = () => {
    setvisibleProduct(visibleProduct + 10);
  };

  const [status, setStatus] = useState(false);
  console.log(status);
  function handleClick() {
    setStatus(!status);
  }

  return (
    <div className={styles.productMenu}>
      <h2>Product List</h2>
      <button onClick={handleClick} className={styles.btn}>
        {status ? "Ẩn" : "Hiện"} Sản phẩm
      </button>
      <div className={styles.productList}>
        {status &&
          datas.slice(0, visibleProduct).map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div>{index + 1}</div>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.short_description}</p>
              <p className={styles.price}>Price: ${product.final_price}</p>
              <p className={styles.stock}>Stock: {product.stock}</p>
              <p>Material: {product.materials}</p>
            </div>
          ))}
      </div>
      {status && visibleProduct < datas.length && (
        <button onClick={handleSeeMore} className={styles.btn}>
          See More
        </button>
      )}
    </div>
  );
};

export default ProductList;
