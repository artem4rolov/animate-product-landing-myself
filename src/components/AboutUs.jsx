import React from "react";

import { aboutData } from "../data";

const AboutUs = () => {
  const { image, title, subtitle } = aboutData;

  return (
    <section
      className="mt-20 md:mt-40"
      data-aos="fade-down"
      data-aos-delay="120"
      data-aos-duration="1100"
    >
      <div className="flex flex-col md:flex-row items-center bg-pink-300/[20%] rounded-[40px] p-5">
        <div className="flex-1">
          <img src={image} alt="" className="w-[100%]" />
        </div>
        <div className="flex-1 ml-6 text-center md:text-left">
          <div className="h2 md:max-w-[410px] mb-5">{title}</div>
          <div className="md:max-w-[390px] mb-10">{subtitle}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
