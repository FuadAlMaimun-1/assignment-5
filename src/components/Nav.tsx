import { useState } from "react";
import Logo from "../assets/logo-text.png";
import Hamburger from "../assets/ui/hamburger.png";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <nav className="w-full my-3 md:my-10 pb-3 border-b border-gray-100 sticky top-0 bg-white z-50">

      <div className="flex justify-between items-center mx-30 gap-2 sm:gap-4">

        <div className="shrink-0">
          <img src={Logo} alt="Logo" />
        </div>

        <div>
          <img
            src={Hamburger}
            alt="menu"
            className="md:hidden w-6 h-6 cursor-pointer"
          />

          <ul className="hidden md:flex gap-6 text-[#475569] cursor-pointer">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex gap-1 sm:gap-2 p-1 rounded-3xl shrink-0">
          <button
            onClick={() => setActiveTab("signin")} className={`px-4 py-1 sm:py-1.5  rounded-3xl cursor-pointer ${activeTab === "signin"
                ? "bg-[#DB2777] text-white"
                : "text-gray-600 "
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setActiveTab("signup")}
            className={`px-4 py-1 sm:py-1.5  rounded-3xl cursor-pointer ${
              activeTab === "signup"
                ? "bg-[#DB2777] text-white"
                : "text-gray-600"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
