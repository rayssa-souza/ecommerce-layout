import React from "react";
import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./style.scss";
import IconButton from "../icon-button";

interface Props {
  title: string;
  text: string;
}

const AccordionInfo = ({ title, text }: Props) => {
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
    </div>
  );
};
export default AccordionInfo;
