import ExtensionCard from "./ExtensionCard";

const ExtensionContent = () => {
  return (
    <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-center lg:gap-6">
      <ExtensionCard />
      <ExtensionCard />
      <ExtensionCard />
    </div>
  );
};

export default ExtensionContent