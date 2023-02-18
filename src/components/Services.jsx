import React from "react";

import { featuresData } from "../data";

const Services = () => {
  const { title, subtitle, list } = featuresData;

  return (
    <section id="features" className="mb-[200px] md:mb-[400px]">
      <div>
        <div
          className="flex flex-col justify-center gap-y-10 text-center items-center"
          data-aos="fade-down"
          data-aos-delay="120"
          data-aos-duration="1100"
        >
          <div className="h1">{title}</div>
          <div className="max-w-[500px] lg:max-w-[800px] mb-[100px]">
            {subtitle}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[5px] md:gap-[50px] md:grid-cols-2">
          {list.map((feature, index) => {
            const { image, bgImage, title, description, linkText, delay } =
              feature;

            return (
              <div
                key={index}
                className="relative w-full max-w-[530px] h-[358px] flex justify-center items-center"
                data-aos="zoom-in"
                data-aos-delay={delay}
                data-aos-duration="1100"
              >
                <div className="absolute right-1 -z-10">
                  <img src={bgImage} alt="" />
                </div>
                <div className="flex items-center text-left">
                  <div className="flex md:flex-1">
                    <img
                      src={image}
                      alt=""
                      className="max-w-[140px] md:max-w-[160px] lg:max-w-[232px]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-start text-left">
                    <p className="h3 mb-5 font-bold">{title}</p>
                    <p className="mb-3">{description}</p>
                    <button className="text-left font-bold hover:text-primary">
                      {linkText}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
