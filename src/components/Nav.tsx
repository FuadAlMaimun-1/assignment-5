import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <nav className="w-full my-10 pb-5 border-b border-gray-100 sticky">
      <div className="flex justify-between items-center container mx-auto px-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="flex gap-10 text-[#475569] cursor-pointer font-medium">
          <li className="text-[#DB2777]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-2 p-1 rounded-3xl">
          <button
            onClick={() => setActiveTab("signin")}
            className={`px-4 py-1.5 rounded-3xl cursor-pointer  ${
              activeTab === "signin"
                ? "bg-[#DB2777] text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setActiveTab("signup")}
            className={`px-4 py-1.5 rounded-3xl cursor-pointer ${
              activeTab === "signup"
                ? "bg-[#DB2777] text-white"
                : "text-gray-600 hover:text-black"
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
