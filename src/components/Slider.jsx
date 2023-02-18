import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { testimonialsData } from "../data";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={2}
      centeredSlides={true}
      className="z-100 pt-[350px]"
    >
      {testimonialsData.map((item, index) => {
        const { image, name, web, message } = item;

        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] py-[60px] px-[35px]"
          >
            <div className="flex items-center">
              <div className="flex flex-1">
                <img src={image} alt="" className="min-w-[150px]" />
              </div>
              <div>
                <p className="font-bold text-3xl pb-2">{name}</p>
                <p>{message}</p>
                <p className="font-bold pt-4">{web}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
