import logo from "./logo.svg";
import "./App.css";
import ParticlesBG from "./components/ParticlesBG";
import AnimatedCursor from "react-animated-cursor";
import NavbarTop from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonial";
import Journal from "./components/Journal";
import Counter from "./components/Counter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className="hero-container">
        <ParticlesBG />
        <NavbarTop />
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <Journal/>
      <Counter/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
