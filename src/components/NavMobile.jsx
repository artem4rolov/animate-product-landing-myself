import React from "react";

import { navigationData } from "../data";

const NavMobile = () => {
  return (
    <nav className="text-center">
      <ul className="flex flex-col gap-y-5 mt-5 mb-5">
        {navigationData.map((item, index) => {
          const { name, href } = item;

          return (
            <li key={index}>
              <a href={href}>{name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
