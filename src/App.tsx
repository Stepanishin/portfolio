import React from "react";
import "./assets/normalize.css";
import "./assets/reset.css";
import "./assets/index.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Works />
      <Footer />
    </>
  );
}

export default App;
