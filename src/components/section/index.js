import React from "react";
import "./style.scss";

const Section = ({ children, text, icon, onClick }) => {
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-text">{text}</span>
        {!icon && (
          <span className="section-see-all-text" onClick={onClick}>
            SEE ALL
          </span>
        )}
        {icon && <div className="section-icon">{icon}</div>}
      </div>
      {children}
    </div>
  );
};
export default Section;
