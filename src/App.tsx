import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ExtensionSection from "./components/ExtensionSection";
import FAQ from "./components/FAQ";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <ExtensionSection />
      <FAQ />
    </main>
  );
}

export default App;
