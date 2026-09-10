import { useState } from "react";
import Logo from "../assets/banner-stack.png";

const Banner = () => {
  const [activeHeroBtn, setActiveHeroBtn] = useState("explore");

  return (
    <div className="flex justify-between items-center container mx-auto px-4 my-12 gap-8">
      <div className="max-w-xl space-y-8">
        <h1 className="text-6xl font-bold text-black leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-4 pt-2">
          <button
            onClick={() => setActiveHeroBtn("explore")}
            className={`px-5 py-2 rounded-lg font-medium cursor-pointer  ${
              activeHeroBtn === "explore"
                ? "bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            Explore Technologies
          </button>

          <button
            onClick={() => setActiveHeroBtn("learn")}
            className={`px-5 py-2 rounded-lg font-medium cursor-pointer  ${
              activeHeroBtn === "learn"
                ? "bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* ডান পাশের ইমেজ সেকশন */}
      <div>
        <img src={Logo} alt="Banner Stack" className="max-w-md w-full" />
      </div>
    </div>
  );
};

export default Banner;
