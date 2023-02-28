import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";
import Product from "./views/Product";

export default function App() {
  return (
    <div>
      <h1>Min webshop</h1>

      <Link to="/"> Home</Link>
      <Link to="/products"> Products </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}
