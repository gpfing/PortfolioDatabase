import { useState, React } from "react";
import piggy from "../assets/porco.png";

function ProjectCard({ project }) {
  return (
    <div>
        <div className={"showCard"}>
            <div className="container">
            <img src="https://p1.hiclipart.com/preview/971/361/138/project-icon-business-management-icon-project-management-icon-logo-symbol-emblem-gear-png-clipart.jpg" alt="Avatar" className="cardImage"/>
                <div className="containerColumn">
                    <h4><b>{project.name}</b></h4>
                    <p>Estimated time to complete: {project.timeToComplete} weeks </p>                    
                    <strong>{project.inProgress ? "This is a work in progress" : "Project completed"}</strong>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    </div>
  );
}
export default ProjectCard;