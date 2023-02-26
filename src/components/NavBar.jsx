import React from "react";
import { navigationData } from "../data";

const NavBar = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-center p-12'>
        <div className='logoDiv'>
          <h1
            className='text-primary text-[25px]
        '>
            <strong>Dream</strong> Job
          </h1>
        </div>
        <div>
          <ul className='menu flex gap-8'>
            {navigationData.map((item, index) => {
              return (
                <li
                  key={index}
                  className='menuList text-navTextColor hover:text-primary'>
                  <a href={item.href}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
