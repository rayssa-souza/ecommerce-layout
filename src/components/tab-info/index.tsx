import React from "react";
import clsx from "clsx";
import { useState } from "react";
import "./style.scss";

interface iTab {
  title: string;
  text: string;
}
interface Props {
  tab1: iTab;
  tab2: iTab;
}
const TabInfo = ({ tab1, tab2 }: Props) => {
  const [showTab, setShowTab] = useState(true);

  const handleShowTab = () => {
    setShowTab(!showTab);
  };

  return (
    <div className="tab-info">
      <div className="tab-info-titles">
        <div
          className={clsx({
            "tab1-info-title": true,
            "tab-info-clicked": showTab,
          })}
          onClick={handleShowTab}
        >
          <span>{tab1.title}</span>
        </div>
        <div
          className={clsx({
            "tab2-info-title": true,
            "tab-info-clicked": !showTab,
          })}
          onClick={handleShowTab}
        >
          <span>{tab2.title}</span>
        </div>
      </div>
      <div className="tab-info-texts">
        {showTab && (
          <div className="tab1-info-text">
            <p>{tab1.text}</p>
          </div>
        )}

        {!showTab && (
          <div className="tab2-info-text">
            <p>{tab2.text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabInfo;
