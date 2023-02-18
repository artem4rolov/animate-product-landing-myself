import React from "react";
import { BsChatDotsFill } from "react-icons/bs";

const Copyright = () => {
  const copyrightData = {
    text: "© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.",
    icon: <BsChatDotsFill />,
  };

  const { text, icon } = copyrightData;

  return (
    <section
      className="mb-[100px] md:mb-[200px]"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800"
    >
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
        <div className="max-w-[560px] text-center lg:text-left text-zinc-400">
          {text}
        </div>
        <button className="btn btn-primary rounded-full text-4xl">
          {icon}
        </button>
      </div>
    </section>
  );
};

export default Copyright;
