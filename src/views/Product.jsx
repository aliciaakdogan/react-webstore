import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      const response = await fetch("https://fakestoreapi.com/products/" + id);

      const data = await response.json();
      console.log(data);
      setProduct(data);
    }
    getProduct();
  }, []);
  return <div>{product ? <div>{product.title}</div> : "loading..."} </div>;
}
