import React from "react";

const TabHead = ({ tabsConfig, selectedTab, selectTab }) => {
  return (
    <ul className="tabs">
      {tabsConfig?.map((tab, idx) => (
        <li
          key={`tab-${tab?.name}`}
          className={`tab ${tab?.name === selectedTab?.name ? "selected" : ""}`}
          onClick={() => selectTab(idx)}
        >
          {tab?.name}
        </li>
      ))}
    </ul>
  );
};

export default TabHead;
