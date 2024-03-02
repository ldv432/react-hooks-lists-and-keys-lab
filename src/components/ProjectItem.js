import React from "react";


function ProjectItem({ name, about, technologies }) {

  const techies = technologies.map((techs, index)=> <span key={index}>{techs}</span>)
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies"> {techies} </div>
    </div>
  );
}

export default ProjectItem;
