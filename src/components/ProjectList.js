// import React from "react";
// import ProjectItem from "./ProjectItem";

// function ProjectList({ projects }) {
//   const projectItems = projects.map((project) => (
//     <projectItem 
//     key={project.id} 
//     name={project.name} 
//     about={project.about} 
//     tecchnologies={project.tecchnologies}/>
//   ))
//   console.log(projects);
//   return (
//     <div id="projects">
//       <h2>My Projects</h2>
//       <div id="project-list">{projectItems}{/* render ProjectItem components here */}</div>
//     </div>
//   );
// }

// export default ProjectList;
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItems = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;