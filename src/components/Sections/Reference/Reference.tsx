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
import Webshop from "../../../assets/mockups/webshop_mockup.png";
import Webshop2 from "../../../assets/mockups/webshop2_mockup.png";
import { SiExpress } from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import { TbBrandSocketIo } from "react-icons/tb";
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
              "Ajánlatkérés logika megtervezése, lefejlesztése",
              "Rendszeres karbantartás/frissítés",
            ]}
            techStack={[
              { text: "ExpressJs", icon: SiExpress },
              { text: "React", icon: BiIcons.BiLogoReact },
              { text: "NodeJs", icon: BiIcons.BiLogoNodejs },
              { text: "TypeScript", icon: BiIcons.BiLogoTypescript },
              { text: "HTML", icon: BiIcons.BiLogoHtml5 },
              { text: "Css", icon: BiIcons.BiLogoCss3 },

              { text: "TailwindCss", icon: BiIcons.BiLogoTailwindCss },
            ]}
            images={[Amelto, Amelto2]}
            demoLink="https://www.ameltoemlekezes.hu"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <ReferenceCard
            title={`Egyszerű webshop frontend (új)`}
            jobs="Web app fejlesztés"
            siteMap={["Frontend fejlesztés"]}
            techStack={[
              { text: "React", icon: BiIcons.BiLogoReact },
              { text: "TypeScript", icon: BiIcons.BiLogoTypescript },
              { text: "TailwindCss", icon: BiIcons.BiLogoTailwindCss },
              { text: "MaterialUI" },
            ]}
            images={[Webshop2, Webshop]}
            demoLink="https://webshop-project.onrender.com/"
            workingProgress={false}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <ReferenceCard
            title="Vendégház App"
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
            workingProgress={false}
          />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <ReferenceCard
            title={`Vendégház admin felület`}
            jobs="Web app fejlesztés"
            siteMap={[
              "Weboldal tervezése",
              "Weboldal fejlesztése",
              "API összekötése az adatbázissal",
              "Élő kommunikáció az API-val",
            ]}
            techStack={[
              { text: "Mongodb", icon: BiIcons.BiLogoMongodb },
              { text: "ExpressJs", icon: SiExpress },
              { text: "React", icon: BiIcons.BiLogoReact },
              { text: "NodeJs", icon: BiIcons.BiLogoNodejs },
              { text: "TypeScript", icon: BiIcons.BiLogoTypescript },
              { text: "TailwindCss", icon: BiIcons.BiLogoTailwindCss },
              { text: "Socket.io", icon: TbBrandSocketIo },
            ]}
            images={[Admin, Admin2]}
            demoLink="https://guest-house-admin.onrender.com"
            isAdmin
            workingProgress={false}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Reference;
