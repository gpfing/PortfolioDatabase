import { useState, React } from "react";
import Nav from "./Nav";
import ProjectList from "./projectList";
import ProjectForm from "./projectForm";
import projects from "../project_data";

function App() {
  // State to manage the list of projects
  const [editProjects, setEdit] = useState(projects);

  // Function to add a new project
  function addProject(newProject) {
    setEdit((prevItems) => [...prevItems, newProject]);
  }



  return (
    <div className="appContainer">
      <Nav />
      <div className="content">
        <ProjectForm addProject={addProject} />
        <div className="headerSection">
          <h1 name="projectList">Project List</h1>
        </div>
        <ProjectList projects={editProjects} />
      </div>
    </div>
  );
}

export default App;