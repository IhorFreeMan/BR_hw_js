import React from 'react';

export default function TeaImage() {
  return (
    <section className="tea__image">
      <div className="container tea__image-container">
        <img
          src="/img/tea-cup.png"
          alt="Jasmine Green Tea"
          className="hero__product-image"
        />
      </div>
    </section>
  );
}