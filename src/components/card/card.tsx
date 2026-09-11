import { use, useState } from "react";
import type { Itechnology } from "../../type/Type";
import { toast, ToastContainer, Bounce } from "react-toastify";
import SelectedCard from "./SelectedCard";

import "react-toastify/dist/ReactToastify.css";

interface CardProps {
  cardPromise: Promise<Itechnology[]>;
}

const Card = ({ cardPromise }: CardProps) => {
  const techs = use(cardPromise);
  const [selectedTechs, setSelectedTechs] = useState<Itechnology[]>([]);

 const handleAddToStack = (tech: Itechnology) => {
  const isExist = selectedTechs.some((item) => item.id === tech.id);

  if (isExist) {
    toast.warning(`${tech.name} is already in your stack!`);
    return;
  }

  setSelectedTechs((prev) => [...prev, tech]);

  toast.success(`Added ${tech.name} to stack!`, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
  });
};

  const handleRemove = (id: string | number, name: string) => {
    setSelectedTechs((card) => card.filter((item) => item.id !== id));
    toast.info(`Removed ${name} from stack`, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
    toast.warn("Cleared all technologies from stack", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="container mx-auto max-w-6xl lg:ml-60 md:ml-60 lg:-mt-35">
      <ToastContainer />

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the {""}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Card */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
          {techs.map((item) => {
            const isAdded = selectedTechs.some((tech) => tech.id === item.id);

            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between min-h-[290px] group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                    {item.badge && (
                      <span className="text-[10px] px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 font-medium">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mt-4 text-[11px] text-gray-500">
                    <span className="bg-gray-100 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded">
                      {item.difficulty}
                    </span>
                    <span className="ml-auto text-gray-700 flex items-center gap-1">
                      ★ {item.rating}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToStack(item)}
                  disabled={isAdded}
                  className={`
                    w-full mt-4 px-4 py-2 cursor-pointer rounded-lg
                    ${
                      isAdded
                        ? "bg-gradient-to-r from-green-50 to-green-50 text-green-600 border border-green-200 cursor-not-allowed"
                        : "bg-black text-white hover:bg-gray-900 active:bg-gray-950 hover:shadow-md"
                    }
                  `}
                >
                  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Stack Card Components */}

        <SelectedCard
          selectedTechs={selectedTechs}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
};

export default Card;
