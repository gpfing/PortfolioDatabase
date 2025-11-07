import { useState, React } from "react";

function ProjectForm({ addProject }) {
  // State for new project inputs
  const [newProject, setNewProject] = useState({
    name: "",
    timeToComplete: "",
    inProgress: false,
    description: "",
  });

  // Handle text input changes
  function handleChange(event) {
    setNewProject({ ...newProject, [event.target.name]: event.target.value });
  }

  // Handle checkbox separately
  function handleCheckbox(event) {
    const { name, checked } = event.target;
    setNewProject((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  }

  // Add project and reset form
  function handleSubmit(event) {
    event.preventDefault();
    addProject(newProject);
    setNewProject({
      name: "",
      timeToComplete: "",
      inProgress: false,
      description: "",
    });
  }

  return (
    <div className="formContainer">
      <h2 className="title">Add Project</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label>Project Name:</label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={newProject.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label>Estimated Time to Complete (in weeks):</label>
          <input
            id="time-to-complete-input"
            type="text"
            name="timeToComplete"
            inputmode= "numeric"
            pattern="\d*"
            value={newProject.timeToComplete}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroupCheckbox">
          <input
            id="in-progress-input"
            type="checkbox"
            name="inProgress"
            checked={newProject.inProgress}
            onChange={handleCheckbox}
          />
          <label>Is this a work in progress?</label>
        </div>
        <div className="formGroup">
          <label>Description:</label>
          <input
            id="description-input"
            type="text"
            name="description"
            value={newProject.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submitButton">
          Add Project
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
