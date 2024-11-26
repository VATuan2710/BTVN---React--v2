import React, { useEffect, useState } from "react";
import styles from "./Shop.module.scss";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const url = searchValue
      ? `https://dummyjson.com/products/search?q=${searchValue}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    fetch(url)
      .then((res) => res.json())
      .then(({ products, total }) => {
        console.log(url);
        setProducts(products);
        setPage(total);
      });
  }, [limit, skip, searchValue]);

  const handleSelectLimit = (e) => {
    const selectedLimit = e.target.value;
    setSkip(0);
    if (selectedLimit === "all") {
      setLimit(page);
    } else {
      setLimit(parseInt(selectedLimit));
    }
  };

  const handleNext = () => {
    if (skip + limit < page) {
      setSkip(skip + limit);
    }
  };

  const handlePre = () => {
    if (skip >= limit) {
      setSkip(skip - limit);
    }
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const totalPage = Math.ceil(page / limit);
  const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < totalPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setSkip(i * limit)}
          style={{
            fontWeight: skip / limit === i ? "bold" : "normal",
          }}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchValue}
      />
      <select onChange={(e) => handleSelectLimit(e)}>
        <option value={10}>Hiển thị 10</option>
        <option value={20}>Hiển thị 20</option>
        <option value={30}>Hiển thị 30</option>
        <option value="all">Hiển thị tất cả</option>
      </select>
      <div className={styles.productList}>
        {products.map((item) => (
          <div key={item.id} className={styles.productCard}>
            <span>{item.id}</span>
            <img src={item.thumbnail} alt={"product" + item.id} />
            <h3>{item.title}</h3>
            <p>Giá: {item.price}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePre}>Pre</button>
        <span>{renderButtons()}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Shop;
