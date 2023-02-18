import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { testimonialsData } from "../data";

const SliderMobile = () => {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      centeredSlides={true}
      className="z-100 pt-[250px]"
    >
      {testimonialsData.map((item, index) => {
        const { image, name, web, message } = item;

        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] py-[60px] px-[35px]"
          >
            <div className="flex flex-col items-center">
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

export default SliderMobile;
