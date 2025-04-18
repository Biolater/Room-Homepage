import ExtensionCard from "./ExtensionCard";
import chromeLogo from "../../assets/images/logo-chrome.svg";
import firefoxLogo from "../../assets/images/logo-firefox.svg";
import operaLogo from "../../assets/images/logo-opera.svg";

const EXTENSIONS = [
  {
    cardLogo: chromeLogo,
    title: "Add to Chrome",
    version: "Minimum version 62",
  },
  {
    cardLogo: firefoxLogo,
    title: "Add to Firefox",
    version: "Minimum version 55",
  },
  {
    cardLogo: operaLogo,
    title: "Add to Opera",
    version: "Minimum version 46",
  },
];

const ExtensionContent = () => {
  return (
    <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-center lg:gap-6">
      {EXTENSIONS.map((extension, index) => (
        <ExtensionCard
          key={index}
          cardLogo={extension.cardLogo}
          title={extension.title}
          version={extension.version}
          className={index === 0 ? "" : index === 1 ? "sm:mt-12" : "sm:mt-24"}
        />
      ))}
    </div>
  );
};

export default ExtensionContent;
