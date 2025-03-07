import { useState, useCallback } from "react";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import navbarLogo from "../../assets/images/logo.svg";
import HamburgerMenu from "./HamburgerMenu";
import { AnimatePresence } from "motion/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent unnecessary re-renders
  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="fixed w-full left-0 top-0 z-50">
      <nav
        className="container flex items-center justify-between md:justify-start md:gap-12 py-6"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Hamburger Menu Button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden z-50 relative"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img src={hamburgerIcon} alt="" aria-hidden="true" />
        </button>

        {/* Logo */}
        <a href="/" className="mx-auto md:m-0" aria-label="Go to Homepage">
          <img src={navbarLogo} alt="Navbar Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#home" className="text-white">
              home
            </a>
          </li>
          <li>
            <a href="#shop" className="text-white">
              shop
            </a>
          </li>
          <li>
            <a href="#about" className="text-white">
              about
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white">
              contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <AnimatePresence>
        {menuOpen && <HamburgerMenu onClose={handleCloseMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
