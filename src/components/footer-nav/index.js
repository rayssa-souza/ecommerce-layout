import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import "./style.scss";

const FooterNav = ({ children, title, sublinks }) => {
  const hasSubLinks = sublinks.length > 0;
  return (
    <li
      className={clsx({
        footernav: true,
        sublinks: hasSubLinks,
      })}
    >
      <h4
        className={clsx({
          "footernav-h4": true,
          "footernav-h4-sublinks": hasSubLinks,
        })}
      >
        {title.url !== null ? (
          <Link to={title.url}>{title.text}</Link>
        ) : (
          <span>{title.text}</span>
        )}
      </h4>
      {hasSubLinks ? (
        <ul className="footernav-list-sublinks">
          {sublinks.map((item) =>
            item.url !== null ? (
              <li key={item.id}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            ) : (
              <li key={item.id}>{item.text}</li>
            )
          )}
        </ul>
      ) : (
        ""
      )}

      {children}
    </li>
  );
};
export default FooterNav;
