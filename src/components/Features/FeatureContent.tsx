import { useState } from "react";
import FeatureTabs from "./FeatureTabs";
import { FEATURES } from "../../constants/constants";
import FeatureTabContent from "./FeatureTabContent";
const FeatureContent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeContent, setActiveContent] = useState(FEATURES[0]);

  const handleSetActiveTab = (tab: number) => {
    setActiveTab(tab);
    setActiveContent(FEATURES[tab - 1]);
  };

  return (
    <div className="container flex flex-col gap-16">
      <FeatureTabs activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      <FeatureTabContent activeContent={activeContent} />
    </div>
  );
};

export default FeatureContent;
