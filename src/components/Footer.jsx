import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <a href="/" className="footer__logo">
            <img src="/img/Logo.svg" alt="Teapoz" className="footer__logo-img" />
          </a>
          <div className="footer__socials">
            <a href="#" className="footer__social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="footer__social-link"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;