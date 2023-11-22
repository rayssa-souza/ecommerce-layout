import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import "./style.scss";
import { iNavitem } from "../../@types/navitem";

interface Props {
  footerItem: iNavitem;
}

const FooterNav = ({ footerItem }: Props) => {
  const { title, sublinks } = footerItem;
  const hasSubLinks = sublinks ? sublinks.length > 0 : false;
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
          {sublinks?.map((item) =>
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
    </li>
  );
};
export default FooterNav;
