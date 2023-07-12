import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full bg-white/80 backdrop-blur-sm shadow-md p-4 justify-center font-semibold">
      <p>{new Date().getFullYear().toString()} &#169; Kiss Bence</p>
    </footer>
  );
};

export default Footer;
