import React from "react";
import {BsArrowRight} from "react-icons/bs";

const Service = ({heading, ids}) => {
  return (
    <article className="relative service h-[176px]  mt-8 p-3 capitalize " id ={ids}>
      <h3 className="font-bold text-[14px] ">{heading}</h3>
      <button className="absolute bg-[#2F5349] w-[126px] h-[111px] right-0 bottom-0 flex items-center justify-center">
        <BsArrowRight className="text-5xl text-white" />
      </button>
    </article>
  );
};
const Services = () => {
  return (
    <section className="home__services text-2xl bg-[#E9ECEB] px-[30px] w-full h-[746px] pt-[50px]">
      <h3 className="uppercase tracking-widest font-bold text-[14px] text-[#666666]">
        Services
      </h3>
      <p className="mt-1 text-xl text-[#05513C]">Services</p>
      <Service heading="Floor installation" ids="installation" />
      <Service heading="Floor sealing" ids="sealing" />
      <Service heading="Floor repairs" ids="repairs" />
    </section>
  );
};

export default Services;
