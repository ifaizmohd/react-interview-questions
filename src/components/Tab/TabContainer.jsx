import React, { useCallback, useState } from "react";
import TabHead from "./TabHead";
import Profile from "../Profile/Profile";
import Interests from "../Interests/Interests";
import Settings from "../Settings/Settings";
import TabBody from "./TabBody";

const TabContainer = () => {
  const tabsConfig = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabsConfig[0]);

  const selectTab = useCallback((index) => {
    setSelectedTab(tabsConfig[index]);
  }, []);

  const ActiveTabComponent = selectedTab?.component;

  return (
    <div className="tab-container">
      <TabHead
        tabsConfig={tabsConfig}
        selectedTab={selectedTab}
        selectTab={selectTab}
      />
      <TabBody>
        <ActiveTabComponent />
      </TabBody>
    </div>
  );
};

export default TabContainer;
