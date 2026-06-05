import React from "react";
import type { Project } from "../types";

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({
  project,
  onBack,
}) => {
  return (
    <article className="w-full bg-white border-4 border-[#B85900] rounded-lg p-6 md:p-8 shadow-md transition-all">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-[#12130F] border border-[#FFF399] hover:bg-[#FFF399] text-[#FF8133] hover:text-[#580D59] font-bold rounded-md transition-colors cursor-pointer uppercase text-xs tracking-wider"
        >
          &larr; Back to Directory
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        <div className="md:col-span-5 w-full">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto object-cover rounded-md border-2 border-gray-200 shadow-sm"
          />
        </div>
        <div className="md:col-span-7 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#580D59] uppercase tracking-wide mb-4">
              {project.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line mb-6">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-150">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-md font-semibold text-sm shadow-sm hover:bg-blue-700 hover:underline transition-all text-center min-w-35"
            >
              Live Deployment
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-gray-800 text-white rounded-md font-semibold text-sm shadow-sm hover:bg-gray-900 hover:underline transition-all text-center min-w-35"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
