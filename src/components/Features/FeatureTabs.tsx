import { AnimatePresence, motion } from "motion/react";
import { FEATURES } from "../../constants/constants";
import classNames from "classnames";

interface FeatureTabsProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const FeatureTabs = ({ activeTab, setActiveTab }: FeatureTabsProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      {FEATURES.map((feature) => (
        <button
          key={feature.id}
          className={classNames(
            "flex px-4 overflow-hidden last:border-b border-t md:border-b-1 md:border-t-0 border-grayish-blue flex-col gap-4 items-center md:grow md:px-0"
          )}
          onClick={() => setActiveTab(feature.id)}
        >
          <h3
            className={classNames("py-4 relative", {
              "font-medium md:w-full text-very-dark-blue":
                activeTab === feature.id,
              "text-very-dark-blue/70": activeTab !== feature.id,
            })}
          >
            {feature.tabLabel}
            <AnimatePresence>
              {activeTab === feature.id && (
                <motion.div
                  className="absolute overflow-hidden bottom-0 w-[90%] md:w-full left-1/2 -translate-x-1/2 h-1 bg-soft-red"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              )}
            </AnimatePresence>
          </h3>
        </button>
      ))}
    </div>
  );
};

export default FeatureTabs;
