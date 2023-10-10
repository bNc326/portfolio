import React from "react";
import MobileProfile from "../../assets/mobileProfile.jpg";
import Container from "../UI/Container";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutMe = () => {
  return (
    <Container>
      {/* <Welcome /> */}
      {/* <Title title={"Rólam"} /> */}
      {/* // *left side */}
      <AnimationOnScroll
        animatePreScroll={false}
        animateOnce
        animateIn="animate__fadeIn"
        className="w-full flex flex-col items-center z-30 gap-4 order-2 text-dark"
      >
        <p className="max-w-[1366px] text-dynamicDesc">
          Hello, Bence vagyok egy 20 éves kezdő{" "}
          <span className="font-semibold">Frontend</span> fejlesztő. Régóta
          érdekel az IT leginkább a webfejlesztés és programozás. Középiskolában
          találkoztam először a webfejlesztéssel alapjaival, de a tudásom
          nagyrészt leginkább az önfejlesztésből adódik.
        </p>
        <p className="max-w-[1366px] text-dynamicDesc">
          Tanulmányaim során számos programozási nyelvet is megismertem, és azok
          közül is kiemelkednek a C# .NET, Python és Javascript. Azonban az
          igazi szenvedélyem a{" "}
          <span className="font-semibold">Typescript és React</span>{" "}
          kombinációja a frontend fejlesztésben. Ezekkel a technológiákkal
          rendelkezem a legtöbb tapasztalattal és tudással.{" "}
        </p>
        <p className="max-w-[1366px] text-dynamicDesc">
          5 éve kezdtem el igazán foglalkozni a webfejlesztéssel, amikor
          édesapám megengedte, hogy hozzányúljak a weboldalához. Folyamatosan
          fejlesztem magam, arra törekszem, hogy egy jó frontend fejlesztő
          váljon belőlem.
        </p>
        <p className="max-w-[1366px] text-dynamicDesc">
          Készen vagyok arra, hogy egy új fejezetet kezdjek az életemben, és
          keresem leendő munkahelyem. Szenvedéllyel és elkötelezettséggel
          dolgozom azért, hogy innovatív és magas minőségű webalkalmazásokat
          hozzak létre, és mindig nyitott vagyok az új kihívásokra és
          technológiákra.
        </p>
      </AnimationOnScroll>
      {/* // * right side */}
      <AnimationOnScroll
        animatePreScroll={false}
        animateOnce
        animateIn="animate__fadeIn"
        className="w-full flex justify-center items-center order-1 "
      >
        <div className="relative w-full flex items-center justify-center">
          <img
            src={MobileProfile}
            alt="Profilkép"
            className="w-full h-full max-w-[300px] laptop:max-w-[500px] rounded-full relative z-30 shadow-baseShadow"
          />
        </div>
      </AnimationOnScroll>
    </Container>
  );
};

export default AboutMe;
