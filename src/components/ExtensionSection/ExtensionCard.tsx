import { FC } from "react";
import Button from "../Button";
import classNames from "classnames";

interface ExtensionCardProps {
  cardLogo: string;
  title: string;
  version: string;
  className?: string;
}

const ExtensionCard: FC<ExtensionCardProps> = ({
  cardLogo,
  title,
  version,
  className,
}) => {
  return (
    <div
      className={classNames(
        "bg-white w-full rounded-lg shadow-md p-4 flex flex-col items-center gap-10  overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col items-center">
        <img src={cardLogo} alt="Chrome" className="size-24 mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{version}</p>
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
