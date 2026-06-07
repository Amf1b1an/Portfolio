import React, { createContext, useContext, useState } from "react";
import type { Project, DirectoryNode } from "../types";

interface ProjectContextType {
  projects: Project[];
  directoryStructure: DirectoryNode[];
  getProjectsByTitles: (titles?: string[]) => Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const initialProjects: Project[] = [
  {
    title: "Game Hub",
    description:
      "This is the first project i made at Noroff. This website is my contribution for Noroffs cross-course project. Which means it has been part of several courses during the first year, starting with the design course and HTML & CSS course in the first semester, and the JavaScript course in the second semester.",
    thumbnail: "../src/public/thumb/game-hub.png",
    liveLink: "https://amf1b1an.github.io/JS-CA/",
    repoLink: "https://github.com/Amf1b1an/JS-CA",
  },
  {
    title: "Semester Project 1",
    description:
      "In this semester project we were tasked with creating a website using what we've learnt about design, html and css during the first semester. The challange in this project was to make things work without javascript",
    thumbnail: "../src/public/thumb/museum.png",
    liveLink: "https://amf1b1an.github.io/Semester-Project-1/",
    repoLink: "https://github.com/Amf1b1an/Semester-Project-1",
  },
  {
    title: "Exam Project 1",
    description:
      "This is my first exam project at Noroff. The assignment was to create a blog website, and i decided to create a blog website about music. This project were made from scratch with figma for the design part, and html, css and javascript.",
    thumbnail: "../src/public/.png",
    liveLink: "https://lustrous-starlight-0460ae.netlify.app/",
    repoLink: "https://github.com/Amf1b1an/FED1-PE1-Amf1b1an1",
  },

  {
    title: "Exam Project 2",
    description:
      "The final exam project at Noroff to conclude the education. This assignment ",
    thumbnail: "../src/public/thumb/holidaze.png",
    liveLink: "https://holidaze-pe2-amfibian.netlify.app/",
    repoLink: "https://github.com/Amf1b1an/Holidaze-PE2",
  },

  {
    title: "CSS Frameworks",
    description:
      "This course introduced me to bootstrap and tailwind, and how to use it efficiently. Not only that, but also how to implement new elements, like bootstrap for this instance, to already existing projects.",
    thumbnail: "../src/public/thumb/sphere.png",
    liveLink: "https://amf1b1an.github.io/JS2-CA/pages/feed.html",
    repoLink: "https://github.com/Amf1b1an/JS2-CA",
  },

  {
    title: "DVP 2 - ",
    description: "",
    thumbnail: "",
    liveLink: "https://amf1b1an.github.io/development-platform-ca/",
    repoLink: "https://github.com/Amf1b1an/development-platform-ca",
  },

  {
    title: "JavaScript Frameworks",
    description: "",
    thumbnail: "../src/public/thumb/theshop.png",
    liveLink: "https://jsftheshop.netlify.app/",
    repoLink:
      "https://github.com/NoroffFEU/jsfw-2025-v1-fabianms-jsf/tree/main/jsf-online-shop",
  },

  {
    title: "Semester Project 2",
    description:
      "The semester project for the 2nd year instructed me to create a website for an online auction house. For this assignment I was allowed to use TypeScript or Vanilla JavaScript.However, the use of JS frameworks were prohibited. Prior to this course was the CSS Frameworks course, which meant that the usage and implementation of Bootstrap or Tailwind were essential. I used Tailwind for this course since I worked with Bootstrap on the CSS Frameworks course",
    thumbnail: "../src/public/thumb/auction-house.png",
    liveLink: "https://sp2-fabsan.netlify.app/pages/feed.html",
    repoLink: "https://github.com/Amf1b1an/SP-2",
  },
  /* 
  {
    title: "",
    description: "",
    thumbnail: "",
    liveLink: "",
    repoLink: "",
  },
  */
];

const initialDirectory: DirectoryNode[] = [
  {
    id: "personal",
    title: "Personal Projects",
    projectTitles: [],
  },
  {
    id: "noroff",
    title: "Noroff FED",
    subCategories: [
      {
        id: "semester-1",
        title: "Semester 1",
        projectTitles: ["Semester Project 1", "Game Hub", "Exam Project 1"],
      },
      {
        id: "semester-2",
        title: "Semester 2",
        projectTitles: [
          /*"Exam Project 2",*/
          "CSS Frameworks",
          "JavaScript Frameworks",
          "Semester Project 2",
        ],
      },
    ],
  },
];

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [projects] = useState<Project[]>(initialProjects);
  const [directoryStructure] = useState<DirectoryNode[]>(initialDirectory);

  const getProjectsByTitles = (titles?: string[]): Project[] => {
    if (!titles) return [];
    return projects.filter((project) => titles.includes(project.title));
  };

  return (
    <ProjectContext.Provider
      value={{ projects, directoryStructure, getProjectsByTitles }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error("useProjects must be used within a ProjectProvider");
  return context;
};
