import React from "react";
import mobileImg from "../assets/images/bg-sidebar-mobile.svg";

function MobileSideBar() {
  return (
    <div>
      <img src={mobileImg} alt="sidebar" className="h-52 w-full object-cover" />
    </div>
  );
}

export default MobileSideBar;
