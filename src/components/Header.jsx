import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext.jsx";

const Header = () => {
  const { itemsCount, total } = useCart();
  return (
    <header className="header">
      <div className="header__top-bar top-bar">
        <div className="container top-bar__container">
          <div className="top-bar__info">
            Free shipping on orders of Rs 500 or more!
            <a href="#" className="top-bar__link">See Details &gt;</a>
          </div>
          <div className="top-bar__settings">
            <div className="top-bar__setting-item">
              <a href="#" style={{ fontWeight: 'bold', borderBottom: '1px solid currentColor', color: 'inherit', textDecoration: 'none' }}>EN</a>
            </div>
            <div className="top-bar__setting-item">
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>UA</a>
            </div>
          </div>
        </div>
      </div>

      <div className="header__main">
        <div className="container header__container">
          <Link to="/" className="logo header__logo">
            <img src="/img/Logo.svg" alt="Teapoz Logo" className="logo__img" />
          </Link>

          {/* Checkbox hack for burger menu works in React too */}
          <input type="checkbox" id="burger-toggle" className="burger-toggle" />
          <label htmlFor="burger-toggle" className="burger">
            <span className="burger__line"></span>
          </label>

          <nav className="nav header__nav">
            <ul className="nav__list">
              <li className="nav__item"><a href="#" className="nav__link nav__link--active">Home</a></li>
              <li className="nav__item"><a href="#products" className="nav__link">Shop</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Sale</a></li>
              <li className="nav__item"><a href="#" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Blog</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
            </ul>
          </nav>

          {/* <div className="cart">
             <a href="#" className="cart__link">
                <img src="/img/cart-icon.svg" alt="Cart" className="cart__icon" />
                0 items, $0.00
             </a>
          </div> */}
          <Link to="/cart" className="cart__link">
            <img src="/img/cart-icon.svg" alt="Cart" className="cart__icon" />
            {itemsCount} items, ${Number(total).toFixed(2)}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;