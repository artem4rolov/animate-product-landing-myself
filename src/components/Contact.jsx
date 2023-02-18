import React from "react";
import { ctaData } from "../data";

const Contact = () => {
  const { title, subtitle, btnText1, btnText2 } = ctaData;

  return (
    <section>
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-10 mb-[100px] md:mb-[200px]"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1200"
      >
        {/* contact us */}
        <div className="text-left">
          <p className="h2 text-5xl mb-5">{title}</p>
          <p className="text-primary">{subtitle}</p>
        </div>
        {/* buttons */}
        <div className="flex gap-5">
          <button className="btn btn-secondary">{btnText1}</button>
          <button className="btn btn-quaternary">{btnText2}</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
