import React from "react";

const Hero = () => {
  return (
    <section className="home__hero bg-[#2F5349] w-full h-[456px] pt-[50px] px-[20px] pr-[30px]">
      <h3 className="w-[250px] text-[20px] font-bold text-white">
        Full-Service Carpet & Flooring Solutions
      </h3>
      <nav className="nav types mt-[20px] uppercase">
        <h3 className="font-bold text-white font-normal mb-1 text-right">
          Hardwood
        </h3>
        <h3 className="font-bold text-white font-normal mb-1 text-right">
          Carpet
        </h3>
        <h3 className="font-bold text-white font-normal mb-1 text-right">
          Laminant
        </h3>
        <h3 className="font-bold text-white font-normal mb-1 text-right">
          Tile
        </h3>
      </nav>
      <div className="image h-[87px] bg-red-200 mt-16">
        <img src="images/flooring-16.JPG" alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
