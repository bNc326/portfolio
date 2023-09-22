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
          Szia, én Bence vagyok egy 20 éves <span className="font-semibold">Full Stack</span> fejlesztő. Gyerekkorom
          óta vonz informatika és a programozás világa. Azóta is tartom ezt a
          szenvedélyt, és minden nap azon dolgozom, hogy a lehető legtöbbet
          hozzam ki magamból ezen a területen.
        </p>
        <p className="max-w-[1366px] text-dynamicDesc">
          Tanulmányaim során számos programozási nyelvet is megismertem, és azok
          közül is kiemelkednek a C# .NET, Python és Javascript. Azonban az
          igazi szenvedélyem a <span className="font-semibold">Typescript és React</span> kombinációja a frontend
          fejlesztésben, valamint az <span className="font-semibold">ExpressJs</span> a backend oldalon. Ezekkel a
          technológiákkal rendelkezem a legtöbb tapasztalattal és tudással.{" "}
        </p>
        <p className="max-w-[1366px] text-dynamicDesc">
          A webfejlesztői "karrierem" kb 5 évvel ezelőtt kezdődött, amikor
          elkezdtem édesapám weboldalát komolyabban fejleszteni. Azóta is
          folyamatosan fejlődöm, tanulok és minden projektben az új kihívásokat
          keresem. A kreatív megoldások megtalálása és az innovatív fejlesztés
          mindig is inspiráltak.{" "}
        </p>
        <p className="max-w-[1366px] text-dynamicDesc">
          Készen vagyok arra, hogy egy új fejezetet kezdjek az életemben, és
          keresem leendő munkahelyem. Szenvedéllyel és elkötelezettséggel
          dolgozom azért, hogy innovatív és magas minőségű webalkalmazásokat
          hozzak létre, és mindig nyitott vagyok az új kihívásokra és
          technológiákra. Ha keresed a motivált és kreatív Full Stack
          fejlesztőt, akivel együtt dolgozhatsz, akkor ne habozz kapcsolatba lépni velem. Örömmel
          várom az új lehetőségeket és az érdekes projekteket, amikkel
          hozzájárulhatok a digitális világ fejlődéséhez.
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
