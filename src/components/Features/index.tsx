import FeatureContent from "./FeatureContent";

const Features = () => {
  return (
    <section className="features mt-20">
      <div className="container mb-10 max-w-3xl flex flex-col gap-2 items-center text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-very-dark-blue">
          Features
        </h2>
        <p className="text-grayish-blue md:text-lg text-balance">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <FeatureContent />
    </section>
  );
};

export default Features;
