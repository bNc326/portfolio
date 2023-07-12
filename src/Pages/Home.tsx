import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/Sections/AboutMe";
import TimeLine from "../components/Sections/TimeLine";
import "swiper/css";
import "swiper/css/pagination";
import Contact from "../components/Sections/Contact";
import Reference from "../components/Sections/Reference/Reference";
import Footer from "../components/Sections/Footer";
const Home = () => {
  return (
    <main className="hero-gradient">
      <Hero />
      <AboutMe />
      <Reference />
      <TimeLine />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
