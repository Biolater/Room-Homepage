import hero from "../../assets/images/illustration-hero.svg";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="hero mt-10 overflow-hidden">
      <div className="container flex flex-col-reverse md:flex-row md:items-center gap-12">
        <div className="md:w-1/2 text-center md:text-start flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-very-dark-blue">
            A Simple Bookmark Manager
          </h1>
          <p className="text-lg text-grayish-blue md:text-balance">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex items-center md:justify-start justify-center gap-4">
            <Button className="py-3 text-nowrap">Get it on Chrome</Button>
            <Button variant="secondary" className="py-3 shadow-md text-nowrap">
              Get it on Firefox
            </Button>
          </div>
        </div>
        <div className="relative md:w-1/2">
          {/* Hero Image Background Effect  */}
          <div className="-z-10 w-full h-[70%] bottom-0 -right-[25%] bg-soft-blue rounded-full absolute"></div>
          <img src={hero} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
