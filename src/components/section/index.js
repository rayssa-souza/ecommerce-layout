import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Section = ({ children, text, link }) => {
  console.log({ link });
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-text">{text}</span>

        <Link
          to={link}
          title={`see-all-${text}`}
          className="section-see-all-text"
        >
          SEE ALL
        </Link>
      </div>
      {children}
    </div>
  );
};
export default Section;
