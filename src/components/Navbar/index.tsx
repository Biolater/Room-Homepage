import { useState, useCallback } from "react";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import CloseIcon from "../../assets/images/icon-close.svg";
import HamburgerMenu from "./HamburgerMenu";
import NavbarLogo from "./NavbarLogo";
import { AnimatePresence } from "motion/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent unnecessary re-renders
  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="fixed w-full left-0 top-0 z-[60]">
      <nav
        className="container flex items-center justify-between md:justify-start md:gap-12 p-6"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="Go to Homepage">
          <NavbarLogo menuOpen={menuOpen} />
        </a>

        {/* Hamburger Toggle Button (Mobile Only) */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden z-[60] relative"
          onClick={(e) => {
            e.stopPropagation(); // prevent click outside from triggering
            setMenuOpen((prev) => !prev);
          }}
        >
          <img
            src={menuOpen ? CloseIcon : hamburgerIcon}
            alt=""
            aria-hidden="true"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && <HamburgerMenu onClose={handleCloseMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
