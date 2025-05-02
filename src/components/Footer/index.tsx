import NavbarLogo from "../Navbar/NavbarLogo";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";

const footerLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-very-dark-blue">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <a href="#" className="text-white">
          <NavbarLogo fillWithWhite={true} />
        </a>
        <nav className="flex gap-4 text-white text-center">
          <ul className="flex flex-col gap-6 md:flex-row">
            {footerLinks.map((link) => (
              <li
                className="uppercase hover:text-soft-red transition-colors"
                key={link.name}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-8 md:ms-auto">
          <FacebookIcon
            size={20}
            color="white"
            className="hover:stroke-soft-red transition-colors cursor-pointer"
          />
          <TwitterIcon
            size={20}
            color="white"
            className="hover:stroke-soft-red transition-colors cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
