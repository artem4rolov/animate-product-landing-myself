import React from "react";

import { navigationData } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-10">
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

export default Nav;
