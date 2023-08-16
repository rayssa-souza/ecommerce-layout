import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

import { BsInstagram, BsTwitter, BsTelegram } from "react-icons/bs";
import NewsletterForm from "../newsletter";
import "./style.scss";
import footerNavLinks from "../../utils/footerNavLinks.json";
import FooterNav from "../footer-nav";

const Footer = ({ children }) => {
  const { isDesktop } = useMediaQuery();
  return (
    <div className="footer">
      <div className="footer-bar">
        <img
          className="footer-logo"
          src="https://place-hold.it/85x34"
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
          2023 The Ordinary. <span>Terms of Use and Conditions.</span>
        </p>
      </div>

      {children}
    </div>
  );
};
export default Footer;
