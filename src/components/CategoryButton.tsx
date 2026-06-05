import React from "react";
import type { DirectoryNode } from "../types";

interface CategoryButtonProps {
  category: DirectoryNode;
  onClick: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="p-6 bg-white border-4 border-[#FF8133] hover:border-[#FFF399] rounded-xl shadow-xs text-left font-bold text-lg text-gray-800 hover:text-[#580D59] transition-all cursor-pointer transform hover:-translate-y-0.5"
    >
      <div className="flex justify-between items-center">
        <span>{category.title}</span>
        <span className="text-gray-300 text-xl font-normal">&rarr;</span>
      </div>
    </button>
  );
};
