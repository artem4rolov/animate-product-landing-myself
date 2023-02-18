import React from "react";

import { navigationData } from "../data";

const NavMobile = () => {
  return (
    <nav className="text-center">
      <ul className="flex flex-col gap-y-5 mt-3 mb-3">
        {navigationData.map((item, index) => {
          const { name, href } = item;

          return (
            <li key={index}>
              <a href={href} className="text-white">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
