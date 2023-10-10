import React from "react";
import Container from "../UI/Container";
import HeroSvg from "../UI/svg/Hero-svg";
import { Link } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";
import CV from "../../assets/Kiss-Bence-cv-2023.pdf";
import Lottie from "lottie-react";
import Animation from "../../assets/lottie/hero.json";
const Hero = () => {
  const lottieStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <Container tabletWrap>
      {/* <Title title="Home" /> */}
      <div className="w-full z-40 flex flex-col items-center laptop:items-start animate__animated animate__fadeInLeft tall:gap-4 text-dark">
        <div className="flex flex-col gap-1 w-full laptop:text-left">
          <h1 className="text-dynamicTitle min-h-0 leading-4 tall:text-dynamic2rem tall:text-4xl flex gap-1 items-center justify-center">
            <span>Hello</span>
            <MdWavingHand />
          </h1>
          <h2 className="font-bold text-dynamicTitle2 min-h-0 flex gap-2 justify-center laptop:text-left tall:text-6xl">
            <span className="text-dark-cyan min-h-0">Bence</span> vagyok
          </h2>
        </div>
        <div className="flex flex-col gap-1 w-full laptop:text-left">
          <h3 className="font-medium flex justify-center text-dynamicTitle3 mobile:text-mobileDynamic3rem tall:text-dynamic2rem mobile:leading-[3.5rem] mobile:tall:text-4xl">
            Full Stack fejlesztő
          </h3>
        </div>
        <div className="w-full text-dynamicBtn flex flex-col mobile:flex-row tablet:flex-col laptop:flex-row tall:flex-row tall:flex-wrap gap-4 tall:gap-4 items-center justify-center mt-10">
          <a
            href="#contact"
            className="bg-dark-cyan hover:bg-dark-cyan/80 w-full flex items-center justify-center rounded-xl py-2 text-white font-medium transition-all ease-in-out duration-300"
          >
            Kapcsolat
          </a>
          <a
            href={CV}
            target="_blank"
            className="border-2 border-cyan hover:bg-cyan/80 w-full flex gap-2 items-center justify-center rounded-xl py-2 text-dark-cyan font-medium transition-all ease-in-out duration-300"
          >
            <span className="uppercase">cv</span> Letöltése
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center animate__animated animate__fadeInRight">
        <Lottie animationData={Animation} style={lottieStyle} />
      </div>
    </Container>
  );
};

export default Hero;
