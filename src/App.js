import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Favorite from "./components/Favorite";
import CreateProduct from "./components/CreateProduct";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/createProduct" element={<CreateProduct />} />
      </Routes>
    </>
  );
};

export default App;
