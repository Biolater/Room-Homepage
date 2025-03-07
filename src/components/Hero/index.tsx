import hero from "../../assets/images/desktop-image-hero-1.jpg";

const Hero = () => {
  return (
    <section className="hero flex flex-col h-screen">
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="hero bg-cover bg-no-repeat bg-center basis-1/2 flex-1 flex flex-col justify-center items-center text-white"
      ></div>
      <div className="basis-1/2 flex-1 flex flex-col justify-center items-center">
        <h2>Hero</h2>
        <p>Welcome to our website!</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
