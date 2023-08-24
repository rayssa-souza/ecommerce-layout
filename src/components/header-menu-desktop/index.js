import React from "react";
import { Link } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";
import "./style.scss";

const HeaderMenuDesktop = ({ title, sublinks }) => {
  const hasSubLinks = sublinks.length > 0;

  return (
    <li className="header-menu-list">
      <Link to={title.url} title={title.text}>
        <h4>{title.text}</h4>
      </Link>
      {hasSubLinks ? (
        <div className="header-menu-arrow">
          <BiSolidDownArrow />
        </div>
      ) : (
        ""
      )}
      {hasSubLinks && (
        <div className="header-dropdown-menu">
          <ul>
            {sublinks.map((sublinkItem) => (
              <li key={sublinkItem.id}>
                <Link to={sublinkItem.url}>{sublinkItem.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default HeaderMenuDesktop;
