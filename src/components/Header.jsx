import React from "react";

import Logo from "../assets/img/logo.png";
import ButtonArrow from "./ButtonArrow";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <section data-aos="fade-down" data-aos-duration="1000" className="z-20">
      <div className="flex justify-between items-center relative">
        {/* logo and menu + mobile_menu */}
        <div className="flex flex-1 gap-x-5 lg:gap-x-20 z-10">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="hidden md:flex">
            <Nav />
          </div>
          <div
            className={`${
              mobileMenu ? "flex" : "hidden"
            } top-16 md:hidden absolute w-[100%] justify-center bg-purple-600`}
            // data-aos={mobileMenu ? "fade-down" : "fade-up"}
            // data-aos-duration="400"
          >
            <NavMobile className="-z-20" />
          </div>
        </div>
        {/* button with arrow-right */}
        <div>
          <ButtonArrow />
        </div>
        {/* mobile menu icon */}
        <div
          className="flex flex-1 justify-end md:hidden text-4xl font-bold"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </section>
  );
};

export default Header;
