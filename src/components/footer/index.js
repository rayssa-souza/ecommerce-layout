import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

import { BsInstagram, BsTwitter, BsTelegram } from "react-icons/bs";
import NewsletterForm from "../newsletter";
import "./style.scss";
import footerNavLinks from "../../utils/footerNavLinks.json";
import FooterNav from "../footer-nav";
import Container from "../container";

const Footer = ({ children }) => {
  const { isDesktop } = useMediaQuery();
  return (
    <div className="footer">
      <Container>
        <div className="footer-bar">
          <img
            className="footer-logo"
            src={process.env.PUBLIC_URL + "/images/ordinary-imgs/logo.png"}
            alt="footer-logo"
          />
        </div>
        <div className="footer-wrapper-nav-newsletter">
          {isDesktop ? (
            <nav>
              <ul>
                <div>
                  {footerNavLinks.links
                    .filter((footerItem) => footerItem.sublinks.length === 0)
                    .map((footerItem) => (
                      <FooterNav
                        title={footerItem.title}
                        sublinks={footerItem.sublinks}
                        key={footerItem.id}
                      />
                    ))}
                </div>
                {footerNavLinks.links
                  .filter((footerItem) => footerItem.sublinks.length > 0)
                  .map((footerItem) => (
                    <FooterNav
                      title={footerItem.title}
                      sublinks={footerItem.sublinks}
                      key={footerItem.id}
                    />
                  ))}
              </ul>
            </nav>
          ) : (
            <nav>
              <ul>
                {footerNavLinks.links.map((footerItem) => (
                  <FooterNav
                    title={footerItem.title}
                    sublinks={footerItem.sublinks}
                    key={footerItem.id}
                  />
                ))}
              </ul>
            </nav>
          )}

          <NewsletterForm />
        </div>
        <div className="footer-info">
          <div className="footer-sm-icons">
            <BsInstagram />
            <BsTwitter />
            <BsTelegram />
          </div>
          <p className="footer-tou">
            2023 The Ordinary. <span>Terms of Use and Conditions. </span>
          </p>
        </div>
        <div className="footer-disclaimer">
          <p>
            This is a project made by my own initiative to showcase my technical
            skills in web development. All images are used for non-commercial
            purposes only and belong to their respective owners. The setted
            product info and their prices are fictional, therefore not reliable.
            If you're insterested in the brand or any of their products please
            visit their oficial website.
          </p>
        </div>
      </Container>

      {children}
    </div>
  );
};
export default Footer;
