import React, { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { CategoryButton } from "./CategoryButton";
import { ProjectCard } from "./ProjectCard";
import { ProjectPage } from "./ProjectPage";
import type { DirectoryNode, Project } from "../types";

export const ProjectList: React.FC = () => {
  const { directoryStructure, getProjectsByTitles, setActiveCategory } =
    useProjects();
  const [navHistory, setNavHistory] = useState<DirectoryNode[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentCategory = navHistory[navHistory.length - 1] || null;

  const visibleCategories = currentCategory
    ? currentCategory.subCategories || []
    : directoryStructure;

  const visibleProjectTitles = currentCategory?.projectTitles || [];
  const visibleProjects = getProjectsByTitles(visibleProjectTitles);

  const handleCategoryClick = (category: DirectoryNode) => {
    setSelectedProject(null);
    const newHistory = [...navHistory, category];
    setNavHistory(newHistory);

    setActiveCategory(category.id);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
    const newHistory = navHistory.slice(0, -1);
    setNavHistory(newHistory);

    if (newHistory.length === 0) {
      setActiveCategory(null);
    } else {
      const parentCategory = newHistory[newHistory.length - 1];
      setActiveCategory(parentCategory.id);
    }
  };

  if (selectedProject) {
    return (
      <ProjectPage
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <section className="w-full">
      <div className="flex items-center gap-3 mb-6 min-h-10 text-sm">
        {navHistory.length > 0 && (
          <button
            onClick={handleBackClick}
            className="px-3 py-1.5 bg-[#713A00] border border-[#B85900] hover:bg-[#B85900] text-[#FFCE63] font-bold rounded-md transition-colors cursor-pointer uppercase"
          >
            &larr; Back
          </button>
        )}
        <h2 className="text-gray-500 font-medium tracking-wide">
          {navHistory.map((folder) => ` / ${folder.title}`)}
        </h2>
      </div>

      {visibleCategories.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {visibleCategories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      )}

      {visibleProjects.length > 0 && (
        <div className="flex flex-col gap-4">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}

      {visibleCategories.length === 0 && visibleProjects.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-150 text-gray-400 font-medium">
          No projects added to this section yet!
        </div>
      )}
    </section>
  );
};
