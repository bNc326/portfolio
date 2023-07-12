import React from "react";
import MobileProfile from "../../assets/mobileProfile.jpg";
import Container from "../UI/Container";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutMe = () => {
  return (
    <Container tabletWrap>
      {/* <Welcome /> */}
      {/* <Title title={"Rólam"} /> */}
      {/* // *left side */}
      <AnimationOnScroll
        animatePreScroll={false}
        animateOnce
        animateIn="animate__fadeInRight"
        className="w-full flex flex-col items-center z-30 gap-4 order-2 text-dark"
      >
        <p className="max-w-[700px] text-justify text-dynamicDesc">
          Kiss Bencének hívnak 20 éves vagyok egy kis faluban nőtem fel Kiskorom
          óta érdekel az IT leginkább a programozás és a webfejlesztés. A
          webfejlesztői “karrierem” kb 5 éve kezdetem édesapám weboldalának
          fejlesztésével azóta sokmindent fejlesztettem rajta rengeteget
          tanultam belőle, bár “Fizetős” tapasztalatom nincsen, de úgy érzem
          hogy képes vagyok a frontend fejlesztői feladat betöltésére!
        </p>
        <div className="text-dynamicDesc">
          <p className="">Magamról</p>
          <ul className="font-medium list-disc ml-16 break-words">
            <li>Jó problémamegoldó képesség</li>
            <li>Szeretem a kihívásokat</li>
          </ul>
        </div>
      </AnimationOnScroll>
      {/* // * right side */}
      <AnimationOnScroll
        animatePreScroll={false}
        animateOnce
        animateIn="animate__fadeInLeft"
        className="w-full flex justify-center items-center order-1"
      >
        <div className="relative w-full flex items-center justify-center">
          <img
            src={MobileProfile}
            alt="Profilkép"
            className="w-full h-full max-w-[300px] tablet:max-w-none laptop:w-4/5 rounded-full relative z-30 shadow-baseShadow"
          />
        </div>
      </AnimationOnScroll>
    </Container>
  );
};

export default AboutMe;
