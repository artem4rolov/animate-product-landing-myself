import React from "react";
import Slider from "./Slider";
import SliderMobile from "./SliderMobile";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-pink-400 container-fluid w-[99.16vw] min-h-[1000px] mb-[100px] md:mb-[200px]"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      <div className="hidden lg:flex">
        <Slider />
      </div>
      <div className="flex lg:hidden">
        <SliderMobile />
      </div>
    </section>
  );
};

export default Testimonials;
