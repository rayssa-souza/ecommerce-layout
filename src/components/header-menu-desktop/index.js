import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import "./style.scss";

const HeaderMenuDesktop = ({ title, sublinks }) => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);

  const hasSubLinks = sublinks.length > 0;

  const showDropDownMenu = () => {
    setIsDropDownMenuOpen(!isDropDownMenuOpen);
  };

  return (
    <li className="header-menu-list">
      <h4 onClick={showDropDownMenu}>{title.text}</h4>
      {hasSubLinks ? (
        <div className="header-menu-arrow">
          <BiSolidDownArrow />
        </div>
      ) : (
        ""
      )}
      {hasSubLinks && isDropDownMenuOpen && (
        <div className="header-dropdown-menu">
          <ul>
            <li>
              {sublinks.map((sublinkItem) => (
                <Link key={sublinkItem.id} to={sublinkItem.url}>
                  {sublinkItem.text}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default HeaderMenuDesktop;
