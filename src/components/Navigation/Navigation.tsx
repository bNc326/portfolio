import React, { useEffect } from "react";
const Navigation = () => {
  return (
    <header className="fixed flex justify-center top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-md">
      <nav className="flex items-center justify-between p-4 w-full max-w-[1366px] ">
        <div className="text-dark-cyan font-bold text-dynamicLogo tall:text-dynamic2rem uppercase">
          <span>&lt;</span>bnc
          <span>/&gt;</span>
        </div>
        <div>
          <button className="bg-dark-cyan text-white text-dynamicBtn tall:text-dynamic1rem rounded-xl px-8 py-1 font-bold">
            <a href="#contact">Kapcsolat</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
