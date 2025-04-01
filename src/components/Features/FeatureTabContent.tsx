import { FEATURES } from "../../constants/constants";
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";

interface FeatureTabContentProps {
  activeContent: (typeof FEATURES)[number];
}

const FeatureTabContent = memo(({ activeContent }: FeatureTabContentProps) => {
  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: { x: 100, opacity: 0 },
  };

  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
    exit: { x: -100, opacity: 0 },
  };

  return (
    <div
      className="flex flex-col gap-20"
      role="tabpanel"
      aria-label={activeContent.tabTitle}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeContent.tabTitle}
          className="relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            className="-z-10 w-[calc(100%+10rem)] h-[80%] -bottom-10 -left-[60%] bg-soft-blue rounded-full absolute"
            aria-hidden="true"
          />

          <img
            src={activeContent.image}
            alt={activeContent.tabTitle}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${activeContent.tabTitle}`}
          className="flex flex-col gap-4 text-center max-w-2xl mx-auto"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-very-dark-blue">
            {activeContent.tabTitle}
          </h3>
          <p className="text-grayish-blue text-balance text-lg">
            {activeContent.tabDescription}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

FeatureTabContent.displayName = "FeatureTabContent";

export default FeatureTabContent;
