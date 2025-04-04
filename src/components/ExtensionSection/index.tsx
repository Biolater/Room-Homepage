import ExtensionContent from "./ExtensionContent";

const ExtensionSection = () => {
  return (
    <section className="mt-20 md:mt-48">
      <div className="container text-center">
        <div className="flex flex-col gap-2 items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-very-dark-blue">
            Download the extension
          </h2>
          <p className="text-grayish-blue md:text-lg text-balance">
            We&apos;ve got more browsers in the pipeline. Please do let us know
            if you&apos;ve got a favourite you&apos;d like us to prioritize.
          </p>
        </div>
        <ExtensionContent />
      </div>
    </section>
  );
};

export default ExtensionSection;
