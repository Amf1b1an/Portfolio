import { ProjectProvider } from "./context/ProjectContext";
import { ProjectList } from "./components/ProjectList";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ProjectProvider>
      <Layout>
        <ProjectList />
      </Layout>
    </ProjectProvider>
  );
}

export default App;
