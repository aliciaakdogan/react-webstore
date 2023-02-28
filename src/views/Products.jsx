import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div className="products-grid">
      {products
        ? products.map((product) => (
            <Link
              to={`/products/${product.id}  `}
              key={product.id}
              className="product-card"
            >
              <img src={product.image} alt="" />

              <h4>{product.title}</h4>
              <p>${product.price} </p>
            </Link>
          ))
        : "loading..."}
    </div>
  );
}
