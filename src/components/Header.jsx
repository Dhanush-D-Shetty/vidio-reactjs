import React, { useEffect, useState } from "react";
import { navigation } from "../constants/Navigation";
import { FiSearch } from "react-icons/fi";
import { LuUserCircle } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";



const Header = () => {
 
  const [searcInput, setSearchInput] = useState("");
  let navigate = useNavigate();     // hoo from react router

  useEffect(() => {
    searcInput && navigate(`search?q=${searcInput}`);
  }, [searcInput]);


  return (
    // return ( h-16)
    <header className="fixed top-3 z-[9999] w-full mx-auto bg-neutral-600 bg-opacity-10 rounded-lg ">
      <div className="conatner h-full mx-auto px-6 py-3 flex items-center lg:px-20">

        <div className="logo ">
          <NavLink to="/">
            <h1 className="text-5xl font-extrabold text-white">Vidio</h1>
          </NavLink>
        </div>

        <nav className="text-[rgb(182,186,195)] text-lg  gap-9 ml-9 hidden md:flex">
          {navigation.slice(1,3).map((nav, index) => {
            return (
              <NavLink
                to={nav.href}
                key={nav.href}
                onClick={() => setSearchInput("")}
                className={({ isActive }) =>
                  `hover:text-white   ${isActive && "text-white"}`
                }
              >
                {nav.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex gap-5 items-center ml-auto">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              className="w-80 p-3 pr-10 bg-black rounded-lg focus:outline-none hidden md:block "
              placeholder="Search..."
              value={searcInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <FiSearch size={25} />
            </button>
          </div>
          <div className="cursor-pointer active:scale-50 transition-all">
            <LuUserCircle size={30} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
