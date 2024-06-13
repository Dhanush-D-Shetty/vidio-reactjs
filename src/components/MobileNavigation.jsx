import React from "react";
import { navigation } from "../constants/Navigation";
import { NavLink } from "react-router-dom";


const MobileNavigation = () => {
  

  return (
    <nav className="fixed bottom-[1px] w-full z-[99999]  opacity-90 md:hidden">
     
      <div className="my-1 mx-5 py-3 rounded-xl bg-[#262626] text-[rgb(182,186,195)] flex gap-4 items-center justify-center">
        {navigation.map((nav, index) => {
          return (
            <NavLink to={nav.href} key={nav.href} className={({ isActive }) => `hover:text-white ${isActive && "text-white"}`}>
              <div className="flex justify-center"> {nav.icon}</div>
              <div className="text-lg"> {nav.label}</div>
            </NavLink>
          );
        })}
     
      </div>
    </nav>
  );
};

export default MobileNavigation;
