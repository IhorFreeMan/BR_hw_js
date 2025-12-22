import React from "react";
import Slider from "react-slick";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className="slick-arrow-custom slick-prev-custom"
      style={style}
      onClick={onClick}
      aria-label="Previous"
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  );
}

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      type="button"
      className="slick-arrow-custom slick-next-custom"
      style={style}
      onClick={onClick}
      aria-label="Next"
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  );
}

export default function Testimonials() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    fade: true,
    cssEase: "linear",
    accessibility: false,
    focusOnSelect: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="testimonials">
      <div className="testimonials__decor-top">
        <img src="/img/icons/leaf-outline.svg" alt="" />
      </div>

      <div className="container">
        <div className="testimonials__header">
          <h3 className="testimonials__subtitle">WHAT OUR CUSTOMERS SAY</h3>
        </div>

        <div className="testimonials-slider">
          <Slider {...settings}>
            <div className="testimonial-card">
              <div className="testimonial-card__rating">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <blockquote className="testimonial-card__text">
                “This organic tea is absolutely fantastic! The flavor is so fresh, it feels like it was just picked from the garden and poured into my cup.”
              </blockquote>
              <div className="testimonial-card__author">
                <img src="/img/author-1.jpg" alt="Wendy Rose" className="testimonial-card__avatar" />
                <cite className="testimonial-card__name">Wendy Rose</cite>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-card__rating">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <blockquote className="testimonial-card__text">
                “The best tea ceremony experience I've ever had. Highly recommended!”
              </blockquote>
              <div className="testimonial-card__author">
                <img src="/img/author-2.png" alt="John Doe" className="testimonial-card__avatar" />
                <cite className="testimonial-card__name">John Doe</cite>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="testimonials__decor-bottom">
        <img src="/img/leaf-real.png" alt="" />
      </div>
    </section>
  );
}