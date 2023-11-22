import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
}

const Section = ({ text, link }: Props) => {
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
    </div>
  );
};
export default Section;
