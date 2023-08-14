import React from "react";

import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import "./style.scss";

const HeaderMenuMobile = ({ title }) => {
  return (
    <li className="headerMenu-list">
      <h4>
        <Link to={title.url}>{title.text}</Link>
      </h4>
      <div className="headerMenu-arrow">
        <BsArrowUpRight />
      </div>
    </li>
  );
};
export default HeaderMenuMobile;
