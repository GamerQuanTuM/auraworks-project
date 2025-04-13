"use client";

import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import MobileDrawer from "./MobileDrawer";
import Sidebar from "./Sidebar";
import Aside from "./Aside";

const Navbar = () => {
  const [active, setActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [asideOpen, setAsideOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleAside = () => setAsideOpen(!asideOpen);

  return (
    <div className="w-full px-4 py-3 shadow-md lg:shadow-none bg-white">
      <div className="flex justify-between lg:justify-evenly items-center">
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden flex items-center justify-center" 
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <FaBars className="w-5 h-5 text-[#612C97]" />
          </button>
          <h1 className="text-[#612C97] font-bold text-xl sm:text-2xl">AZA Study Club</h1>
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <button 
            className="flex items-center justify-center" 
            onClick={toggleAside}
            aria-label="Toggle information panel"
          >
            <IoMdInformationCircleOutline className="w-6 h-6 text-[#612C97]" />
          </button>
          <HiMenuAlt3 className="w-6 h-6 text-[#612C97]" onClick={toggleMenu} />
        </div>

        <div className="hidden sm:flex items-center gap-8 font-bold">
          <h2
            onClick={() => setActive(1)}
            className={`cursor-pointer ${
              active === 1 ? "text-[#612C97]" : "text-[#686868]"
            }`}
          >
            독서하기
          </h2>
          <h2
            onClick={() => setActive(2)}
            className={`cursor-pointer ${
              active === 2 ? "text-[#612C97]" : "text-[#686868]"
            }`}
          >
            나의 서재
          </h2>
          <h2
            onClick={() => setActive(3)}
            className={`cursor-pointer ${
              active === 3 ? "text-[#612C97]" : "text-[#686868]"
            }`}
          >
            커뮤니티
          </h2>
          <div className="flex items-center gap-2">
            <IoPersonOutline className="w-5 h-5" />
            <h2 className="text-sm text-black font-bold">황희수님</h2>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 font-bold text-[#686868]">
          <h2
            onClick={() => {
              setActive(1);
              setMenuOpen(false);
            }}
            className={`${active === 1 ? "text-[#612C97]" : ""} cursor-pointer`}
          >
            독서하기
          </h2>
          <h2
            onClick={() => {
              setActive(2);
              setMenuOpen(false);
            }}
            className={`${active === 2 ? "text-[#612C97]" : ""} cursor-pointer`}
          >
            나의 서재
          </h2>
          <h2
            onClick={() => {
              setActive(3);
              setMenuOpen(false);
            }}
            className={`${active === 3 ? "text-[#612C97]" : ""} cursor-pointer`}
          >
            커뮤니티
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <IoPersonOutline className="w-5 h-5" />
            <h2 className="text-sm text-black font-bold">황희수님</h2>
          </div>
        </div>
      )}

      {/* Mobile Sidebar Drawer */}
      <MobileDrawer 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        position="left"
      >
        <div className="h-full">
          <Sidebar />
        </div>
      </MobileDrawer>

      {/* Mobile Aside Drawer */}
      <MobileDrawer 
        isOpen={asideOpen} 
        onClose={() => setAsideOpen(false)} 
        position="right"
      >
        <div className="h-full">
          <Aside/>
        </div>
      </MobileDrawer>
    </div>
  );
};


export default Navbar;
