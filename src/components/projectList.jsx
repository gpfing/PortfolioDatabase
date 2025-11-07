import { useState, React } from "react";
import ProjectCard from "./projectCard";

function ProjectList({ projects }) {
  const [displayFinished, setDisplayFinished] = useState(false);
  const [selectedSearch, onSearchChange] = useState("");
  const [sort, setSort] = useState("name");

  function handleFinishedClick() {
    setDisplayFinished((prevState) => !prevState);
  }

  if (sort === "name") {
    projects.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  if (sort === "timeToComplete") {
    projects.sort((a, b) => a.timeToComplete - b.timeToComplete);
  }

  const projectsToDisplay = projects.filter((p) => {
    if (!displayFinished && p.name.toLowerCase().includes(selectedSearch.toLowerCase())) return true;
    if (p.name.toLowerCase().includes(selectedSearch.toLowerCase())){return (!p.inProgress);}
    return false;
    
  });

  return (
    <div className="listContainer">
        <div className="filterSection">
            <input
            type="text"
            name="search"
            placeholder={"Search..."}
            value={selectedSearch}
            onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
        <div className="filterSectionColumn">
            <label>Sort:</label>
            <select
              id="my-dropdown"
              onChange={(e) => setSort(e.target.value)}
              className="sortDropdown"
            >
              <option value="name">Name</option>
              <option value="timeToComplete">Completion Time</option>
            </select>
            <label>| Only Finished Projects</label>
            <input
            type="checkbox"
            id="finished-checkbox"
            checked={displayFinished}
            onChange={handleFinishedClick}
            />
        </div>

        <div className="projectList">
            {projectsToDisplay.map((project, index) => (
            <ProjectCard key={index} project={project}/>
            ))}
      </div>
    </div>
  );
}

export default ProjectList;
