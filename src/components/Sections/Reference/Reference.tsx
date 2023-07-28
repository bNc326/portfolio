import React from "react";
import Container from "../../UI/Container";
import ReferenceCard from "./ReferenceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";
import Amelto from "../../../assets/mockups/amelto_mockup.png";
import Amelto2 from "../../../assets/mockups/amelto2_mockup.png";
import Guest from "../../../assets/mockups/guest-app_mockup.png";
import Guest2 from "../../../assets/mockups/guest-app2_mockup.png";
import Admin from "../../../assets/mockups/admin_mockup.png";
import Admin2 from "../../../assets/mockups/admin2_mockup.png";
import { SiExpress } from "react-icons/si";
import * as BiIcons from "react-icons/bi";
const Reference = () => {
  return (
    <Container>
      <Swiper
        className="h-full w-full"
        spaceBetween={100}
        pagination={{
          dynamicBullets: true,
        }}
        keyboard
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        // }}
        modules={[Pagination, Navigation, Keyboard, Autoplay]}

      >
        <SwiperSlide className="h-full w-full">
          <ReferenceCard
            title="Kiss és Társa Sírkő"
            jobs="Web app fejlesztés"
            siteMap={[
              "Weboldal tervezése",
              "Weboldal fejlesztése",
              "API fejlesztés",
              "Rendszeres karbantartás/frissítés",
            ]}
            techStack={[
              { text: "ExpressJs", icon: SiExpress },
              { text: "React", icon: BiIcons.BiLogoReact },
              { text: "NodeJs", icon: BiIcons.BiLogoNodejs },
              { text: "TypeScript", icon: BiIcons.BiLogoTypescript },
              { text: "HTML", icon: BiIcons.BiLogoHtml5 },
              { text: "Css", icon: BiIcons.BiLogoCss3 },
            ]}
            images={[Amelto, Amelto2]}
            demoLink="https://www.ameltoemlekezes.hu"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <ReferenceCard
            title="Vendégház Projekt App"
            jobs="Web app fejlesztés"
            siteMap={[
              "Weboldal tervezése",
              "Weboldal fejlesztése",
              "REST API fejlesztés",
              "API összekötése az adatbázissal",
            ]}
            techStack={[
              { text: "Mongodb", icon: BiIcons.BiLogoMongodb },
              { text: "ExpressJs", icon: SiExpress },
              { text: "React", icon: BiIcons.BiLogoReact },
              { text: "NodeJs", icon: BiIcons.BiLogoNodejs },
              { text: "TypeScript", icon: BiIcons.BiLogoTypescript },
              { text: "TailwindCss", icon: BiIcons.BiLogoTailwindCss },
            ]}
            images={[Guest, Guest2]}
            demoLink="https://guest-house-app.onrender.com"
            workingProgress={true}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <ReferenceCard
            title={`Vendégház Projekt admin felület`}
            jobs="Web app fejlesztés"
            siteMap={[
              "Weboldal tervezése",
              "Weboldal fejlesztése",
              "API összekötése az adatbázissal",
            ]}
            techStack={[
              { text: "Mongodb", icon: BiIcons.BiLogoMongodb },
              { text: "ExpressJs", icon: SiExpress },
              { text: "React", icon: BiIcons.BiLogoReact },
              { text: "NodeJs", icon: BiIcons.BiLogoNodejs },
              { text: "TypeScript", icon: BiIcons.BiLogoTypescript },
              { text: "TailwindCss", icon: BiIcons.BiLogoTailwindCss },
            ]}
            images={[Admin, Admin2]}
            demoLink="https://guest-house-admin.onrender.com"
            isAdmin
            workingProgress={true}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Reference;
