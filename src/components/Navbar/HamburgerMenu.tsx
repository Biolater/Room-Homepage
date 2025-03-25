import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { createPortal } from "react-dom";
import closeIcon from "../../assets/images/icon-close.svg";

const HamburgerMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // ✅ Close menu when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-0 left-0 w-full h-full bg-very-dark-blue/90 z-50"
    >
      <div
        ref={menuRef}
        className="flex items-center justify-between px-4 py-6"
      >
        <header>
          
        </header>
        {/* <button onClick={onClose} aria-label="Close menu">
          <img src={closeIcon} alt="" aria-hidden="true" />
        </button>

        <ul className="flex items-center justify-end px-4 space-x-4">
          <li>
            <a
              href="/about"
              className="text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Contact
            </a>
          </li>
        </ul> */}
      </div>
    </motion.div>,
    document.getElementById("root") as HTMLElement
  );
};

export default HamburgerMenu;
