import { useRef } from "react";
import { motion } from "motion/react";
import { createPortal } from "react-dom";

const HamburgerMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-0 left-0 w-full h-full bg-very-dark-blue/90 z-50"
    >
      <div ref={menuRef} className="flex px-6 flex-col gap-6">
        <ul className="pt-[73px] w-full text-center flex flex-col">
          {["FEATURES", "PRICING", "CONTACT"].map((label, idx) => (
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: idx * 0.1 }}
              key={label}
              className="border-t border-t-white/20 last:border-b last:border-b-white/20"
            >
              <a
                href={`/${label.toLowerCase()}`}
                className="text-white py-4 block tracking-widest hover:text-white/80 text-lg focus:outline-none focus:ring-2"
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.4 }}
          type="button"
          className="p-3 transition-colors hover:bg-white hover:text-black rounded-md tracking-widest text-lg text-white border-2 border-white font-semibold"
        >
          LOGIN
        </motion.button>
      </div>
    </motion.div>,
    document.getElementById("root") as HTMLElement
  );
};

export default HamburgerMenu;
