import React from "react";
import Slider from "react-slick";

export default function Hero() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1400,
    dots: true,
    arrows: false,
    fade: true,


    appendDots: (dots) => (
      <ul className="slick-dots">{dots}</ul>
    ),

    responsive: [
      {
        breakpoint: 1526,
        settings: {
          dots: false,
          arrows: true,
          autoplaySpeed: 2000,
          fade: true,
        },
      },
    ],
  };

  return (
    <section className="hero">
      <div className="hero__slider">
        <Slider {...settings}>
          <div className="hero-slide">
            <div className="hero__content">
              <h1 className="hero__title">
                New Jasmine <br /> Green Tea
              </h1>
              <p className="hero__subtitle">
                Introducing a more premium and bold tea using only the finest ingredients.
              </p>
            </div>
          </div>

          <div className="hero-slide">
            <div className="hero__content">
              <h1 className="hero__title">Elevate your daily ritual</h1>
              <p className="hero__subtitle">
                Experience the intense aroma and rich taste of our exclusive
              </p>
            </div>
          </div>

          <div className="hero-slide">
            <div className="hero__content">
              <h1 className="hero__title">Nature’s finest, redefined</h1>
              <p className="hero__subtitle">A bolder, more aromatic Jasmine Green Tea</p>
            </div>
          </div>

          <div className="hero-slide">
            <div className="hero__content">
              <h1 className="hero__title">Elevate your daily ritual</h1>
              <p className="hero__subtitle">
                Experience the intense aroma and rich taste of our exclusive
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}