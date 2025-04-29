import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ExtensionSection from "./components/ExtensionSection";
import FAQ from "./components/FAQ";
import { ContactUs } from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <ExtensionSection />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
