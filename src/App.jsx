import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./pages/Cart.jsx";

import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}