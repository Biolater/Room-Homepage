import React from "react";
import NavbarLogo from "../Navbar/NavbarLogo";

const footerLinks = [
    {name: "Features", href: "#features"},
    {name: "Pricing", href: "#pricing"},
    {name: "Contact", href: "#contact"},
]

const Footer = () => {
  return (
    <footer className="bg-very-dark-blue">
      <div className="container mx-auto px-4 py-16">
        <a href="#" className="text-white">
          <NavbarLogo fillWithWhite={true} />
        </a>
        <nav className="flex flex-col gap-4">
          <ul>
            {footerLinks.map((link) => (
              <li className="uppercase" key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
