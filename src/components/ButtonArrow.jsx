import React from "react";

import { BsArrowRight } from "react-icons/bs";

const ButtonArrow = () => {
  return (
    <button className="btn btn-quaternary flex items-center bg-white text-primary gap-x-2">
      Request Demo
      <BsArrowRight />
    </button>
  );
};

export default ButtonArrow;
