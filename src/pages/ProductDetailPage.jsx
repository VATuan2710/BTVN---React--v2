import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import styles from "../assets/scss/ProductDetail.module.scss";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch(`https://dummyjson.com/products/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setProducts(data);
    //   });

    // C1
    (async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    })();

    // C2: Khai báo fetchAPI function
    // fetchAPI();
  }, []);
  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.imageContainer}>
        <img src={products.thumbnail} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <h2>{products.title}</h2>
        <p>Giá: {products.price}</p>
        <p>Mô tả: {products.description}</p>
        <button>Thêm vào giỏ hàng</button>
        <button>Mua ngay</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;

// rafce : tạo
