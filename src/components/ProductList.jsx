import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [page, category, minPrice, maxPrice]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products", {
      params: { page, category, minPrice, maxPrice }
    });
    setProducts(res.data);
  };

  return (
    <div>
      <h2>Products</h2>
      <div>
        <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
        <input type="number" placeholder="Min Price" onChange={(e) => setMinPrice(e.target.value)} />
        <input type="number" placeholder="Max Price" onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default ProductList;
