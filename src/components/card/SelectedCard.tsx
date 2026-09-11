import { useEffect } from "react";
import type { Itechnology } from "../../type/Type";
import { TiDelete } from "react-icons/ti";

interface SelectedCardProps {
  selectedTechs: Itechnology[];
  onRemove: (id: string | number, name: string) => void;
  onRemoveAll: () => void;
}

const SelectedCard = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}: SelectedCardProps) => {
  
  return (
    <div className="w-full lg:w-[280px] min-h-[175px] border border-gray-200 rounded-2xl p-5 bg-white sticky top-24">
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="font-bold text-gray-900">Your Stack</h3>
      </div>
      <p className="text-gray-400 mb-4 text-xs">
        {selectedTechs.length === 0
          ? "No technologies selected yet"
          : `${selectedTechs.length} ${
              selectedTechs.length === 1
                ? "technology selected"
                : "technologies selected"
            }`}
      </p>

      {selectedTechs.length === 0 ? (
        <div className="w-full h-[66px] border-2 border-dashed border-gray-100 rounded-xl flex text-center items-center justify-center">
          <p className="text-gray-400 text-sm">Your stack is empty.</p>
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
                  className="w-7 h-6 object-contain"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">
                    {tech.name}
                  </h4>
                  <p className="text-[10px] text-gray-400">{tech.category}</p>
                </div>
              </div>

              <button
                onClick={() => onRemove(tech.id, tech.name)}
                className="text-gray-600 hover:text-red-500 text-xl font-bold px-1 cursor-pointer"
              >
                <TiDelete />
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedTechs.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-2 px-4 py-1.5 cursor-pointer font-bold rounded-lg transition-all border border-red-500 text-red-500 hover:bg-red-50 active:bg-red-100 text-xs"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedCard;
