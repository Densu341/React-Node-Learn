import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
