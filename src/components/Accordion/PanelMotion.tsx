import { FC, ReactNode, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PanelMotionProps {
  isOpen?: boolean;
  children: ReactNode;
}

export const PanelMotion: FC<PanelMotionProps> = ({ isOpen, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: ref.current ? ref.current.scrollHeight : "auto",
            opacity: 1,
          }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { type: "spring", duration: 0.5 },
            opacity: { duration: 0.2 },
          }}
          style={{ overflow: "hidden" }}
        >
          <div ref={ref} className="text-grayish-blue">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
