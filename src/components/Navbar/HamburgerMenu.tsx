import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { createPortal } from "react-dom";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";

const HamburgerMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Shared animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  useEffect(() => {
    // Focus the menu for accessibility
    menuRef.current?.focus();

    // Handle ESC key to close the menu
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Prevent body scroll while the modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed flex flex-col justify-between top-0 left-0 w-full h-full bg-very-dark-blue/90 z-50"
    >
      <div
        ref={menuRef}
        tabIndex={-1} // Allows the div to be focused programmatically
        className="flex px-6 flex-col gap-6 container outline-none" // Added outline-none for the ref div
      >
        <ul className="pt-16 w-full text-center flex flex-col">
          {["FEATURES", "PRICING", "CONTACT"].map((label, idx) => (
            <motion.li
              key={label}
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="border-t border-t-white/20 last:border-b last:border-b-white/20"
            >
              <a
                href={`/${label.toLowerCase()}`}
                // Added active styles for touch feedback
                className="text-white py-4 block tracking-widest hover:text-white/80 active:text-white/60 text-lg focus:outline-none focus:ring-2 focus:ring-white/50 rounded" // Added focus ring styles and rounded
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.button
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          type="button"
          // --- MODIFICATION HERE ---
          // Added active:bg-white and active:text-black
          className="p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white hover:text-black active:bg-white active:text-black active:ring-2 active:ring-white/50 rounded-md tracking-widest text-lg text-white border-2 border-white font-semibold"
          // --- END MODIFICATION ---
        >
          LOGIN
        </motion.button>
      </div>
      <div className="flex gap-12 items-center justify-center p-6">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.5 }}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          // Added focus styles for accessibility
          className="focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
        >
          <img src={FacebookIcon} alt="Facebook" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ delay: 0.5 }}
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
        >
          <img src={TwitterIcon} alt="Twitter" />
        </motion.a>
      </div>
    </motion.div>,
    document.body
  );
};

export default HamburgerMenu;
