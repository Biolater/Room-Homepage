import { useState, useCallback } from "react";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import CloseIcon from "../../assets/images/icon-close.svg";
import HamburgerMenu from "./HamburgerMenu";
import NavbarLogo from "./NavbarLogo";
import { AnimatePresence } from "motion/react";
import Button from "../Button";

const navbarLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent unnecessary re-renders
  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="fixed w-full left-0 top-0 z-[60]">
      <nav
        className="container flex items-center justify-between md:gap-12 p-6"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="Go to Homepage">
          <NavbarLogo menuOpen={menuOpen} />
        </a>

        <div className="flex items-center gap-8">
          {/* Navbar Links  */}
          <ul className="hidden md:flex gap-8 items-center">
            {navbarLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm transition-colors tracking-widest text-dark-grayish-blue hover:text-grayish-blue/50"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Login Button  */}
          <Button
            className="hidden md:block px-8 tracking-wide text-sm py-2.5"
            variant="danger"
          >
            LOGIN
          </Button>
        </div>

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
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
