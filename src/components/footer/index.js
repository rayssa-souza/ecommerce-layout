import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "../newsletter";

const Footer = ({ children }) => {
  return (
    <div className="footer">
      <div className="footer-bar">
        <img
          className="footer-logo"
          src="https://place-hold.it/85x34"
          alt="footer-logo"
        />
      </div>
      <Link to="/">
        <span className="footer-main-page-span">MAIN PAGE</span>
      </Link>
      <span className="footer-span-catalog">CATALOG</span>
      <Link to="/products/:category">
        <span className="footer-skincare-span">SKINCARE</span>
      </Link>
      <Link to="/products/:category">
        <span className="footer-hair&body-span">HAIR & BODY</span>
      </Link>
      <Link to="/products/:category">
        <span className="footer-best-sellers-span">BEST SELLERS</span>
      </Link>
      <NewsletterForm />
      {children}
    </div>
  );
};
export default Footer;
