import React from "react";
import NavbarComponent from "./home/components/NavbarComponent";
import HeroComponent from "./home/components/HeroComponent";
import AboutMe from "./home/components/AboutMe";
import Skills from "./home/components/Skills";
import Education from "./home/components/Education";
import Footer from "./home/components/Footer";
import Portfolio from "./home/components/Portfolio";

export default function Page() {
  return (
    <div>
      <NavbarComponent />
      <HeroComponent />
      <AboutMe />
      <Skills />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  );
}
