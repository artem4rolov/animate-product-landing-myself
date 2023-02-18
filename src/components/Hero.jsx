import React from "react";

import { heroData } from "../data";

const Hero = () => {
  const { title, subtitle, btnText, image } = heroData;

  return (
    <section
      id="deliver"
      className="mt-[150px] md:mt-[300px] mb-[200px] md:mb-[400px] relative -z-20"
    >
      <div className="flex flex-1 flex-col md:flex-row justify-between">
        <div
          className="text-center md:text-left z-10"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="h1 mb-10 md:max-w-[400px] lg:max-w-[600px]">
            {title}
          </div>
          <div className="mb-10 md:max-w-[200px] lg:max-w-[320px]">
            {subtitle}
          </div>
          <button className="btn btn-primary mb-10 md:mb-0 ">{btnText}</button>
        </div>
        <div
          className="flex md:absolute md:top-0 lg:top-20 right-0 md:max-w-[90%] lg:max-w-[100%] z-0 "
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
