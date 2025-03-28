import { useState, useCallback, useEffect } from "react";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg"; // Make sure this path is correct
import CloseIcon from "../../assets/images/icon-close.svg";
import HamburgerMenu from "./HamburgerMenu"; // Make sure this path is correct
import NavbarLogo from "./NavbarLogo"; // Make sure this path is correct
import { AnimatePresence } from "motion/react";
import Button from "../Button"; // Make sure this path is correct
import useScrollTracker from "../../hooks/useScrollTracker"; // Make sure this path is correct (your custom hook)
import classNames from "classnames";

const navbarLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Assuming useScrollTracker returns an object like { scrollY: number }
  const { scrollY } = useScrollTracker();

  // Memoize the close handler to prevent unnecessary re-renders of HamburgerMenu
  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);

  const transitionDuration = "duration-500";

  const headerClasses = classNames(
    // Basic sticky positioning and layering
    "sticky left-0 top-0 z-[60]",

    // *** Apply transition to all animatable properties ***
    `transition-all ${transitionDuration} ease-in-out`,

    // Conditional classes based on scroll position
    {
      "bg-white shadow-md": scrollY > 30 && !menuOpen,
      // *** Explicitly set transparent background and no shadow for smooth transition ***
      "bg-transparent shadow-none": scrollY <= 30 || menuOpen,
    }
  );

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    // Apply the dynamically calculated classes to the header
    <header className={headerClasses}>
      <nav
        className="container mx-auto flex items-center justify-between md:gap-12 p-6" // Added mx-auto to container
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo - Consider wrapping in a link to home */}
        <a href="/" aria-label="Go to Homepage">
          <NavbarLogo menuOpen={menuOpen} />
        </a>

        {/* Desktop Navigation Links & Login */}
        <div className="hidden md:flex items-center gap-8">
          {/* Navbar Links */}
          <ul className="flex gap-8 items-center">
            {navbarLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  // Adjust text color based on scroll? Example below:
                  className={classNames(
                    "text-sm transition-colors duration-300 tracking-widest hover:text-soft-red", // Your hover effect
                    {
                      "text-very-dark-blue": scrollY > 70, // Text color when scrolled
                      "text-white": scrollY <= 70, // Text color when at top (adjust if needed)
                      // Use a contrasting color if your top background isn't dark
                    }
                  )}
                >
                  {link.name.toUpperCase()}{" "}
                </a>
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <Button
            className="px-8 tracking-wide text-sm py-2.5"
            variant="danger"
          >
            LOGIN
          </Button>
        </div>

        {/* Hamburger Toggle Button (Mobile Only) */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu" // This ID should match an ID on the HamburgerMenu component if used for accessibility relationships
          className="md:hidden z-[70] relative p-1" // Added padding for easier tapping, increase z-index
          onClick={toggleMenu}
        >
          {/* Optional: Animate between icons if desired */}
          <img
            src={menuOpen ? CloseIcon : hamburgerIcon}
            alt="" // Alt text is handled by aria-label on the button
            aria-hidden="true"
          />
        </button>
      </nav>

      {/* Mobile Menu Portal - Rendered outside the header flow but controlled here */}
      <AnimatePresence>
        {menuOpen && <HamburgerMenu onClose={handleCloseMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
