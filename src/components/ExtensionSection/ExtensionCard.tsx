import chromeLogo from "../../assets/images/logo-chrome.svg";
import Button from "../Button";

const ExtensionCard = () => {
  return (
    <div className="bg-white w-full rounded-lg shadow-md p-4 flex flex-col items-center gap-10  overflow-hidden">
      <div className="flex flex-col items-center">
        <img src={chromeLogo} alt="Chrome" className="size-24 mb-4" />
        <h3 className="text-lg font-semibold">Add to Chrome</h3>
        <p className="text-gray-600">Minimum version 62</p>
      </div>
      <div className="flex items-center gap-3">
        {Array.from({ length: 120 }).map((_, index) => (
          <div key={index} className="size-1 rounded-full bg-gray-200"></div>
        ))}
      </div>
      <Button className="w-full py-3">Add & Install Extension</Button>
    </div>
  );
};

export default ExtensionCard;
