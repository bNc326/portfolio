import React from "react";
import Container from "../UI/Container";
import LearnSvg from "../UI/svg/Learn";
import TimeLineSvg from "../UI/svg/TimeLine-svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface TimeLine {
  title?: string;
  date?: string;
  desc?: string;
  list?: string[];
  last?: boolean;
}
const TimeLine = () => {
  return (
    <Container tabletWrap>
      {/* <Title title="Tapasztalat" size={150} /> */}
      <div className="h-full flex gap-2 w-full order-2">
        <div className="flex flex-col gap-4 justify-center">
          <TimelineModule
            title={"React tanfolyam (udemy.com)"}
            date={"2022-2023"}
            desc={"React, TypeScript"}
            list={[
              "React(SPA, állapot kezelés, async műveletek)",
              "Komponens alapú webfejlesztés",
              "React Router",
              "Context API",
              "Redux",
              "TypeScript",
            ]}
          />
          <TimelineModule
            title={"Veszprémi SZC Öveges József Technikum és Kollégium"}
            date={"2021-2022"}
            desc={"informatikai rendszer- és alkalmazás üzemeltető technikus"}
            list={[
              "C#, Python programmozás",
              "Cisco Hálózati eszközök konfigolása",
              "Hálózat tervezés, építés",
              "Windows, Linux Szerver üzemeltetés",
            ]}
          />
          <TimelineModule
            title={"Veszprémi SZC Öveges József Technikum és Kollégium"}
            date={"2017-2021"}
            desc={"Informatikai ágazat és Érettségi"}
            last
            list={[
              "C# programozás",
              "Weboldal alapok (HTML, Css, JavaScript)",
            ]}
          />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center ">
        <div className="relative w-full tablet:max-w-[500px] flex items-center justify-center ">
          <div className="relative z-30 w-full mobile:w-4/6 tablet:w-full">
            <TimeLineSvg />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TimeLine;

export const Separator = () => {
  return <div className="w-[5px] h-full rounded-full bg-gray-blue-2"></div>;
};

export const TimelineDescription: React.FC<TimeLine> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <AnimationOnScroll animatePreScroll={false} animateOnce animateIn="animate__fadeInUp" className="text-dynamicTimelineTitle font-bold text-gray-blue-2">
        {props.title}
      </AnimationOnScroll>
      <AnimationOnScroll animatePreScroll={false} animateOnce animateIn="animate__fadeInUp" className="text-dynamicMedium text-gray-blue">
        Dátum: {props.date}
      </AnimationOnScroll>
      <AnimationOnScroll animatePreScroll={false} animateOnce animateIn="animate__fadeInUp" className="text-dynamicTimelineTitle text-gray-blue-2">
        {props.desc}
      </AnimationOnScroll>
      <ul className="text-dark text-dynamicMedium">
        {props.list?.map((li, index) => (
          <AnimationOnScroll key={index} animatePreScroll={false} animateOnce animateIn="animate__fadeInUp">{li}</AnimationOnScroll>
        ))}
      </ul>
    </div>
  );
};

export const TimelineModule: React.FC<TimeLine> = (props) => {
  return (
    <div className="flex gap-4">
      <div className="h-full flex items-center flex-col gap-4">
        <div
          className={`bg-gray-blue-2 w-10 h-10 tablet:w-12 tablet:h-12 rounded-full flex items-center justify-center`}
        >
          <LearnSvg />
        </div>
        {!props.last && <Separator />}
      </div>
      <div className="h-full">
        <TimelineDescription
          title={props.title}
          date={props.date}
          desc={props.desc}
          list={props.list}
        />
      </div>
    </div>
  );
};
