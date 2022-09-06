import React from "react";
import { CgGym } from "react-icons/cg";

function NavBar() {
  return (
    <div className="fixed top-0 flex border-b border-white/20 text-blue w-screen h-16 font-Raleway select-none justify-left text-left pl-5 pt-4">
      <CgGym size={30}></CgGym>
      <div className="tracking-tighter ml-1.5 mt-1">J C A L C</div>
    </div>
  );
}

export default NavBar;
