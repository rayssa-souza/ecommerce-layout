import React from "react";
import "./style.scss";
import {
  AiOutlineSearch,
  AiFillHeart,
  AiFillShopping,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import isMobile from "../../utils/isMobile";
import toggleBody from "../../utils/toggleBody";
import Container from "../container";
import HeaderMenuMobile from "../header-menu-mobile";
import HeaderMenuDesktop from "../header-menu-desktop";
import headerNavLinks from "../../utils/headerNavLinks.json";
import IconButton from "../icon-button";
import { useState } from "react";
import isDesktop from "../../utils/isDesktop";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    toggleBody();
  };

  return (
    <header className="header">
      <Container>
        <div className="top-header">
          <img
            className="header-logo"
            src="https://place-hold.it/148x64"
            alt="img-logo"
          />
          {isDesktop() && (
            <nav className="header-menu-desktop">
              <ul>
                {headerNavLinks.links.map((navItem) => (
                  <HeaderMenuDesktop
                    title={navItem.title}
                    sublinks={navItem.sublinks}
                    key={navItem.id}
                  />
                ))}
              </ul>
            </nav>
          )}

          <div className="header-action-buttons">
            <div className="header-actions-shop">
              <IconButton icon={<AiOutlineSearch />} />
              <IconButton icon={<AiFillHeart />} />
              <IconButton icon={<AiFillShopping />} />
            </div>
            {isMobile() && (
              <IconButton
                icon={isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                onClick={handleMenu}
              />
            )}
          </div>
        </div>
      </Container>
      {isMenuOpen && isMobile() && (
        <>
          <nav className="header-menu-mobile">
            <ul>
              {headerNavLinks.links.map((navItem) => (
                <HeaderMenuMobile title={navItem.title} key={navItem.id} />
              ))}
            </ul>
          </nav>
          <div className="overlay" onClick={handleMenu}></div>
        </>
      )}
    </header>
  );
};

export default Header;
