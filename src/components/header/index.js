import React from "react";
import "./style.scss";
import {
  AiOutlineSearch,
  AiFillHeart,
  AiFillShopping,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import toggleBody from "../../utils/toggleBody";
import Container from "../container";
import HeaderMenuMobile from "../header-menu-mobile";
import HeaderMenuDesktop from "../header-menu-desktop";
import headerNavLinks from "../../utils/headerNavLinks.json";
import headerActions from "../../utils/headerActions.json";
import IconButton from "../icon-button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import useMediaQuery from "../../hooks/useMediaQuery";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { isMobile, isDesktop, isTablet } = useMediaQuery();

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleBody();
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleOpenFavorites = () => {};
  return (
    <header className="header">
      <Container>
        <div className={clsx({ topheader: true, noBorder: isMenuOpen })}>
          <Link to="/" title="Ordinary">
            <img
              className="header-logo"
              src={process.env.PUBLIC_URL + "/images/ordinary-imgs/logo.png"}
              alt="img-logo"
            />
          </Link>
          {isDesktop && (
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
              <IconButton icon={<AiOutlineSearch />} size={"medium"} />
              <Link
                to={headerActions.favorites.url}
                title={headerActions.favorites.title}
              >
                <IconButton icon={<AiFillHeart />} size={"medium"} />
              </Link>
              <Link
                to={headerActions.cart.url}
                title={headerActions.cart.title}
              >
                <IconButton icon={<AiFillShopping />} size={"medium"} />
              </Link>
            </div>
            {(isMobile || isTablet) && (
              <IconButton
                icon={isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                onClick={handleMenu}
              />
            )}
          </div>
        </div>
      </Container>
      {isMenuOpen && (isMobile || isTablet) && (
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
