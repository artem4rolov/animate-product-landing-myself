import React from "react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { footerData } from "../data";

const Footer = () => {
  const { logo, address, email, phone, list1, list2 } = footerData;

  const socialList = [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ];

  return (
    <section
      className="mb-[100px] md:mb-[200px]"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1200"
    >
      <div className="flex flex-col lg:flex-row justify-between">
        {/* adress & number */}
        <div className="text-center md:text-left flex flex-col items-center lg:items-start gap-10">
          <img src={logo} alt="" className="w-[400px]" />
          <p className="max-w-[360px] font-bold text-center lg:text-left">
            {address}
          </p>
          <div className="text-center lg:text-left mb-10">
            <p className="text-zinc-400">{email}</p>
            <p className="text-zinc-400">{phone}</p>
          </div>
        </div>
        {/* about, help, socials media */}
        <div className="flex flex-col md:flex-row justify-center gap-20 text-center lg:text-left">
          {/* about */}
          <div className="flex flex-col gap-5">
            <div className="mb-10 font-bold text-3xl">About</div>
            {list1.map((item, index) => {
              const { name, href } = item;

              return (
                <a key={index} href={href}>
                  {name}
                </a>
              );
            })}
          </div>
          {/* help */}
          <div className="flex flex-col gap-5">
            <div className="mb-10 font-bold text-3xl">Help</div>
            {list2.map((item, index) => {
              const { name, href } = item;

              return (
                <a key={index} href={href}>
                  {name}
                </a>
              );
            })}
          </div>
          {/* social */}
          <div className="flex flex-col items-center">
            <div className="mb-10 font-bold text-3xl">Social Media</div>
            <div className="flex gap-2">
              {socialList.map((item, index) => {
                const { icon, href } = item;

                return (
                  <a
                    key={index}
                    href={href}
                    className="text-white text-4xl w-[70px] h-[70px] bg-slate-400 rounded-full flex justify-center items-center"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
