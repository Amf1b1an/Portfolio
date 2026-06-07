import { ProjectProvider, useProjects } from "./context/ProjectContext";
import { ProjectList } from "./components/ProjectList";
import { Layout } from "./components/Layout";
import { Bio } from "./components/Bio";

function MainContent() {
  const { activeCategory } = useProjects();

  return (
    <Layout>
      {activeCategory === null && <Bio />}
      <ProjectList />
    </Layout>
  );
}

function App() {
  return (
    <ProjectProvider>
      <MainContent />
    </ProjectProvider>
  );
}

export default App;
