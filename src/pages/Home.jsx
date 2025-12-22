import React from "react";

import Hero from "../components/Hero.jsx";
import TeaImage from "../components/TeaImage.jsx";
import ProductList from "../components/ProductList.jsx";
import Features from "../components/Features.jsx";
import VideoPresentation from "../components/VideoPresentation.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <TeaImage />
      <ProductList />
      <Features />
      <VideoPresentation />
      <Testimonials />
    </>
  );
}