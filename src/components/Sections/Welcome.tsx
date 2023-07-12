import React from "react";

const Welcome = () => {
  return (
    <section className="absolute -top-[calc(250px/2)] w-full flex justify-center">
      <div className="flex items-center justify-center container gap-8">
        <div className="bg-palette-blue-1 text-[64px] text-white w-1/3 h-[250px] rounded-[32px] flex items-center justify-center font-bold shadow-baseShadow">
          <h2 className="text-center">1 éves tapasztalat</h2>
        </div>
        <div className="bg-[#002E4E] text-[64px] text-white  w-1/3 h-[250px] rounded-[32px] flex items-center justify-center font-bold shadow-baseShadow">
          <h2 className="text-center">React fejlelsztő</h2>
        </div>
        <div className="bg-palette-blue-1 text-[64px] text-white  w-1/3 h-[250px] rounded-[32px] flex items-center justify-center font-bold shadow-baseShadow">
          <h2 className="text-center">junior</h2>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
