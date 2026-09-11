import { use, useState } from "react";
import type { Itechnology } from "../../type/Type";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { TiDelete } from "react-icons/ti";
import "react-toastify/dist/ReactToastify.css";

interface CardProps {
  cardPromise: Promise<Itechnology[]>;
}

const Card = ({ cardPromise }: CardProps) => {
  const techs = use(cardPromise);
  const [selectedTechs, setSelectedTechs] = useState<Itechnology[]>([]);

  const handleAddToStack = (tech: Itechnology) => {
    setSelectedTechs((card) => [...card, tech]);
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
      position: "top-center",
      autoClose: 5000,
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
      autoClose: 5000,
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
    <div className="container mx-auto px-4 py- max-w-6xl max-y-8xl lg:ml-60 md:ml-60">

      <ToastContainer />

      <div className="mb-8">
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
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 flex-1">
          {techs.map((item) => {
            const isAdded = selectedTechs.some((tech) => tech.id === item.id);

            return (
              <div
                key={item.id}
                className="w-full border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between min-h-[290px] group"
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

        <div className="w-full lg:w-[280px] min-h-[175px] h-fit border border-gray-200 rounded-2xl p-5 bg-white sticky top-24">
          <div className="flex items-baseline gap-2 mb-1">
            <h3 className="font-bold text-gray-900">Your Stack</h3>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            {selectedTechs.length === 0
              ? "No technologies selected yet"
              : `${selectedTechs.length} ${
                  selectedTechs.length === 1 ? "technology" : "technologies"
                } selected`}
          </p>

          {selectedTechs.length === 0 ? (
            <div className="w-full h-[66px] border-2 border-dashed border-gray-100 rounded-xl flex text-center items-center justify-center">
              <p className="text-gray-400">Your stack is empty.</p>
            </div>
          ) : (
            <div className="space-y-3 mb-4">
              {selectedTechs.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center justify-between px-3 py-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                    />
                    <div>
                      <h4 className=" font-bold text-gray-800">{tech.name}</h4>
                      <p className="text-[10px] text-gray-400">
                        {tech.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(tech.id, tech.name)}
                    className="text-gray-600 hover:text-red-500 text-xl font-bold px-1"
                  >
                    <TiDelete />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Remove All Button */}
          {selectedTechs.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="w-full mt-4 px-4 py-1 cursor-pointer font-bold rounded-lg transition-all border border-red-500 text-red-500 hover:bg-red-50 active:bg-red-100 text-xs"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
