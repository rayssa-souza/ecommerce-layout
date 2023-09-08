import React from "react";
import { useState, useEffect } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./style.scss";
import IconButton from "../icon-button";

const AccordionInfo = ({ children, title, text }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const handleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="accordion-info">
      <div className="accordion-info-title" onClick={handleAccordion}>
        <span>{title}</span>
        <IconButton
          icon={
            isAccordionOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
          }
          size={"large"}
          onClick={handleAccordion}
        />
      </div>
      {isAccordionOpen && (
        <div className="accordion-info-description">
          <p>{text}</p>
        </div>
      )}
      {children}
    </div>
  );
};
export default AccordionInfo;
