import React from "react";

const Container: React.FC<{
  children: JSX.Element | JSX.Element[];
  relative?: boolean;
  mobileWrap?: boolean;
  tabletWrap?: boolean;
  tallWrap?: boolean;
  id?: string;
}> = (props) => {
  return (
    <section
      id={props.id}
      className={`h-full min-h-screen py-[160px] flex items-center justify-center relative overflow-hidden ${
        props.relative && "relative"
      }`}
    >
      <div
        className={`text-white flex-col flex items-center justify-center max-w-[1366px] gap-8 w-11/12 h-full ${
          props.mobileWrap && ""
        } ${props.tabletWrap && "tablet:flex-row"} ${
          props.tallWrap && "tall:flex-col"
        }`}
      >
        {props.children}
      </div>
    </section>
  );
};

export default Container;
