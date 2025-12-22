import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <div className="container">

        <div className="features__header">
          <div className="features__icon-top">
            <img src="/img/icons/leaf-outline.svg" alt="" />
          </div>

          <h2 className="features__title">
            <span className="features__brand">Teapoz</span> has the finest quality speciality teas, herbs, spices and flowers from around the world.
          </h2>

          <img src="/img/icons/tea-bag.svg" className="features__deco features__deco--left" alt="" />
          <img src="/img/icons/hands-plant.svg" className="features__deco features__deco--right" alt="" />
        </div>

        <div className="features__grid">
          {/* Item 1 */}
          <div className="feature-card">
            <div className="feature-card__image-wrapper">
              <img src="/img/features/handmade.jpg" alt="Handmade" className="feature-card__img" />
            </div>
            <h3 className="feature-card__title">Handmade</h3>
            <p className="feature-card__text">
              We carefully handcraft exquisite teas, herbal blends, spices, and floral from every corner of the globe.
            </p>
          </div>

          {/* Item 2 */}
          <div className="feature-card">
            <div className="feature-card__image-wrapper">
              <img src="/img/features/freshness.jpg" alt="Freshness" className="feature-card__img" />
            </div>
            <h3 className="feature-card__title">Freshness</h3>
            <p className="feature-card__text">
              We are dedicated to crafting fresh teas that embody the essence of their natural ingredients.
            </p>
          </div>

          {/* Item 3 */}
          <div className="feature-card">
            <div className="feature-card__image-wrapper">
              <img src="/img/features/sustainability.jpg" alt="Sustainability" className="feature-card__img" />
            </div>
            <h3 className="feature-card__title">Sustainability</h3>
            <p className="feature-card__text">
              We source our ingredients from sustainable gardens, ensuring every cup of tea is eco-friendly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;