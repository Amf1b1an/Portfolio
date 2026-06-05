export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  repoLink: string;
}

export interface DirectoryNode {
  id: string;
  title: string;
  subCategories?: DirectoryNode[];
  projectTitles?: string[];
}
