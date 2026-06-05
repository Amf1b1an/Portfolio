import React from "react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onViewDetails,
}) => {
  return (
    <div className="border-4 border-[#B85900] rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center gap-4">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-16 h-16 object-cover rounded border border-gray-200"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs line-clamp-1 max-w-xs md:max-w-md">
            {project.description}
          </p>
        </div>
      </div>
      <button
        onClick={onViewDetails}
        className="w-full sm:w-auto px-4 py-2 bg-[#12130F] hover:bg-[#FF8133] border border-[#FFF399] text-white font-bold rounded text-sm transition-colors cursor-pointer uppercase tracking-wider"
      >
        View Project &rarr;
      </button>
    </div>
  );
};
