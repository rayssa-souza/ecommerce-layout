import React from "react";
import "./style.scss";
import {
  AiOutlineSearch,
  AiFillHeart,
  AiFillShopping,
  AiOutlineMenu,
} from "react-icons/ai";

const Header = ({ children }) => {
  return (
    <div className="header">
      <div className="header-container">
        <img
          className="header-logo"
          src="https://place-hold.it/148x64"
          alt="img-logo"
        />

        <div className="header-icons">
          <div className="header-icons-shop">
            <AiOutlineSearch />
            <AiFillHeart />
            <AiFillShopping />
          </div>
          <button className="header-button-menu">
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
